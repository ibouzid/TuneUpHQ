import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useAuthStore, type AuthState } from "../stores/authStore";
import { AppLayout } from "./AppLayout";
import { fetchFleetData } from "../features/fleetMonitor/apis/fleetApi";

export function ProtectedLayout() {
  const token = useAuthStore((state: AuthState) => state.token);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (token) {
      queryClient.prefetchQuery({
        queryKey: ['fleet'],
        queryFn: fetchFleetData,
        staleTime: 1000 * 60 * 5,
      });
    }
  }, [token, queryClient]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}