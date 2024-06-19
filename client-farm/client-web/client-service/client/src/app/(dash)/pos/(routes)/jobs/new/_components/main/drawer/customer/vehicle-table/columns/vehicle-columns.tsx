"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import React from "react";
import { CellAction } from "./cell-action";

export type VehicleColumn = {
    id: string,
    make: string,
    model: string,
    registrationNumber: string,
    mileage: string,
    garageVisitAmount: number,
    status: string,
}

export const columns: ColumnDef<VehicleColumn>[] = [
    {
        accessorKey: "registrationNumber",
        header: "Reg No.",
    },
    {
        accessorKey: "model",
        header: "Model",
    },
    {
        accessorKey: "make",
        header: "Make",
    },
    {
        accessorKey: "mileage",
        header: "Mileage",
    },
    {
        accessorKey: "garageVisitAmount",
        header: "Visits",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />,
      },
]