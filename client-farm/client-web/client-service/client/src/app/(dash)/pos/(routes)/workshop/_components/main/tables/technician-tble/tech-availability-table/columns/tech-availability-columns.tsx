import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "../clients/tech-availability-cellaction";

export type TechAvailabilityColumn = {
  id: string;
  fullName: string;
  availability: boolean;
};

export const columns: ColumnDef<TechAvailabilityColumn>[] = [
  {
    accessorKey: "fullName",
    header: "Name",
  },
  {
    accessorKey: "availability",
    header: "Availability",
    cell: ({ row }) => (
      <div className="flex">
        {!row.original.availability ? (
          <div className="bg-red-600 px-4 py-1 rounded-md bg-opacity-10 flex item-center justify-center">
            {" "}
            <span className="text-sm font-medium text-red-800 text-opacity-90">
              Unavailable
            </span>{" "}
          </div>
        ) : (
          <div className="bg-green-600 rounded-md px-4 py-1 bg-opacity-10 flex item-center justify-center">
            {" "}
            <span className="text-sm font-medium text-green-800 text-opacity-90">
              Free
            </span>{" "}
          </div>
        )}
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
