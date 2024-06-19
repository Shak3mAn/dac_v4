"use client";

import * as React from "react";
import { FileSpreadsheet } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface InvoiceJCToggleProps {}

export const InvoiceJCToggle: React.FC<InvoiceJCToggleProps> = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <FileSpreadsheet className="h-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Invoice</DropdownMenuItem>
        <DropdownMenuItem>Job Card</DropdownMenuItem>
        <DropdownMenuItem>Gate Pass</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
