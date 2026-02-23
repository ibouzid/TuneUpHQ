import { useQuery } from "@tanstack/react-query";
import { getVehicles } from "../apis/getVehicles";

export const useVehicles = () => {
  return useQuery({
    queryKey: ["vehicles"],
    queryFn: getVehicles,
  });
};
