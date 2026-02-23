import { api } from "../../../lib/axois";
import type { MetricCard, OperationsRequest, OverviewRequest } from "../types";

export const getOverview = async ({
  dateRange,
}: OverviewRequest): Promise<MetricCard[]> => {
  const { data } = await api.get<MetricCard[]>("/dashboard/overview", {
    params: { dateRange },
  });
  return data;
};

export const getOperations = async ({
  dateRange,
}: OperationsRequest): Promise<MetricCard[]> => {
  const { data } = await api.get<MetricCard[]>("/dashboard/operations", {
    params: { dateRange },
  });
  return data;
};
