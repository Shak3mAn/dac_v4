"use client";

import React, { useEffect, useRef, useState } from "react";
import { MoreVertical, Trash2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { service_items_data } from "@/lib/data/service-data-v2";
import ServiceItemTable from "./services-table/service-table";
import { ServiceHover } from "./service-hover/service-hover";
import { EditTechnicianPerService } from "../assign-tech/edit-tech";
import {
  AddLabor,
  AddPart,
  AddSubcontract,
  EditLabor,
  EditPart,
  EditSubcontract,
} from "./entities"

type Props = {}

export const ServiceCard = (props: Props) => {
  return (
    <div>
      <Card className="w-full">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <div className="flex space-x-1 items-center">
                <CardTitle className="text-md">Brake Pad R&R (Front)</CardTitle>
                <div className="-mt-2">
                  <ServiceHover />
                </div>
              </div>
              <CardDescription className="text-xs font-medium">
                #SRV0014A
              </CardDescription>
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <div className="flex items-center">
                  <Trash2 className="h-4 w-4" />
                </div>
              </Button>
              <Button variant="outline" size="icon">
                <div className="flex items-center">
                  <MoreVertical className="h-4 w-4" />
                </div>
              </Button>
              <div className="px-2">
                <Separator orientation="vertical" className="w-[0.5px]" />
              </div>
              <div>
                <EditTechnicianPerService />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="-mt-3 mb-4">
            <Separator orientation="horizontal" className="h-[0.5px]" />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center space-x-4 mx-4">
              <CardTitle className="text-sm text-nowrap">
                Service Items
              </CardTitle>
              <div className="w-full">
                <Separator orientation="horizontal" className="h-[0.5px]" />
              </div>
            </div>

            <div className="flex items-start mx-4 pt-2 -mb-1.5 space-x-8">
              <span className="text-primary text-sm font-semibold tracking-tight">
                Add:
              </span>

              <div className="space-x-4 flex items-start">
                {/* Add Part */}
                <div>

                </div>

                {/* Add Labor */}
                <div>

                </div>

                {/* Add Subcontract */}
                <div>

                </div>

              </div>
            </div>


            <ServiceItemTable />
            <div className="flex flex-row justify-between items center w-full px-4 pt-3 -mb-1">
              <div className="flex flex-row space-x-8 items-center pl-4">
                <div className="flex flex-row items-center space-x-2">
                  <span className="text-primary text-sm font-semibold tracking-tight">
                    EPA:
                  </span>
                  <span className="text-muted-foreground text-sm tracking-tight font-normal">
                    0%
                  </span>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <span className="text-primary text-sm font-semibold tracking-tight">
                    Discount:
                  </span>
                  <div className="flex space-x-1">
                    <span className="text-muted-foreground text-sm tracking-tight font-normal">
                      0%
                    </span>
                    <span className=" text-sm tracking-tight font-normal">
                      |
                    </span>
                    <span className="text-muted-foreground text-sm tracking-tight font-normal">
                      $0
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <span className="text-primary text-sm font-semibold tracking-tight">
                    Taxes:
                  </span>
                  <span className="text-muted-foreground text-sm tracking-tight font-normal">
                    16%
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div className="px-2 h-full">
                  <Separator orientation="vertical" className="w-[0.5px]" />
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <span className="text-primary text-nowrap text-sm font-semibold tracking-tight">
                    Service Total:
                  </span>
                  <span className="text-muted-foreground text-sm tracking-tight font-normal">
                    $320.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}