"use client";

import { DataTableSizeFive } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import { 
VehicleReportColumn,
columns
} from "../column/report-column"

interface VehicleReportClientProps {
    data: VehicleReportColumn[];
}

export const VehicleReportClient: React.FC<VehicleReportClientProps> = ({
    data
}) => {
    return(
        <>
        <Separator className="h-[0.5px] hidden" />
        <DataTableSizeFive searchKey="serviceName" columns={columns} data={data} placeholder="Service" />
      </>
    )
}