import { DTSizeFiveNoInput } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import { JCServicesColumn, columns } from "../column/services-column";
import React from "react";

interface JCServiceClientProps {
    data: JCServicesColumn[];
}

export const JCServiceClient: React.FC<JCServiceClientProps> = ({ data }) => {
    return (
        <>
            <Separator className="h-[0.5px] hidden" />
            <DTSizeFiveNoInput
                searchKey="name"
                columns={columns}
                data={data}
                placeholder="Name"
            />
        </>
    )
}