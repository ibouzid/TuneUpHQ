import { useQuery } from "@tanstack/react-query";
import { getOperations } from "../apis/dashboard";

export const useOperations = () => {
  return useQuery({
    queryKey: ['operations'],
    queryFn: getOperations
  });
};
