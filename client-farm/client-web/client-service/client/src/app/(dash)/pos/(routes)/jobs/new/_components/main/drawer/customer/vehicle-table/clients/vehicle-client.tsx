"use client";

import { DataTableSizeFive } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import { 
    VehicleColumn,
    columns
} from "../columns/vehicle-columns";

interface VehicleClientProps {
    data: VehicleColumn[];
}

export const VehicleClient: React.FC<VehicleClientProps> = ({
    data
}) => {
    return(
        <>
        <Separator className="h-[0.5px] hidden" />
        <DataTableSizeFive searchKey="registrationNumber" columns={columns} data={data} placeholder="Reg No." />
      </>
    )
}