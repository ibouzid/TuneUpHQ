import { api } from "../../../lib/axois";
import type { MetricCard } from "../types";

export const getOverview = async (): Promise<MetricCard[]> => {
  const { data } = await api.get<MetricCard[]>("/dashboard/overview");
  return data;
};

export const getOperations = async (): Promise<MetricCard[]> => {
  const { data } = await api.get<MetricCard[]>("/dashboard/operations");
  return data;
};
