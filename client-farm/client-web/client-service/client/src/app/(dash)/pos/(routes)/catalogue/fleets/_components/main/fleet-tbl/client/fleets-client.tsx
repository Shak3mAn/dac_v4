"use client";

import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import { CatFleetsColumn, columns } from "../column/fleets-column";

interface CatFleetsClientProps {
  data: CatFleetsColumn[];
}

export const CatFleetsClientTable: React.FC<CatFleetsClientProps> = ({
  data,
}) => {
  return (
    <>
      <Separator className="h-[0.5px]" />
      <DataTable
        searchKey="companyName"
        placeholder="Company"
        columns={columns}
        data={data}
      />
    </>
  );
};
