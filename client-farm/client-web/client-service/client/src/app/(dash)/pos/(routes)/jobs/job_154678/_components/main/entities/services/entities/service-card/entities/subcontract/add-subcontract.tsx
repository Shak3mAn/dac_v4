"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Plus, Search, Store } from 'lucide-react';
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

import { useServiceOption } from "@/store/inventory/use-service"
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

import { SubcontractSearch } from "./subcontract-search"
import { useSidebarToggle } from "@/store/use-sidebar-toggle"
import { useSubcontractor } from "@/store/users/use-subcontractor"
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

const formSchema = z.object({
  serviceTotal: z.coerce.number().min(1).optional(),
  statusId: z.string().min(1),
  subcontractorNote: z.string().min(1).optional(),
  serviceNote: z.string().min(1).optional(),
});

type AddSubcontractorFormValues = z.infer<typeof formSchema>;

interface AddSubcontractorFormProp { }

const statusList = [
  { id: "1A", name: "InProgress", value: "In Progress" },
  { id: "2B", name: "Completed", value: "Completed" },
];
export const AddSubcontract: React.FC<AddSubcontractorFormProp> = () => {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();
  const serviceOption = useServiceOption();
  const subcontractItem = useSubcontractor();
  const { isOpen } = useSidebarToggle();
  const currentDateTime = formatDateTime(new Date());

  const [serviceItem, setServiceItem] = useState<ServiceOption>(emptyServiceItem);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const resetForm = () => {
    setServiceItem(emptyServiceItem);
  };

  useEffect(() => {
    resetForm();
  }, []);

  useEffect(() => {
    updateSubcontractorSearch();
  }, [subcontractItem.tempSubcontractor]);

  const updateSubcontractorSearch = () => {
    const tempSubcontract = subcontractItem.tempSubcontractor;

    if (tempSubcontract) {
      setServiceItem(prev => ({
        ...prev,
        subcontractor: prev.subcontractor
          ? prev.subcontractor.map((item, index) =>
            index === 0
              ? {
                ...item,
                subcontractorID: tempSubcontract.subcontractorID,
                address: tempSubcontract.address,
                contactNumber: tempSubcontract.contactNumber,
                contactPerson: tempSubcontract.contactPerson,
                email: tempSubcontract.email,
                service: [
                  ...(item.service || []),
                  ...(tempSubcontract.servicesOffered?.map(service => ({
                    serviceID: service.serviceID,
                    serviceName: service.serviceName,
                    serviceCategory: service.serviceCategory,
                    description: service.description,
                    hourlyRate: service.hourlyRate,
                    availability: service.availability || '',
                    averageDeliveryTime: service.averageDeliveryTime || '',
                    serviceTotal: service.serviceTotal,
                    status: 'InProgress',
                  })) || [])
                ],
              }
              : item
          )
          : []
      }));
    }
  };

  const form = useForm<AddSubcontractorFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceTotal: undefined,
      statusId: "",
      subcontractorNote: undefined,
      serviceNote: undefined,
    }
  })

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: AddSubcontractorFormValues) => {
    const newServiceItem: ServiceOption = {
      ...serviceItem,
      subcontractor: serviceItem.subcontractor?.map((item, index) =>
        index === 0 ? {
          ...item,
          subcontractorNote: data?.subcontractorNote,
          service: item.service?.map(service => ({
            ...service,
            serviceTotal: data?.serviceTotal || service.serviceTotal,
            status: data.statusId || service.status,
            serviceNote: data?.serviceNote,
          }))
        } : item
      )
    };

    try {
      setLoading(true);
      serviceOption.onAddServiceItem(newServiceItem);
      toast({
        title: `Service: New Subcontract added.`,
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

  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          {isOpen ? (
            <Button variant={"outline"} size={"icon"}>
              <div className='flex items-center'>
                <Store className='h-4 w-4' />
              </div>
            </Button>
          ) : (
            <Button variant={"outline"} className="h-auto py-1">
              <div className="flex items-center">Subcontract</div>
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="px-6 pt-6 w-[800px] max-w-[1000px]">
          <DialogHeader>
            <DialogTitle>Add Subcontractor</DialogTitle>
            <DialogDescription>
              Please complete the form below to add a subcontractor to the current service.
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
                {/* Subcontractor */}
                <div className='flex flex-col space-y-4'>
                  <div className="flex flex-row items-center justify-between space-x-4 col-span-1">
                    <div className="flex justify-start items-start text-sm font-semibold tracking-tight text-nowrap">
                      Subcontractor
                    </div>
                    <div className="w-full">
                      <Separator orientation="horizontal" className="h-[0.5px]" />
                    </div>
                  </div>

                  <SubcontractSearch />

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

                {/* Notes */}
                <div className="pl-2 flex flex-row space-x-2">
                  <div className="px-4 h-full">
                    <Separator orientation="vertical" className="w-[0.5px]" />
                  </div>

                  <div className="flex flex-col w-full space-y-4">
                    <div className="flex flex-row items-center justify-between space-x-4">
                      <div className="flex justify-start items-start text-sm font-semibold tracking-tight text-nowrap">
                        Note
                      </div>
                      <div className="w-full">
                        <Separator orientation="horizontal" className="h-[0.5px]" />
                      </div>
                    </div>

                    <FormField
                      control={form.control}
                      name="subcontractorNote"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subcontractor Note</FormLabel>
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

                    <FormField
                      control={form.control}
                      name="serviceNote"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Note</FormLabel>
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
      </Dialog>
    </>
  )
}