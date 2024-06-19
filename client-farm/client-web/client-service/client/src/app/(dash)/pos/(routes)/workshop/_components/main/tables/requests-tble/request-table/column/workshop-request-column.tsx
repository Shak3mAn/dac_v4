import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
// import { CellAction } from "./cell-action";

export type WorkshopRequestColumn = {
  id: string;
  requesterName: string;
  requestDateTime: Date | string;
  requestPartName: string;
  requestQuantity: number;
  requestStatus: string;
  requestPartCategory: string;
};

export const columns: ColumnDef<WorkshopRequestColumn>[] = [
  {
    accessorKey: "requesterName",
    header: "Name",
  },
  {
    accessorKey: "requestDateTime",
    header: "Date & Time",
  },
  {
    accessorKey : "requestPartName",
    header: "Part Name",
  },
  {
    accessorKey : "requestQuantity",
    header: "Quantity",
  },
  {
    accessorKey: "requestStatus",
    header: "Status",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
