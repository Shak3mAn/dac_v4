"use client";

import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import {
  CustomerSummaryColumn,
  columns,
} from "../columns/customer-summary-columns";

interface CustomerSummaryClientProps {
  data: CustomerSummaryColumn[];
}

export const CustomerSummaryClient: React.FC<CustomerSummaryClientProps> = ({
  data,
}) => {
  return (
    <>
      <Separator className="h-[0.5px]" />
      <DataTable
        searchKey="customerName"
        columns={columns}
        data={data}
        placeholder="Name"
      />
    </>
  );
};
