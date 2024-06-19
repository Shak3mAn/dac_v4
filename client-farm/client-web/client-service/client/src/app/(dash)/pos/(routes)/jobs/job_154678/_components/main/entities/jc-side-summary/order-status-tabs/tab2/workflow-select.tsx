import React from 'react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Props = {}

export const WorkflowSelect = (props: Props) => {
    return (
        <Select>
            <SelectTrigger className="w-full bg-primary/5 data-[state=active]:bg-card font-medium placeholder:text-primary/80 text-xs tracking-normal ">
                <SelectValue placeholder="Select workflow" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="coldEstimate">
                        Cold Estimate
                    </SelectItem>
                    <SelectItem value="estimate">
                        Estimate
                    </SelectItem>
                    <SelectItem value="inProgress">
                        In Progress
                    </SelectItem>
                    <SelectItem value="invoice">
                        Invoice
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

