import { api } from "../../../lib/axois";
import type { LoginRequest, LoginResponse } from "../types/auth";

export const loginAPI = async ({ username, password }: LoginRequest) => {
  const { data } = await api.post<LoginResponse>("/auth/login", {
    username,
    password,
  });
  return data;
};

export const logoutAPI = async () => {
    await api.post("/auth/logout")
}