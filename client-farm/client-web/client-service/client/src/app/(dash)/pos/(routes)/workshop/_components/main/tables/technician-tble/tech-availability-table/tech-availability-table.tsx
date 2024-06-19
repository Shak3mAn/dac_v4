import { technicians } from "@/lib/data/technician-data";

import { TechAvailabilityColumn } from "./columns/tech-availability-columns";
import { TechAvailabilityClient } from "./clients/tech-availability-clients";

export const TechAvailabilityTable = () => {
  const formattedTechAvailability: TechAvailabilityColumn[] = technicians.map(
    (item) => ({
      id: item.technicianId,
      fullName: item.fullName,
      availability: item.availability,
    })
  );

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-2 pt-6">
        <TechAvailabilityClient data={formattedTechAvailability} />
      </div>
    </div>
  );
};
