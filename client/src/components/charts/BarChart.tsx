import React from "react";
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useMetricsStore } from "../../store/useMetricsStore";

const BarChart: React.FC = () => {
  const metrics = useMetricsStore((s) => s.metrics);

  return (
    <ResponsiveContainer width="100%" height={250}>
      <ReBarChart data={metrics}>
        <XAxis dataKey="timestamp" hide />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="usersOnline" fill="#4ade80" />
        <Bar dataKey="sales" fill="#60a5fa" />
      </ReBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
