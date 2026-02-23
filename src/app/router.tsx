import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardPage } from "../features/dashboard/DashboardPages";
import { LoginPage } from "../features/login/LoginPage";
import { ProtectedLayout } from "../layouts/ProtectedLayout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<DashboardPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
