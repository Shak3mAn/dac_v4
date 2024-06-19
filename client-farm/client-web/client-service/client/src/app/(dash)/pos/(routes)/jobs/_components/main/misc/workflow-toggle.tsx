"use client";

import { Presentation, Plus, Table, FileText } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { useWorkflowToggle } from "@/store/jobs/use-workflow-toggle";

export const WorkflowViewToggle = () => {
  const workflowToggle = useWorkflowToggle();
  let isTabletMid = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {!isTabletMid ? (
        <div className="grid transition-all w-[375px] duration-200 ease-in-out grid-cols-3 gap-x-3 justify-start items-center mt-4 mb-2 cursor-pointer">
          <div
            className={cn(
              "flex space-x-1.5 items-center justify-around tracking-tight",
              workflowToggle.isBoard
                ? `text-primary text-base font-bold`
                : `text-muted-foreground/60 font-medium text-base`
            )}
            onClick={workflowToggle.onBoard}
          >
            <Presentation className="ml-2 h-4 w-4" />
            <span>Board View</span>
          </div>
          <div
            className={cn(
              "flex space-x-1.5 items-center justify-around tracking-tight",
              workflowToggle.isCard
                ? `text-primary text-base font-bold`
                : `text-muted-foreground/60 font-medium text-base`
            )}
            onClick={workflowToggle.onCard}
          >
            <FileText className="ml-2 h-4 w-4" />
            <span>Card View</span>
          </div>
          <div
            className={cn(
              "flex space-x-1.5 items-center justify-around tracking-tight",
              workflowToggle.isTable
                ? `text-primary text-base font-bold`
                : `text-muted-foreground/60 font-medium text-base`
            )}
            onClick={workflowToggle.onTable}
          >
            <Table className="ml-2 h-4 w-4" />
            <span>Table View</span>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 w-[200px] pb-1 justify-start gap-x-3 items-center mt-2 transition-all duration-200 ease-in-out cursor-pointer">
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
          </div>
        </>
      )}
    </>
  );
};
