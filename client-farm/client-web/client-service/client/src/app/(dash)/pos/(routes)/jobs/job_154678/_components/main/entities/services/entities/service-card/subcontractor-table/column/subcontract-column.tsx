import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { CellAction } from "./cell-action";

export type SubcontractItemColumn = {
  subcontractorID: string;
  subcontractorName: string;
  subcontractorCategoryServices: string;
  address: string;
  serviceCategory: string;
  serviceName: string;
  hourlyRate: number;
  status: string;
  serviceTotal: number;
};

export const columns: ColumnDef<SubcontractItemColumn>[] = [
  {
    accessorKey: "subcontractorName",
    header: "Subcontractor",
    cell: ({ row }) => (
      <div className="flex flex-col space-y-1 ml-2">
        <span className="font-semibold text-sm">
          {row.original.subcontractorName}
        </span>
        <div className="flex flex-row space-x-1.5">
          <span className="text-muted-foreground text-xs">
            {row.original.address.length > 28 ? row.original.address.slice(0, 24) + "..." : row.original.address}
          </span>
        </div>
      </div>
    )
  },
  {
    accessorKey: "serviceName",
    header: "Service",
    cell: ({ row }) => (
      <div className="flex flex-col space-y-1 ml-2">
        <span className="font-semibold text-sm">
          {row.original.serviceName}
        </span>
        <div className="flex flex-row space-x-1.5">
          <span className="text-muted-foreground text-xs">
            {row.original.serviceCategory.length > 19 ? row.original.serviceCategory.slice(0, 16) + "..." : row.original.serviceCategory}
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
    accessorKey: "serviceTotal",
    header: "SubTotal"
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
