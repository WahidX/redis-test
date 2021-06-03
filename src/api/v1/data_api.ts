import express from "express";

// controller imports
import { getData } from "../../controllers/data_controller";

// Routers
const router = express.Router();

// fetch data with pagination
router.get("/", getData);

module.exports = router;
