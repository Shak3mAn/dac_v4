"use client";

// import { Presentation, Plus, Table, FileText } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { useJobCardToggle } from "@/store/jobs/use-jc-toggle"

export const JCToggle = () => {
    const jcToggle = useJobCardToggle();
    let isTabletMid = useMediaQuery("(max-width: 768px)");

    return (
        <>
            {!isTabletMid ? (
                <div className="grid transition-all w-full duration-200 ease-in-out grid-cols-2 gap-x-1 justify-start items-center mt-4 mb-2 cursor-pointer">
                    <div
                        className={cn(
                            "flex items-center tracking-tight ",
                            jcToggle.isInProgress
                                ? `text-primary text-base font-semibold`
                                : `text-muted-foreground/60 font-normal text-base`
                        )}
                        onClick={jcToggle.onInProgress}
                    >
                        <span className="text-sm">In Progress</span>
                    </div>
                    <div
                        className={cn(
                            "flex items-center tracking-tight",
                            !jcToggle.isInProgress
                                ? `text-primary text-base font-semibold`
                                : `text-muted-foreground/60 font-normal text-base`
                        )}
                        onClick={jcToggle.onComplete}
                    >
                        <span className="text-sm">Complete</span>
                    </div>
                </div>
            ) : (
                <>
                    {/* <div className="grid grid-cols-2 w-[200px] pb-1 justify-start gap-x-3 items-center mt-2 transition-all duration-200 ease-in-out cursor-pointer">
            <div
              className={cn(
                "flex items-center justify-around",
                workflowToggle.isBoard
                  ? `text-primary font-bold`
                  : `text-muted-foreground/60`
              )}
              onClick={workflowToggle.onBoard}
            >
              <Presentation className="ml-2 h-5 w-5" />
            </div>
            <div
              className={cn(
                "flex items-center justify-around",
                workflowToggle.isCard
                  ? `text-primary font-bold`
                  : `text-muted-foreground/60`
              )}
              onClick={workflowToggle.onCard}
            >
              <FileText className="ml-2 h-5 w-5" />
            </div>
            <div
              className={cn(
                "flex items-center justify-around",
                workflowToggle.isTable
                  ? `text-primary font-bold`
                  : `text-muted-foreground/60`
              )}
              onClick={workflowToggle.onTable}
            >
              <Table className="ml-2 h-5 w-5" />
            </div>
          </div> */}
                </>
            )}
        </>
    );
};
