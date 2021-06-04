import express from "express";
import env from "../configs/environment";
import { redis } from "../configs/loadCSV";

export const fetchSearchResults = async (req: express.Request, res: express.Response) => {
	console.log("Search on: ", req.query.key, req.query.total);
	try {
		// Checking if the query params are present
		if (req.query.key === undefined || req.query.total === undefined) {
			return res.status(404).json({
				error: "Invalid url",
			});
		}

		let key = req.query.key.toString().toUpperCase();

		// @ts-ignore
		let total = parseInt(req.query.total);

		const results = await getResults(key, total);

		return res.status(200).json({
			message: "Ok",
			results,
		});
	} catch (err) {
		console.log(err);
		return res.status(501).json({
			error: err,
		});
	}
};

const getResults = async (key: string, total: number) => {
	// retrieving the data from redis
	const results: string[] = [];

	let keys = await redis.keys(`*${key}*`);
	keys = keys.slice(0, total);

	keys.forEach(async (key) => {
		let indexes = (await redis.get(key))?.split(",");

		indexes &&
			indexes.forEach(async (index, idx) => {
				let result = await redis.lindex(env.list_key, parseInt(index));
				results.push(result);

				// @ts-ignore
				if (idx === indexes?.length - 1) {
					console.log("res::::", results.length);
					return results;
				}
			});
	});
};
