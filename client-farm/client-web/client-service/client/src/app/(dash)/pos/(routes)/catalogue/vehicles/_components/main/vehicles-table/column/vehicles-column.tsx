import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import React from "react";
import { CellAction } from "./cell-action";

export type CatVehiclesColumn = {
  id: string;
  make: string;
  model: string;
  registrationNumber: string;
  milage: string;
  garageVisitAmount: number;
  vinChassisNumbers: string;
  customerName: string;
  customerPhoneNumber: string;
};

export const columns: ColumnDef<CatVehiclesColumn>[] = [
  {
    accessorKey: "registrationNumber",
    header: "Reg No.",
  },
  {
    accessorKey: "make",
    header: "Make",
  },
  {
    accessorKey: "model",
    header: "Model",
  },
  {
    accessorKey: "vinChassisNumbers",
    header: "VIN",
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
  },
  {
    accessorKey: "customerPhoneNumber",
    header: "Phone No.",
  },
  {
    accessorKey: "milage",
    header: "Milage",
  },
  {
    accessorKey: "garageVisitAmount",
    header: "Garage Visits",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
