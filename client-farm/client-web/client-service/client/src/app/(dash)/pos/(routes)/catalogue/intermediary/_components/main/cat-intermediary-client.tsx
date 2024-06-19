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
import { Handshake } from "lucide-react";
import { CatIntermediaryTable } from "./intermediary-table/cat-intermediary-table";

export const CatIntermediaryClient = () => {
  return (
    <>
      <div className="flex items-center pb-6 justify-between">
        <Heading
          title="Intermediary"
          description="Oversee intermediary data management."
        />

        <Button variant="default" size="default">
          <div className="flex items-center">
            <Handshake className="h-4 w-4 mr-2" /> intermediary
          </div>
        </Button>
      </div>

      <div>
        <CatIntermediaryTable />
      </div>
    </>
  )
}