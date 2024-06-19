import { useState } from "react";
import { MoreVertical, ShoppingCart, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Printer, Send } from "lucide-react";

import { NJCServiceCard } from "./njc-services/services";

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
import { useServiceStore } from "@/store/service/use-service-store";
import { CheckListSheet } from "./check-list";

export const JobCardServicesSummary = () => {
  const [loading, setLoading] = useState(false);

  const {
    addToCart,
    clearCart,
    decrementQuantity,
    incrementQuantity,
    items,
    removeFromCart,
  } = useServiceStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="md:max-w-full">
        <SheetHeader>
          <div className="flex items-center w-full justify-between mt-2">
            <div className="flex space-x-2 items-center">
              <div className="h-7 w-7 rounded-full border items-center flex justify-center">
                <Wrench className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <SheetTitle className="font-bold">Services</SheetTitle>
                <SheetDescription className="-mt-1">
                  Summary of selected services for this job.
                </SheetDescription>
              </div>
            </div>

            <div className="flex space-x-4 pr-4">
              <Button variant="default" size="icon">
                <GeneralTooltip side="left" label="Print">
                  <Send className="h-4 w-4" />
                </GeneralTooltip>
              </Button>
              <Button variant="outline" size="icon">
                <GeneralTooltip side="bottom" label="More">
                  <MoreVertical className="h-4 w-4" />
                </GeneralTooltip>
              </Button>
            </div>
          </div>
        </SheetHeader>
        <div className="mt-4 mb-4">
          <Separator className="h-[0.5px]" />
        </div>
        <div className="grid grid-cols-10">
          {/* Services Selected Description*/}
          <div className="col-span-7 space-y-2 flex flex-col">
            <div className="flex flex-row items-center justify-between">
              <div className="flex justify-start items-start text-md font-bold tracking-tight text-nowrap">
                Services
              </div>
            </div>
            <div className="w-full">
              <Separator orientation="horizontal" className="h-[0.5px]" />
            </div>
            <ScrollArea className=" w-full h-[80vh]  items-center justify-center">
              <div className=" flex flex-col space-y-4 my-4 mr-1.5">
                <NJCServiceCard />
                <NJCServiceCard />
                <NJCServiceCard />
                <NJCServiceCard />
                <NJCServiceCard />
              </div>
            </ScrollArea>
            <div className="mt-2 mb-2">
              <Separator className="h-[0.5px]" />
            </div>
          </div>
          {/* Job Card Summary */}
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

              {/* Job Class */}
              <div className="flex w-full flex-col space-y-3">
                <div className="mt-2 flex w-full flex-col space-y-1.5">
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-primary text-xs font-semibold tracking-tight">
                      Job Card:
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                      #SRV00123A
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-primary text-xs font-semibold tracking-tight">
                      Writer:
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                      John Doe
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-primary text-xs font-semibold tracking-tight">
                      Created:
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                      21/03/2024 at 5:00 AM
                    </span>
                  </div>
                </div>

                <div className="w-full my-3">
                  <Separator orientation="horizontal" className="h-[0.5px]" />
                </div>

                {/* Meta Booking  */}
                <div className="flex flex-col w-full space-y-1.5">
                  <div className="flex flex-row items-center space-x-4 pb-1">
                    <span className="text-primary text-xs tracking-normal uppercase font-bold mb-1">
                      Booking
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
                      Type
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                      Walk-In
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                      Pick-Up*
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                      False
                    </span>
                  </div>
                </div>

                <div className="w-full my-3">
                  <Separator orientation="horizontal" className="h-[0.5px]" />
                </div>

                {/* Payments */}
                <div className="flex flex-col w-full space-y-1.5">
                  {/* Totals */}
                  <div className="flex flex-row items-center space-x-4 pb-1">
                    <span className="text-primary text-xs tracking-normal uppercase font-bold mb-1">
                      Totals
                    </span>
                    <div className="w-full">
                      <Separator
                        orientation="horizontal"
                        className="h-[0.5px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-muted-foreground font-semibold text-xs tracking-tight">
                      Parts
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                      $100.00
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-muted-foreground font-semibold text-xs tracking-tight">
                      Labor
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                      $60.00
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                      Service Discount
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                      $29.00
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                      Shop Supplies
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                      $0.00
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                      Special Fees*
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                      $9.00
                    </span>
                  </div>
                  <div className="pt-2 w-full">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-primary font-semibold text-xs tracking-tight text-nowrap">
                      Subtotal
                    </span>
                    <span className="text-primary text-xs tracking-tight font-medium">
                      $199.00
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                      Taxable*
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                      $129.00
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-muted-foreground font-semibold text-xs tracking-tight text-nowrap">
                      Non-Taxable
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                      $40.00
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-primary font-semibold text-xs tracking-tight text-nowrap">
                      Taxes
                    </span>
                    <span className="text-muted-foreground text-xs tracking-tight font-normal">
                      $19.00
                    </span>
                  </div>

                  <div className="pt-2 w-full">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-primary font-semibold text-xs tracking-tight text-nowrap">
                      Grand Total
                    </span>
                    <span className="text-primary text-xs tracking-tight font-medium">
                      $199.00
                    </span>
                  </div>

                  <div className="pt-2 pb-2 w-full">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                  </div>

                  <SheetClose asChild>
                    <Button
                      disabled={loading}
                      variant={"outline"}
                      size="default"
                    >
                      <div className="flex items-center">Cancel</div>
                    </Button>
                  </SheetClose>

                  {/* <Button disabled={loading} variant={"default"} size="default">
                    <div className="flex items-center">Proceed</div>
                  </Button> */}
                  <CheckListSheet />

                  <div className="pt-2 pb-2 w-full">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
