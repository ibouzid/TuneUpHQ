import { useSearchParams } from 'react-router-dom';

export function useTab(defaultTab?: string) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || defaultTab;

  const setTab = (tabValue: string) => {
    setSearchParams({ tab: tabValue });
  };

  return { activeTab, setTab };
}