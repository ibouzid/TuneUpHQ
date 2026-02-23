import { useTab } from "../../../hooks/useTab";

const TABS = [
  { id: 'day', label: 'Day' },
  { id: 'week', label: 'Week' },
  { id: 'month', label: 'Month' },
  { id: 'year', label: 'Year' },
];

export function TabSystem() {
  const { activeTab, setTab } = useTab('day');

  return (
    <div className="">
      <div className="flex space-x-8">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setTab(tab.id)}
              className={`
                relative pb-4 text-sm font-medium transition-colors cursor-pointer
                ${isActive ? 'text-gold-500' : 'text-text-secondary hover:text-text-primary'}
              `}
            >
              {tab.label}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500 rounded-full animate-in fade-in zoom-in duration-300" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}