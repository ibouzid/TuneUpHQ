import type { Asset } from '../types/fleet';

export const fetchFleetData = async (): Promise<Record<string, Asset>> => {
  const res = await fetch('https://api.tuneuphq.com/v1/assets');
  if (!res.ok) throw new Error('Network response was not ok');
  const list: Asset[] = await res.json();
  
  return list.reduce((acc, asset) => ({ ...acc, [asset.id]: asset }), {} as Record<string, Asset>);
};