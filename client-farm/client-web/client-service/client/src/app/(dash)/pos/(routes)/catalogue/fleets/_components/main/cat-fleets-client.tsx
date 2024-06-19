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
import { CatFleetsTable } from "./fleet-tbl/cat-fleets-table";
import { Truck } from "lucide-react";

export const CatFleetClient = () => {
  return (
    <>
      <div className="flex items-center pb-6 justify-between">
        <Heading
          title="Fleets"
          description="Manage diverse fleet client information."
        />

        <Button variant="default" size="default">
          <div className="flex items-center">
            <Truck className="h-4 w-4 mr-2" /> Fleet
          </div>
        </Button>
      </div>

      <div>
        <CatFleetsTable />
      </div>
    </>
  );
};
