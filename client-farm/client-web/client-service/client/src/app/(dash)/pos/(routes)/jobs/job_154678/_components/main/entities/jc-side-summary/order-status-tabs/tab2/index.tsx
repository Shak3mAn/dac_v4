"use client"

import React from 'react'
import { useState } from "react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { WorkflowSelect } from "./workflow-select"
import PaymentLog from "./payment-log/payment-log"
import ActivityLog from "./activity-log/activity-log";

type Props = {}

export const InvoiceTab = (props: Props) => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <div className="w-full my-3">
                <Separator orientation="horizontal" className="h-[0.5px]" />
            </div>

            {/* Payments */}
            <div className="flex flex-col w-full space-y-1.5">
                {/* Totals */}
                <div className="flex flex-row items-center space-x-4 pb-1">
                    <span className="text-primary text-xs tracking-normal uppercase font-bold mb-1">
                        Workflow
                    </span>
                    <div className="w-full">
                        <Separator
                            orientation="horizontal"
                            className="h-[0.5px]"
                        />
                    </div>
                </div>

                <div className='pb-4'>
                    <WorkflowSelect />
                </div>
            </div>

            {/* Payments */}
            <div className="flex flex-col w-full space-y-1.5">
                {/* Totals */}
                <div className="flex flex-row items-center space-x-4 pb-1">
                    <span className="text-primary text-xs tracking-normal uppercase font-bold mb-1">
                        Totals
                    </span>
                    <div className="w-full">
                        <Separator
                            orientation="horizontal"
                            className="h-[0.5px]"
                        />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <span className="text-muted-foreground font-semibold text-xs tracking-tight">
                        Parts
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        $100.00
                    </span>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <span className="text-muted-foreground font-semibold text-xs tracking-tight">
                        Labor
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        $60.00
                    </span>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                        Service Discount
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        $29.00
                    </span>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                        Shop Supplies
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        $0.00
                    </span>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                        Special Fees*
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        $9.00
                    </span>
                </div>
                <div className="pt-2 w-full">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                </div>
                <div className="flex flex-row items-center justify-between">
                    <span className="text-primary font-semibold text-xs tracking-tight text-nowrap">
                        Subtotal
                    </span>
                    <span className="text-primary text-xs tracking-tight font-medium">
                        $199.00
                    </span>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                        Taxable*
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        $129.00
                    </span>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                        Non-Taxable
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        $40.00
                    </span>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <span className="text-primary font-semibold text-xs tracking-tight text-nowrap">
                        Taxes
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        $19.00
                    </span>
                </div>

                <div className="pt-2 w-full">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                </div>
                <div className="flex flex-row items-center justify-between">
                    <span className="text-primary font-semibold text-xs tracking-tight text-nowrap">
                        Grand Total
                    </span>
                    <span className="text-primary text-xs tracking-tight font-medium">
                        $199.00
                    </span>
                </div>

                <div className="pt-2 pb-2 w-full">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                </div>

                <div className="flex flex-row items-center justify-between">
                    <span className="text-primary font-semibold text-xs tracking-tight text-nowrap capitalize">
                        Paid to date
                    </span>
                    <span className="text-primary text-xs tracking-tight font-medium">
                        $50.00
                    </span>
                </div>

                <div className="pt-2 pb-2 w-full">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                </div>

                <div className="flex flex-row items-center justify-between">
                    <span className="text-primary font-semibold text-xs tracking-tight text-nowrap capitalize">
                       Remaining Balance
                    </span>
                    <span className="text-primary text-xs tracking-tight font-medium">
                        $149.00
                    </span>
                </div>

                <div className="pt-2 pb-2 w-full">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                </div>

                <div className='pt-2 flex items-center justify-center w-full'>
                    <Button
                        disabled={loading}
                        variant={"default"}
                        size="default"
                        className='w-full'
                    >
                        <div className='flex items-center'>
                            + Pay
                        </div>
                    </Button>
                </div>

                <div className="pt-2 pb-2 w-full">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                </div>

                <div className='pb-2'>
                    <PaymentLog />
                </div>


                <div className="pt-2 pb-2 w-full">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                </div>

                <div className='pb-2'>
                    <ActivityLog />
                </div>


                <div className="pt-2 pb-2 w-full">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                </div>

            </div>
        </>
    )
}
