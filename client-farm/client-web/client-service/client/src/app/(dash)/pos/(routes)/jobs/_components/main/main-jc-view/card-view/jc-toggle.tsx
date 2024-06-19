"use client"

import * as React from "react";
import { Menu } from "lucide-react";
import { cva } from "class-variance-authority";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePosJCCardViewSidebarToggle} from "@/store/use-sidebar-toggle";
import { GeneralTooltip } from "@/components/misc/general-tooltip";

interface JobSBToggleProps {
    // You can add any additional props if needed
  }
  
  const JCViewToggle: React.FC<JobSBToggleProps> = () => {
    const sidebarToggle = usePosJCCardViewSidebarToggle();

    return (
      <GeneralTooltip label="Toggle Menu">
      <Button
        className=""
        variant="ghost"
        size="icon"
        onClick={sidebarToggle.onToggle}
      >
        <Menu className="h-4 w-4" />
      </Button>
    </GeneralTooltip>
    )
  }

  export default JCViewToggle