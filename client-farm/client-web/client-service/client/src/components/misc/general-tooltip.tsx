"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from "@/components/ui/tooltip";

interface GeneralTooltipProps {
  label: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
}

export const GeneralTooltip = ({
  label,
  children,
  side,
  align,
}: GeneralTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align}>
          {label}
          {/* <TooltipPrimitive.Arrow className="z-[2000] fill-background"/> */}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
