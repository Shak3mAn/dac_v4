import React from "react";
import { Info, Pencil } from "lucide-react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { GeneralTooltip } from "@/components/misc/general-tooltip";
import VehicleCustomer from "./vehicle-table/vehicle-table";

type Props = {};

const CustomerDetails = (props: Props) => {
  const helpStyling =
    "z-10 cursor-pointer text-muted-foreground hover:bg-primary/5 hover:text-primary hover:rounded-full hover:scale-110 transition-all duration-200 ease-in-out";
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="sm_icon" className={cn(helpStyling)}>
            <GeneralTooltip side="left" label="Customer Details">
              <Info className="h-5 w-5" />
            </GeneralTooltip>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex flex-col space-y-4 p-2 px-6 pb-6">
            <div className="flex items-center justify-between">
              <DrawerHeader className="gap-0">
                <DrawerTitle className="text-xl">
                  Customer & Vehicle Information
                </DrawerTitle>
                <DrawerDescription>
                  Customer-specific details and comprehensive information
                  pertaining to their vehicle(s).
                </DrawerDescription>
              </DrawerHeader>
              <div className="">
                <Button variant="default" size="default" className="h-9">
                  <div className="flex items-center">
                    <Pencil className="h-4 w-4 mr-2" /> Edit
                  </div>
                </Button>
              </div>
            </div>
            <Separator className="h-[0.5px]" />

            {/* Customer | Vehicle Details */}
            <div className="grid grid-cols-2 gap-4 p-4">
              {/* Customer Details */}
              <div className="flex flex-col space-y-3">
                <span className="text-lg font-semibold leading-none tracking-tight">
                  Customer Details
                </span>
                <div className="space-y-2 pb-4 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="pt-2">
                      <Label className={cn("")}>First Name :</Label>
                      <span className="flex items-center text-sm text-muted-foreground space-y-2">
                        John
                      </span>
                    </div>

                    <div className="pt-2">
                      <Label className={cn("")}>Last Name :</Label>
                      <span className="flex items-center text-sm text-muted-foreground space-y-2">
                        Doe
                      </span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Label className={cn("")}>Email :</Label>
                    <span className="flex items-center text-sm text-muted-foreground space-y-2">
                      johndoe13@abc.com
                    </span>
                  </div>

                  <div className="pt-2">
                    <Label className={cn("")}>Phone No. :</Label>
                    <span className="flex items-center text-sm text-muted-foreground space-y-2">
                      +254 7 012 0293 0293
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="pt-2">
                      <Label className={cn("")}>City :</Label>
                      <span className="flex items-center text-sm text-muted-foreground space-y-2">
                        Nairobi
                      </span>
                    </div>

                    <div className="pt-2">
                      <Label className={cn("")}>Country :</Label>
                      <span className="flex items-center text-sm text-muted-foreground space-y-2">
                        Kenya
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="pt-2">
                      <Label className={cn("")}>P.O.Box :</Label>
                      <span className="flex items-center text-sm text-muted-foreground space-y-2">
                        12345
                      </span>
                    </div>

                    <div className="pt-2">
                      <Label className={cn("")}>Postal Code :</Label>
                      <span className="flex items-center text-sm text-muted-foreground space-y-2">
                        00100 Nairobi
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="flex flex-row">
                <Separator orientation="vertical" className="w-[0.5px] mx-6" />
                <div className="flex flex-col min-h-[500px]">
                  <span className="text-lg font-semibold leading-none tracking-tight">
                    Vehicles
                  </span>
                  <VehicleCustomer />
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CustomerDetails;
