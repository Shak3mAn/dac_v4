"use client";

import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { CellAction } from "./cell-action";

export type InventorySummaryColumn ={
    id: string;
    stockName: string;
    stockCategory: string;
    stockType: string;
    stockSalesPrice: number;
    stockTotalQuantity: number;
    stockConsumedQuantity: number;
    stockAvailabilityQuantity: number;
}

export const columns: ColumnDef<InventorySummaryColumn>[] = [
    {
        accessorKey: "stockName",
        header: "Name",
      },
      {
        accessorKey: "stockCategory",
        header: "Category",
      },
      {
        accessorKey: "stockType",
        header: "Type",
      },
      {
        accessorKey: "stockSalesPrice",
        header: "Price",
      },
      {
        accessorKey: "stockTotalQuantity",
        header: "Total Quantity",
      },
      {
        accessorKey: "stockConsumedQuantity",
        header: "Consumed Quantity",
      },
      {
        accessorKey: "stockAvailabilityQuantity",
        header: "Available Quantity",
      },
      {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />,
      }
]
