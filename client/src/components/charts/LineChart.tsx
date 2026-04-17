import React from "react";
import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useMetricsStore } from "../../store/useMetricsStore";

const LineChart: React.FC = () => {
  const metrics = useMetricsStore((s) => s.metrics);

  return (
    <ResponsiveContainer width="100%" height={250}>
      <ReLineChart data={metrics}>
        <XAxis dataKey="timestamp" hide />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="cpu"
          stroke="#ff4d4f"
          strokeWidth={2}
          dot={false}
        />
      </ReLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
