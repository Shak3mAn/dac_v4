import { ColumnDef } from "@tanstack/react-table";
import React from "react";

export type ServiceItemNJCColumn = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  availability: boolean;
  discount: number;
};

export const columns: ColumnDef<ServiceItemNJCColumn>[] = [
  {
    accessorKey: "name",
    header: "Description",
    cell: ({ row }) => (
      <div className="ml-2">
        {row.original.name}
      </div>
    )
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => (
      <div className="text-muted-forground tracking-tight">
        ${row.original.price}
      </div>
    )
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "discount",
    header: "Discount",
    cell: ({ row }) => (
      <div className="text-muted-forground tracking-tight">
        ${row.original.discount}
      </div>
    )
  },
  {
    accessorKey: "availability",
    header: "Availability",
    cell: ({ row }) => (
      <div className="">
        {row.original.availability === true ? (
          <div className="flex items-center justify-center bg-green-500 bg-opacity-15 px-1.5 py-[2px] rounded-md">
            <span className="text-green-900 font-medium tracking-right text-xs">
              Available
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-center bg-red-500 bg-opacity-15 px-1.5 py-[2px] rounded-md">
            <span className="text-red-900 font-medium tracking-right text-xs">
              Not Available
            </span>
          </div>
        )}
      </div>
    )
  },
];
