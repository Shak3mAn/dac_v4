import React from 'react'
import { Building2 } from 'lucide-react';
import { TbHierarchy3 } from "react-icons/tb";
import { FaPerson } from "react-icons/fa6";
import { GiMechanicGarage } from "react-icons/gi";
import { BsUmbrella } from "react-icons/bs";
import { TbPigMoney } from "react-icons/tb";

import {
    Card,
    CardContent,
} from "@/components/ui/card";

import { jc_card_view_eg } from "@/lib/data/general/jc-card-view"

type Props = {}

export const JobMetaInfo = (props: Props) => {
    return (
        <div className="flex w-full mx-4 px-4">
            <div className='grid grid-cols-4 gap-x-3 w-full'>
                <Card>
                    <CardContent className="items-center flex justify-center w-full">
                        <div className='flex flex-col space-y-1 pt-8 pb-4  items-center justify-center'>
                            <div className='p-5 bg-accent backdrop-blur-md bg-opacity-15 flex items-center justify-center rounded-full'>
                                <TbHierarchy3 className='h-7 w-7' />
                            </div>
                            <span className='text-sm text-muted-foreground tracking-tight'>
                                Job Priority:
                            </span>
                            <span className='text-base font-semibold text-primary tracking-tight'>
                                {jc_card_view_eg.jobCard.jobPriority}
                            </span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="items-center flex justify-center w-full">
                        <div className='flex flex-col space-y-1 pt-8 pb-4 items-center justify-center'>
                            <div className='p-5 bg-accent backdrop-blur-md bg-opacity-15 flex items-center justify-center rounded-full'>
                                <GiMechanicGarage className='h-7 w-7' />
                            </div>
                            <span className='text-sm text-muted-foreground tracking-tight'>
                                Service Bay:
                            </span>
                            <span className='text-base font-semibold text-primary tracking-tight'>
                                {jc_card_view_eg.jobCard.currentServiceBay}
                            </span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="items-center flex justify-center w-full">
                        <div className='flex flex-col space-y-1 pt-8 pb-4  items-center justify-center'>
                            <div className='p-5 bg-accent backdrop-blur-md bg-opacity-15 flex items-center justify-center rounded-full'>
                                {jc_card_view_eg.jobCard.jobType === "Commercial" && (
                                    <>
                                        <Building2 className='h-7 w-7' />
                                    </>
                                )}
                                {jc_card_view_eg.jobCard.jobType === "Private" && (
                                    <>
                                        <FaPerson className='h-7 w-7' />
                                    </>
                                )}
                                {jc_card_view_eg.jobCard.jobType === "Insurance" && (
                                    <>
                                        <BsUmbrella className='h-7 w-7' />
                                    </>
                                )}
                            </div>
                            <span className='text-sm text-muted-foreground tracking-tight'>
                                Job Type:
                            </span>
                            <span className='text-base font-semibold text-primary tracking-tight'>
                                {jc_card_view_eg.jobCard.jobType}
                            </span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="items-center flex justify-center w-full">
                        <div className='flex flex-col space-y-1 pt-8 pb-4  items-center justify-center'>
                            <div className='p-5 bg-accent backdrop-blur-md bg-opacity-15 flex items-center justify-center rounded-full'>
                                <TbPigMoney className='h-7 w-7' />
                            </div>
                            <span className='text-sm text-muted-foreground tracking-tight'>
                                Payment Status:
                            </span>
                            <span className='text-base font-semibold text-primary tracking-tight'>
                                {jc_card_view_eg.jobCard.paymentStatus}
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

