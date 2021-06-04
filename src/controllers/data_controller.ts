import express from "express";
import env from "../configs/environment";
import { redis } from "../configs/loadCSV";

export const getData = async (req: express.Request, res: express.Response) => {
	console.log(req.query.offset, req.query.total);
	try {
		// Checking if the query params are present
		if (req.query.offset === undefined || req.query.total === undefined) {
			return res.status(404).json({
				error: "Invalid url",
			});
		}

		// retrieving the data from redis
		let rows = await redis.lrange(
			env.list_key,
			// @ts-ignore
			parseInt(req.query.offset),
			//@ts-ignore
			parseInt(req.query.offset + req.query.total - 1)
		);

		return res.status(200).json({
			message: "Ok",
			rows,
		});
	} catch (err) {
		console.log(err);
		return res.status(501).json({
			error: err,
		});
	}
};
