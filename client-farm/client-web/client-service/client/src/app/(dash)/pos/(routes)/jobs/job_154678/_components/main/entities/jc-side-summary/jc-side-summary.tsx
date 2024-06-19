"use client"

import React from 'react'
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { Separator } from "@/components/ui/separator";
import { GeneralTooltip } from "@/components/misc/general-tooltip";
import { Button } from "@/components/ui/button";
import { OrderStatusTabs } from "./order-status-tabs/order-status-tabs"
import { ServiceAuthorizeModal } from "./authorize-modal/authorize-modal"

type Props = {}

const JobCardSideCardSummary = (props: Props) => {
    const [loading, setLoading] = useState(false);


    return (
        <>
            <div className="space-y-2 bg-accent p-4 rounded md w-full flex flex-col">
                <div className="flex justify-start items-start text-md font-bold tracking-tight text-nowrap">
                    Summary
                </div>
                <div className="w-full">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                </div>

                {/* Job Class */}
                <div className="flex w-full flex-col space-y-3">
                    <div className="mt-2 flex w-full flex-col space-y-1.5">
                        <div className="flex flex-row items-center justify-between">
                            <span className="text-primary text-xs font-semibold tracking-tight">
                                Job Card:
                            </span>
                            <span className="text-muted-foreground text-xs tracking-tight font-normal">
                                #SRV00123A
                            </span>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <span className="text-primary text-xs font-semibold tracking-tight">
                                Writer:
                            </span>
                            <span className="text-muted-foreground text-xs tracking-tight font-normal">
                                John Doe
                            </span>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <span className="text-primary text-xs font-semibold tracking-tight">
                                Created:
                            </span>
                            <span className="text-muted-foreground text-xs tracking-tight font-normal">
                                21/03/2024 at 5:00 AM
                            </span>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <span className="text-primary text-xs font-semibold tracking-tight">
                                Invoice:
                            </span>
                            <span className="text-muted-foreground text-xs tracking-tight font-normal">
                                21/03/2024
                            </span>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <span className="text-primary text-xs font-semibold tracking-tight">
                                Tasks*:
                            </span>
                            <span className="text-muted-foreground text-xs tracking-tight font-normal">
                                5
                            </span>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <span className="text-primary text-xs font-semibold tracking-tight">
                                Completed:
                            </span>
                            <span className="text-muted-foreground text-xs tracking-tight font-normal">
                                1/5
                            </span>
                        </div>
                    </div>

                    <div className="w-full my-3">
                        <Separator orientation="horizontal" className="h-[0.5px]" />
                    </div>

                    {/*  Authorizations */}
                    <div className="flex flex-col w-full space-y-1.5">
                        <div className="flex flex-row items-center space-x-4 pb-1">
                            <span className="text-primary text-xs tracking-normal uppercase font-bold mb-1">
                                Authorizations
                            </span>
                            <div className="w-full">
                                <Separator
                                    orientation="horizontal"
                                    className="h-[0.5px]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <div className='flex items-center flex-row space-x-1.5'>
                                <div className=''>
                                    <div className=" rounded-full bg-green-900 bg-opacity-75 p-1.5" />
                                </div>
                                <span className="text-primary font-semibold text-xs tracking-tight text-nowrap">
                                    Authorized
                                </span>
                            </div>
                            <span className="text-muted-foreground text-xs tracking-tight font-normal">
                                1
                            </span>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <div className='flex items-center flex-row space-x-1.5'>
                                <div className=''>
                                    <div className=" rounded-full bg-gray-400 bg-opacity-75 p-1.5" />
                                </div>
                                <span className="text-primary font-semibold text-xs tracking-tight text-nowrap">
                                    Pending
                                </span>
                            </div>
                            <span className="text-muted-foreground text-xs tracking-tight font-normal">
                                5
                            </span>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <div className='flex items-center flex-row space-x-1.5'>
                                <div className=''>
                                    <div className=" rounded-full bg-yellow-600 bg-opacity-75 p-1.5" />
                                </div>
                                <span className="text-primary font-semibold text-xs tracking-tight text-nowrap">
                                    Deferred
                                </span>
                            </div>
                            <span className="text-muted-foreground text-xs tracking-tight font-normal">
                                1
                            </span>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <div className='flex items-center flex-row space-x-1.5'>
                                <div className=''>
                                    <div className=" rounded-full bg-red-900 bg-opacity-75 p-1.5" />
                                </div>
                                <span className="text-primary font-semibold text-xs tracking-tight text-nowrap">
                                    Declined
                                </span>
                            </div>
                            <span className="text-muted-foreground text-xs tracking-tight font-normal">
                                0
                            </span>
                        </div>
                        <div className='pt-2 flex items-center justify-center w-full'>
                            <ServiceAuthorizeModal />
                        </div>
                    </div>

                    <div className="w-full my-3">
                        <Separator orientation="horizontal" className="h-[0.5px]" />
                    </div>

                    {/* Meta Booking  */}
                    <div className="flex flex-col w-full space-y-1.5">
                        <div className="flex flex-row items-center space-x-4 pb-1">
                            <span className="text-primary text-xs tracking-normal uppercase font-bold mb-1">
                                Booking
                            </span>
                            <div className="w-full">
                                <Separator
                                    orientation="horizontal"
                                    className="h-[0.5px]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                                Type
                            </span>
                            <span className="text-muted-foreground text-xs tracking-tight font-normal">
                                Walk-In
                            </span>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                                Pick-Up*
                            </span>
                            <span className="text-muted-foreground text-xs tracking-tight font-normal">
                                False
                            </span>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <span className="text-muted-foreground text-xs font-semibold tracking-tight">
                                Appointment:
                            </span>
                            <span className="text-muted-foreground text-xs tracking-tight font-normal">
                                21/03/2024
                            </span>
                        </div>
                    </div>

                    <div className="w-full my-3">
                        <Separator orientation="horizontal" className="h-[0.5px]" />
                    </div>

                    {/* Order Status */}
                    <div className="flex flex-col w-full space-y-1.5">
                        <div className="flex flex-row items-center space-x-4 pb-1">
                            <span className="text-primary text-xs text-nowrap tracking-normal uppercase font-bold mb-1">
                                Order Status
                            </span>
                            <div className="w-full">
                                <Separator
                                    orientation="horizontal"
                                    className="h-[0.5px]"
                                />
                            </div>
                        </div>

                    </div>

                    {/* OrderStatus Tabs */}
                    <OrderStatusTabs />
                </div>
            </div >
        </>
    )
}

export default JobCardSideCardSummary