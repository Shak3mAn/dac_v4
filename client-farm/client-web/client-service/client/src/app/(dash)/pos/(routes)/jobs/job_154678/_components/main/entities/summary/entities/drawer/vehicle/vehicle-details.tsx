import React from "react";

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
import { Info, Pencil } from "lucide-react";
import VehicleServiceReport from "./vehicle-reports/vehicle-report-table";

type Props = {};

const VehicleDetails = (props: Props) => {
  const helpStyling =
    "z-10 cursor-pointer text-muted-foreground hover:bg-primary/5 hover:text-primary hover:rounded-full hover:scale-110 transition-all duration-200 ease-in-out";

  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="sm_icon" className={cn(helpStyling)}>
            <GeneralTooltip side="right" label="Vehicle Details">
              <Info className="h-5 w-5" />
            </GeneralTooltip>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex flex-col space-y-4 p-2 px-6 pb-6">
            <div className="flex items-center justify-between">
              <DrawerHeader className="gap-0">
                <DrawerTitle className="text-3xl font-bold">
                  Vehicle Information
                </DrawerTitle>
                <DrawerDescription>
                  In-depth particulars concerning the vehicle, along with a
                  comprehensive record of prior maintenance and service tasks
                  performed on the vehicle.
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

            {/* Vehicle Details | Service Details */}
            <div className="grid grid-cols-2 gap-4 p-4">
              {/* Vehicle Details */}
              <div className="flex flex-col space-y-3">
                <span className="text-lg font-semibold leading-none tracking-tight">
                  Vehicle Details
                </span>
                <div className="space-y-2 pb-4 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="pt-2">
                      <Label>Customer :</Label>
                      <span className="flex items-center text-sm text-muted-foreground space-y-2">
                        John Doe
                      </span>
                    </div>
                    <div className="pt-2">
                      <Label>Registration No. :</Label>
                      <span className="flex items-center text-sm text-muted-foreground space-y-2">
                        KAA 190D
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="pt-2">
                      <Label>Make :</Label>
                      <span className="flex items-center text-sm text-muted-foreground space-y-2">
                        Ferrari
                      </span>
                    </div>
                    <div className="pt-2">
                      <Label>Model :</Label>
                      <span className="flex items-center text-sm text-muted-foreground space-y-2">
                        F430
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="pt-2">
                      <Label>VIN No. :</Label>
                      <span className="flex items-center text-sm text-muted-foreground space-y-2">
                        ZB1920FHA12
                      </span>
                    </div>
                    <div className="pt-2">
                      <Label>Milage (Km):</Label>
                      <span className="flex items-center text-sm text-muted-foreground space-y-2">
                        50000
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="pt-2">
                      <Label>Garage Visits :</Label>
                      <span className="flex items-center text-sm text-muted-foreground space-y-2">
                        4
                      </span>
                    </div>
                    <div className="pt-2">
                      <Label>Fuel Type:</Label>
                      <span className="flex items-center text-sm text-muted-foreground space-y-2">
                        Petrol
                      </span>
                    </div>
                  </div>
                </div>

                {/* Disclaimer | Insurance Present */}
                
              </div>

              {/* Service Details */}
              <div className="flex flex-row">
                <Separator orientation="vertical" className="w-[0.5px] mx-6" />
                <div className="flex flex-col min-h-[500px]">
                  <span className="text-lg font-semibold leading-none tracking-tight">
                    Service Log
                  </span>
                  <VehicleServiceReport />
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default VehicleDetails;
