import type { ICONS_LIST, METRIC_VALUES } from "../../types";

export interface MetricCard {
  title: string;
  value: string;
  subTitle?: string;
  metric?: string;
  icon?: ICONS_LIST;
  metricValue?: METRIC_VALUES;
}
export interface MetricDataSet {
  day: MetricCard[];
  week: MetricCard[];
  month: MetricCard[];
  year: MetricCard[];
}
export interface OverviewRequest {
  dateRange?: string;
}
export interface OperationsRequest {
  dateRange?: string;
}
export interface OverviewResponse {
  data: MetricCard[];
}

export interface ApiError {
  message: string;
  code?: number;
}
