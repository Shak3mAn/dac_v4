import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import { WorkshopRequestColumn, columns } from "../column/workshop-request-column";

interface WorkshopRequestClientProps {
    data: WorkshopRequestColumn[]
}

export const WorkshopRequestClient: React.FC<WorkshopRequestClientProps> = ({ data}) => {
    return (
        <>
            <Separator className="h-[0.5px]" />
            <DataTable
            placeholder="Name"
            searchKey="requesterName"
            columns={columns}
            data={data}
            />
        </>
    )
}