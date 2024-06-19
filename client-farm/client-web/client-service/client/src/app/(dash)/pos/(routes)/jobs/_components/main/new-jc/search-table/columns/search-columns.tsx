"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import React from "react";

export type JobCardSearchColumn = {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhoneNumber: string;
  vehicleModel: string;
  registrationNumber: string;
  vinChassisNumber: string;
};

export const columns: ColumnDef<JobCardSearchColumn>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="mx-2"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        onClick={(e) => console.log("This the row",row.original, "Is Selected", row.getIsSelected().valueOf())}
        aria-label="Select row"
        className="mx-2"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "customerName",
    header: "Name",
  },
  {
    accessorKey: "customerPhoneNumber",
    header: "Phone No.",
  },
  {
    accessorKey: "registrationNumber",
    header: "Reg No.",
  },
];
