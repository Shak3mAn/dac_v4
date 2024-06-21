"use client";

import { DTSizeFiveNoInput } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import { SubcontractItemColumn, columns } from "../column/subcontract-column";

interface SubcontractItemClientProps {
  data: SubcontractItemColumn[];
}

export const SubcontractItemClient: React.FC<SubcontractItemClientProps> = ({ data }) => {
  return (
    <>
      <Separator className="h-[0.5px] hidden" />
      <DTSizeFiveNoInput
        searchKey="name"
        columns={columns}
        data={data}
        placeholder="Name"
      />
    </>
  );
};
