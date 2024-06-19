import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { CellAction } from "./cell-action";


export type JCServicesColumn = {
    id: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
};

export const columns: ColumnDef<JCServicesColumn>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
            <div className="flex flex-col space-y-1 ml-2">
                <span className="font-semibold">
                    {row.original.name}
                </span>
                <span className="text-muted-foreground">
                    {row.original.description}
                </span>
            </div>
        )
    },
    {
        accessorKey: "quantity",
        header: "Quantity"
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => (
            <div className="text-muted-foreground tracking-tight">
                ${row.original.price}
            </div>
        )
    },
    {
        id: "total",
        accessorKey: "Total",
        cell: ({ row }) => (
            <div className="font-medium tracking-tight">
                ${row.original.price * row.original.quantity}
            </div>
        ),
    },
    {
        id: "actions",
        accessorKey: "More",
        cell: ({ row }) => <CellAction data={row.original} />,
    }
]