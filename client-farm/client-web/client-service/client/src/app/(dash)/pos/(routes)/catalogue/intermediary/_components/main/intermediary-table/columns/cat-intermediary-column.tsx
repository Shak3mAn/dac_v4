import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import React from "react";
import { CellAction } from "./cell-action";

export type CatIntermediaryColumn = {
    id: string;
    brokerName: string;
    contactPerson: string;
    contactNumber: string;
    workEmail: string;
    amountOfReferrals: number;
    brokerPriorityIndex: number;
}

export const columns: ColumnDef<CatIntermediaryColumn>[] = [
    { 
        accessorKey: "brokerName",
        header: "Name",
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
        accessorKey: "workEmail",
        header: "Work Email",
    },
    {
        accessorKey: "amountOfReferrals",
        header: "Referrals"
    },
    {
        accessorKey: "brokerPriorityIndex",
        header: "Priority"
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />,
      },
]