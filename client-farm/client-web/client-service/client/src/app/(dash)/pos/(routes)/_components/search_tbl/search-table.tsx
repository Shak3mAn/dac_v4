import { vehicle_data } from "@/lib/data/vehicle-data";

import { JobCardSearchClient } from "./client/search-client";
import { JobCardSearchColumn } from "./columns/search-columns";

const JobSearch = () => {
  const formattedVehicles: JobCardSearchColumn[] = vehicle_data.map((item) => ({
    id: item.vehicleId,
    customerName: item.customerDetails.name,
    customerEmail: item.customerDetails.email,
    customerPhoneNumber: item.customerDetails.phone,
    vehicleModel: item.model,
    registrationNumber: item.registrationNumber,
    vinChassisNumber: item.vinChassisNumber,
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-2 pt-2">
        <JobCardSearchClient data={formattedVehicles} />
      </div>
    </div>
  );
};

export default JobSearch;