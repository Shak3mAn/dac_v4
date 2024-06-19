"use client";

import { DTSizeFiveNoInput } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import { ServiceItemNJCColumn, columns } from "../column/njc-column";

interface ServiceItemNJCClientProps {
  data: ServiceItemNJCColumn[];
}

export const ServiceItemNJCClient: React.FC<ServiceItemNJCClientProps> = ({ data }) => {
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
