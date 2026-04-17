export const formatNumber = (num: number) =>
  new Intl.NumberFormat().format(num);

export const formatPercent = (num: number) => `${num.toFixed(1)}%`;

export const formatTimestamp = (ts: string) =>
  new Date(ts).toLocaleTimeString();
