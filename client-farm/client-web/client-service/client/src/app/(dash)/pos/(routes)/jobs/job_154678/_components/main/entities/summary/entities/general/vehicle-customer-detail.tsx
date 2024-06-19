import React from 'react'
import { User } from 'lucide-react';
import { BsFillCarFrontFill } from "react-icons/bs";

import { Separator } from "@/components/ui/separator";

import CustomerDetails from "../drawer/customer/customer-details";
import VehicleDetails from "../drawer/vehicle/vehicle-details";

import { jc_card_view_eg } from "@/lib/data/general/jc-card-view"


type Props = {}

export const VehicleCustomerDetail = (props: Props) => {
    return (
        <div className='bg-accent bg-opacity-35 backdrop-blur-sm rounded-lg mx-4 p-4'>
            <div className='grid grid-cols-2 space-x-2 py-4'>
                {/* Vehicle Details */}
                <div className='flex flex-col space-y-2 px-4'>
                    <div className='flex justify-start items-start text-sm text-primary/60 font-semibold tracking-tight text-nowrap'>
                        Vehicle :
                    </div>
                    <div>
                        {jc_card_view_eg.jobCard.vehicleDetails.vehicleType === "Sedan" && (
                            <>
                                <div className='flex flex-row space-x-4'>
                                    <div className='flex items-center justify-center'>
                                        <div className='p-1.5 rounded-full shadow-sm border border-primary/65'>
                                            <BsFillCarFrontFill className='h-4 w-4' />
                                        </div>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='flex items0center space-x-1'>
                                            <span className='text-primary font-semibold text-base tracking-tight'>
                                                Vehicle&apos;s Registration:
                                            </span>
                                            <div className='-mt-2'>
                                                <VehicleDetails />
                                            </div>
                                        </div>
                                        <span className='text-primary/70 tracking-tight text-sm font-normal'>
                                            {jc_card_view_eg.jobCard.vehicleDetails.licensePlate}
                                        </span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                {/* Customer Details */}
                <div className='flex w-full space-x-2'>
                    <div className="px-4 h-full">
                        <Separator orientation="vertical" className="w-[0.5px] bg-primary/35" />
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <div className='flex justify-start items-start text-sm text-primary/60 font-semibold tracking-tight text-nowrap'>
                            Customer :
                        </div>

                        <div>
                            <div className='flex flex-row space-x-4'>
                                <div className='flex items-center justify-center'>
                                    <div className='p-1.5 rounded-full shadow-sm border border-primary/65'>
                                        <User className='h-4 w-4' />
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex items0center space-x-1'>
                                        <span className='text-primary font-semibold text-base tracking-tight'>
                                            Customer&apos;s Name:
                                        </span>
                                        <div className='-mt-2'>
                                            <CustomerDetails />
                                        </div>
                                    </div>
                                    <span className='text-primary/70 tracking-tight text-sm font-normal'>
                                        {jc_card_view_eg.jobCard.customerDetails.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

