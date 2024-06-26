import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { Clock, LayoutList } from 'lucide-react';
import { FaCircleCheck } from "react-icons/fa6";
import { PiClockCountdown } from "react-icons/pi";

import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MoreAction } from "./more-action";
import { jc_card_view_eg } from "@/lib/data/general/jc-card-view";

import { formatDate } from "@/lib/utils/date-time-format";
import { cn } from "@/lib/utils";

interface InspectionCardProps { }

export const InspectionCard: React.FC<InspectionCardProps> = () => {
    const progressPercentage = Math.floor(
        (jc_card_view_eg.jobCard.inspectionChecklist[0].inspectionList.length / 15) * 100
    );

    const currentDate = formatDate(new Date());

    // Remove the word "Inspection" if it exists in the name
    const cardTitle = jc_card_view_eg.jobCard.inspectionChecklist[0].name;
    const displayTitle = cardTitle.includes("Inspection")
        ? cardTitle.replace("Inspection", "").trim()
        : cardTitle;

    return (
        <Card className="w-auto hover:bg-accent transition-all duration-200 hover:scale-105 ease-in-out cursor-pointer">
            <CardHeader className="flex flex-row justify-between">
                <div className="flex flex-col space-y-0">
                    <div className="flex space-x-1.5">
                        <CardTitle className="text-xl tracking-tight font-bold">
                            {displayTitle}
                        </CardTitle>
                        <div className={cn("w-3 h-3",
                            jc_card_view_eg.jobCard.inspectionChecklist[0].status === "InProgress" && "bg-amber-600 rounded-sm bg-opacity-45 backdrop-blur-md",
                            jc_card_view_eg.jobCard.inspectionChecklist[0].status === "Complete" && "bg-green-700 rounded-sm bg-opacity-45 backdrop-blur-md",
                            jc_card_view_eg.jobCard.inspectionChecklist[0].status === "Pending" && "bg-gray-600 rounded-sm bg-opacity-45 backdrop-blur-md",
                        )} />
                    </div>
                    <div className="text-xs text-muted-foreground font-normal">
                        #{" "}{jc_card_view_eg.jobCard.inspectionChecklist[0].id}
                    </div>
                </div>
                <MoreAction data={jc_card_view_eg.jobCard} />
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex justify-between">
                    {/* Assessor */}
                    <div className="items-start justify-start flex flex-col space-y-0">
                        <span className="text-muted-foreground text-xs font-semibold">
                            Assessor:
                        </span>
                        <span className="text-sm font-semibold tracking-tight">
                            {jc_card_view_eg.jobCard.technicians[0].name}
                        </span>
                    </div>

                    {/* Items */}
                    <div className="items-end justify-end flex flex-col space-y-0">
                        <span className="text-muted-foreground text-xs font-semibold">
                            Items:
                        </span>
                        <span className="text-sm font-semibold tracking-tight">
                            {jc_card_view_eg.jobCard.inspectionChecklist[0].inspectionList.length}{" "}
                        </span>
                    </div>
                </div>

                <div className="w-full flex border-b border-dashed border-primary/15" />

                <div className="flex justify-between">
                    <div className="justify-start items-center flex flex-row space-x-1.5">
                        <LayoutList className="h-3 w-3 text-muted-foreground" />
                        <span className="text-muted-foreground text-xs font-semibold">
                            Progress
                        </span>
                    </div>

                    <div className="justify-end items-center flex">
                        <span className="text-xs font-semibold">
                            {progressPercentage}%
                        </span>
                    </div>
                </div>

                {/* Progress Bar*/}
                <div className="flex pb-1">
                    <Progress className="h-2" value={progressPercentage} />
                </div>

                <div className="w-full flex border-b border-dashed border-primary/15" />

                <div className="flex justify-between">
                    <div className="flex flex-col items-start justify-start space-y-1">
                        <span className="text-muted-foreground text-xs font-semibold">
                            Date:
                        </span>
                        <div className="flex items-center justify-center rounded-lg bg-accent border-accent-hover border-2 py-1 px-4">
                            <span className="text-xs font-semibold tracking-tight">
                                {currentDate}
                            </span>
                        </div>
                    </div>

                    <div className="items-end justify-end flex flex-col space-y-1">
                        <span className="text-muted-foreground text-xs font-semibold">
                            Status:
                        </span>
                        <div>
                            {jc_card_view_eg.jobCard.inspectionChecklist[0].status === "InProgress" && (
                                <>
                                    <div className="flex items-center justify-center rounded-lg bg-amber-400 bg-opacity-10 backdrop-blur border-amber-600 border-opacity-55 border-2 py-1 px-4">
                                        <Clock className="text-amber-600 h-3 w-3 mr-2" />
                                        <span className="text-xs font-semibold tracking-tight">
                                            In Progress
                                        </span>
                                    </div>
                                </>
                            )}
                            {jc_card_view_eg.jobCard.inspectionChecklist[0].status === "Complete" && (
                                <>
                                    <div className="flex items-center justify-center rounded-lg bg-green-400 bg-opacity-5 backdrop-blur   border-green-700 border-opacity-55 border-2 py-1 px-4">
                                        <FaCircleCheck className="text-green-700 h-3 w-3 mr-2" />
                                        <span className="text-xs font-semibold tracking-tight">
                                            Complete
                                        </span>
                                    </div>
                                </>
                            )}
                            {jc_card_view_eg.jobCard.inspectionChecklist[0].status === "Pending" && (
                                <>
                                    <div className="flex items-center justify-center rounded-lg bg-gray-400 bg-opacity-5 backdrop-blur   border-gray-700 border-opacity-55 border-2 py-1 px-4">
                                        <PiClockCountdown className="text-gray-700 h-3 w-3 mr-2" />
                                        <span className="text-xs font-semibold tracking-tight">
                                            Pending
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default InspectionCard;
