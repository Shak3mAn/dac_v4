import { ColumnDef } from "@tanstack/react-table";
import React from "react";

export type JCServicesColumn = {
    id: string;
    name: string;
    description: string;
    quantity: number;
    status: string;
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
        accessorKey: "name",
        header: "Status",
        cell: ({ row }) => (
            <>
                {row.original.status === "InProgress" && (
                    <div className="flex items-center justify-center bg-amber-600 bg-opacity-20 px-2 py-1 rounded-lg">
                        <span className="text-amber-900 text-xs tracking-tight font-semibold">
                            In Progress
                        </span>
                    </div>
                )}
                {row.original.status === "Completed" && (
                    <div className="flex items-center justify-center bg-green-600 bg-opacity-20 px-2 py-1 rounded-lg">
                        <span className="text-green-900 text-xs tracking-tight font-semibold">
                            Completed
                        </span>
                    </div>
                )}
                {row.original.status === "Pending" && (
                    <div className="flex items-center justify-center bg-gray-400 bg-opacity-20 px-2 py-1 rounded-lg">
                        <span className="text-gray-700 text-xs tracking-tight font-semibold">
                            Pending
                        </span>
                    </div>
                )}
            </>
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
]