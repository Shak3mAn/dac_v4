import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import React from "react";
import { CellAction } from "./cell-action";

export type CatInsuranceColumn = {
    id: string;
    insurerName: string;
    contactPerson: string;
    contactNumber: string;
    email: string;
    insurerAmountOfJobs: number;
    activeInsuranceJobs: number;
}

export const columns: ColumnDef<CatInsuranceColumn>[] = [
    {
        accessorKey: "insurerName",
        header: "Insurer Name",
    },
    {
        accessorKey: "contactPerson",
        header: "Contact Person",
    },
    {
        accessorKey: "contactNumber",
        header: "Contact Number",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "insurerAmountOfJobs",
        header: "Total Jobs",
    },
    {
        accessorKey: "activeInsuranceJobs",
        header: "Active Jobs",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />,
    }
]