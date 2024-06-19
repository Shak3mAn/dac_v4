"use client";

import React, { useEffect, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useJobCardServices } from "@/store/jobs/use-jc";

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


import { JCServiceDetail } from "@/lib/types/types";
import { jc_card_view_eg } from "@/lib/data/general/jc-card-view";

const formSchema = z.object({
    serviceId: z.string().min(1, { message: "Please select a service" }),
    authorizationId: z.string().min(1, { message: "Please select a authorization" }),
});

type AddAuthorizationFormValues = z.infer<typeof formSchema>;

interface AddAuthorizationFormProp { }

export const ServiceAuthorizeModal: React.FC<AddAuthorizationFormProp> = () => {
  const authorizationList = [
    { id: "Authorized", category: "Authorized" },
    { id: "Pending", category: "Pending" },
    { id: "Deferred", category: "Deferred" },
    { id: "Declined", category: "Declined" },
];

const router = useRouter();
const params = useParams();
const { toast } = useToast();

const jobServicesDetails = useJobCardServices();
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

const form = useForm<AddAuthorizationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        serviceId: "",
        authorizationId: "",
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

const handleAuthorizationSelect = (value: string) => {
    if (serviceItem.id === "") {
        toast({
            title: "Uh oh! Something went wrong.",
            description: "Please select a service first.",
        });
        return;
    }
    setServiceItem((prev) => ({
        ...prev,
        authorization: value,
    }));
};

const onSubmit = async (data: AddAuthorizationFormValues) => {
    try {
        setLoading(true)
        jobServicesDetails.onUpdateServiceItem(serviceItem.id, serviceItem);
        router.refresh();
        toast({
            title: "Service: Authorization changed.",
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
    <>
        <Dialog>
            <DialogTrigger asChild>
                    <Button variant={"default"} className="w-full">
                        <div className="flex items-center">+{" "}Authorize</div>
                    </Button>
               </DialogTrigger>
            <DialogContent className="px-6 pt-6 w-[800px] max-w-[1000px]">
                <DialogHeader className="">
                    <DialogTitle>Authorization</DialogTitle>
                    <DialogDescription>
                        Edit the authorization of various services.
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
                                        Authorization
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
                                    name="authorizationId"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Authorize</FormLabel>
                                            <Select
                                                disabled={loading || serviceItem.id === ""}
                                                onValueChange={(value) => {
                                                    field.onChange(value);
                                                    handleAuthorizationSelect(value);
                                                }}
                                                value={field.value}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Authorization" defaultValue={field.value} />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {authorizationList.map((category) => (
                                                        <SelectItem value={category.id} key={category.id}>
                                                            {category.category}
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
                                                <span className="text-primary text-sm font-semibold tracking-tight">Authorization:</span>
                                                <div>
                                                    {serviceItem.authorization === "Authorized" && (
                                                        <div className="flex items-center flex-row space-x-1.5 ml-2 ">
                                                            <div className='flex items-center justify-center bg-green-600 bg-opacity-35 px-4 py-1 rounded-md hover:scale-125 cursor-pointer transition-all ease-in-out duration-200'>
                                                                <span className='text-green-900 text-xs tracking-tight font-semibold'>
                                                                    Authorized
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {serviceItem.authorization === "Pending" && (
                                                        <div className="flex items-center flex-row space-x-1.5 ml-2">
                                                            <div className='flex items-center justify-center bg-gray-400 bg-opacity-35 px-4 py-1 rounded-md hover:scale-125 cursor-pointer transition-all ease-in-out duration-200'>
                                                                <span className='text-gray-900 text-xs tracking-tight font-semibold'>
                                                                    Pending
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {serviceItem.authorization === "Deferred" && (
                                                        <div className="flex items-center flex-row space-x-1.5 ml-2">
                                                            <div className='flex items-center justify-center bg-amber-600 bg-opacity-35 px-4 py-1 rounded-md hover:scale-125 cursor-pointer transition-all ease-in-out duration-200'>
                                                                <span className='text-amber-900 text-xs tracking-tight font-semibold'>
                                                                    Deferred
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {serviceItem.authorization === "Declined" && (
                                                        <div className="flex items-center flex-row space-x-1.5 ml-2">
                                                            <div className='flex items-center justify-center bg-red-400 bg-opacity-35 px-4 py-1 rounded-md hover:scale-125 cursor-pointer transition-all ease-in-out duration-200'>
                                                                <span className='text-red-900 text-xs tracking-tight font-semibold'>
                                                                    Declined
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )}
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
                                <Button variant="outline" className="px-4 py-2 text-sm font-medium rounded-md">
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button disabled={loading || isSubmitting} type="submit" variant="default">
                                Edit
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    </>
);
}