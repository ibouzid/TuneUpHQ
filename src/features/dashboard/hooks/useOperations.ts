import { useQuery } from "@tanstack/react-query";
import { getOperations } from "../apis/dashboard";
import { keepPreviousData } from "@tanstack/react-query";

export const useOperations = (dateRange: string) => {
  return useQuery({
    queryKey: ["operations", dateRange],
    queryFn: () => getOperations({ dateRange }),
    placeholderData: keepPreviousData
  });
};