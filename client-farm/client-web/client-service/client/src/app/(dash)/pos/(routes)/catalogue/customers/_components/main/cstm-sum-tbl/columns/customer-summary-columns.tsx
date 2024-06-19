"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import React from "react";
import { CellAction } from "./cell-action";

export type CustomerSummaryColumn = {
  id: string;
  customerName: string;
  customerInitial: string;
  customerEmail: string;
  customerPhoneNumber: string;
  vehicles: number;
};

export const columns: ColumnDef<CustomerSummaryColumn>[] = [
  {
    accessorKey: "customerName",
    header: "Name",
  },
  {
    accessorKey: "customerInitial",
    header: "Initial",
  },
  {
    accessorKey: "customerEmail",
    header: "Email",
  },
  {
    accessorKey: "customerPhoneNumber",
    header: "Phone No.",
  },
  {
    accessorKey: "vehicles",
    header: "Vehicle No.",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
