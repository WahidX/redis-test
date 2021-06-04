import express from "express";
import { redisClient } from "../configs/loadCSV";

export const getData = (req: express.Request, res: express.Response) => {
	res.send("data form server");
};
