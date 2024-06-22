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
import { service_comp_data } from "@/lib/data/service-data-v2";
import ServiceItemTable from "./services-table/service-table";
import LaborItemTable from "./labor-table/labor-table"
import SubcontractItemTable from "./subcontractor-table/subcontractor-table"
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
            <div className="space-x-1.5 flex flex-row">
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

              <div className="px-2">
                <Separator orientation="vertical" className="w-[0.5px]" />
              </div>

              <div className="ml-3 space-x-1.5 flex items-center">
                <div>
                  {service_comp_data[0].status === "InProgress" ? (
                    <div className='flex items-center justify-center bg-amber-600 bg-opacity-35 px-2 py-1 rounded-lg cursor-pointer hover:scale-110 active:scale-95 transition-all ease-in-out duration-200'>
                      <span className='text-amber-900 text-xs tracking-tight font-semibold'>
                        In Progress
                      </span>
                    </div>
                  ) : (
                    <div className='flex items-center justify-center bg-green-600 bg-opacity-35 px-2 py-1 rounded-lg cursor-pointer hover:scale-110 active:scale-95 transition-all ease-in-out duration-200'>
                      <span className='text-green-900 text-xs tracking-tight font-semibold'>
                        Complete                            </span>
                    </div>
                  )}
                </div>

                <div>
                  {service_comp_data[0].authorization === "Authorized" && (
                    <div className='flex items-center justify-center bg-green-600 bg-opacity-35 px-2 py-1 rounded-lg cursor-pointer hover:scale-110 active:scale-95 transition-all ease-in-out duration-200'>
                      <span className='text-green-900 text-xs tracking-tight font-semibold'>
                        Authorized                          </span>
                    </div>
                  )}
                  {service_comp_data[0].authorization === "Declined" && (
                    <div className='flex items-center justify-center bg-red-400 bg-opacity-35 px-2 py-1 rounded-lg cursor-pointer hover:scale-110 active:scale-95 transition-all ease-in-out duration-200'>
                      <span className='text-red-900 text-xs tracking-tight font-semibold'>
                        Declined                         </span>
                    </div>
                  )}
                  {service_comp_data[0].authorization === "Deferred" && (
                    <div className='flex items-center justify-center bg-amber-600 bg-opacity-35 px-2 py-1 rounded-lg cursor-pointer hover:scale-110 active:scale-95 transition-all ease-in-out duration-200'>
                      <span className='text-amber-900 text-xs tracking-tight font-semibold'>
                        Deferred                          </span>
                    </div>
                  )}
                  {service_comp_data[0].authorization === "Pending" && (
                    <div className='flex items-center justify-center bg-gray-400 bg-opacity-35 px-2 py-1 rounded-lg cursor-pointer hover:scale-110 active:scale-95 transition-all ease-in-out duration-200'>
                      <span className='text-gray-800 text-xs tracking-tight font-semibold'>
                        Pending                          </span>
                    </div>
                  )}
                </div>
              </div>
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

            <div className="flex justify-start items-center mx-4 pt-0 mb-3 space-x-4">
              <span className="text-primary text-sm font-semibold tracking-tight">
                Add:
              </span>

              <div className="space-x-2 flex items-start">
                {/* Add Part */}
                <div>
                  <AddPart />
                </div>

                {/* Add Labor */}
                <div>
                  <AddLabor />
                </div>

                {/* Add Subcontract */}
                <div>
                  <AddSubcontract />
                </div>

              </div>
            </div>

            <div className="flex flex-row items-center space-x-4 mx-4 -mb-2">
              <CardTitle className="text-sm text-nowrap">
                Service Items
              </CardTitle>
              <div className="w-full">
                <Separator orientation="horizontal" className="h-[0.5px]" />
              </div>
            </div>

            <ServiceItemTable />
            {(service_comp_data?.[0]?.labor ?? []).length > 0 && (
              <div className="py-4">
                <div className="flex flex-row items-center space-x-4 mx-4 -mb-2">
                  <CardTitle className="text-sm text-nowrap">
                    Labor
                  </CardTitle>
                  <div className="w-full">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                  </div>
                </div>
                <LaborItemTable />
              </div>
            )}

            {(service_comp_data?.[0]?.subcontractor ?? []).length > 0 && (
              <div className="pb-4">
                <div className="flex flex-row items-center space-x-4 mx-4 -mb-2">
                  <CardTitle className="text-sm text-nowrap">
                    Subcontractor
                  </CardTitle>
                  <div className="w-full">
                    <Separator orientation="horizontal" className="h-[0.5px]" />
                  </div>
                </div>
                <SubcontractItemTable />
              </div>
            )}
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
                    <span className="text-muted-foreground text-sm tracking-tight font-normal">
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