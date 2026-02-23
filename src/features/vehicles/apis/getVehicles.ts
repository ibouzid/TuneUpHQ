import { api } from "../../../lib/axois";

export const getVehicles = async () => {
  const res = await api.get("/vehicles");
  return res.data;
};
