"use client";

import React, { useState, useEffect, useMemo } from "react";
import { MdOutlineEngineering } from "react-icons/md";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

import { useServiceOption } from "@/store/inventory/use-service"
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

import { TechnicianSearch } from "./technician-search"
import { useSidebarToggle } from "@/store/use-sidebar-toggle"
import { useTechnician } from "@/store/users/use-technician"
import { formatDateTime } from "@/lib/utils/date-time-format";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import { GeneralTooltip } from "@/components/misc/general-tooltip";
import { Textarea } from "@/components/ui/textarea";

import {
  ServiceOption,
} from "@/lib/types/types";

import {
  emptyServiceItem,
} from "@/lib/utils/default-values";
import { service_comp_data } from "@/lib/data/service-data-v2"

type Props = {

}

const formSchema = z.object({
  laborName: z.string().min(1),
  rate: z.coerce.number().min(1).optional(),
  serviceTotal: z.coerce.number().min(1).optional(),
  statusId: z.string().min(1),
  laborNote: z.string().min(1).optional(),
});

type AddLaborFormValues = z.infer<typeof formSchema>;

interface AddLaborFormProp { }

function generateUniqueLaborId(serviceOption: ServiceOption): string {
  const prefix = "LBR";

  const padNumber = (num: number, size: number): string => {
    let s = num.toString();
    while (s.length < size) s = "0" + s;
    return s;
  };

  const generateId = (prefix: string, serviceId: string): string => {
    const randomNumber = Math.floor(Math.random() * 9999) + 1; // Random number between 1 and 9999
    const paddedNumber = padNumber(randomNumber, 4);
    return `${prefix}${serviceId}${paddedNumber}`;
  };

  const isIdUnique = (id: string): boolean => {
    return !serviceOption.labor?.some(labor => labor.laborID === id);
  };

  let newLaborId = generateId(prefix, serviceOption.id);
  while (!isIdUnique(newLaborId)) {
    newLaborId = generateId(prefix, serviceOption.id);
  }

  return newLaborId;
}

const statusList = [
  { id: "1A", name: "InProgress", value: "In Progress" },
  { id: "2B", name: "Completed", value: "Completed" },
];

const rateTypeList = [
  { id: "1A", name: "Hourly" },
  { id: "2B", name: "Daily" },
  { id: "3C", name: "Weekly" },
  { id: "4D", name: "Monthly" },
];

export const AddLabor: React.FC<AddLaborFormProp> = () => {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();
  const serviceOption = useServiceOption();
  const technicianItem = useTechnician();
  const currentDateTime = formatDateTime(new Date());
  const { isOpen } = useSidebarToggle();

  const [serviceItem, setServiceItem] = useState<ServiceOption>(emptyServiceItem);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [rateType, setRateType] = useState("Hourly");

  const handleRateTypeChange = (value: string) => {
    setRateType(value);
  };

  useEffect(() => {
    resetForm();
  }, []);

  useEffect(() => {
    updateTechnicianSearch();
  }, [technicianItem.tempTechnician]);

  const updateTechnicianSearch = () => {
    const tempTechnician = technicianItem.tempTechnician;
    if (tempTechnician) {
      setServiceItem((prev) => ({
        ...prev,
        labor: prev.labor
          ? prev.labor.map((item, index) =>
            index === 0
              ? {
                ...item,
                technicians: [
                  ...(item.technicians ?? []), // Ensure technicians is an array
                  {
                    id: tempTechnician.technicianId,
                    name: tempTechnician.fullName,
                  },
                ],
              }
              : item
          )
          : [],
      }));
    }
  };

  const resetForm = () => {
    setServiceItem(emptyServiceItem);
    setRateType("Hourly");
  };

  const form = useForm<AddLaborFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rate: undefined,
      laborName: "",
      laborNote: "",
      serviceTotal: undefined,
      statusId: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: AddLaborFormValues) => {
    const newLaborId = generateUniqueLaborId(serviceItem);

    const newServiceItem: ServiceOption = {
      ...serviceItem,
      labor: serviceItem.labor?.map((item, index) =>
        index === 0
          ? {
            ...item,
            laborID: newLaborId,
            discount: 0,
            discountApplicable: false,
            laborName: data.laborName,
            status: data.statusId,
            hourlyRate: rateType === "Hourly" ? data?.rate : undefined,
            dailyRate: rateType === "Daily" ? data?.rate : undefined,
            monthlyRate: rateType === "Monthly" ? data?.rate : undefined,
            weeklyRate: rateType === "Weekly" ? data?.rate : undefined,
            laborNote: data?.laborNote,
            serviceTotal: data?.serviceTotal,
          }
          : item
      ),
    };

    try {
      setLoading(true);
      serviceOption.onAddServiceItem(newServiceItem);
      toast({
        title: `Service: New Labor Item added.`,
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
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          {isOpen ? (
            <Button variant={"outline"} size={"icon"}>
              <div className='flex items-center'>
                <MdOutlineEngineering className='h-4 w-4' />
              </div>
            </Button>
          ) : (
            <Button variant={"outline"} className="h-auto py-1">
              <div className="flex items-center">Labor</div>
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="px-6 pt-6 w-[800px] max-w-[1000px]">
          <DialogHeader>
            <DialogTitle>Add Labor</DialogTitle>
            <DialogDescription>
              Fill out the form below to add a labor item.
            </DialogDescription>

            <div className="w-full pt-2">
              <Separator orientation="horizontal" className="h-[1px]" />
            </div>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <div className="grid grid-cols-2 min-h-[270px]">
                {/* Name and Mains */}
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-row items-center justify-between space-x-4 col-span-1">
                    <div className="flex justify-start items-start text-sm font-semibold tracking-tight text-nowrap">
                      General
                    </div>
                    <div className="w-full">
                      <Separator orientation="horizontal" className="h-[0.5px]" />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="laborName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Labor"
                            disabled={loading}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <TechnicianSearch />

                  <div className="py-2 flex flex-row items-center justify-between space-x-4 col-span-1">
                    <div className="flex justify-start items-start text-sm font-semibold tracking-tight text-nowrap">
                      Rates | Price
                    </div>
                    <div className="w-full">
                      <Separator orientation="horizontal" className="h-[0.5px]" />
                    </div>
                  </div>

                  <div className="pb-2">
                    <Tabs defaultValue="rates">
                      <TabsList className="bg-primary/5 backdrop-blur-lg w-full rounded-lg grid grid-cols-2">
                        <TabsTrigger
                          value="rates"
                          className="data-[state=active]:shadow-sm items-start rounded-md font-medium"
                        >
                          Rates
                        </TabsTrigger>
                        <TabsTrigger
                          value="laborPrice"
                          className="data-[state=active]:shadow-sm items-start rounded-md font-medium"
                        >
                          Labor Price
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="rates">
                        {/* Rate */}
                        <div className="grid grid-cols-5 gap-4">
                          <div className="col-span-3 pt-1.5">
                            <FormField
                              control={form.control}
                              name="rate"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Rate</FormLabel>
                                  <FormControl>
                                    <Input
                                      {...field}
                                      type="number"
                                      placeholder="Enter rate"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="pt-1.5 col-span-2 flex-col flex space-y-3 justify-end">
                            <Label>
                              Type
                            </Label>
                            <Select
                              disabled={loading}
                              value={rateType}
                              onValueChange={handleRateTypeChange}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Rate Type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  {rateTypeList.map((type) => (
                                    <SelectItem key={type.id} value={type.name}>
                                      {type.name}
                                    </SelectItem>
                                  ))}
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>

                        </div>
                      </TabsContent>

                      <TabsContent value="laborPrice" >
                        {/* Labor Price */}
                        <div className="pt-1.5">
                          <FormField
                            control={form.control}
                            name="serviceTotal"
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
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>

                {/* Notes */}
                <div className="pl-2 flex flex-row space-x-2">
                  <div className="px-4 h-full">
                    <Separator orientation="vertical" className="w-[0.5px]" />
                  </div>

                  <div className="flex flex-col w-full space-y-4">
                    <div className="flex flex-row items-center justify-between space-x-4">
                      <div className="flex justify-start items-start text-sm font-semibold tracking-tight text-nowrap">
                        Status & Note*
                      </div>
                      <div className="w-full">
                        <Separator orientation="horizontal" className="h-[0.5px]" />
                      </div>
                    </div>

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

                    <FormField
                      control={form.control}
                      name="laborNote"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Note*</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Note"
                              disabled={loading}
                              {...field}
                              className="min-h-[150px]"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" className="px-4 py-2 text-sm font-medium rounded-md">
                    Cancel
                  </Button>
                </DialogClose>
                <Button disabled={loading || isSubmitting} type="submit" variant="default">
                  Done
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog >
    </>
  )
}

