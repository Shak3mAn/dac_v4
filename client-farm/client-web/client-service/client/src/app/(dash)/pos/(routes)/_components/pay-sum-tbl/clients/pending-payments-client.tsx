"use client";

import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import {
  PendingPaymentColumn,
  columns,
} from "../columns/pending-payments-columns";

interface PendingPaymentClientProps {
  data: PendingPaymentColumn[];
}

export const PendingPaymentClient: React.FC<PendingPaymentClientProps> = ({
  data,
}) => {
  return (
    <>
      <Separator className="h-[0.5px]" />
      <DataTable searchKey="customerName" columns={columns} data={data} />
    </>
  );
};
