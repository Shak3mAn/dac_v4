import { service_comp_data, service_items_data } from "@/lib/data/service-data-v2";

import { ServiceItemClient } from "./client/service-client";
import { ServiceItemColumn } from "./column/service-column";

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

const ServiceItemTable: React.FC<TableProps> = () => {
  const formattedServiceItemData: ServiceItemColumn[] = service_items_data.map(
    (item) => ({
      id: item.itemPartID,
      availability: item.availability,
      discount: item.discount,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      itemPartID: item.itemPartID,
      type: item.type
    })
  );

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-2 pt-2">
        <ServiceItemClient data={formattedServiceItemData} />
      </div>
    </div>
  );
};

export default ServiceItemTable;
