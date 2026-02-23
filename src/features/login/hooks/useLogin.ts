import { useMutation } from "@tanstack/react-query";
import type { ApiError, JwtPayload, LoginResponse } from "../types/auth";
import { useAuthStore } from "../../../stores/authStore";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { loginAPI } from "../apis/auth";

export const useLogin = (
  setError: React.Dispatch<React.SetStateAction<string | null>>,
) => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();
  return useMutation<
    LoginResponse,
    ApiError,
    { username: string; password: string }
  >({
    mutationFn: loginAPI,
    onSuccess: (data) => {
      setAuth(data.user, data.token);
      setError(null);

      const payload = jwtDecode<JwtPayload>(data.token);
      console.log("Roles from JWT:", payload.roles);

      navigate("/");
    },
    onError: (err) => {
      console.log({err})
      setError(err.message);
    },
  });
};
