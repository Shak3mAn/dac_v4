import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { CellAction } from "./cell-action";


export type LaborItemColumn = {
  laborID: string;
  laborName: string;
  hourlyRate?: number;
  serviceTotal?: number;
  status: string;
  discount?: number;
  technician?: string;
};

export const columns: ColumnDef<LaborItemColumn>[] = [
  {
    accessorKey: "laborName",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex flex-col space-y-1 ml-2">
        <span className="font-semibold text-sm">
        {row.original.laborName.length > 45 ? row.original.laborName.slice(0, 42) + "..." : row.original.laborName}
        </span>
        <div className="flex flex-row space-x-1.5">
          <span className="text-primary text-xs">
            Tech:
          </span>
          <span className="text-muted-foreground font-semibold text-xs">
            {row.original.technician}
          </span>
        </div>
      </div>
    )
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="">
        {row.original.status !== "InProgress" ? (
          <div className="flex items-center justify-center bg-green-600 bg-opacity-15 px-1.5 py-[2px] rounded-md">
            <span className="text-green-900 font-medium tracking-right text-xs">
              Complete
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-center bg-amber-600 bg-opacity-15 px-1.5 py-[2px] rounded-md">
            <span className="text-amber-900 font-medium tracking-right text-xs">
              InProgress
            </span>
          </div>
        )}
      </div>
    )
  },
  {
    accessorKey: "hourlyRate",
    header: "Rate",
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
    accessorKey: "serviceTotal",
    header: "SubTotal"
},
{
  id: "actions",
  cell: ({ row }) => <CellAction data={row.original} />,
},
];
