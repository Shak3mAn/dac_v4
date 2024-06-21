"use client";

import React, { useEffect, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useServiceOption } from "@/store/inventory/use-service"
import { useCustomInventoryItem } from "@/store/inventory/use-inventory"
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
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import {
  CustomSrvPart,
  ServiceOption,
  SrvPartIncluded
} from "@/lib/types/types";
import {
  emptyServiceItem,
  emptyCustomPartItem
} from "@/lib/utils/default-values";

const formSchema = z.object({
  partName: z.string().min(1, { message: "Part Name is required" }),
  price: z.coerce.number().min(1),
  quantity: z.coerce.number().min(1),
  typeId: z.string().min(1),
  discountId: z.string().min(1),
})

type AddCustomPartFormValues = z.infer<typeof formSchema>;

interface AddCustomPartFormProp { }


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

const typeList = [
  { id: "1A", name: "Part" },
  { id: "2B", name: "Consumable" }
]

interface GeneratedIds {
  customInventoryID: string;
  customItemPartID: string;
}

function generateUniqueId(existingIds: CustomSrvPart[]): GeneratedIds {
  const prefix = "CUSTINV";
  const partPrefix = "CUSTPRT";

  const padNumber = (num: number, size: number): string => {
    let s = num.toString();
    while (s.length < size) s = "0" + s;
    return s;
  };

  const generateId = (prefix: string): string => {
    const randomNumber = Math.floor(Math.random() * 9999) + 1; // Random number between 1 and 9999
    const paddedNumber = padNumber(randomNumber, 4);
    return prefix + paddedNumber;
  };

  const isIdUnique = (id: string, key: 'customInventoryID' | 'customItemPartID'): boolean => {
    return !existingIds.some(item => item[key] === id);
  };

  let newCustomInventoryID = generateId(prefix);
  while (!isIdUnique(newCustomInventoryID, 'customInventoryID')) {
    newCustomInventoryID = generateId(prefix);
  }

  let newCustomItemPartID = generateId(partPrefix);
  while (!isIdUnique(newCustomItemPartID, 'customItemPartID')) {
    newCustomItemPartID = generateId(partPrefix);
  }

  return {
    customInventoryID: newCustomInventoryID,
    customItemPartID: newCustomItemPartID
  };
}


export const CustomPartTab: React.FC<AddCustomPartFormProp> = () => {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();
  const serviceOption = useServiceOption();
  const addPartTab = useAddPartTab();
  const addPartModalToggle = useAddPartModalToggle();
  const customInventory = useCustomInventoryItem();
  const currentDateTime = formatDateTime(new Date());

  const [serviceItem, setServiceItem] = useState<ServiceOption>(emptyServiceItem);
  const [customPartItem, setCustomPartItem] = useState<CustomSrvPart>(emptyCustomPartItem);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    resetForm();
  }, []);

  const resetForm = () => {
    setServiceItem(emptyServiceItem);
    setCustomPartItem(emptyCustomPartItem)
  };

  const form = useForm<AddCustomPartFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      discountId: "",
      quantity: 0,
      partName: "",
      price: 0,
      typeId: ""
    },
  });

  const { isSubmitting } = form.formState;


  const calculateDiscount = (value: string, price: number) => {
    return (Number(value) / 100) * price;
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

    const discountCost = calculateDiscount(discount, serviceItem.price);

    setServiceItem(prev => ({
      ...prev,
      discount: discountCost,
      serviceItems: prev.serviceItems.map(item =>
        item.itemPartID
          ? {
            ...item,
            discount: discountCost,
            discountApplicable: discountCost === 0 ? false : true
          }
          : item
      ),
    }));

    setCustomPartItem(prev => ({
      ...prev,
      discount: discountCost,
      discountApplicable: discountCost === 0 ? false : true
    })) 
  }



  const onSubmit = async (data: AddCustomPartFormValues) => {
    const { customInventoryID, customItemPartID } = generateUniqueId(customInventory.customInventoryList);

    const discount = discountList.find(d => d.id === data.discountId)?.value || "0";
    const discountCost = calculateDiscount(discount, data.price);

    const newServiceItem = {
      ...serviceItem,
      discount: discountCost,
      serviceItems: serviceItem.serviceItems.map(item =>
        item.itemPartID
          ? {
            ...item,
            inventoryID: customInventoryID,
            itemPartID: customItemPartID,
            partName: data.partName,
            quantity: data.quantity,
            price: data.price,
            type: data.typeId,
            discount: discountCost,
            discountApplicable: discountCost === 0 ? false : true
          }
          : item
      )
    };

    const newCustomPartItem = {
      ...customPartItem,
      inventoryID: customInventoryID,
      itemPartID: customItemPartID,
      partName: data.partName,
      quantity: data.quantity,
      price: data.price,
      type: data.typeId,
      discount: discountCost,
      discountApplicable: discountCost === 0 ? false : true
    };

    console.log("Service Item: ", newCustomPartItem);
    console.log(" Services List: ", serviceOption.serviceList);
    console.log(" Custom Inventory Item: ", customInventory.customInventoryList);

    try {
      setLoading(true);
      serviceOption.onAddServiceItem(newServiceItem);
      customInventory.onAddCustomInventoryItem(newCustomPartItem);
      toast({
        title: `Service: New Part added to ${newCustomPartItem.partName}.`,
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
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2 min-h-[270px]">
            {/* Part Search */}
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row items-center justify-between space-x-4">
                <div className="flex justify-start items-start text-sm font-semibold tracking-tight text-nowrap">
                  Part Item
                </div>
                <div className="w-full">
                  <Separator orientation="horizontal" className="h-[0.5px]" />
                </div>
              </div>

              <FormField
                control={form.control}
                name="partName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
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
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Price"
                        disabled={loading}
                        {...field}
                        type="number"

                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Type & Discount */}
            <div className="pl-2 flex flex-row space-x-2">
              <div className="px-4 h-full">
                <Separator orientation="vertical" className="w-[0.5px]" />
              </div>

              <div className="flex flex-col w-full space-y-4">
                <div className="flex flex-row items-center justify-between space-x-4">
                  <div className="flex justify-start items-start text-sm font-semibold tracking-tight text-nowrap">
                    Type & Discount
                  </div>
                  <div className="w-full">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="typeId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type</FormLabel>
                      <Select
                        disabled={loading}
                        onValueChange={(value) => {
                          field.onChange(value);;
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
                          {typeList.map((type) => (
                            <SelectItem value={type.name} key={type.id}>
                              <div>
                                {type.name}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
  )
}