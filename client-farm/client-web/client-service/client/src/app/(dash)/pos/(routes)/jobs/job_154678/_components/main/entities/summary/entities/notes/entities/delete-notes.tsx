"use client";

import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

import { useTodoList } from "@/store/jobs/use-jc";

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

import { Button } from "@/components/ui/button";
import { AlertModal } from "@/components/misc/alert-modal/alert-modal";
import { formatDateTime } from "@/lib/utils/date-time-format";

type NotesItem = {
    id: number;
    title: string;
    summary: string;
    content: string;
    date: string;
}

interface CellActionProps {
    data: NotesItem;
}

export const DeleteNotes: React.FC<CellActionProps> = ({ data }) => {
    const router = useRouter();
    const params = useParams();
    const { toast } = useToast()

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const todoList = useTodoList();

    const currentDateTime = formatDateTime(new Date());

    const onDelete = (taskId: number) => {
        try {
            setLoading(true);
            router.refresh();
            todoList.onDeleteTaskItem(taskId);
            toast({
                title: "Shop Notes: Note Deleted",
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

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={() => onDelete(data.id)}
                loading={loading}
            />
            <div>
                <Button
                    variant={"outline"}
                    onClick={() => setOpen(true)}
                    size="small_icon"
                >
                    <Trash className="h-4 w-4" />
                </Button>
            </div>
        </>
    );
};