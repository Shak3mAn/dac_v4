"use client";

import { ColumnDef } from "@tanstack/react-table";

export type JobSummaryColumn = {
    id: string
    jobPriority: string;
    vehicleReg: string;
    status?: string;
}

export const columns:  ColumnDef<JobSummaryColumn>[] = [
    {
        accessorKey: "vehicleReg",
        header: "Vehicle Reg.",
    },
    {
        accessorKey: "jobPriority",
        header: "Job Priority",
    },
    {
        accessorKey: "status",
        header: "Status",
    }
]