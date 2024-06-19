import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type WorkshopAppointmentsColumn = {
  id: string;
  name: string;
  scheduledAppointmentDateTime: Date | string
  contactNumber: string;
  vehicleModel: string;
  licensePlate: string;
  serviceName: string;
};

export const columns: ColumnDef<WorkshopAppointmentsColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "vehicleModel",
    header: "Model",
  },
  {
    accessorKey: "licensePlate",
    header: "Reg No.",
  },
  {
    accessorKey: "serviceName",
    header: "Service",
  },
  {
    accessorKey: "scheduledAppointmentDateTime",
    header: "Date & Time"
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
