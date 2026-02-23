import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../stores/authStore";
import { logoutAPI } from "../apis/auth";

export const useLogout = () => {
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      logout();
      queryClient.clear();
      navigate("/login");
    },
  });
};
