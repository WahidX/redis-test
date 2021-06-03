import { environmentInterface } from "../@types/environment";

const development: environmentInterface = {
	name: "development",
	file_path: "CSV_data/NSEBhav.csv",
	hashkey: "csv_dev",
	expire_time: 10,
	should_flush_redis: true,
};

const production: environmentInterface = {
	name: "production",
	file_path: "CSV_data/NSEBhav.csv",
	hashkey: "csv_prod",
	expire_time: 10,
	should_flush_redis: true,
};

// @ts-ignore
const env = eval(process.env.APP) === undefined ? development : production;

export default env;
