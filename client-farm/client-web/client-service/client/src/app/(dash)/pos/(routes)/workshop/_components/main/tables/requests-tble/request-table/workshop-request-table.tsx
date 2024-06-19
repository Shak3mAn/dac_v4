import { format } from "date-fns";

import { request_part_data } from "@/lib/data/request-parts-data";

import { WorkshopRequestClient } from "./client/workshop-request-client";
import { WorkshopRequestColumn } from "./column/workshop-request-column";

export const WorkshopRequestTable = () => {
    const formattedWorkshopRequest: WorkshopRequestColumn[] = request_part_data.map((item) => ({
        id: item.request.requestID,
        requestDateTime: format(new Date(item.request.requestDateTime), "dd/MM/yyyy 'at' hh:mm aaa"),
        requesterName: item.request.requesterDetails.name,
        requestPartCategory: item.request.requestPartCategory,
        requestPartName: item.request.requestedPartName,
        requestQuantity: item.request.requestedQuantity,
        requestStatus: item.request.requestStatus
    }))

    return(
        <div className="flex flex-col">
<div className="flex-1 space-y-4 p-2 pt-6">
    <WorkshopRequestClient data={formattedWorkshopRequest} />
</div>
        </div>
    )
}