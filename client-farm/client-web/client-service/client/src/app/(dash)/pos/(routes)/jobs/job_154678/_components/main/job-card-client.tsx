"use client";

import { MoreHorizontal, Printer, Send } from "lucide-react"
import { SiQuickbooks } from "react-icons/si";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";

import { useJobCardSingleToggle } from "@/store/jobs/use-jc-toggle";
import { JobCardSingleViewToggle } from "./general/job-card-single-toggle/jc-single-toggle";
import {
    Inspections,
    JobCardSideCardSummary,
    Messages,
    PartsProcurement,
    Services,
    Summary
} from "./entities"

export const JobCardClient = () => {
    const jcSingleToggle = useJobCardSingleToggle();

    return (
        <>
            <div className="flex flex-col space-y-4 pb-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Job Card"
                        section="JC12345A"
                        description="Oversee and coordinate the ongoing maintenance and administration of the current job card."
                    />
                    <div className="flex flex-row space-x-2">
                        <Button variant={"default"} size="default">
                            <div className="flex items-center">
                                <Printer className="h-4 w-4 mr-2" /> Print
                            </div>
                        </Button>
                        <Button variant={"outline"} size="icon">
                            <div className="flex items-center">
                                <Send className="h-4 w-4" />
                            </div>
                        </Button>
                        <Button variant={"outline"} size="icon">
                            <div className="flex items-center">
                                <SiQuickbooks className="h-4 w-4" />
                            </div>
                        </Button>
                        <Button variant={"outline"} size="icon">
                            <div className="flex items-center">
                                <MoreHorizontal className="h-4 w-4" />
                            </div>
                        </Button>
                    </div>
                </div>

                {/* Labels */}
                <div className="flex space-x-6 pt-2 px-2 justify-start items-center">
                    <div className="flex justify-center items-center space-x-1.5">
                        <span className="flex text-muted-foreground/75 text-sm font-medium  tracking-tight capitalize">
                            Job Status:
                        </span>

                        <div className='flex items-center justify-center bg-amber-600 bg-opacity-35 px-4 py-1 rounded-lg cursor-pointer hover:scale-110 active:scale-95 transition-all ease-in-out duration-200'>
                            <span className='text-amber-900 text-xs tracking-tight font-semibold'>
                                In Progress
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-1.5">
                        <span className="flex text-muted-foreground/75 text-sm font-medium text-nowrap  tracking-tight capitalize">
                            Job Priority:
                        </span>
                        <div className='flex items-center justify-center bg-red-600 bg-opacity-35 px-4 py-1 rounded-lg cursor-pointer hover:scale-110 active:scale-95 transition-all ease-in-out duration-200'>
                            <span className='text-red-900 text-xs tracking-tight font-semibold'>
                                High
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-1.5">
                        <span className="flex text-muted-foreground/75 text-sm font-medium text-nowrap  tracking-tight capitalize">
                            Labels:
                        </span>
                        <div className='flex items-center justify-center bg-primary/10 bg-opacity-35 px-2 cursor-pointer hover:scale-110 active:scale-95 transition-all ease-in-out duration-200 py-1 rounded-lg'>
                            <span className='text-primary/50 text-xs text-nowrap tracking-tight font-semibold'>
                                + Add
                            </span>
                        </div>
                    </div>

                </div>
                {/* Job Card Workflow Toggle */}
                <div>
                    <JobCardSingleViewToggle />
                    <Separator />
                </div>
                <div className="grid grid-cols-10 px-4">
                    <div className="col-span-7 flex">
                        {/* Summary */}
                        {jcSingleToggle.isSummary === true && (
                            <Summary />
                        )}

                        {/* Services */}
                        {jcSingleToggle.isServices === true && (
                            <Services />
                        )}

                        {/* Inspections */}
                        {jcSingleToggle.isInspections === true && (
                            <Inspections />
                        )}

                        {/* Parts Procurement */}
                        {jcSingleToggle.isPartProcurement === true && (
                            <PartsProcurement />
                        )}

                        {/* Messages  */}
                        {jcSingleToggle.isMessages === true && (
                            <Messages />
                        )}
                    </div>
                    <div className="flex space-x-2 col-span-3 w-full">
                        <div className="px-4 h-full">
                            <Separator orientation="vertical" className="w-[0.5px]" />
                        </div>
                        {/* Job Card SideCard Summary*/}
                        <JobCardSideCardSummary />
                    </div>
                </div>
            </div>
        </>
    )
}