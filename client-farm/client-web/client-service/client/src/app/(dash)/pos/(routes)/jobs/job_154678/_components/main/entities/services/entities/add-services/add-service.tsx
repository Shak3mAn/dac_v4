"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Search } from 'lucide-react';
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";


import { useJobCardServices, useJobCard } from "@/store/jobs/use-jc"
import { JCServiceDetail } from "@/lib/types/types";
import { useSidebarToggle } from "@/store/use-sidebar-toggle"
import { useGeneralSrvCat } from "@/store/inventory/use-service"

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { formatDateTime } from "@/lib/utils/date-time-format";

import { Separator } from '@/components/ui/separator';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
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
import { GeneralTooltip } from "@/components/misc/general-tooltip";
import { SearchCategory } from "./search-category"

import { GeneralServiceCategoryType, GeneralServiceItem } from "@/lib/types/types"
import { general_services } from "@/lib/data/general-services"

const formSchema = z.object({
    serviceId: z.string().min(1).optional(),
    // serviceSearch: z.string().min(1, { message: "Please enter a valid service" }),
});

type AddServiceFormValues = z.infer<typeof formSchema>

interface AddServiceFormProps { }

export const AddService: React.FC<AddServiceFormProps> = () => {
    const router = useRouter();

    const jcServices = useJobCardServices();
    const generalSrvCat = useGeneralSrvCat();
    // const selectedService = jcServices.tempServices;
    const { toast } = useToast()

    const sideBarToggle = useSidebarToggle();
    const currentDateTime = formatDateTime(new Date());

    const emptyService = {
        id: "",
        name: "",
        description: "",
        price: 0,
        duration: "",
        laborPrice: 0,
        vat_tax: 0,
    };

    const emptyCatalogue = {
        catId: "",
        category: "",
        services: [
            {
                id: "",
                name: "",
                description: "",
                price: 0,
                duration: "",
                laborPrice: 0,
                vat_tax: 0,
            }
        ]
    }

    const [serviceItem, setServiceItem] = useState<GeneralServiceItem>(emptyService);
    const [categoryItem, setCategoryItem] = useState<GeneralServiceCategoryType>(emptyCatalogue);

    const [loading, setLoading] = useState(false);

    useLayoutEffect(() => {
        setServiceItem(emptyService)
    }, []);

    useEffect(() => {
        if (generalSrvCat.tempGeneralSrvCat) {
            setCategoryItem(generalSrvCat.tempGeneralSrvCat)
        }
        // console.log("The TempGeneraSrvCat:", categoryItem)
    }, [generalSrvCat.tempGeneralSrvCat])

    const form = useForm<AddServiceFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            serviceId: "",
            // serviceSearch: "",
        }
    })

    const { isSubmitting } = form.formState;

    const handleServiceSelect = (value: string) => {
        const selectedService = categoryItem.services.find(
            (service) => service.id === value
        );
        if (selectedService) {
            setServiceItem(selectedService);
        }
    }

    const onSubmit = async (values: AddServiceFormValues) => {
        // if (!serviceItem || serviceItem.id === "") return;
        try {
            setLoading(true);
            jcServices.onAddJobCardServiceItem(serviceItem);
            toast({
                title: "Service: Service Added.",
                description: `${currentDateTime}`,
            })
            generalSrvCat.onDeleteTempGeneralSrvCatItem();
            form.reset();
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    {sideBarToggle.isOpen ? (
                        <>
                            <Button
                                variant={"default"}
                                size={"icon"}
                            >
                                <GeneralTooltip label="Service">
                                    <div className='flex items-center'>
                                        <Search className='h-4 w-4' />
                                    </div>
                                </GeneralTooltip>
                            </Button>
                        </>
                    )
                        : (
                            <Button
                                variant="default"
                                size="default"
                                className=''
                            >
                                <div className='flex items-center'>
                                    <Search className='h-4 w-4 mr-2' />
                                </div>
                                <div>
                                    Service
                                </div>
                            </Button>
                        )}
                </DialogTrigger>
                <DialogContent className='sm: max-w-[600px]'>
                    <DialogHeader>
                        <DialogTitle>Services</DialogTitle>
                        <DialogDescription>
                            Utilize the categories to efficiently search for services.
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <SearchCategory />

                            <FormField
                                control={form.control}
                                name="serviceId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Service</FormLabel>
                                        <Select
                                            disabled={loading || categoryItem.catId === ""}
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
                                                {generalSrvCat.tempGeneralSrvCat?.services.map((service) => (
                                                    <SelectItem value={service.id} key={service.id}>
                                                        <div>{service.name}</div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />

                            {/* Secondary Service Search */}
                            <div className='py-2 w-full'>
                                <Separator orientation="horizontal" className="h-[0.5px]" />
                            </div>

                            <div className="grid gap-2">
                                <Input type="text" placeholder="Enter search query" />
                                <Button variant="outline">Search</Button>
                            </div>


                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline" className="mr-auto">
                                        Close
                                    </Button>
                                </DialogClose>
                                <Button disabled={loading || isSubmitting} type="submit" variant="default">
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