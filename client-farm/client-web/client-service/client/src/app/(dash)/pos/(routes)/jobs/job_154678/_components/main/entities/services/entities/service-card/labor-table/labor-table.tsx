import { service_comp_data, service_items_data } from "@/lib/data/service-data-v2";

import { LaborItemClient } from "./client/labor-client";
import { LaborItemColumn } from "./column/labor-column";

type ServiceItemCEntities = {
  itemPartID: string;
  name: string;
  discount: number;
  price: number;
  availability: boolean;
  quantity: number;
};

interface TableProps {
  // serviceItemData: ServiceItemNJCEntities[];
}

const LaborItemTable: React.FC<TableProps> = () => {
  const formattedLaborItemData: LaborItemColumn[] = (service_comp_data?.[0]?.labor ?? []).map((item) => ({
    laborID: item.laborID,
    laborName: item.laborName,
    hourlyRate: item.hourlyRate && item.hourlyRate.toString().length > 0 ? item.hourlyRate : 0,
    serviceTotal: item.serviceTotal && item.serviceTotal.toString().length > 0 ? item.serviceTotal : 0,
    discount: item.discount,
    status: item.status,
    technician: item.technicians && item.technicians.length > 0 ? item.technicians[0].name : "No technician",
  }));

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-2 pt-2">
        <LaborItemClient data={formattedLaborItemData} />
      </div>
    </div>
  );
};

export default LaborItemTable;
