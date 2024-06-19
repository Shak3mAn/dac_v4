"use client"

import React from 'react';
import { Building2, Printer, Send, MoreHorizontal, User, ArrowRight } from 'lucide-react';
import { BsFillCarFrontFill } from "react-icons/bs";
import { TbHierarchy3 } from "react-icons/tb";
import { FaPerson } from "react-icons/fa6";
import { GiMechanicGarage } from "react-icons/gi";
import { BsUmbrella } from "react-icons/bs";
import { TbPigMoney } from "react-icons/tb";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

import { Heading } from "@/components/ui/heading";
import { Loader } from "@/components/ui/loader";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { GeneralTooltip } from "@/components/misc/general-tooltip";
import CustomerDetails from "../drawer/customer/customer-details";
import VehicleDetails from "../drawer/vehicle/vehicle-details";

import JCServicesItemTable from "../services-table/services-table";
import { jc_card_view_eg } from "@/lib/data/general/jc-card-view"

const JCCardView = () => {
    // const [] = React.useState<string>
    return (
        <>
            <div className='flex flex-col space-y-4 w-full mr-1.5 pr-1 ml-2'>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex space-x-4'>
                        <div className='flex space-x-2  items-center'>
                            <span className='font-bold text-lg tracking-tight'>
                                Job Card ID:
                            </span>
                            <span className='text-lg font-medium text-muted-foreground'>
                                #{jc_card_view_eg.jobCard.jobCardID}
                            </span>
                        </div>
                        <div className='flex items-center justify-center bg-amber-600 bg-opacity-35 px-4 py-1 rounded-lg'>
                            <span className='text-amber-700 text-xs tracking-tight font-semibold'>
                                In Progress
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Button variant="outline" size="icon">
                            <div className="flex items-center">
                                <Printer className="h-4 w-4" />
                            </div>
                        </Button>
                        <Button variant="default" size="icon">
                            <div className="flex items-center">
                                <Send className="h-4 w-4" />
                            </div>
                        </Button>
                        <Button variant="outline" size="icon">
                            <div className="flex items-center">
                                <ArrowRight className="h-4 w-4" />
                            </div>
                        </Button>
                    </div>
                </div>

                {/* Job Information */}
                <Card>
                    <CardContent className='py-4 px-6'>
                        <div className='flex flex-col pt-2'>
                            <div className="flex flex-row items-center space-x-4 mx-4">
                                <CardTitle className="text-md text-nowrap">
                                    Services
                                </CardTitle>
                                <div className="w-full">
                                    <Separator orientation="horizontal" className="h-[0.5px]" />
                                </div>
                            </div>
                            <JCServicesItemTable />

                            <div className='grid grid-cols-3 gap-x-2 pt-2 pb-4'>
                                <div />
                                <div />
                                <div className="flex flex-col w-full space-y-1 pr-6">
                                    {/* Totals */}
                                    <div className='flex flex-row justify-between items-center pb-1'>
                                        <span className='text-muted-foreground font-normal text-sm tracking-tight'>
                                            Labor:
                                        </span>
                                        <span className='text-muted-foreground tracking-tight text-sm font-normal'>
                                            ${jc_card_view_eg.jobCard.costing.labor}
                                        </span>
                                    </div>
                                    <div className='flex flex-row justify-between items-center pb-1'>
                                        <span className='text-muted-foreground font-normal text-sm tracking-tight'>
                                            Parts:
                                        </span>
                                        <span className='text-muted-foreground tracking-tight text-sm font-normal'>
                                            ${jc_card_view_eg.jobCard.costing.parts}
                                        </span>
                                    </div>
                                    <div className='flex flex-row justify-between items-center pb-1'>
                                        <span className='text-muted-foreground text-sm font-normal tracking-tight'>
                                            VAT + Tax:
                                        </span>
                                        <span className='text-muted-foreground text-sm tracking-tight font-normal'>
                                            ${jc_card_view_eg.jobCard.costing.vat_tax}
                                        </span>
                                    </div>
                                    <div>
                                        <Separator orientation='horizontal' className='h-[0.5px]' />
                                    </div>
                                    <div className='flex flex-row justify-between items-center pb-1'>
                                        <span className='text-primary font-semibold text-sm tracking-tight'>
                                            Total:
                                        </span>
                                        <span className='text-primary tracking-tight text-sm font-semibold'>
                                            ${jc_card_view_eg.jobCard.costing.total}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row items-center space-x-4 mx-4 pt-2 pb-6">
                                <CardTitle className="text-md text-nowrap">
                                    Vehicle & Customer
                                </CardTitle>
                                <div className="w-full">
                                    <Separator orientation="horizontal" className="h-[0.5px]" />
                                </div>
                            </div>

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
                                                                <span className='text-primary font-semibold text-md tracking-tight'>
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
                                                            <span className='text-primary font-semibold text-md tracking-tight'>
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

                            {/* Job Meta Data */}
                            <div className="flex flex-row items-center space-x-4 mx-4 pt-6 pb-6">
                                <CardTitle className="text-md text-nowrap">
                                    Job Information
                                </CardTitle>
                                <div className="w-full">
                                    <Separator orientation="horizontal" className="h-[0.5px]" />
                                </div>
                            </div>

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
                                                <span className='text-md font-semibold text-primary tracking-tight'>
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
                                                <span className='text-md font-semibold text-primary tracking-tight'>
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
                                                <span className='text-md font-semibold text-primary tracking-tight'>
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
                                                <span className='text-md font-semibold text-primary tracking-tight'>
                                                    {jc_card_view_eg.jobCard.paymentStatus}
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div className='py-6' />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default JCCardView;