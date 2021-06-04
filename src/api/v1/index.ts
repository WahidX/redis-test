import express from "express";
import { getData } from "../../controllers/data_controller";
import { fetchSearchResults } from "../../controllers/search_controller";

// Routers
const router = express.Router();

// For testing connection
router.get("/", (req, res) => {
	res.send("api/v1 is running fine");
});

// data api
router.get("/data", getData);
router.get("/data/search", fetchSearchResults);

module.exports = router;
