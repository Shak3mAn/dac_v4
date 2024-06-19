"use client";

import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import { CatSupplierColumn, columns } from "../column/cat-supplier-column";

interface SupplierClientProps {
  data: CatSupplierColumn[];
}

export const CatSuppliersClientTable: React.FC<SupplierClientProps> = ({
  data,
}) => {
  return (
    <>
      <Separator className="h-[0.5px]" />
      <DataTable 
        searchKey="supplierName"
        placeholder="Supplier"
        columns={columns}
        data={data}
      />
    </>
  );
};
