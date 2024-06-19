import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

import React from "react";
import { CellAction } from "./cell-action";

export type MainJobCardColumns = {
  id: string;
  customerName: string;
  vehicleMake: string;
  vehicleModel: string;
  registrationNumber: string;
  jobPriority: string;
  jobType: string;
  estimatedCompletionTime: Date | string;
  status: string;
  paymentStatus: string;
  totalCost: number;
};

export const columns: ColumnDef<MainJobCardColumns>[] = [
  {
    accessorKey: "id",
    header: "Job Card Id",
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
  },
  {
    accessorKey: "vehicleMake",
    header: "Vehicle Make",
  },
  {
    accessorKey: "vehicleModel",
    header: "Vehicle Model",
  },
  {
    accessorKey: "registrationNumber",
    header: "Reg No.",
  },
  { accessorKey: "status", header: "Status" },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
  },
  {
    accessorKey: "totalCost",
    header: "Total Cost",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
