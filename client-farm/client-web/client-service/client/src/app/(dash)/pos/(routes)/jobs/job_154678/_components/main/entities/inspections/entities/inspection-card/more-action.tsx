"use client";

import axios from "axios";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { AlertModal } from "@/components/misc/alert-modal/alert-modal";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { formatDateTime } from "@/lib/utils/date-time-format";
import { useJobCard } from "@/store/jobs/use-jc";
import { JCGeneralInspection, JobCardDetailsType } from "@/lib/types/types";

interface MoreActionProps {
    data: JobCardDetailsType;
}

export const MoreAction: React.FC<MoreActionProps> = ({ data }) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const { toast } = useToast();
    const router = useRouter();

    const currentDateTime = formatDateTime(new Date());
    const jobCard = useJobCard();

    const onConfirm = () => {
        try {
            setLoading(true);
            data.inspectionChecklist?.forEach((inspection) => {
                jobCard.onDeleteJobCardInspectionListItem(data.jobCardID, inspection.id);
            });
            router.refresh();
            toast({
                title: `Inspection Checklist: Deleted`,
                description: `${currentDateTime}`,
                action: (
                    <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                ),
            });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
        } finally {
            setLoading(false);
            setOpen(false);
        }
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
