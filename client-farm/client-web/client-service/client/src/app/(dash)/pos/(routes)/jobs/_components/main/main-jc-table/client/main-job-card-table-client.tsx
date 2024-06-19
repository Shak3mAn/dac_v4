import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import { MainJobCardColumns, columns } from "../columns/main-job-card-column";

interface MainJobCardClientProps {
  data: MainJobCardColumns[];
}

export const MainJobCardTableClient: React.FC<MainJobCardClientProps> = ({
  data,
}) => {
  return (
    <>
      {/* <Separator className="h-[0.5px]" /> */}
      <DataTable
        searchKey="registrationNumber"
        placeholder="Reg. No."
        columns={columns}
        data={data}
      />
    </>
  );
};
