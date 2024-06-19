import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { CellAction } from "./cell-action";


export type ServiceItemColumn = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  availability: boolean;
  discount: number;
  itemPartID: string;
  type: string;
};

export const columns: ColumnDef<ServiceItemColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex flex-col space-y-1 ml-2">
        <span className="font-semibold text-sm">
          {row.original.name}
        </span>
        <div className="flex flex-row space-x-1.5">
          <span className="text-muted-foreground text-xs">
            {row.original.type}
          </span>
          <span className="text-muted-foreground text-xs">
            # {row.original.itemPartID}
          </span>
        </div>
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
            <span className="text-green-900 font-medium tracking-right text-sm">
              Available
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-center bg-red-500 bg-opacity-15 px-1.5 py-[2px] rounded-md">
            <span className="text-red-900 font-medium tracking-right text-sm">
              Not Available
            </span>
          </div>
        )}
      </div>
    )
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => (
      <div className="text-muted-foreground text-sm tracking-tight">
        ${row.original.price}
      </div>
    )
  },
 
  {
    accessorKey: "discount",
    header: "Discount",
    cell: ({ row }) => (
      <div className="text-sm text-muted-foreground tracking-tight">
        ${row.original.discount}
      </div>
    )
  },
  {
    id: "total",
    accessorKey: "Subtotal",
    cell: ({ row }) => (
        <div className="font-medium text-sm tracking-tight">
            ${row.original.price * row.original.quantity}
        </div>
    ),
},
{
  id: "actions",
  cell: ({ row }) => <CellAction data={row.original} />,
},
];
