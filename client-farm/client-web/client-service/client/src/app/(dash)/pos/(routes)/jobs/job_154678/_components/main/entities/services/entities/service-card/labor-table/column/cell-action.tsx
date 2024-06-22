"use client";

import axios from "axios";
import { Edit, Hammer, MoreHorizontal, User, Trash } from "lucide-react";
import { MdOutlineEngineering } from "react-icons/md";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { AlertModal } from "@/components/misc/alert-modal/alert-modal";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LaborItemColumn } from "./labor-column";
import { formatDateTime } from "@/lib/utils/date-time-format";
import { useServiceOption } from "@/store/inventory/use-service"

interface CellActionProps {
    data: LaborItemColumn
}

export const CellAction: React.FC<CellActionProps> = ({
    data
}) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const params = useParams();
    const { toast } = useToast()

    const serviceOption = useServiceOption();

    const currentDateTime = formatDateTime(new Date());

    const onConfirm = () => {
        try {
            setLoading(true);
            router.refresh();
            serviceOption.onDeleteServiceItem(data.laborID);
            toast({
                title: `Labor: Deleted`,
                description: `${currentDateTime}`,
                action: (
                    <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                ),
            })
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        } finally {
            setLoading(false);
            setOpen(false);
        }
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
                        <MdOutlineEngineering className="mr-2 h-4 w-4" /> Labor
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
    )
}