// src/features/fleetMonitor/hooks/useFleetData.ts
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import type { Asset } from '../types/fleet';
import { fetchFleetData } from '../apis/fleetApi';

export const useFleetData = () => {
  const queryClient = useQueryClient();
  const bufferRef = useRef<Record<string, Asset>>({});

  const { data: assetsRecord, isLoading } = useQuery({
    queryKey: ['fleet'],
    queryFn: fetchFleetData,
    staleTime: 1000 * 60 * 5, 
  });

  useEffect(() => {
    const socket = new WebSocket('wss://api.tuneuphq.com/v1/fleet');
    
    socket.onmessage = (event) => {
      const updatedAsset = JSON.parse(event.data);
      bufferRef.current[updatedAsset.id] = updatedAsset;
    };

    const flushBuffer = () => {
      if (Object.keys(bufferRef.current).length > 0) {
        queryClient.setQueryData(['fleet'], (old: Record<string, Asset> | undefined) => ({
          ...old,
          ...bufferRef.current
        }));
        bufferRef.current = {};
      }
      requestAnimationFrame(flushBuffer);
    };

    const rafId = requestAnimationFrame(flushBuffer);
    return () => {
      socket.close();
      cancelAnimationFrame(rafId);
    };
  }, [queryClient]);

  return { 
    assets: assetsRecord || {}, 
    isLoading: isLoading && !assetsRecord,
  };
};