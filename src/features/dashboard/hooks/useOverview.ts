import { useQuery } from "@tanstack/react-query";
import { getOverview } from "../apis/dashboard";
import { keepPreviousData } from "@tanstack/react-query";

export const useOverview = (dateRange: string) => {
  return useQuery({
    queryKey: ["overview", dateRange],
    queryFn: () => getOverview({ dateRange }),
    placeholderData: keepPreviousData,
  });
};
