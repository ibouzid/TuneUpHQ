export interface Asset {
  id: string;
  name: string;
  status: AssetStatus;
  location: { lat: number; lng: number };
  lastUpdated: number;
  type: AssetType;
}

export type AssetStatus = 'active' | 'maintenance' | 'idle'
export type AssetType = 'truck' | 'excavator' | 'lift' | 'crane';