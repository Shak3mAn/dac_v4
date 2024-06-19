"use client";

import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import { CatVehiclesColumn, columns } from "../column/vehicles-column";

interface VehiclesClientProps {
  data: CatVehiclesColumn[];
}

export const CatVehiclesClientTable: React.FC<VehiclesClientProps> = ({ data }) => {
  return (
    <>
      <Separator className="h-[0.5px]" />
      <DataTable
        searchKey="registrationNumber"
        placeholder="Reg. No."
        columns={columns}
        data={data}
      />
    </>
  );
};
