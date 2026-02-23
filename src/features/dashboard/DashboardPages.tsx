import { OperationsSection } from "./components/cardSystem/OperationsSection";
import { OverviewSection } from "./components/cardSystem/OverviewSection";
import { MechanicPerformance } from "./components/charts/MechanicPreformance";
import { RevenueChart } from "./components/charts/RevenueChart";
import { ServiceDistribution } from "./components/charts/ServiceDistribution";
import { DashboardNav } from "./components/DashboardNav";

export function DashboardPage() {
  return (
    <>
      <DashboardNav />
      <div className="p-6">
        <OverviewSection />
        <OperationsSection />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(256px,1fr))] gap-6">
          <RevenueChart />
          <ServiceDistribution />
          <MechanicPerformance />
        </div>
      </div>
    </>
  );
}
