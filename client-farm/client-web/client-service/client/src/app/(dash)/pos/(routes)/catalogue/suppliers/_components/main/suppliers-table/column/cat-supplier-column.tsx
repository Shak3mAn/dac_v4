import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import React from "react";
import { CellAction } from "./cell-action";

export type CatSupplierColumn = {
    id: string;
    supplierName: string;
    contactPerson: string;
    contactNumber: string;
    email: string;
    productsCategory: string;
    supplierPriorityIndex: number;
    supplierPerformanceRatingSystem: number;
    supplierSERVQUAL: number;
}

export const columns: ColumnDef<CatSupplierColumn>[] = [
    {
        accessorKey: "supplierName",
        header: "Supplier Name",
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
        accessorKey: "productsCategory",
        header: "Product Category",
    },
    // {
    //     accessorKey: "supplierPerformanceRatingSystem",
    //     header: "SPRS",
    // },
    // {
    //     accessorKey: "supplierSERVQUAL",
    //     header: "SERVQUAL"
    // },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />,
    }
]