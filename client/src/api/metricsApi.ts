import { axiosClient } from "./axiosClient";

export const metricsApi = {
  getMetrics: async () => {
    const res = await axiosClient.get("/api/metrics");
    return res.data;
  },
};
