"use client";

import { DTSizeFiveNoInput } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import { ServiceItemColumn, columns } from "../column/service-column";

interface ServiceItemClientProps {
  data: ServiceItemColumn[];
}

export const ServiceItemClient: React.FC<ServiceItemClientProps> = ({ data }) => {
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
