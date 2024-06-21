"use client";

import React, { useEffect, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useInventoryItem } from "@/store/inventory/use-inventory";
import { useServiceOption } from "@/store/inventory/use-service"
import { useAddPartModalToggle, useAddPartTab } from "@/store/general/use-modal-toggle"

import { formatDateTime } from "@/lib/utils/date-time-format";

import { Button } from "@/components/ui/button";
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

import {
    PartCategorySearch,
    PartNameSearch,
    PartVehiclModelSearch
} from "./";

import {
    InventoryItem,
    JCServiceDetail,
    JobCardDetailsType,
    ServiceOption,
    SrvPartIncluded
} from "@/lib/types/types";

import {
    emptyServiceItem,
} from "@/lib/utils/default-values";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    quantity: z.coerce.number().min(1),
    discountId: z.string().min(1).optional(),
});

type AddInvtPartFormValues = z.infer<typeof formSchema>;

interface AddInvtPartFormProp { }

const discountList = [
    { id: "1A", category: "0%", value: "0" },
    { id: "2A", category: "5%", value: "5" },
    { id: "2B", category: "10%", value: "10" },
    { id: "3C", category: "15%", value: "15" },
    { id: "4D", category: "20%", value: "20" },
    { id: "5E", category: "25%", value: "25" },
    { id: "6F", category: "30%", value: "30" },
    { id: "7G", category: "35%", value: "35" },
];

export const InventorySearchTab: React.FC<AddInvtPartFormProp> = () => {
    const router = useRouter();
    const params = useParams();
    const { toast } = useToast();
    const serviceOption = useServiceOption();
    const invtItem = useInventoryItem();
    const addPartTab = useAddPartTab();
    const addPartModalToggle = useAddPartModalToggle();
    const currentDateTime = formatDateTime(new Date());

    const [serviceItem, setServiceItem] = useState<ServiceOption>(emptyServiceItem);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        resetForm();
    }, []);

    useEffect(() => {
        updatePartSearch();
    }, [invtItem.tempInventory]);

    const updatePartSearch = () => {
        if (invtItem.tempInventory) {
            setServiceItem((prev) => ({
                ...prev,
                serviceItems: prev.serviceItems.map((item, index) =>
                    index === 0
                        ? {
                            ...item,
                            inventoryID: invtItem.tempInventory!.inventoryID,
                            itemPartID: invtItem.tempInventory!.itemPartID,
                            partName: invtItem.tempInventory!.itemName,
                            price: invtItem.tempInventory!.itemCostPerUnit.amount,
                            type: invtItem.tempInventory!.itemType,
                        }
                        : item
                ),
            }));
        }
    };

    const resetForm = () => {
        setServiceItem(emptyServiceItem);
    };

    const form = useForm<AddInvtPartFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            discountId: "",
            quantity: 0,
        },
    });

    const { isSubmitting } = form.formState;

    const calculateDiscount = (value: string, price: number) => {
        return ((Number(value) / 100) * price);
    };

    const handleDiscountSelect = (discountId: string) => {
        const discount = discountList.find(d => d.id === discountId)?.value;

        if (!discount) {
            toast({
                title: "Uh oh! Something went wrong.",
                description: "Please select a valid discount.",
            });
            return;
        }

        const discountCost = calculateDiscount(discount, serviceItem.serviceItems[0].price);

        setServiceItem((prev) => ({
            ...prev,
            discount: discountCost,
            serviceItems: prev.serviceItems.map((item, index) =>
                index === 0
                    ? {
                        ...item,
                        discount: discountCost,
                        discountApplicable: discountCost === 0 ? false : true,
                    }
                    : item
            ),
        }));
    };

    const onSubmit = async (data: AddInvtPartFormValues) => {
        const discount = discountList.find(d => d.id === data.discountId)?.value || "0";
        const discountCost = calculateDiscount(discount, serviceItem.serviceItems[0].price);

        const newServiceItem: ServiceOption = {
            ...serviceItem,
            discount: discountCost,
            serviceItems: serviceItem.serviceItems.map((item, index) =>
                index === 0
                    ? {
                        ...item,
                        quantity: data.quantity,
                        discount: discountCost,
                        discountApplicable: discountCost === 0 ? false : true,
                    }
                    : item
            ),
        };

        console.log("Service Item: ", newServiceItem);

        try {
            setLoading(true);
            serviceOption.onAddServiceItem(newServiceItem);
            toast({
                title: `Service: ${newServiceItem.serviceItems[0].partName} added.`,
                description: `${currentDateTime}`,
            });
            form.reset();
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
        } finally {
            setLoading(false);
            addPartTab.onInventory();
        }
    };

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-2 min-h-[270px]">
                        {/* Part Search */}
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-row items-center justify-between space-x-4">
                                <div className="flex justify-start items-start text-sm font-semibold tracking-tight text-nowrap">
                                    Search
                                </div>
                                <div className="w-full">
                                    <Separator orientation="horizontal" className="h-[0.5px]" />
                                </div>
                            </div>
                            <PartCategorySearch />
                            <PartNameSearch />
                            <PartVehiclModelSearch />
                        </div>

                        {/* Quantity & Discount Adjustment */}
                        <div className="pl-2 flex flex-row space-x-2">
                            <div className="px-4 h-full">
                                <Separator orientation="vertical" className="w-[0.5px]" />
                            </div>

                            <div className="flex flex-col w-full space-y-4">
                                <div className="flex flex-row items-center justify-between space-x-4">
                                    <div className="flex justify-start items-start text-sm font-semibold tracking-tight text-nowrap">
                                        Quantity & Discount
                                    </div>
                                    <div className="w-full">
                                        <Separator orientation="horizontal" className="h-[0.5px]" />
                                    </div>
                                </div>

                                <FormField
                                    control={form.control}
                                    name="quantity"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Quantity</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Quantity"
                                                    disabled={loading}
                                                    {...field}
                                                    type="number"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="discountId"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Discount</FormLabel>
                                            <Select
                                                disabled={loading}
                                                onValueChange={(value) => {
                                                    field.onChange(value);
                                                    handleDiscountSelect(value);
                                                }}
                                                value={field.value}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Discount" defaultValue={field.value} />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {discountList.map((discount) => (
                                                        <SelectItem value={discount.id} key={discount.id}>
                                                            <div>{discount.category}</div>
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                        <Button variant="outline" className="px-4 py-2 text-sm font-medium rounded-md"
                            onClick={() => addPartModalToggle.onClose()}
                        >
                            Cancel
                        </Button>
                        <Button disabled={loading || isSubmitting} type="submit" variant="default">
                            Edit
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    );
};


