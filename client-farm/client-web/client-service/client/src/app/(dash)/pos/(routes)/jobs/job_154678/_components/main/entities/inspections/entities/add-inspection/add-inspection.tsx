"use client";

import { PlusCircle } from "lucide-react";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import React, { useState, useMemo, useEffect, useCallback } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useJobCard } from "@/store/jobs/use-jc";
import { useInspection } from "@/store/inventory/use-service";
import { useTechnician } from "@/store/users/use-technician";
import { InspectionSearch } from "./inspection-search";
import { AssessorSearch } from "./inspector-search";
import { useSidebarToggle } from "@/store/use-sidebar-toggle";
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
    JobCardDetailsType,
    JCGeneralInspection,
} from "@/lib/types/types";
import { inspection_checklist_data } from "@/lib/data/inspection-checklist-data";
import { emptyInspectionItem, emptyJobCard } from "@/lib/utils/default-values";

const formSchema = z.object({
    name: z.string().min(1),
    inspector: z.string().min(1).optional(),
});

type AddInspectionFormValues = z.infer<typeof formSchema>;

type TabOption = "search" | "custom";

function generateUniqueInspectionId(inspectionList: JCGeneralInspection[]): string {
    const prefix = "CUSTINL";

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

    const isIdUnique = (id: string): boolean => {
        return !inspectionList?.some((inspection) => inspection.id === id);
    };

    let newInspectionId = generateId(prefix);
    while (!isIdUnique(newInspectionId)) {
        newInspectionId = generateId(prefix);
    }

    return newInspectionId;
}

export const AddInspection: React.FC = () => {
    const router = useRouter();
    const params = useParams();
    const { toast } = useToast();
    const [tab, setTab] = useState<TabOption>("search");
    const { isOpen } = useSidebarToggle();
    const currentDateTime = formatDateTime(new Date());
    const inspectionHook = useInspection();
    const technicianItem = useTechnician();
    const jobCardHook = useJobCard();

    const [jobCardItem, setJobCardItem] = useState<JobCardDetailsType>(
        emptyJobCard
    );
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const resetForm = useCallback(() => {
        setJobCardItem(emptyJobCard);
    }, []);

    useEffect(() => {
        resetForm();
    }, [resetForm]);

    const updateInspectionSearch = useCallback(() => {
        const tempInspection = inspectionHook.tempInspection;
        if (tempInspection) {
            setJobCardItem((prev) => ({
                ...prev,
                inspectionChecklist: prev.inspectionChecklist
                    ? prev.inspectionChecklist.map((item, index) =>
                        index === 0
                            ? {
                                ...item,
                            }
                            : item
                    )
                    : [],
            }));
        }
    }, [inspectionHook.tempInspection]);

    useEffect(() => {
        updateInspectionSearch();
    }, [inspectionHook.tempInspection, updateInspectionSearch]);

    const updateAssessorSearch = useCallback(() => {
        const tempTechnician = technicianItem.tempTechnician;
        if (tempTechnician) {
            setJobCardItem((prev) => ({
                ...prev,
                inspectionChecklist: prev.inspectionChecklist
                    ? prev.inspectionChecklist.map((item, index) =>
                        index === 0
                            ? {
                                ...item,
                                inspector: tempTechnician.fullName,
                            }
                            : item
                    )
                    : [],
            }));
        }
    }, [technicianItem.tempTechnician]);

    useEffect(() => {
        updateAssessorSearch();
    }, [technicianItem.tempTechnician, updateAssessorSearch]);

    const form = useForm<AddInspectionFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            inspector: "",
        },
    });

    const { isSubmitting } = form.formState;

    const onSubmit = useCallback(
        async (data: AddInspectionFormValues) => {
            setLoading(true);
            const newInspectionId = generateUniqueInspectionId(jobCardItem.inspectionChecklist ?? []);

            try {
                if (tab === "search") {
                    // Handle search logic
                    const newJobCardItem: JobCardDetailsType = {
                        ...jobCardItem,
                        inspectionChecklist: jobCardItem.inspectionChecklist?.map((item, index) =>
                            index === 0
                                ? {
                                    ...item,
                                } : item
                        )
                    }
                    jobCardHook.onAddJobCardItem(newJobCardItem);
                    toast({
                        title: "Inspection added successfully",
                        description: `Inspection ${newJobCardItem.inspectionChecklist?.map((item, index) => {
                            item.name
                        })} has been added to the job card.`,
                    });
                } else {
                    // Handle custom logic
                    const newJobCardItem: JobCardDetailsType = {
                        ...jobCardItem,
                        inspectionChecklist: jobCardItem.inspectionChecklist?.map((item, index) =>
                            index === 0
                                ? {
                                    ...item,
                                    id: newInspectionId,
                                    name: data.name,
                                    inspectionList: undefined
                                } : item
                        )
                    }
                    jobCardHook.onAddJobCardItem(newJobCardItem);
                    toast({
                        title: "Inspection added successfully",
                        description: `Inspection ${data.name} has been added to the job card.`,
                    });
                }

                setOpen(false);
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
        },
        [tab]
    );

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant={"outline"} className="h-auto py-1">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        <div className="flex items-center">Inspection</div>
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[600px]">
                    <DialogHeader>
                        <div className="flex space-x-2">
                            <div className="flex items-center">
                                <HiOutlineClipboardDocumentList className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col">
                                <DialogTitle>Inspection</DialogTitle>
                                <DialogDescription>
                                    Kindly fill out the form below to include an inspection item
                                    in the job card.
                                </DialogDescription>
                            </div>
                        </div>

                        <div className="flex gap-2 pt-2">
                            <Button
                                variant={tab === "search" ? "default" : "outline"}
                                onClick={() => setTab("search")}
                            >
                                Search
                            </Button>
                            <Button
                                variant={tab === "custom" ? "default" : "outline"}
                                onClick={() => setTab("custom")}
                            >
                                Custom
                            </Button>
                        </div>
                    </DialogHeader>

                    <div className="py-2 w-full">
                        <Separator orientation="horizontal" className="h-[0.5px]" />
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            {tab === "search" ? (
                                <div className="space-y-8">
                                    <InspectionSearch />
                                    <AssessorSearch />
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {/* Add custom form fields here */}
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
                                    <AssessorSearch />
                                </div>
                            )}
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
    );
};
