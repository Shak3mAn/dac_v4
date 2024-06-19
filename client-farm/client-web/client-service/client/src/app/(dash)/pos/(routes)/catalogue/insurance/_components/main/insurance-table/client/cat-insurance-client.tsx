"use client";

import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import { CatInsuranceColumn, columns } from "../columns/cat-insurance-column";

interface InsuranceClientProps {
  data: CatInsuranceColumn[];
}

export const CatInsuranceClientTable: React.FC<InsuranceClientProps> = ({
  data,
}) => {
  return (
    <>
      <Separator className="h-[0.5px]" />
      <DataTable
        searchKey="insurerName"
        placeholder="Name"
        columns={columns}
        data={data}
      />
    </>
  );
};
