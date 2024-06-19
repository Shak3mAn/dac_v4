"use client";

import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { useJobCardSingleToggle } from "@/store/jobs/use-jc-toggle";

export const JobCardSingleViewToggle = () => {
    const jcSingleToggle = useJobCardSingleToggle();
    let isTabletMid = useMediaQuery("(max-width: 768px)");

    return (
        <>
            {!isTabletMid ? (
                <div className="grid transition-all w-[800px] duration-200 ease-in-out grid-cols-5 gap-x-3 justify-center items-center mt-6 mb-0 cursor-pointer">
                    <div
                        className={cn(
                            "flex space-x-1.5 items-center justify-around tracking-tight",
                            jcSingleToggle.isSummary
                                ? `text-primary text-sm font-semibold border-b border-primary`
                                : `text-muted-foreground/60 font-medium text-sm`
                        )}
                        onClick={jcSingleToggle.onSummary}
                    >
                        <span>
                            Summary
                        </span>
                    </div>
                    <div
                        className={cn(
                            "flex space-x-1.5 items-center justify-around tracking-tight",
                            jcSingleToggle.isServices
                                ? `text-primary text-sm font-semibold border-b border-primary`
                                : `text-muted-foreground/60 font-medium text-sm`
                        )}
                        onClick={jcSingleToggle.onServices}
                    >
                        <span>
                            Services
                        </span>
                    </div>
                    <div
                        className={cn(
                            "flex space-x-1.5 items-center justify-around tracking-tight",
                            jcSingleToggle.isInspections
                                ? `text-primary text-sm font-semibold border-b border-primary`
                                : `text-muted-foreground/60 font-medium text-sm`
                        )}
                        onClick={jcSingleToggle.onInspections}
                    >
                        <span>
                            Inspections
                        </span>
                    </div>
                    <div
                        className={cn(
                            "flex space-x-1.5 items-center justify-around text-nowrap tracking-tight",
                            jcSingleToggle.isPartProcurement
                                ? `text-primary text-sm font-semibold border-b border-primary`
                                : `text-muted-foreground/60 font-medium text-sm`
                        )}
                        onClick={jcSingleToggle.onPartProcurement}
                    >
                        <span>
                            Parts Procurement
                        </span>
                    </div>
                    <div
                        className={cn(
                            "flex space-x-1.5 items-center justify-around tracking-tight",
                            jcSingleToggle.isMessages
                                ? `text-primary text-sm font-semibold border-b border-primary`
                                : `text-muted-foreground/60 font-medium text-sm`
                        )}
                        onClick={jcSingleToggle.onMessages}
                    >
                        <span>
                            Messages
                        </span>
                    </div>
                </div>
            ) : (
                <>

                </>
            )}
        </>
    )
}