import React, { useMemo, useState } from "react";
import { AlertCircle } from "lucide-react";
import { useFleetData } from "./hooks/useFleetData"; // Import your hook
import { Card } from "../../components/ui/Card";
import { Loader } from "../../components/feedback/Loader";

const FleetMonitor: React.FC = () => {
  const { assets, isLoading } = useFleetData();
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "maintenance">(
    "all",
  );

  const assetList = useMemo(() => Object.values(assets), [assets]);
  const maintenanceCount = useMemo(() => {
    return assetList.filter((a) => a.status === "maintenance").length;
  }, [assetList]);

  const filteredAssets = useMemo(() => {
    let list = Object.values(assets);

    if (filterStatus === "maintenance") {
      list = list.filter((a) => a.status === "maintenance");
    }

    if (search) {
      const query = search.toLowerCase();
      list = list.filter(
        (a) =>
          a.name.toLowerCase().includes(query) ||
          a.id.toLowerCase().includes(query),
      );
    }

    return list;
  }, [assets, search, filterStatus]);
  if(isLoading){
    return <Loader fullPage={true} />
  }

  return (
    <div className="p-6 bg-background-primary min-h-screen">
      <div className="mb-6 flex gap-4 bg-background-secondary p-4 rounded-xl shadow-sm border border-border-subtle">
        <input
          type="text"
          placeholder="Search assets (ID or Name)..."
          className="w-full bg-background-subtle border border-border-subtle rounded-md py-2 pl-10 pr-10 text-text-primary focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-2 border rounded-lg bg-gold text-text-primary"
          value={filterStatus}
          onChange={(e) =>
            setFilterStatus(e.target.value as "maintenance" | "all")
          }
        >
          <option value="all">All Assets</option>
          <option value="maintenance">Needs Service</option>
        </select>
      </div>
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-text-primary">
            TuneUp<span className="text-gold-500">HQ</span> Fleet
          </h1>
        </div>

        <div className="flex items-center gap-6 bg-background-primary p-3 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-text-warning" />
            <span className="text-sm font-bold text-text-primary">
              {maintenanceCount} Needs TuneUp
            </span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredAssets?.map((asset) => {
            const assetValue = asset.status === 'active' ? 'positive' : asset.status === 'idle' ? 'neutral' : 'negative'
            return(
          <>
            <Card
              title={asset.id}
              value={asset.name}
              subTitle={`lat:${asset?.location?.lat.toString().substring(0,13)}  lng:${asset?.location?.lng.toString().substring(0,14)}`}
              icon={asset.type}
              metric={asset.status}
              metricValue={assetValue}
            />
          </>
        )})}
      </div>
    </div>
  );
};


export default FleetMonitor;
