"use client";

import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

import { toast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formSchema = z.object({});

type NewWorkshopValues = z.infer<typeof formSchema>;

interface NewWorkshopRequestModalProps {}

export const NewWorkshopRequestModal: React.FC<NewWorkshopRequestModalProps> = ({}) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    console.log("On Submit");
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"default"} size="default">
            <div className="flex items-center">
              <Plus className="h-4 w-4 mr-2" /> Requests
            </div>
          </Button>
        </DialogTrigger>

        <DialogContent className="px-6 pt-6 w-[700px] max-w-[800px]">
          <DialogHeader className="pt-2 flex flex-row items-center justify-between">
            <div className="flex space-x-2">
              <div className="h-7 w-7 rounded-full border items-center flex justify-center">
                <Plus className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <DialogTitle>Requests</DialogTitle>
                <DialogDescription>Create Workshop Requests</DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="py-2">
            <Separator className="h-[0.5px]" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
