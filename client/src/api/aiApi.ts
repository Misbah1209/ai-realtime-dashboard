import { axiosClient } from "./axiosClient";

export const aiApi = {
  getInsights: async (metrics: any[]) => {
    const res = await axiosClient.post("/api/ai", { metrics });
    return res.data.summary;
  },
};
