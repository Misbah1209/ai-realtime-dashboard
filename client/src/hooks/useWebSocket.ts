import { useEffect } from "react";
import { useMetricsStore, Metric } from "../store/useMetricsStore";

export const useWebSocket = (url: string) => {
  const addMetric = useMetricsStore((s) => s.addMetric);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => {
      console.log("WebSocket connected:", url);
    };

    ws.onmessage = (event) => {
      try {
        const data: Metric = JSON.parse(event.data);
        addMetric(data);
      } catch (err) {
        console.error("Invalid WebSocket message:", err);
      }
    };

    ws.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => ws.close();
  }, [url, addMetric]);
};
