import { Info } from "lucide-react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const NJCServiceHover = () => {
  const helpStyling =
    "z-10 cursor-pointer text-muted-foreground hover:bg-primary/5 hover:text-primary hover:rounded-full hover:scale-110 transition-all duration-200 ease-in-out";

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost" size="sm_icon" className={cn(helpStyling)}>
          <Info className="h-3 w-3" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-[400px]">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-primary text-sm font-semibold tracking-tight">
              Brake Pad R&R (Front)
            </span>
            <span className="text-muted-foreground text-xs tracking-tight font-normal">
              #SRV00123A
            </span>
          </div>
          <div className="w-full my-2">
            <Separator orientation="horizontal" className="h-[0.5px]" />
          </div>

          <div className="flex flex-col items-start space-y-1">
            <span className="text-primary text-sm font-bold tracking-tight">
              Description :
            </span>
            <span className="text-primary font-normal text-sm">
              Comprehensive engine tune-up to optimize performance and
              efficiency.
            </span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
