"use client";

import { FaHardHat } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useJobCardServices } from "@/store/jobs/use-jc";
import { useSidebarToggle } from "@/store/use-sidebar-toggle"
import { useInventoryItem } from "@/store/inventory/use-inventory"

import { formatDateTime } from "@/lib/utils/date-time-format";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select";

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

import { useEditTechnicianModalToggle } from "@/store/jobs/use-jc-toggle"

import { JCServiceDetail } from "@/lib/types/types";
import { jc_card_view_eg } from "@/lib/data/general/jc-card-view";

const formSchema = z.object({
    serviceId: z.string().min(1, { message: "Please select a service" }),
    technicianId: z.string().min(1, { message: "Please select a technician" }),
});

type EditTechnicianFormValues = z.infer<typeof formSchema>;

interface EditTechnicianFormProp {
    // isOpen: boolean;
}

export const EditTechnicianPerService: React.FC<EditTechnicianFormProp> = () => {
    const technicianList = [
        {
            id: "Tech001",
            name: "Mike Smith",
        },
        {
            id: "Tech002",
            name: "Lisa Johnson",
        },
        {
            id: "Tech003",
            name: "Chris Brown",
        },
        {
            id: "Tech004",
            name: "Emily White",
        },
        {
            id: "Tech005",
            name: "David Wilson",
        },
        {
            id: "Tech006",
            name: "Jennifer Davis",
        },
    ];

    const router = useRouter();
    const params = useParams();
    const { toast } = useToast();

    const jobServicesDetails = useJobCardServices();
    const sideBarToggle = useSidebarToggle();
    // const editTechnicianModalToggle = useEditTechnicianModalToggle();

    const currentDateTime = formatDateTime(new Date());

    const emptyService = {
        authorization: "",
        category: "",
        cost: {
            amount: 0,
            currency: "",
        },
        description: "",
        id: "",
        name: "",
        quantity: 0,
        status: "",
        technicians: [
            {
                id: "",
                name: "",
            },
        ],
    };

    const [serviceItem, setServiceItem] = useState<JCServiceDetail>(emptyService);

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setServiceItem(emptyService);
    }, []);

    const form = useForm<EditTechnicianFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            serviceId: "",
            technicianId: "",
        },
    });

    const { isSubmitting } = form.formState;

    const handleServiceSelect = (value: string) => {
        const selectedService = jc_card_view_eg.jobCard.servicesDetails.find(
            (service) => service.id === value
        );
        if (selectedService) {
            setServiceItem(selectedService);
        }
    };

    const handleTechnicianSelect = (value: string) => {
        if (serviceItem.id === "") {
            toast({
                title: "Uh oh! Something went wrong.",
                description: "Please select a service first.",
            });
            return;
        }

        const selectedTechnician = technicianList.find(
            (technician) => technician.id === value
        );
        if (selectedTechnician) {
            setServiceItem((prev) => ({
                ...prev,
                technicians: [
                    {
                        id: selectedTechnician.id,
                        name: selectedTechnician.name,
                    }
                ]
            }));
        }
    };

    const onSubmit = async (data: EditTechnicianFormValues) => {
        try {
            setLoading(true)
            jobServicesDetails.onUpdateServiceItem(serviceItem.id, serviceItem);
            router.refresh();
            toast({
                title: "Service: Technician Added.",
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
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601_1280.jpg" alt="MJ23" />
                            <AvatarFallback>MJ</AvatarFallback>
                        </Avatar>
                    </Button>
                </DialogTrigger>
                <DialogContent className="px-6 pt-6 w-[800px] max-w-[1000px]">
                    <DialogHeader className="">
                        <DialogTitle>Technician</DialogTitle>
                        <DialogDescription>
                            Assign a Technician to a Specific Service.
                        </DialogDescription>

                        <div className="w-full">
                            <Separator orientation="horizontal" className="h-[1px]" />
                        </div>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid grid-cols-2 min-h-[270px]">
                                {/* Authorization & Service */}
                                <div className="flex flex-col space-y-4">
                                    <div className="flex flex-row items-center justify-between space-x-4">
                                        <div className="flex justify-start items-start text-sm font-semibold tracking-tight text-nowrap">
                                            Technician
                                        </div>
                                        <div className="w-full">
                                            <Separator orientation="horizontal" className="h-[0.5px]" />
                                        </div>
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="serviceId"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Service</FormLabel>
                                                <Select
                                                    disabled={loading}
                                                    onValueChange={(value) => {
                                                        field.onChange(value);
                                                        handleServiceSelect(value);
                                                    }}
                                                    value={field.value}
                                                    defaultValue={field.value}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Service" defaultValue={field.value} />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {jc_card_view_eg.jobCard.servicesDetails.map((service) => (
                                                            <SelectItem value={service.id} key={service.id}>
                                                                <div>{service.name}</div>
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="technicianId"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Technician</FormLabel>
                                                <Select
                                                    disabled={loading || serviceItem.id === ""}
                                                    onValueChange={(value) => {
                                                        field.onChange(value);
                                                        handleTechnicianSelect(value);
                                                    }}
                                                    value={field.value}
                                                    defaultValue={field.value}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Technician" defaultValue={field.value} />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {technicianList.map((technician) => (
                                                            <SelectItem value={technician.id} key={technician.id}>
                                                                {technician.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* Service overview */}
                                <div className="pl-2 flex flex-row space-x-2">
                                    <div className="px-4 h-full">
                                        <Separator orientation="vertical" className="w-[0.5px]" />
                                    </div>

                                    <div className="flex flex-col w-full space-y-4">
                                        <div className="flex flex-row items-center justify-between space-x-4">
                                            <div className="flex justify-start items-start text-sm font-semibold tracking-tight text-nowrap">
                                                Overview
                                            </div>
                                            <div className="w-full">
                                                <Separator orientation="horizontal" className="h-[0.5px]" />
                                            </div>
                                        </div>

                                        {serviceItem.id ? (
                                            <div className="flex flex-col w-full space-y-3">
                                                <div className="flex flex-col items-start justify-start space-y-[2px]">
                                                    <span className="text-primary text-sm font-semibold tracking-tight">Name:</span>
                                                    <span className="text-muted-foreground text-sm tracking-tight font-normal ml-2">
                                                        {serviceItem.name}
                                                    </span>
                                                </div>
                                                <div className="flex flex-col items-start justify-start space-y-[2px]">
                                                    <span className="text-primary text-sm font-semibold tracking-tight">Category:</span>
                                                    <span className="text-muted-foreground text-sm tracking-tight font-normal  ml-2">
                                                        {serviceItem.category}
                                                    </span>
                                                </div>
                                                <div className="flex flex-col items-start justify-start space-y-[2px]">
                                                    <span className="text-primary text-sm font-semibold tracking-tight">Description:</span>
                                                    <span className="text-muted-foreground text-sm tracking-tight font-normal  ml-2">
                                                        {serviceItem.description}
                                                    </span>
                                                </div>
                                                <div className="flex flex-col items-start justify-start space-y-[2px]">
                                                    <span className="text-primary text-sm font-semibold tracking-tight">Technician:</span>
                                                    <div className="flex flex-col items-start justify-start space-y-[4px] ml-2">
                                                        {serviceItem.technicians?.map((tech) => (
                                                            <div
                                                                key={tech.id}
                                                                className="text-primary text-sm tracking-tight font-normal"
                                                            >
                                                                - {tech.name}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="bg-accent text-muted-foreground text-sm font-medium tracking-tight flex items-center justify-center w-full p-4 py-8 rounded-md">
                                                Please select a service.
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <DialogFooter>
                                <DialogClose>
                                    <Button
                                        variant="outline"
                                        className="px-4 py-2 text-sm font-medium rounded-md"
                                    >
                                        Cancel
                                    </Button>
                                </DialogClose>
                                <Button disabled={loading || isSubmitting} type="submit" variant="default">
                                    Add
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    )
}