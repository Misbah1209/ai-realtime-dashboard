import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useMetricsStore } from "../../store/useMetricsStore";

const UsersSalesChart: React.FC = () => {
  const metrics = useMetricsStore((s) => s.metrics);

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={metrics}>
        <XAxis dataKey="timestamp" hide />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="usersOnline" fill="#82ca9d" />
        <Bar dataKey="sales" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UsersSalesChart;
