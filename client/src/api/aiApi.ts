import { axiosClient } from "./axiosClient";

export const aiApi = {
  getInsights: async (metrics: any[]) => {
    const res = await axiosClient.post("/api/ai/insights", { metrics });
    return res.data.summary;
  },
};
