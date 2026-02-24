import { Loader } from "../../components/feedback/Loader";
import { OperationsSection } from "./components/cardSystem/OperationsSection";
import { OverviewSection } from "./components/cardSystem/OverviewSection";
import { DashboardNav } from "./components/DashboardNav";
import { lazy, Suspense } from "react";

const RevenueChart = lazy(() => import("./components/charts/RevenueChart"));
const ServiceDistribution = lazy(
  () => import("./components/charts/ServiceDistribution"),
);
const MechanicPerformance = lazy(
  () => import("./components/charts/MechanicPreformance"),
);

export function DashboardPage() {
  return (
    <>
      <DashboardNav />
      <div className="p-6">
        <OverviewSection />
        <OperationsSection />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(256px,1fr))] gap-6">
          <Suspense fallback={<Loader />}>
            <RevenueChart />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ServiceDistribution />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <MechanicPerformance />
          </Suspense>
        </div>
      </div>
    </>
  );
}
