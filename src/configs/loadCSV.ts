import fs from "fs";
import readline from "readline";
import env from "../configs/environment";
import path from "path";

// CSV reader config
const fileStream = fs.createReadStream(path.join("./CSV_data", env.file_name));
const reader = readline.createInterface({
	input: fileStream,
});

let lineCount = 0;

// main loader method
export const loadCSV = () => {
	reader.on("line", (line) => {
		console.log(line);
		lineCount++;
	});

	reader.on("close", () => {
		console.log(`CSV loaded\n total ${lineCount} lines loaded`);
	});

	console.log("will be loading here");
};
