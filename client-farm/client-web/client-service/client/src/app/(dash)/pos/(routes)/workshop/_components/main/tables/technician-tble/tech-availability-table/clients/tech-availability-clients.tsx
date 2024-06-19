import { DataTableSizeFive } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import {
  TechAvailabilityColumn,
  columns,
} from "../columns/tech-availability-columns";
import React from "react";

interface TechAvailabilityClientProps {
  data: TechAvailabilityColumn[];
}

export const TechAvailabilityClient: React.FC<TechAvailabilityClientProps> = ({
  data,
}) => {
  return (
    <>
      <Separator className="h-[0.5px]" />
      <DataTableSizeFive
        placeholder="Name"
        searchKey="fullName"
        columns={columns}
        data={data}
      />
    </>
  );
};
