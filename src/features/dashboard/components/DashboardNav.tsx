import { Calendar } from "lucide-react";
import { Icon } from "../../../components/ui/Icon";
import { TabSystem } from "./TabSystem";
import { useIsMobile } from "../../../hooks/useIsMobile";
import clsx from "clsx";

export function DashboardNav() {
  const isMobile = useIsMobile();
  return (
    <div className={clsx("sticky top-0 z-10 flex items-center bg-background-primary justify-between p-4 border-b border-gold-400 shadow-sm mb-4", isMobile && 'flex-col')}>
      <div className="flex gap-2 items-center py-1">
        <Icon icon={Calendar} className="text-gold-500 size-5" />
        <div className="flex flex-col">
          <label className="text-text-goldPrimary text-sm">PERIOD:</label>
          <label className="text-text-goldSecondary text-xs">Feb 1, 2026 — Feb 7, 2026</label>
        </div>
      </div>
      <TabSystem />
    </div>
  );
}
