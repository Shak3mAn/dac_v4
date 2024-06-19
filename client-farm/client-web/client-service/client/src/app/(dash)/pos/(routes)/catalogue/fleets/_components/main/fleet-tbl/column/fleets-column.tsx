import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import React from "react";
import { CellAction } from "./cell-action";

export type CatFleetsColumn = {
  id: string;
  companyName: string;
  contactPerson: string;
  contactNumber: string;
  email: string;
  fleetSize: number;
  clientPriority: string;
  clientSatisfactionLevel: number;
};

export const columns: ColumnDef<CatFleetsColumn>[] = [
  {
    accessorKey: "companyName",
    header: "Company Name",
  },
  {
    accessorKey: "contactPerson",
    header: "Contact Person",
  },
  {
    accessorKey: "contactNumber",
    header: "Phone No.",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "fleetSize",
    header: "Fleets Size",
  },
  {
    accessorKey: "clientSatisfactionLevel",
    header: "Satisfaction Level",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
