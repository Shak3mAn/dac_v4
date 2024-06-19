"use client";

import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { useShopNotes } from "@/store/jobs/use-jc";

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
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { formatDateTime } from "@/lib/utils/date-time-format";

const formSchema = z.object({
    content: z.string().min(3, { message: "Note is required" }),
    title: z.string().min(1, { message: "Name is required" }),
    summary: z.string().min(1, { message: "Summary is required" }),
});

type AddNotesFormValues = z.infer<typeof formSchema>;

interface AddNotesFormProps {
}

export const AddNotes: React.FC<AddNotesFormProps> = () => {

    const router = useRouter();
    const params = useParams();
    const { toast } = useToast()

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const shopNotes = useShopNotes();

    const currentDateTime = formatDateTime(new Date());

    const form = useForm<AddNotesFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues:
        {
            content: "",
            title: "",
            summary: "",
        },
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = (data: AddNotesFormValues) => {
        const NotesId = shopNotes.notes.length + 1;

        const NotesItem = {
            id: NotesId,
            title: data.title,
            summary: data.summary,
            content: data.content,
            date: new Date(),
        }

        try {
            setLoading(true);
            router.refresh();
            shopNotes.onAddNoteItem(NotesItem);
            toast({
                title: "Shop Notes: Note Added.",
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
            <DialogTrigger asChild>
                <Button variant="outline" size="default">
                    Create
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Add Note</DialogTitle>
                    <DialogDescription>
                        Fill out the form below to add a new note.
                    </DialogDescription>
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
                                                type={"text"}
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
                                disabled={loading || isSubmitting} type="submit"
                                variant="default"
                            >
                                Add Note
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog >
    )
}