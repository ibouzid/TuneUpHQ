export const MOCK_FLEET = Array.from({ length: 5000 }, (_, i) => {
  const fleetType =
    Math.random() > 0.5
      ? "Truck"
      : Math.random() > 0.5
        ? "Lift"
        : Math.random() > 0.5
          ? "Crane"
          : "Excavator";
  return {
    id: `ASSET-${i}`,
    name: `${fleetType} #${i}`,
    status:
      Math.random() > 0.8
        ? "maintenance"
        : Math.random() > 0.8
          ? "idle"
          : "active",
    location: { lat: 40.7128, lng: -74.006 },
    type: fleetType.toLocaleLowerCase(),
  };
});
