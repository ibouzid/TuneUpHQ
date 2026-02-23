import { useQuery } from "@tanstack/react-query";
import { getOverview } from "../apis/dashboard";

export const useOverview = () => {
  return useQuery({
    queryKey: ['overview'],
    queryFn: getOverview
  });
};
