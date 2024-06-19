import { vehicle_data } from "@/lib/data/vehicle-data";

import { VehicleClient } from "./clients/vehicle-client";
import { VehicleColumn } from "./columns/vehicle-columns";

const VehicleCustomer = () => {
  const formattedVehicles: VehicleColumn[] = vehicle_data.map((item) => ({
    id: item.vehicleId,
    model: item.model,
    make: item.make,
    registrationNumber: item.registrationNumber,
    mileage: item.mileage,
    // fuelType: item.fuelType,
    garageVisitAmount: item.garageVisitAmount,
    status: item.status,
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-2 pt-2">
        <VehicleClient data={formattedVehicles} />
      </div>
    </div>
  );
};

export default VehicleCustomer;
