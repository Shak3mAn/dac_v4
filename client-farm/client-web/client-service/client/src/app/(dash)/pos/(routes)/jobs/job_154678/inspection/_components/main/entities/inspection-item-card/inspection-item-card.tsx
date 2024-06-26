"use client"

import React, { useState, useMemo, useEffect } from "react"
import { Clock, LayoutList } from 'lucide-react';
import { FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";
import { PiClockCountdown } from "react-icons/pi";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { formatDateTime } from "@/lib/utils/date-time-format";
import { useJobCard } from "@/store/jobs/use-jc";

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator";

import { InspectionListType, } from "@/lib/types/types"
import { InspectionActions } from "./entities/inspection-actions/inspection-actions"
import { jc_card_view_eg } from "@/lib/data/general/jc-card-view"

interface InspectionItemProps {

}

export const InspectionItemCard: React.FC<InspectionItemProps> = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [status, setStatus] = useState('Pending'); // Initial status
    const [statusHistory, setStatusHistory] = useState<string[]>([]);

    const toggleTaskCompletion = () => {
        // Update the checked state
        setIsChecked((prevChecked) => {
            const newChecked = !prevChecked;

            // Update the status based on the checkbox state
            if (newChecked) {
                setStatus('Completed');
            } else {
                // If the checkbox is unchecked, determine the status based on history
                const previousStatus = getPreviousStatus();
                setStatus(previousStatus);
            }

            return newChecked;
        });
    };

    const getPreviousStatus = (): string => {
        // If there is no history, return 'Pending'
        if (statusHistory.length === 0) return 'Pending';

        // If history exists, return the last status
        const lastStatus = statusHistory[statusHistory.length - 1];
        if (lastStatus === 'Completed' || lastStatus === 'Declined') {
            return 'Pending';
        }
        return lastStatus;
    };

    // Update the status history whenever the status changes
    useEffect(() => {
        setStatusHistory((prevHistory) => [...prevHistory, status]);
    }, [status]);

    return (
        <Card className="w-auto transition-all duration-200 hover:scale-105 ease-in-out cursor-pointer">
            <CardHeader className="flex flex-row justify-between">
                <div className="flex flex-col space-y-1.5">
                    <div className="flex space-x-1.5">
                        {/* Checkbox */}
                        <div>
                            <Checkbox

                            />
                        </div>

                        {/* Inspection Item */}
                        <CardTitle className="text-xl tracking-tight font-bold">

                        </CardTitle>

                        {/* Inspection ID */}
                        <span className="text-xl text-muted-foreground tracking-tight uppercase font-bold">

                        </span>

                        {/* Status */}
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
                            {jc_card_view_eg.jobCard.inspectionChecklist[0].status === "Pending" && (
                                <>
                                    <div className="flex items-center justify-center rounded-lg bg-red-400 bg-opacity-5 backdrop-blur   border-red-700 border-opacity-55 border-2 py-1 px-4">
                                        <FaCircleExclamation className="text-red-700 h-3 w-3 mr-2" />
                                        <span className="text-xs font-semibold tracking-tight">
                                            Declined
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                {/* <InspectionActions data={jc_card_view_eg.jobCard.inspectionChecklist[0].inspectionList[0]} /> */}
            </CardHeader>
        </Card>
    )
}