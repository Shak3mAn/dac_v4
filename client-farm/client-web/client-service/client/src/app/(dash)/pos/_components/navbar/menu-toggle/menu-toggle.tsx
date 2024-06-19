"use client"

import * as React from "react";
import { Menu } from "lucide-react";
import { cva } from "class-variance-authority";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSidebarToggle } from "@/store/use-sidebar-toggle";
import { GeneralTooltip } from "@/components/misc/general-tooltip";

interface MenuToggleProps {
  // You can add any additional props if needed
}

const MenuToggle: React.FC<MenuToggleProps> = () => {
  const sidebarToggle = useSidebarToggle();

  return (
    <GeneralTooltip label="Toggle Menu">
      <Button
        className=""
        variant="outline"
        size="icon"
        onClick={sidebarToggle.onToggle}
      >
        <Menu className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </GeneralTooltip>
  );
};

export default MenuToggle;
