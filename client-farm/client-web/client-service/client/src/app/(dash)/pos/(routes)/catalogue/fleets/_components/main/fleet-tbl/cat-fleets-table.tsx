import { fleet_data } from "@/lib/data/fleet-data";
import { CatFleetsClientTable } from "./client/fleets-client";
import { CatFleetsColumn } from "./column/fleets-column";

export const CatFleetsTable = () => {
  const formattedFleets: CatFleetsColumn[] = fleet_data.map((item) => ({
    clientPriority: item.clientPriority,
    clientSatisfactionLevel: item.clientSatisfactionLevel,
    companyName: item.companyName,
    contactNumber: item.contactNumber,
    contactPerson: item.contactPerson,
    email: item.email,
    fleetSize: item.fleetSize,
    id: item.companyID,
  }));

  return (
    <div>
      <div className="flex-1 space-y-4 p-2 pt-2">
        <CatFleetsClientTable data={formattedFleets} />
      </div>
    </div>
  );
};
