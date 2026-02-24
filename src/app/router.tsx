import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardPage } from "../features/dashboard/DashboardPage";
import { LoginPage } from "../features/login/LoginPage";
import { ProtectedLayout } from "../layouts/ProtectedLayout";
import FleetMonitor from "../features/fleetMonitor/FleetMonitorPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/fleet" element={<FleetMonitor />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
