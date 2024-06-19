"use client";

import React, { useEffect, useState } from "react";
import {
  UserPlus,
  TicketPlus,
  ClipboardPenLine,
  Receipt,
  Globe,
  Info,
  MoreHorizontal,
  Truck,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

import { Heading } from "@/components/ui/heading";
import { Loader } from "@/components/ui/loader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { cashier_meta } from "@/lib/data/meta/cashier-meta";
import JobSummary from "./_components/job-sum-tbl/job-summary";
import Payments from "./_components/pay-sum-tbl/pending-payments";
import CustomersSummary from "./_components/cstm-sum-tbl/customer-summary";
import InventorySummary from "./_components/invt-sum-tbl/inventory-summary";
import { NewJobCards } from "./_components/new-jb-mdl/new-job";

const PosHome = () => {
  const helpStyling =
    "z-10 h-4 w-4 cursor-pointer text-muted-foreground hover:bg-primary/5 hover:text-primary hover:rounded-full hover:scale-110 transition-all duration-200 ease-in-out";
  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between">
            <Heading
              title={"Dashboard"}
              description="Current Schedule, Metadata & Summary of Performance Metrics "
            />
            <div className="flex space-x-2">
              <NewJobCards />
              <Button variant="outline" size="default">
                <div className="flex items-center">
                  <UserPlus className="h-4 w-4 mr-2" /> Customer
                </div>
              </Button>
            </div>
          </div>
          <Separator />

          {/* Dash Analytics */}
          <div className="grid gap-4 grid-cols-4">
            <Card>
              <div className="flex items-end justify-end pt-2 pr-2">
                <Info className={cn(helpStyling)} />
              </div>
              <CardContent className="justify-between flex -mt-6">
                <div className="flex items-center justify-center pt-4">
                  <Globe className="h-14 w-14 text-muted-foreground" />
                </div>

                <div className="flex flex-col items-end">
                  <CardHeader className="flex items-end space-y-0 pb-1 -mr-2">
                    <CardTitle className="text-md text-right font-medium">
                      Pending Bookings
                    </CardTitle>
                    <CardDescription className="text-xs font-normal">
                      Overall
                    </CardDescription>
                  </CardHeader>
                  <div className="text-2xl font-bold pr-4">
                    {cashier_meta.cashierData.bookings.pending}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <div className="flex items-end justify-end pt-2 pr-2">
                <Info className={cn(helpStyling)} />
              </div>
              <CardContent className="justify-between flex -mt-6">
                <div className="flex items-center justify-center pt-4">
                  <Truck className="h-14 w-14 text-muted-foreground" />
                </div>
                <div className="flex flex-col items-end">
                  <CardHeader className="flex items-end space-y-0 pb-1 -mr-2">
                    <CardTitle className="text-md font-medium text-right">
                      Pickups Requested
                    </CardTitle>
                    <CardDescription className="text-xs font-normal">
                      Today
                    </CardDescription>
                  </CardHeader>
                  <div className="text-2xl font-bold pr-4">
                    {cashier_meta.cashierData.pickUpRequests}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <div className="flex items-end justify-end pt-2 pr-2">
                <Info className={cn(helpStyling)} />
              </div>
              <CardContent className="justify-between flex -mt-6">
                <div className="flex items-center justify-center pt-4">
                  <ClipboardPenLine className="h-14 w-14 text-muted-foreground" />
                </div>
                <div className="flex flex-col items-end">
                  <CardHeader className="flex items-end space-y-0 pb-1 -mr-2">
                    <CardTitle className="text-md font-medium text-right">
                      Active Job Cards
                    </CardTitle>
                    <CardDescription className="text-xs font-normal">
                      Weekly
                    </CardDescription>
                  </CardHeader>
                  <div className="text-2xl font-bold pr-4">
                    {cashier_meta.cashierData.jobCards.inProgress}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <div className="flex items-end justify-end pt-2 pr-2">
                <Info className={cn(helpStyling)} />
              </div>
              <CardContent className="justify-between flex -mt-6">
                <div className="flex items-center justify-center pt-4">
                  <Receipt className="h-14 w-14 text-muted-foreground" />
                </div>
                <div className="flex flex-col items-end">
                  <CardHeader className="flex items-end space-y-0 pb-1 -mr-2">
                    <CardTitle className="text-md text-right font-medium">
                      Pending Payments
                    </CardTitle>
                    <CardDescription className="text-xs font-normal">
                      Count
                    </CardDescription>
                  </CardHeader>
                  <div className="text-2xl font-bold pr-4">
                    {cashier_meta.cashierData.pendingPayments.count}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Job Cards & Pending Payments */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {/* Job Cards */}
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
                <CardTitle className="text-xl font-bold">Job Cards</CardTitle>
                <Button variant={"outline"} size="icon">
                  <MoreHorizontal className="h-6 w-6" />
                </Button>
              </CardHeader>
              <CardContent>
                <JobSummary />
              </CardContent>
            </Card>

            {/* Pending Payments*/}
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
                <CardTitle className="text-xl font-bold">Payments</CardTitle>
                <Button variant={"outline"} size="icon">
                  <MoreHorizontal className="h-6 w-6" />
                </Button>
              </CardHeader>
              <CardContent>
                <Payments />
              </CardContent>
            </Card>
          </div>

          {/* Summary Customer Details */}
          <div className="mt-4">
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
                <CardTitle className="text-xl font-bold">Customers</CardTitle>
                <Button variant={"outline"} size="icon">
                  <MoreHorizontal className="h-6 w-6" />
                </Button>
              </CardHeader>
              <CardContent>
                <CustomersSummary />
              </CardContent>
            </Card>
          </div>

          {/* Inventory Management Actions */}
          <div className="mt-4">
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
                <CardTitle className="text-xl font-bold">Inventory</CardTitle>
                <Button variant={"outline"} size="icon">
                  <MoreHorizontal className="h-6 w-6" />
                </Button>
              </CardHeader>
              <CardContent>
                <InventorySummary />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default PosHome;
