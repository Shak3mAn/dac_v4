import { jc_card_view_eg } from "@/lib/data/general/jc-card-view";

import React from "react";
import { JCServiceClient } from "./client/services-client";
import { JCServicesColumn } from "./column/services-column"

type JCServicesItemEntities = {
    id: string;
    name: string;
    description: string;
    quantity: number;
    amount: number;
}

interface ServicesTableProps {
    // JCservicesItemData: JCServicesItemEntities[];
}

const JCServicesItemTable: React.FC<ServicesTableProps> = () => {
    const formattedJCServiceItemData: JCServicesColumn[] = jc_card_view_eg.jobCard.servicesDetails.map(
        (item) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            quantity: item.quantity,
            price: item.cost.amount,
        })
    )

    return (
        <div className="flex flex-col">
            <div className="flex-1 space-y-4 p-2 pt-2">
                <JCServiceClient data={formattedJCServiceItemData} />
            </div>
        </div>
    )
}

export default JCServicesItemTable