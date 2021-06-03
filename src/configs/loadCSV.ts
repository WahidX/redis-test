import fs from "fs";
import readline from "readline";
import redis from "redis";
import env from "../configs/environment";
import path from "path";
import { loadingStatsInterface } from "../@types/loadingStats";

// Redis redisClient setup
export const redisClient = redis.createClient();
redisClient.on("error", function (error) {
	console.error("Redis Error: ", error);
});

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

// main loader method
export const loadCSV = () => {
	// flushing redis db on start
	env.should_flush_redis && redisClient.flushall();

	reader.on("line", async (line) => {
		loadingStats.readLineCount++;

		/*
			Key format:  'symbol|ISIN'
		*/
		if (loadingStats.readLineCount === 1) return; // header line

		let fields = line.split(",");
		let key = fields[0] + "|" + fields[fields.length - 2];

		// cleaning rest of the fields
		fields.shift(); // removing symbol
		fields.splice(fields.length - 2); // removing ISIN and null element

		// setting the line in redis sorted sets with expiry
		redisClient.setex(key, env.expire_time, fields.toString(), (err, _) => {
			err ? loadingStats.linesError++ : loadingStats.linesStored++;
		});
	});

	reader.on("close", () => {
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
	});
};
