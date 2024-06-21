"use client";

import { DTSizeFiveNoInput } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import { LaborItemColumn, columns } from "../column/labor-column";

interface LaborItemClientProps {
  data: LaborItemColumn[];
}

export const LaborItemClient: React.FC<LaborItemClientProps> = ({ data }) => {
  return (
    <>
      <Separator className="h-[0.5px] hidden" />
      <DTSizeFiveNoInput
        searchKey="laborName"
        columns={columns}
        data={data}
        placeholder="laborName"
      />
    </>
  );
};
