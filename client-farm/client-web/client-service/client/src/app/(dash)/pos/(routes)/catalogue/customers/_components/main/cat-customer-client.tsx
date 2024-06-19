"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Loader } from "@/components/ui/loader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserPlus, Users } from "lucide-react";
import CustomersSummary from "./cstm-sum-tbl/customer-summary";

export const CatCustomerClient = () => {
  const helpStyling =
    "z-10 h-4 w-4 cursor-pointer text-muted-foreground hover:bg-primary/5 hover:text-primary hover:rounded-full hover:scale-110 transition-all duration-200 ease-in-out";

  return (
    <>
      <div className="flex items-center pb-6 justify-between">
        <Heading
          title="Customers"
          description="Establish and oversee customer accounts"
        />

        <Button variant="default" size="default">
          <div className="flex items-center">
            <UserPlus className="h-4 w-4 mr-2" /> Customer
          </div>
        </Button>
      </div>

      <div className="mb-6 hidden">
        <Separator className="h-[0.5px]" />
      </div>

      {/* Customer Table */}
      <div className="-mt-4">
        <CustomersSummary />
      </div>
    </>
  );
};
