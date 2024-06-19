import { vehicle_data } from "@/lib/data/vehicle-data";
import { CatVehiclesColumn } from "./column/vehicles-column";
import { CatVehiclesClientTable } from "./client/vehicles-client";

export const CatVehicleTable = () => {
  const formattedVehicles: CatVehiclesColumn[] = vehicle_data.map((item) => ({
    id: item.vehicleId,
    garageVisitAmount: item.garageVisitAmount,
    customerName: item.customerDetails.name,
    customerPhoneNumber: item.customerDetails.phone,
    make: item.make,
    milage: item.mileage,
    model: item.model,
    registrationNumber: item.registrationNumber,
    vinChassisNumbers: item.vinChassisNumber,
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-2 pt-2">
        <CatVehiclesClientTable data={formattedVehicles} />
      </div>
    </div>
  );
};
