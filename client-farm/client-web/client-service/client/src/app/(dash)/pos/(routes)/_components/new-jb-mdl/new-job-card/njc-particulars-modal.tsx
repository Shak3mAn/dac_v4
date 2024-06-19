"use client";

import { Clipboard, Plus, UserPlus, ClipboardPlus } from "lucide-react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

import { toast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { booking_meta, vehicleDelivery } from "@/lib/data/meta/booking-meta";

const formSchema = z.object({
  customerDescription: z.string().min(1).optional(),
  bookingTypeId: z.string().min(1),
  vehicleDeliveryId: z.string().min(1),
  vehicleDeliveryPickUpAddress: z.string().min(1),
  vehicleDeliveryPickUpDate: z.string().min(1),
});

type NewJobCardParticularsValues = z.infer<typeof formSchema>;

interface NewJobCardParticularsProps {}

export const NewJobCardParticulars: React.FC<
  NewJobCardParticularsProps
> = ({}) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pickTow, setPickTow] = useState(false);

  const defaultValues = {
    customerDescription: "",
    bookingTypeId: "",
    vehicleDeliveryId: "",
    vehicleDeliveryPickUpAddress: "",
    vehicleDeliveryPickUpDate: "",
  };

  const form = useForm<NewJobCardParticularsValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = () => {
    console.log("On Submit");
  };

  useEffect(() => {
    setPickTow(false);
  }, []);

  const handleVehicleDeliveryChange = (delivery: string) => {
    if (delivery === "Drop Off" || delivery === " Drive-In") return;
    if (delivery === "Pick Up" || delivery === "Tow-In") {
      setPickTow(true);
    }
    return;
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button disabled={loading} type="submit">
            Continue
          </Button>
        </DialogTrigger>
        <DialogContent className="px-6 pt-6 w-[1025px] min-h-[700px] max-w-[1200px]">
          <DialogHeader className="pt-4 flex flex-row items-center justify-between">
            <div className="flex space-x-2">
              <div className="h-7 w-7 rounded-full border items-center flex justify-center">
                <Clipboard className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <DialogTitle>Job Card</DialogTitle>
                <DialogDescription>Job Card Particulars</DialogDescription>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <Button variant={"outline"} size="icon">
                <div className="flex items-center">
                  <UserPlus className="h-4 w-4" />
                </div>
              </Button>
              <Button variant={"default"} size="default">
                <div className="flex items-center">
                  <Plus className="h-4 w-4 mr-2" /> Temporary
                </div>
              </Button>
            </div>
          </DialogHeader>
          <div className="mt-0 mb-4">
            <Separator className="h-[0.5px]" />
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
              <div className="grid grid-cols-2 pb-2">
                {/* Customer Description */}
                <div className="flex flex-col -mt-3 space">
                  <div className="flex flex-row items-center justify-between space-x-4">
                    <div className="flex justify-start items-start text-sm font-semibold tracking-tight text-nowrap">
                      Description
                    </div>
                    <div className="w-full">
                      <Separator
                        orientation="horizontal"
                        className="h-[0.5px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 pl-2">
                    <FormField
                      control={form.control}
                      name="customerDescription"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel className="font-medium">
                            Customer Description
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              className="bg-primary/5"
                              disabled={loading}
                              placeholder="Description..."
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Vehicle Particulars */}
                <div className="pl-2 flex flex-row space-x-2">
                  <div className="px-4 h-full">
                    <Separator orientation="vertical" className="w-[0.5px]" />
                  </div>

                  <div className="flex flex-col w-full -mt-3 space-y-2">
                    <div className="flex flex-row items-center justify-between space-x-4">
                      <div className="flex justify-start items-start text-sm font-semibold tracking-tight text-nowrap">
                        Vehicle
                      </div>
                      <div className="w-full">
                        <Separator
                          orientation="horizontal"
                          className="h-[0.5px]"
                        />
                      </div>
                    </div>

                    <div className="pr-2 flex flex-col space-y-1">
                      <FormField
                        control={form.control}
                        name="bookingTypeId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Booking</FormLabel>
                            <Select
                              disabled={loading}
                              onValueChange={field.onChange}
                              value={field.value}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue
                                    defaultValue={field.value}
                                    placeholder="Booking..."
                                  />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {booking_meta.booking_methods.map((booking) => (
                                  <SelectItem
                                    key={booking.id}
                                    value={booking.id}
                                  >
                                    {booking.method}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="vehicleDeliveryId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Delivery</FormLabel>
                            <Select
                              disabled={loading}
                              onValueChange={field.onChange}
                              value={field.value}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue
                                    defaultValue={field.value}
                                    placeholder="Delivery..."
                                  />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {vehicleDelivery.map((delivery) => (
                                  <SelectItem
                                    key={delivery.id}
                                    value={delivery.id}
                                  >
                                    {delivery.method}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex py-4 w-full">
                      <Separator className="h-[0.5px]" />
                    </div>

                    <div className="flex flex-col space-y-2 w-full pr-2">
                      <DialogClose asChild>
                        <Button
                          disabled={loading}
                          variant={"outline"}
                          size={"default"}
                        >
                          <div className="flex items-start">Cancel</div>
                        </Button>
                      </DialogClose>
                      <Button
                        disabled={loading}
                        type="submit"
                        onClick={() => router.push(`/pos/jobs/new`)}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};
