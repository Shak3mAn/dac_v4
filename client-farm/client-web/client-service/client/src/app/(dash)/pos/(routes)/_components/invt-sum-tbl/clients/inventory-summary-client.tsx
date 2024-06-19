"use client";

import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import {
  InventorySummaryColumn,
  columns,
} from "../columns/inventory-summary-column";

interface InventorySummaryClientProps {
    data: InventorySummaryColumn[];
}

export const InventorySummaryClient: React.FC<InventorySummaryClientProps> = ({
    data
}) => {
    return (
        <>
          <Separator className="h-[0.5px]" />
          <DataTable searchKey="stockName" columns={columns} data={data} />
        </>
      );
}