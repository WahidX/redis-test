import express from "express";
import { redis } from "../configs/loadCSV";

export const getData = (req: express.Request, res: express.Response) => {
	console.log(req.query.offset, req.query.total);

	res.send("data form server");
};
