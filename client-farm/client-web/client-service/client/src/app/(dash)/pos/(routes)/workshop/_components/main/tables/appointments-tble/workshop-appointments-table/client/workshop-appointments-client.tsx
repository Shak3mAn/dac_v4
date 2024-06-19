import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import {
  WorkshopAppointmentsColumn,
  columns,
} from "../column/workshop-appointments-column";

interface WorkshopAppointmentsClientProps {
  data: WorkshopAppointmentsColumn[];
}

export const WorkshopAppointmentsClient: React.FC<
  WorkshopAppointmentsClientProps
> = ({ data }) => {
  return (
    <>
      <Separator className="h-[0.5px]" />
      <DataTable
        placeholder="Name"
        searchKey="name"
        columns={columns}
        data={data}
      />
    </>
  );
};
