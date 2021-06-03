import express from "express";

// Routers
const router = express.Router();

// For testing connection
router.get("/", (req, res) => {
	res.send("api/v1 is running fine");
});

// data api
router.get("/data", require("./data_api"));

module.exports = router;
