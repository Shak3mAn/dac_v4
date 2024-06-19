import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { ClipboardList, Pencil } from "lucide-react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { GeneralTooltip } from "@/components/misc/general-tooltip";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckListForm } from "./checklist-form/checklist-form";
import { PrinterSendJCForm } from "../modal/print-jc";
// TODO: Safety Feature Digital Signature.

export const CheckListSheet = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button disabled={loading} variant={"default"} size="default">
            <div className="flex items-center">Proceed</div>
          </Button>
        </SheetTrigger>
        <SheetContent
          overlayClassName="bg-transparent"
          className="md:max-w-full"
        >
          <SheetHeader>
            <div className="flex items-center w-full justify-between mt-2">
              <div className="flex space-x-2 items-center">
                <div className="h-7 w-7 rounded-full border items-center flex justify-center">
                  <ClipboardList className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <SheetTitle className="font-bold">Checklist</SheetTitle>
                  <SheetDescription className="-mt-1">
                    Pre-job card commencement checklist
                  </SheetDescription>
                </div>
              </div>

              <div className="flex space-x-4 pr-4">
                <Button variant="default" size="default">
                  Ignore
                </Button>
              </div>
            </div>
          </SheetHeader>
          <div className="mt-4 mb-4">
            <Separator className="h-[0.5px]" />
          </div>
          <div className="grid grid-cols-10">
            {/* Checklist & Additional Notes */}
            <div className="col-span-7 space-y-2 flex flex-col">
              <div className="flex flex-row items-center justify-between">
                <div className="flex justify-start items-start text-md font-bold tracking-tight text-nowrap">
                  Particulars
                </div>
              </div>
              <div className="w-full">
                <Separator orientation="horizontal" className="h-[0.5px]" />
              </div>
              <ScrollArea className="mt-1 w-full h-[80vh] item-center justify-center px-2 space-y-2 pb-6">
                <div className="flex flex-col w-full space-y-1.5">
                  <CheckListForm />
                </div>
              </ScrollArea>
            </div>
            {/* Summary */}
            <div className="flex w-full space-x-2 col-span-3">
              <div className="px-4 h-full">
                <Separator orientation="vertical" className="w-[0.5px]" />
              </div>
              <div className="space-y-2 w-full flex flex-col">
                <div className="flex justify-start items-start text-md font-bold tracking-tight text-nowrap">
                  Summary
                </div>
                <div className="w-full">
                  <Separator orientation="horizontal" className="h-[0.5px]" />
                </div>
                <ScrollArea className="flex flex-col space-y-2 w-full h-[80vh] items-center justify-center">
                  {/* Customer Details */}
                  <div className="flex flex-col w-full space-y-1.5">
                    <div className="flex flex-row items-center space-x-4 pb-1">
                      <span className="text-primary text-xs tracking-normal uppercase font-bold mb-1">
                        Customer
                      </span>
                      <div className="w-full">
                        <Separator
                          orientation="horizontal"
                          className="h-[0.5px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                        Name
                      </span>
                      <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        John Doe
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                        Phone No.
                      </span>
                      <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        +123 456 112 234
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                        Email
                      </span>
                      <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        like_that@gmail.com
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                        P.O.Box
                      </span>
                      <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        00100
                      </span>
                    </div>
                  </div>

                  <div className="w-full my-3">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                  </div>

                  {/* Vehicle Details */}
                  <div className="flex flex-col w-full space-y-1.5">
                    <div className="flex flex-row items-center space-x-4 pb-1">
                      <span className="text-primary text-xs tracking-normal uppercase font-bold mb-1">
                        Vehicle
                      </span>
                      <div className="w-full">
                        <Separator
                          orientation="horizontal"
                          className="h-[0.5px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                        Reg No.
                      </span>
                      <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        KZZ 112
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                        Make
                      </span>
                      <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        Honda
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                        Model
                      </span>
                      <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        CRV
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                        VIN
                      </span>
                      <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        QW1029LJF924B
                      </span>
                    </div>
                  </div>

                  <div className="w-full my-3">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                  </div>

                  {/* Metadata */}
                  <div className="flex flex-col w-full space-y-1.5">
                    <div className="flex flex-row items-center space-x-4 pb-1">
                      <span className="text-primary text-xs tracking-normal uppercase text-nowrap font-bold mb-1">
                        Service Info
                      </span>
                      <div className="w-full">
                        <Separator
                          orientation="horizontal"
                          className="h-[0.5px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                        Fuel Level
                      </span>
                      <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        1/2
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                        Mileage
                      </span>
                      <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        142102 Km
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex items-center flex-row space-x-1">
                        <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                          Checklist
                        </span>
                        <div className="-mt-2">
                          <GeneralTooltip label="Type 1">
                            <div className=" rounded-full bg-green-900 bg-opacity-75 p-1" />
                          </GeneralTooltip>
                        </div>
                      </div>
                      <div className="bg-green-600 bg-opacity-45 items-center flex px-2 py-1 rounded-lg">
                        <span className="text-white text-xs tracking-tight font-normal">
                          Complete
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex items-center flex-row space-x-1">
                        <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                          Checklist
                        </span>
                        <div className="-mt-2">
                          <GeneralTooltip label="Type 2">
                            <div className=" rounded-full bg-yellow-600 bg-opacity-75 p-1" />
                          </GeneralTooltip>
                        </div>
                      </div>
                      <div className="bg-red-700 bg-opacity-45 items-center flex px-2 py-1 rounded-lg">
                        <span className="text-white text-xs tracking-tight font-normal">
                          Not Complete
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                        Documents*
                      </span>
                      <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        Not Applicable
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                        Additional Notes
                      </span>
                      <span className="text-muted-foreground text-xs tracking-tight font-normal">
                        Not Applicable
                      </span>
                    </div>
                  </div>

                  <div className="w-full my-3">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                  </div>

                  {/* Signature */}
                  <div className="flex flex-col w-full space-y-1.5">
                    <div className="flex flex-row items-center space-x-4 pb-1">
                      <span className="text-primary text-xs tracking-normal uppercase text-nowrap font-bold mb-1">
                        Customer Signature
                      </span>
                      <div className="w-full">
                        <Separator
                          orientation="horizontal"
                          className="h-[0.5px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full my-3">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                  </div>
                  <div className="flex flex-col space-y-2 w-full">
                    <SheetClose asChild>
                      <Button
                        disabled={loading}
                        variant={"outline"}
                        size="default"
                      >
                        <div className="flex items-center">Back</div>
                      </Button>
                    </SheetClose>

                    {/* <Button
                      disabled={loading}
                      variant={"default"}
                      size="default"
                    >
                      <div className="flex items-center">Finish</div>
                    </Button> */}
                    <PrinterSendJCForm />
                  </div>
                  <div className="w-full my-3">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
