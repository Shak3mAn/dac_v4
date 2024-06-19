import { service_comp_data, service_items_data } from "@/lib/data/service-data-v2";

import { ServiceItemNJCClient } from "./client/njc-client";
import { ServiceItemNJCColumn } from "./column/njc-column";

type ServiceItemNJCEntities = {
  itemPartID: string;
  name: string;
  discount: number;
  price: number;
  availability: boolean;
  quantity: number;
};

interface NJCTableProps {
  // serviceItemData: ServiceItemNJCEntities[];
}

const ServiceItemNJCTable: React.FC<NJCTableProps> = () => {
  const formattedServiceItemData: ServiceItemNJCColumn[] = service_items_data.map(
    (item) => ({
      id: item.itemPartID,
      availability: item.availability,
      discount: item.discount,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    })
  );

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-2 pt-2">
        <ServiceItemNJCClient data={formattedServiceItemData} />
      </div>
    </div>
  );
};

export default ServiceItemNJCTable;
