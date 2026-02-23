import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore, type AuthState } from "../stores/authStore";
import { AppLayout } from "./AppLayout";

export function ProtectedLayout() {

  const token = useAuthStore((state: AuthState) => state.token);
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
