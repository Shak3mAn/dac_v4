"use client"

import { ColumnDef } from "@tanstack/react-table";
import { format } from 'date-fns';
import React from 'react';

export type PendingPaymentColumn = {
    id: string;
    customerName: string;
    totalCost: number;
    outstandingPayments: number;
    paymentStatus: string;
    paymentDueDate: Date | string;
}

export const columns: ColumnDef<PendingPaymentColumn>[] = [
    {
        accessorKey: "customerName",
        header: "Name",
    },
    {
        accessorKey: "totalCost",
        header: "Cost",
    },
    {
        accessorKey: "outstandingPayments",
        header: "Outstanding",
    },
    {
        accessorKey: "paymentStatus",
        header: "Status",
    },
    {
        accessorKey: "paymentDueDate",
        header: "Due Date",
    },
]