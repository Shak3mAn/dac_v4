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
import { Store } from "lucide-react";
import { CatSupplierTable } from "./suppliers-table/cat-supplier-table";

export const CatSupplierClient = () => {
  return (
    <>
      <div className="flex items-center pb-6 justify-between">
        <Heading
          title="Suppliers"
          description="Methodically oversee supplier information."
        />

        <Button variant="default" size="default">
          <div className="flex items-center">
            <Store className="h-4 w-4 mr-2" /> Supplier
          </div>
        </Button>
      </div>

      <div>
        <CatSupplierTable />
      </div>
    </>
  );
};
