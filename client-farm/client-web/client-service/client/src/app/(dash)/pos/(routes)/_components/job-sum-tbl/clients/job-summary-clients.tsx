import { DataTable } from "@/components/ui/data-table" 
import { Separator } from "@/components/ui/separator"

import { JobSummaryColumn, columns } from "../columns/job-summary-columns"

interface JobSummaryClientProps {
    data: JobSummaryColumn[];
}

export const JobSummaryClient: React.FC<JobSummaryClientProps> = ({
    data
}) => {
    return (
        <>
        <Separator className="h-[0.5px]" />
        <DataTable placeholder="" searchKey="vehicleReg" columns={columns} data={data} />
        </>
    )
}