export type HistoryData = {
  timeSeries: string[];
  points: number[];
};

export type Signal = {
  id: string;
  name: string;
  description: string;
  image?: string;
  tvl: number;
  diff?: number;
  historyData: HistoryData;
};
