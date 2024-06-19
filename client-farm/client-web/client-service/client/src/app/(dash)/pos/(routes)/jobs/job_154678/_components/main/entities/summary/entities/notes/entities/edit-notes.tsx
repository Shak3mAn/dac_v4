"use client";

import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { useShopNotes } from "@/store/jobs/use-jc";

import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils"
import { formatDateTime } from "@/lib/utils/date-time-format";
import { Edit } from "lucide-react";

type NoteItem = {
    id: number;
    title: string;
    completed: boolean;
    tab: string;
    dueDate: string;
}

const formSchema = z.object({
    content: z.string().min(3, { message: "Note is required" }),
    title: z.string().min(1, { message: "Name is required" }),
    summary: z.string().min(1, { message: "Summary is required" }),
});

type EditNoteFormValues = z.infer<typeof formSchema>;

interface EditNoteFormProps {
    title: string;
    content: string;
    summary: string;
}

export const EditNote: React.FC<EditNoteFormProps> = ({
    title,
    content,
    summary,
}) => {

    const initialData = {
        title,
        content,
        summary,
    }

    const router = useRouter();
    const params = useParams();
    const { toast } = useToast()

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const shopNotes = useShopNotes();

    const currentDateTime = formatDateTime(new Date());

    const form = useForm<EditNoteFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
            ? {
                title: initialData.title,
                content: initialData.content,
                summary: initialData.summary,
            } : {
                content: "",
                title: "",
                summary: "",
            },
    });

    const { isSubmitting } = form.formState;

    const onSubmit = (data: EditNoteFormValues) => {

        const NoteId = shopNotes.notes.length + 1;

        const NoteItem = {
            id: NoteId,
            title: data.title,
            summary: data.summary,
            content: data.content,
            date: new Date(),
        }

        try {
            setLoading(true);
            // router.refresh();
            shopNotes.onUpdateNoteItem(NoteItem.id, NoteItem);
            toast({
                title: "Shop Notes: Note Edited.",
                description: `${currentDateTime}`,
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
        }
    };

    return (
        <Dialog>
            <DialogTrigger>
                <Button
                    variant="outline"
                    className="h-8 w-8 p-0"
                    size={"small_icon"}
                >
                    <Edit className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Edit Note</DialogTitle>
                    <DialogDescription>Update the details of this note.</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 w-full"
                    >
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Title"
                                                disabled={loading}
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="summary"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Summary</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Summary"
                                                disabled={loading}
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Note</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Note"
                                                disabled={loading}
                                                {...field}
                                                className="min-h-[250px]"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter>
                            <DialogClose>
                                <Button variant="outline" className="px-4 py-2 text-sm font-medium rounded-md">
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button
                                disabled={loading || isSubmitting}
                                type="submit"
                                variant="default"
                            >
                                Edit Note
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog >
    )
}