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
import { useTodoList } from "@/store/jobs/use-jc";

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
import { cn } from "@/lib/utils"
import { formatDateTime } from "@/lib/utils/date-time-format";

type Categories = {
    id: number;
    category: string;
}

type AddTaskFormValues = z.infer<typeof formSchema>;

interface AddTaskFormProps {
    // categories: Categories[];
}

const formSchema = z.object({
    title: z.string().min(3, { message: "Title is required" }),
    categoryId: z.string().min(1),
    // dueDate: z.date()
});

export const AddTask: React.FC<AddTaskFormProps> = () => {
    const categories = [
        {
            id: "C1",
            category: "Inspection",
        },
        {
            id: "C2",
            category: "Service",
        },
        {
            id: "C3",
            category: "Other",
        }
    ]

    const router = useRouter();
    const params = useParams();
    const { toast } = useToast()

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState<Date | undefined>();

    const todoList = useTodoList();

    const currentDateTime = formatDateTime(new Date());

    const form = useForm<AddTaskFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues:
        {
            title: "",
            categoryId: "",
            // dueDate: undefined,
        },
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = (data: AddTaskFormValues) => {

        const taskId = todoList.tasks.length + 1;

        const taskItem = {
            id: taskId,
            title: data.title,
            tab: data.categoryId.toLocaleLowerCase(),
            completed: false,
            dueDate: date,
        }

        try {
            setLoading(true);
            router.refresh();
            todoList.onAddTaskItem(taskItem);
            toast({
                title: "Todo List: Task Added.",
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

    const DatePicker: React.FC<{ date: Date | undefined, setDate: React.Dispatch<React.SetStateAction<Date | undefined>> }> = ({ date, setDate }) => {
        return (
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        );
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="default">
                    Add Task
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>Fill out the form below to add a new task.</DialogDescription>
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

                            <FormItem>
                                <FormLabel>Due Date</FormLabel>
                                <FormControl>
                                    <div>
                                        <DatePicker date={date} setDate={setDate} />
                                    </div>
                                </FormControl>
                            </FormItem>

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
                                Add Task
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog >
    )
}