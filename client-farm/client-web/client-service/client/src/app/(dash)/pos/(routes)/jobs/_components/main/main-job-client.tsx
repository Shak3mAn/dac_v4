"use client";

import { NewJobCards } from "./new-jc/new-job";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { useWorkflowToggle } from "@/store/jobs/use-workflow-toggle";
import { WorkflowViewToggle } from "./misc/workflow-toggle";
import { WorkflowDndFilter } from "./dnd/filters/workflow-filter";
import WorkflowDnd from "./dnd/main/workflow-dnd";
import { MainJobCardTable } from "./main-jc-table/main-job-card-table";
import MainJCCardView from "./main-jc-view/main-jc-view"

export const MainJobClient = () => {
  const workflowToggle = useWorkflowToggle();
  return (
    <>
      <div className="flex items-center pb-6 justify-between">
        <Heading
          title="Job Cards"
          section="Workflow"
          description="Manage active job cards, including viewing, creation, and maintenance."
        />
        <NewJobCards />
      </div>

      <WorkflowViewToggle />
      <div>
        <Separator className="h-[0.5px]" />
      </div>
      {workflowToggle.isTable === true && (
        <>
          {/* Table */}
          <MainJobCardTable />
        </>
      )}
      {workflowToggle.isBoard === true &&  (
        <>
          {/* Board View */}
          <WorkflowDnd />
          <WorkflowDndFilter />
        </>
      )}
      {workflowToggle.isCard === true && (
        <>
          {/* Card View */}
          <MainJCCardView />
        </>
      )}
    </>
  );
};
