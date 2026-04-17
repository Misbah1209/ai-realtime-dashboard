import React, { useState } from "react";
import Card from "../components/ui/Card";
import LineChart from "../components/charts/LineChart";
import BarChart from "../components/charts/BarChart";
import Heatmap from "../components/charts/Heatmap";
import { useMetricsStore } from "../store/useMetricsStore";
import { aiApi } from "../api/aiApi";
import Loader from "../components/ui/Loader";
import "./dashboard.css";

const Dashboard: React.FC = () => {
  const metrics = useMetricsStore((s) => s.metrics);
  const [insights, setInsights] = useState("Click to generate insights...");
  const [loading, setLoading] = useState(false);

  const latest = metrics[metrics.length - 1];

  const generateInsights = async () => {
    if (!metrics.length) return;
    setLoading(true);
    try {
      const summary = await aiApi.getInsights(metrics);
      setInsights(summary);
    } catch {
      setInsights("Failed to fetch AI insights.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <div className="grid">
        <Card title="CPU Usage (%)">
          <LineChart />
        </Card>

        <Card title="Users & Sales">
          <BarChart />
        </Card>

        <Card title="Error Heatmap">
          <Heatmap />
        </Card>

        <Card title="Latest Snapshot">
          {latest ? (
            <ul className="snapshot">
              <li><strong>Time:</strong> {latest.timestamp}</li>
              <li><strong>CPU:</strong> {latest.cpu}%</li>
              <li><strong>Users Online:</strong> {latest.usersOnline}</li>
              <li><strong>Sales:</strong> {latest.sales}</li>
              <li><strong>Errors:</strong> {latest.errors}</li>
            </ul>
          ) : (
            <p>No data yet...</p>
          )}
        </Card>

        <Card title="AI Insights">
          <button className="insights-btn" onClick={generateInsights} disabled={loading}>
            {loading ? "Analyzing..." : "Generate Insights"}
          </button>

          <div className="insights-box">
            {loading ? <Loader /> : <p>{insights}</p>}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
