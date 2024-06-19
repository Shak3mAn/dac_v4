"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Fuel, FilePenLine } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { toast } from "@/components/ui/use-toast";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  batteryConditionLevel,
  brakeClutchFluidLevel,
  coolantLevel,
  engineOilLevel,
  fuelLevel,
  powerSteeringLevel,
} from "@/lib/data/actions/data-action";
import { GeneralTooltip } from "@/components/misc/general-tooltip";
import { SignatureContextProvider } from "@/lib/providers/signature-provider";
import SignatureModal from "@/components/misc/signature-modal/signature-modal";

const formSchema = z.object({
  mileage: z.string().min(1),
  fuelLevelId: z.string().min(1),
  remarks: z.string().min(1).optional(),
  additionalNotes: z.string().min(1).optional(),
  brakePadStatus: z.string().min(1),
  fluids: z.string().min(1),
  engineOilLevelId: z.string().min(1),
  coolantLevelId: z.string().min(1),
  brakeClutchFluidLevelId: z.string().min(1),
  powerSteeringLevelId: z.string().min(1),
  batteryConditionId: z.string().min(1),
  isOilWasteLeaks: z.boolean().default(false),
  isJack: z.boolean().default(false).optional(),
  isVehicleCharger: z.boolean().default(false).optional(),
  isWhlSpanner: z.boolean().default(false).optional(),
  isDoorMirrors: z.boolean().default(false).optional(),
  isSunvisor: z.boolean().default(false).optional(),
  isSteeringCover: z.boolean().default(false).optional(),
  isSeatCover: z.boolean().default(false).optional(),
  isCDChanger: z.boolean().default(false).optional(),
  isMatsCarpets: z.boolean().default(false).optional(),
  isCigaretteLighter: z.boolean().default(false).optional(),
  isRadio: z.boolean().default(false).optional(),
  isWheelCaps: z.boolean().default(false).optional(),
  isSpareWheel: z.boolean().default(false).optional(),
  isPunctureKit: z.boolean().default(false).optional(),
  isTriangle: z.boolean().default(false).optional(),
  isRimLock: z.boolean().default(false).optional(),
  isSpecialWhlNut: z.boolean().default(false).optional(),
  isBodyCover: z.boolean().default(false).optional(),
  isDocuments: z.boolean().default(false).optional(),
  isAirFreshner: z.boolean().default(false).optional(),
});

type ChecklistFormValues = z.infer<typeof formSchema>;

interface ChecklistFormProps {}

export const CheckListForm: React.FC<ChecklistFormProps> = () => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const defaultValues = {
    mileage: "",
    fuelLevelId: "",
    remarks: "",
    additionalNotes: "",
    brakePadStatus: "",
    fluids: "",
    engineOilLevelId: "",
    coolantLevelId: "",
    brakeClutchFluidLevelId: "",
    powerSteeringLevelId: "",
    batteryConditionId: "",
    isOilWasteLeaks: false,
    isJack: false,
    isVehicleCharger: false,
    isWhlSpanner: false,
    isDoorMirrors: false,
    isSunvisor: false,
    isSteeringCover: false,
    isSeatCover: false,
    isCDChanger: false,
    isMatsCarpets: false,
    isCigaretteLighter: false,
    isRadio: false,
    isWheelCaps: false,
    isSpareWheel: false,
    isPunctureKit: false,
    isTriangle: false,
    isRimLock: false,
    isSpecialWhlNut: false,
    isBodyCover: false,
    isDocuments: false,
    isAirFreshner: false,
  };

  const form = useForm<ChecklistFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = () => {
    console.log("On Submit");
  };

  return (
    <>
      <div className="flex flex-row items-center space-x-4 pb-1">
        <span className="text-primary text-sm tracking-normal capitalize font-bold mb-1">
          Information
        </span>
        <div className="w-full">
          <Separator orientation="horizontal" className="h-[0.5px]" />
        </div>
      </div>
      <div className="px-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="mileage"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium">Mileage</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-primary/5"
                        disabled={loading}
                        placeholder="Mileage..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fuelLevelId"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium text-nowrap">
                      Fuel Level
                    </FormLabel>
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
                            placeholder="Select a level..."
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {fuelLevel.map((level) => (
                          <SelectItem key={level.id} value={level.name}>
                            {level.name}
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
                name="remarks"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium">Remarks</FormLabel>
                    <FormControl>
                      <Textarea
                        className="bg-primary/5"
                        disabled={loading}
                        placeholder="Remarks..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="additionalNotes"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium text-nowrap">
                      Additional Notes
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="bg-primary/5"
                        disabled={loading}
                        placeholder="Notes..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-row items-center space-x-4 pt-8 pb-3 -mx-2">
              <div className="flex items-center flex-row space-x-1">
                <span className="text-primary text-sm tracking-normal text-nowrap capitalize font-bold mb-1">
                  Checklist
                </span>
                <div className="-mt-3">
                  <GeneralTooltip label="Type 1">
                    <div className=" rounded-full bg-green-900 bg-opacity-75 p-1" />
                  </GeneralTooltip>
                </div>
              </div>
              <div className="w-full">
                <Separator orientation="horizontal" className="h-[0.5px]" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="brakePadStatus"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium text-nowrap">
                      Brake Pad Status
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="bg-primary/5"
                        disabled={loading}
                        placeholder="Status..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fluids"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium text-nowrap">
                      Fluids
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="bg-primary/5"
                        disabled={loading}
                        placeholder="Fluids..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="engineOilLevelId"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium text-nowrap">
                      Engine Oil Level
                    </FormLabel>
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
                            placeholder="Select a level..."
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {engineOilLevel.map((level) => (
                          <SelectItem key={level.id} value={level.name}>
                            {level.name}
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
                name="coolantLevelId"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium text-nowrap">
                      Coolant Level
                    </FormLabel>
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
                            placeholder="Select a level..."
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {coolantLevel.map((level) => (
                          <SelectItem key={level.id} value={level.name}>
                            {level.name}
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
                name="brakeClutchFluidLevelId"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium text-nowrap">
                      Brake/Clutch Fluid Level
                    </FormLabel>
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
                            placeholder="Select a level..."
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {brakeClutchFluidLevel.map((level) => (
                          <SelectItem key={level.id} value={level.name}>
                            {level.name}
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
                name="powerSteeringLevelId"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium text-nowrap">
                      ATF Level *
                    </FormLabel>
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
                            placeholder="Select a level..."
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {powerSteeringLevel.map((level) => (
                          <SelectItem key={level.id} value={level.name}>
                            {level.name}
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
                name="batteryConditionId"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="font-medium text-nowrap">
                      Battery Condition
                    </FormLabel>
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
                            placeholder="Select a condition..."
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {batteryConditionLevel.map((level) => (
                          <SelectItem key={level.id} value={level.name}>
                            {level.name}
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
                name="isOilWasteLeaks"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className="mt-2"
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm">Oil/Waste Leaks</FormLabel>
                      <FormDescription className="text-xs">
                        Are there any oil or waste leaks.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-row items-center space-x-4 pt-8 pb-1.5 -mx-2">
              {" "}
              <div className="flex items-center flex-row space-x-1">
                <span className="text-primary text-sm tracking-normal text-nowrap capitalize font-bold mb-1">
                  Checklist
                </span>
                <div className="-mt-3">
                  <GeneralTooltip label="Type 2">
                    <div className="rounded-full bg-yellow-600 bg-opacity-75 p-1" />
                  </GeneralTooltip>
                </div>
              </div>
              <div className="w-full">
                <Separator orientation="horizontal" className="h-[0.5px]" />
              </div>
            </div>

            <div className="grid grid-cols-3 -mt-2 gap-y-1 gap-x-4">
              <FormField
                control={form.control}
                name="isJack"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm">Jack</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isVehicleCharger"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-nowrap">
                        EV Charger
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isWhlSpanner"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-nowrap">
                        Wheel Spanner
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isDoorMirrors"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-nowrap">
                        Door Mirrors
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isSunvisor"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-nowrap">
                        Sun Visor
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isSteeringCover"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-nowrap">
                        Steering Cover
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isSeatCover"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-nowrap">
                        Seat Cover
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isCDChanger"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-nowrap">
                        CD Changer
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isMatsCarpets"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm">Mat/Carpets</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isCigaretteLighter"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm">
                        Cigarette Lighter
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isRadio"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm">Radio</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isWheelCaps"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-nowrap">
                        Wheel Caps
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isSpareWheel"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-nowrap">
                        Spare Wheel
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isPunctureKit"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-nowrap">
                        Puncture Kit
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isTriangle"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm">Triangle</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isRimLock"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-nowrap">
                        Rim Lock
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isSpecialWhlNut"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-nowrap">
                        Lock Nut
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isBodyCover"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-nowrap">
                        Body Cover
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isDocuments"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm">Documents</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isAirFreshner"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0  border-none pt-6 pl-2">
                    <FormControl>
                      <Checkbox
                        className=""
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm">Air Freshener</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-row items-center space-x-4 pt-8 pb-4 -mx-2">
              <span className="text-primary text-sm tracking-normal text-nowrap capitalize font-bold mb-1">
                Signature
              </span>
              <div className="w-full">
                <Separator orientation="horizontal" className="h-[0.5px]" />
              </div>
            </div>

            <div className="flex flex-col max-w-[300px] gap-y-2 px-2 gap-x-4">
              <SignatureContextProvider>
                {/* Signature Dialog */}
                <SignatureModal />
              </SignatureContextProvider>
            </div>

            <div className="flex w-full justify-end items-center pt-4 pr-4 pb-2">
              <Button
                variant={"default"}
                size={"default"}
                disabled={loading}
                className="ml-auto"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};
