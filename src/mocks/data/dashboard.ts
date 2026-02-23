import type { MetricCard } from "../../features/dashboard/types";

export const overviewData: MetricCard[] = [
  {
    title: "REVENUE",
    value: "$24,860",
    subTitle: "Total revenue this month",
    metric: "▲ +8% vs last month",
    icon: 'dollar',
    metricValue: "positive",
  },
  {
    title: "AVG REPAIR ORDER",
    value: "$24,860",
    subTitle: "Total revenue this month",
    metric: "▲ +8% vs last month",
    icon: 'receipt',
    metricValue: "negative",
  },
  {
    title: "TOTAL CUSTOMERS",
    value: "$24,860",
    subTitle: "Total revenue this month",
    metric: "▲ +8% vs last month",
    icon: 'users',
    metricValue: "neutral",
  },
  {
    title: "CARS IN SHOP",
    value: "$24,860",
    subTitle: "Total revenue this month",
    metric: "▲ +8% vs last month",
    icon: 'car',
    metricValue: "positive",
  },
];

export const operationsData: MetricCard[] = [
  {
    title: "TECHNICIAN PRODUCTIVITY",
    value: "86%",
    subTitle: "Target 90%",
    metric: "▲ +3 vs yesterday",
    icon: 'bar',
    metricValue: "positive",
  },
  {
    title: "JOBS IN PROGRESS",
    value: "7",
    subTitle: "2 due today",
    metric: "▲ +2 vs yesterday",
    icon: 'wrench',
    metricValue: "positive",
  },
  {
    title: "COMPLETED TODAY",
    value: "18",
    subTitle: "3 awaiting parts",
    metric: "▼ -12% vs yesterday",
    icon: 'check',
    metricValue: "negative",
  },
  {
    title: "AWAITING PICKUP",
    value: "5",
    subTitle: "Oldest: 3 days",
    metric: "▲ +3 vs yesterday",
    icon: 'clock',
    metricValue: "positive",
  },
];
