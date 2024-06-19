import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import React from "react";
import { CellAction } from "./cell-action";

export type VehicleReportColumn = {
    id: string;
    serviceName: string;
    jobType: string;
    startDateTime:  Date | string;
}

export const columns: ColumnDef<VehicleReportColumn>[] =[
    {
        accessorKey: "serviceName",
        header: "Service Name",
    },
    {
        accessorKey: "jobType",
        header: "Job Type",
    },
    { 
        accessorKey: "startDateTime",
        header: "Date",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />,
      },
]