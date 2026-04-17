exports.generateInsights = (req, res) => {
  const { metrics } = req.body;

  if (!metrics || !metrics.length) {
    return res.json({ summary: "No metrics available to analyze." });
  }

  const last = metrics[metrics.length - 1];

  let summary = `At ${last.timestamp}, CPU usage is ${last.cpu}%, users online: ${last.usersOnline}, sales: ${last.sales}, and errors: ${last.errors}.`;

  if (last.cpu > 80) summary += " CPU usage is critically high.";
  if (last.errors > 20) summary += " Error rate is elevated.";
  if (last.sales > 8000) summary += " Sales performance is strong.";

  return res.json({ summary });
};
