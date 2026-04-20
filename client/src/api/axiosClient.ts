import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://ai-realtime-dashboard-3ayc.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

