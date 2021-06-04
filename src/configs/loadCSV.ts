import fs from "fs";
import readline from "readline";
import Redis from "ioredis";
import env from "../configs/environment";
import path from "path";
import { loadingStatsInterface } from "../@types/loadingStats";

// Redis redis setup
export const redis = new Redis();
redis.on("error", function (error) {
	console.error("Redis Error: ", error);
});
const multi = redis.multi(); // For executing multiple redis commands

// CSV reader config
const fileStream = fs.createReadStream(path.join("./", env.file_path));
const reader = readline.createInterface({
	input: fileStream,
});

// stats about csv loading to redis
const loadingStats: loadingStatsInterface = {
	readLineCount: 0,
	linesStored: 0,
	linesError: 0,
};

// expireat timestamp
const getExpireTime = (): number =>
	Math.floor(new Date().setSeconds(new Date().getSeconds() + env.expire_time) / 1000);

const printStats = () => {
	// Logging the stats
	console.log("Loaded CSV file");
	console.log(
		`>> Total lines: ${loadingStats.readLineCount - 1}\n>> Lines stored: ${
			loadingStats.linesStored
		}\n>> Lines error: ${loadingStats.linesError}`
	);

	// flushing stats
	loadingStats.linesError = 0;
	loadingStats.readLineCount = 0;
	loadingStats.linesStored = 0;
};

const symbols: { [key: string]: number[] } = {};

// main loader method
export const loadCSV = () => {
	// flushing redis db on start
	env.should_flush_redis && redis.flushall();

	reader.on("line", async (line) => {
		loadingStats.readLineCount++;
		if (loadingStats.readLineCount === 1) return; // header line

		let fields = line.split(",");

		// extracting the symbols for indexing
		if (symbols[fields[0]]) {
			symbols[fields[0]].push(loadingStats.readLineCount - 2);
		} else symbols[fields[0]] = [loadingStats.readLineCount - 2];

		fields.splice(fields.length - 1); // removing null field

		// pushing the line in redis list for multiple query execution
		multi.rpush(env.list_key, fields.toString());
	});

	reader.on("close", async () => {
		try {
			let response = await multi.exec();
			redis.expireat(env.list_key, getExpireTime());

			for (let symbol in symbols) {
				await redis.set(symbol, symbols[symbol].toString(), "ex", env.expire_time);
			}

			loadingStats.linesStored = response.length;

			printStats();
		} catch (err) {
			console.error(err);
		}
	});
};
