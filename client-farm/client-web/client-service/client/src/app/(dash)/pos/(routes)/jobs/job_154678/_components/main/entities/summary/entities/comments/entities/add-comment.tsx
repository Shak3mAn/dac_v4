"use client";

import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { useClientShopComments } from "@/store/jobs/use-jc";

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
import { Textarea } from "@/components/ui/textarea";
import { formatDateTime } from "@/lib/utils/date-time-format";

const formSchema = z.object({
    name: z.string().min(3, { message: "Name is required" }),
    text: z.string().min(1, { message: "Comment is required" }),
    categoryId: z.string().min(1),
    // dueDate: z.date()
});

type AddCommentFormValues = z.infer<typeof formSchema>;

interface AddCommentFormProps {
    // categories: Categories[];
}

export const AddComment: React.FC<AddCommentFormProps> = () => {
    const categories = [
        {
            id: "C1",
            category: "Customer",
        },
        {
            id: "C2",
            category: "Shop",
        }
    ]

    const router = useRouter();
    const params = useParams();
    const { toast } = useToast()

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const clientShopComments = useClientShopComments();

    const currentDateTime = formatDateTime(new Date());

    const form = useForm<AddCommentFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues:
        {
            name: "",
            text: "",
            categoryId: "",
            // dueDate: undefined,
        },
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = (data: AddCommentFormValues) => {
        const CommentId = clientShopComments.comments.length + 1;

        const CommentItem = {
            id: CommentId,
            name: data.name,
            tab: data.categoryId,
            text: data.text,
            date: new Date(),
        }

        try {
            setLoading(true);
            router.refresh();
            clientShopComments.onAddComment(CommentItem);
            toast({
                title: "Comments: Comment Added.",
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
                    Add Comment
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Add Comment</DialogTitle>
                    <DialogDescription>
                        Fill out the form below to add a new comment.
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
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Name"
                                                disabled={loading}
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="categoryId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category</FormLabel>
                                        <Select
                                            disabled={loading}
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue
                                                        placeholder="Select a category"
                                                        defaultValue={field.value}
                                                    />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {categories.map((category) => (
                                                    <SelectItem value={category.id} key={category.id}>
                                                        {category.category}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="text"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Comment</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Comment"
                                                disabled={loading}
                                                {...field}
                                                className="min-h-[250px]" />
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
                                Add Comment
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog >
    )
}