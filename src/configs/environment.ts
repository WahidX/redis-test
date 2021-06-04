import { environmentInterface } from "../@types/environment";

const development: environmentInterface = {
	name: "development",
	file_path: "CSV_data/NSEBhav.csv",
	hashkey: "symbols_dev",
	list_key: "csv_dev",
	expire_time: 24 * 60 * 60,
	should_flush_redis: true,
};

const production: environmentInterface = {
	name: "production",
	file_path: "CSV_data/NSEBhav.csv",
	hashkey: "symbols_prod",
	list_key: "csv_prod",
	expire_time: 24 * 60 * 60,
	should_flush_redis: true,
};

// @ts-ignore
const env = eval(process.env.APP) === undefined ? development : production;

export default env;
