import { useState } from "react";
import { ChevronsLeft, CheckCircle, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GeneralTooltip } from "@/components/misc/general-tooltip";
import { Label } from "@/components/ui/label";
import { WorkflowDndContainerModal } from "../modal/workflow-dnd-modal";

export const WorkflowDndFilter = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="rounded-l-full py-3 pl-3 pr-2 flex fixed items-center justify-center cursor-pointer bg-background text-primary shadow-md bottom-20 right-0 border border-input hover:bg-accent hover:text-accent-foreground hover:pr-4 hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out">
          <GeneralTooltip label="Filter">
            <Filter className="h-5 w-5" />
          </GeneralTooltip>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-center w-full justify-between mt-2">
            <div className="flex space-x-2 items-center">
              <div className="h-8 w-8 rounded-full border items-center flex justify-center">
                <Filter className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <SheetTitle className="font-bold">Filters</SheetTitle>
                <SheetDescription className="-mt-1">
                  Configure Workflow filters
                </SheetDescription>
              </div>
            </div>

            <div className="mt-2">
              <Button variant={"ghost"} size={"icon"}>
                <CheckCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </SheetHeader>

        <div className="mt-4 mb-4">
          <Separator className="h-[0.5px]" />
        </div>

        <div>
          <div className="flex flex-col w-full space-y-1.5">
            <div className="flex flex-row items-center space-x-4 pb-1">
              <span className="text-primary text-sm tracking-normal uppercase font-extrabold mb-1">
                Utilities
              </span>
              <div className="w-full">
                <Separator orientation="horizontal" className="h-[0.5px]" />
              </div>
            </div>
            <div className="flex flex-col space-y-2 py-4">
              {/* <Label>Container</Label> */}
              <WorkflowDndContainerModal />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
