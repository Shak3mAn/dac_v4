"use client";

import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import {
  CatIntermediaryColumn,
  columns,
} from "../columns/cat-intermediary-column";

interface IntermediaryClientProps {
  data: CatIntermediaryColumn[];
}

export const CatIntermediaryClientTable: React.FC<IntermediaryClientProps> = ({
  data,
}) => {
  return (
    <>
      <Separator className="h-[0.5px]" />
      <DataTable
        searchKey="brokerName"
        placeholder="Name"
        columns={columns}
        data={data}
      />
    </>
  );
};
