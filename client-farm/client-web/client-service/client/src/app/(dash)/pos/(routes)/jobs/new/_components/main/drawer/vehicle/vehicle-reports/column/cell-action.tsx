"use client";

import axios from "axios";
import { Copy, Edit, MoreHorizontal, Trash, CarFront, ClipboardEdit } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

import { AlertModal } from "@/components/misc/alert-modal/alert-modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { VehicleReportColumn } from "./report-column";

interface CellActionProps {
    data: VehicleReportColumn;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const params = useParams();
  
    const onConfirm = () => {
      console.log("On Confirm!");
    };
  
    const onCopy = () => {
      console.log("On Copy!");
    };
  
    return (
      <>
        <AlertModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onConfirm={onConfirm}
          loading={loading}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => console.log("Profile")}>
              <ClipboardEdit className="mr-2 h-4 w-4" /> Details
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onCopy()}>
              <Copy className="mr-2 h-4 w-4" /> Copy Id
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("Edit")}>
              <Edit className="mr-2 h-4 w-4" /> Update
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpen(true)}>
              <Trash className="mr-2 h-4 w-4" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
  };