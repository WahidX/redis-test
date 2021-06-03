import { environmentInterface } from "../@types/environment";
import path from "path";

const development: environmentInterface = {
	name: "development",
	file_name: "NSEBhav.csv",
	hashkey: "csv_dev",
};

const production: environmentInterface = {
	name: "production",
	file_name: "NSEBhav.csv",
	hashkey: "csv_prod",
};

// @ts-ignore
const env = eval(process.env.APP) === undefined ? development : production;

export default env;
