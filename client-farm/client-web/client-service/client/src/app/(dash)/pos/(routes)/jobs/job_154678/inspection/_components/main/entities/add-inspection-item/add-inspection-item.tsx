"use client";

import { Plus, PlusCircle } from "lucide-react";
import React, { useState, useMemo, useEffect, useCallback } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useJobCard } from "@/store/jobs/use-jc";
import { formatDateTime } from "@/lib/utils/date-time-format";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectGroup,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    SelectLabel
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { GeneralTooltip } from "@/components/misc/general-tooltip";
import { Separator } from "@/components/ui/separator";

import {
    InspectionListType,
    InspectionItem,
    JobCardDetailsType,
    JCGeneralInspection,
} from "@/lib/types/types";
import {
    emptyJobCard,
    emptyInspectionItem,
    emptyInspectionList
} from "@/lib/utils/default-values";

const formSchema = z.object({
    inspectionItem: z.string().min(1),
    statusId: z.string().min(1).optional(),
});

const statusList = [
    { id: "1A", name: "InProgress", value: "In Progress" },
    { id: "2B", name: "Completed", value: "Completed" },
    { id: "3C", name: "Pending", value: "Pending" },
    {id: "4D", name: "Declined", value: "Declined"},
];

type AddInspectionItemFormValues = z.infer<typeof formSchema>




type Props = {}

function generateUniqueInspectionItemId(inspectionItem: InspectionItem): string {
    const prefix = "CUSTINIT";

    const padNumber = (num: number, size: number): string => {
        let s = num.toString();
        while (s.length < size) s = "0" + s;
        return s;
    };

    const generateId = (prefix: string): string => {
        const randomNumber = Math.floor(Math.random() * 9999) + 1;
        const paddedNumber = padNumber(randomNumber, 4);
        return `${prefix}${paddedNumber}`;
    };

    // Directly generate a unique ID without checking for uniqueness against a list
    const newInspectionItemId = generateId(prefix);

    return newInspectionItemId;
}

export const AddInspectionItem = (props: Props) => {
    const router = useRouter();
    const params = useParams();
    const { toast } = useToast();
    const currentDateTime = formatDateTime(new Date());
    const jobCardHook = useJobCard();

    const [jobCardItem, setJobCardItem] = useState<JobCardDetailsType>(
        emptyJobCard
    );
    const [isInspectionItem, setIsInspectionItem] = useState<InspectionItem>(
        {
            id: "",
            inspectionItem: "",
        }
    )
    const [isInspectionListItem, setIsInspectionListItem] = useState<InspectionListType>(
        emptyInspectionList,
    )

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const resetForm = useCallback(() => {
        setJobCardItem(emptyJobCard);
        setIsInspectionItem({
            id: "",
            inspectionItem: "",
        });
        setIsInspectionListItem(emptyInspectionList)
    }, []);

    useEffect(() => {
        resetForm();
    }, [resetForm]);

    const form = useForm<AddInspectionItemFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            inspectionItem: "",
            statusId: ""
        }
    })

    const { isSubmitting } = form.formState;

    const onSubmit = async (data: AddInspectionItemFormValues) => {
        setLoading(true);
        const newInspectionItemId = generateUniqueInspectionItemId(isInspectionItem)

        const newInspectionItem: InspectionItem = {
            id: newInspectionItemId,
            inspectionItem: data.inspectionItem,
            status: data.statusId
        }

        try {
            jobCardHook.onAddJobCardInspectItem(jobCardItem.jobCardID, isInspectionListItem.id, newInspectionItem)
            toast({
                title: "Inspection Item added successfully",
                description: `Inspection ${newInspectionItem.inspectionItem} has been added to the job card.`,
            });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
        } finally {
            form.reset();
            setLoading(false);
        }
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant={"default"}
                        size="default"
                    >
                        <div className="flex items-center">
                            <Plus className="h-4 w-4 mr-2" /> Inspection
                        </div>
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>Inspection Item</DialogTitle>
                        <DialogDescription>
                            Kindly fill out the form below to include an inspection item
                            in the job card.
                        </DialogDescription>
                    </DialogHeader>


                    <div className="py-2 w-full">
                        <Separator orientation="horizontal" className="h-[0.5px]" />
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="inspectionItem"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Inspector Item</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Inspector"
                                                disabled={loading}
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="statusId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Status</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select status" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {statusList.map((item) => (
                                                        <SelectItem key={item.id} value={item.id}>
                                                            {item.value}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline" className="mr-auto">
                                        Close
                                    </Button>
                                </DialogClose>
                                <Button
                                    disabled={loading || isSubmitting}
                                    type="submit"
                                    variant="default"
                                >
                                    Done
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    )
}