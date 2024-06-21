import { service_comp_data, service_items_data } from "@/lib/data/service-data-v2";

import { SubcontractItemClient } from "./client/subcontract-client";
import { SubcontractItemColumn } from "./column/subcontract-column";

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

const SubcontractItemTable: React.FC<TableProps> = () => {
  const formattedSubcontractItemData: SubcontractItemColumn[] = (service_comp_data?.[0]?.subcontractor ?? []).map((item) => ({
    subcontractorID: item.subcontractorID,
    subcontractorName: item.subcontractorName,
    hourlyRate: item.service[0].hourlyRate && item.service[0].hourlyRate.toString().length > 0 ? item.service[0].hourlyRate : 0,
    serviceTotal: item.service[0].serviceTotal && item.service[0].serviceTotal.toString().length > 0 ? item.service[0].serviceTotal : 0,
    status: item.service[0].status,
    address: item.address,
    serviceCategory: item.service[0].serviceCategory,
    serviceName: item.service[0].serviceName,
    subcontractorCategoryServices: item.subcontractorCategoryServices,
  }));

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-2 pt-2">
        <SubcontractItemClient data={formattedSubcontractItemData} />
      </div>
    </div>
  );
};

export default SubcontractItemTable;
