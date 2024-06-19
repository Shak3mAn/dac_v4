import { inv_data } from "@/lib/data/inventory-data";

import { InventorySummaryClient } from "./clients/inventory-summary-client";
import { InventorySummaryColumn } from "./columns/inventory-summary-column";

const InventorySummary = () => {
  const formattedInventoy: InventorySummaryColumn[] = inv_data.map((item) => ({
    id: item.inventoryID,
    stockName: item.itemName,
    stockCategory: item.itemCategory,
    stockType: item.itemType,
    stockSalesPrice: item.salesPrice.amount,
    stockTotalQuantity: item.itemTotalQuantity,
    stockConsumedQuantity: item.itemConsumedQuantity,
    stockAvailabilityQuantity: item.itemAvailabilityQuantity,
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-2 pt-6">
        <InventorySummaryClient data={formattedInventoy} />
      </div>
    </div>
  );
};

export default InventorySummary;
