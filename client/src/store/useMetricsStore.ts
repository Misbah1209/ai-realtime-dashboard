import { create } from "zustand";

export type Metric = {
  timestamp: string;
  cpu: number;
  usersOnline: number;
  sales: number;
  errors: number;
};

type MetricsState = {
  metrics: Metric[];
  addMetric: (m: Metric) => void;
  clearMetrics: () => void;
};

export const useMetricsStore = create<MetricsState>((set) => ({
  metrics: [],

  addMetric: (m) =>
    set((state) => ({
      metrics: [...state.metrics.slice(-49), m], // keep last 50 entries
    })),

  clearMetrics: () => set({ metrics: [] }),
}));
