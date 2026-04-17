const express = require("express");
const router = express.Router();
const { generateInsights } = require("../controllers/aiController");

// POST /api/ai/insights
router.post("/insights", generateInsights);

module.exports = router;
