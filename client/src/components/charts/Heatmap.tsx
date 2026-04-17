import React from "react";
import { useMetricsStore } from "../../store/useMetricsStore";
import "./heatmap.css";

const Heatmap: React.FC = () => {
  const metrics = useMetricsStore((s) => s.metrics);

  const values = metrics.map((m) => m.errors);
  const max = Math.max(...values, 1);

  return (
    <div className="heatmap">
      {values.map((v, i) => {
        const intensity = (v / max) * 100;
        return (
          <div
            key={i}
            className="heatmap-cell"
            style={{
              backgroundColor: `rgba(255, 0, 0, ${intensity / 100})`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Heatmap;
