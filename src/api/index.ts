import express from "express";
const router = express.Router();

// API version routing
router.use("/v1", require("./v1"));
// router.use("/v2", require("./v2"));

module.exports = router;
