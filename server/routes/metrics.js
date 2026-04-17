const express = require("express");
const router = express.Router();
const { getMetrics } = require("../controllers/metricsController");

// GET /api/metrics
router.get("/", getMetrics);

module.exports = router;
