import express from "express";
import { loadCSV } from "./configs/loadCSV";
const app = express();

const port: string = process.env.PORT || "8000";

// Cors handle
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
	console.log("Home");
	res.send("Server running fine");
});

app.use("/api", require("./api"));

app.listen(port, () => {
	console.log(`Server started at: ${port}`);
	console.log("Loading CSV data...");
	loadCSV();
	console.log("Ready");
});
