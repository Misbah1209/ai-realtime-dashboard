exports.getMetrics = (req, res) => {
  res.json({
    status: "ok",
    message: "Metrics endpoint is active.",
  });
};
