"use client";

import { Clipboard, Plus, UserPlus, ClipboardPlus } from "lucide-react";
import { useEffect, useState } from "react";
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
import JobSearch from "../search_tbl/search-table";
import { NewJobCardParticulars } from "./new-job-card/njc-particulars-modal";

const formSchema = z.object({
  customerName: z.string().min(1),
  customerEmail: z.string().min(1),
  customerPhone: z.string().min(1),
  registrationNumber: z.string().min(1),
  vinChassisNumber: z.string().min(1),
  model: z.string().min(1),
});

type NewJobCardValues = z.infer<typeof formSchema>;

interface NewJobCardProps {}

export const NewJobCards: React.FC<NewJobCardProps> = ({}) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const defaultValues = {
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    registrationNumber: "",
    vinChassisNumber: "",
    model: "",
  };

  const form = useForm<NewJobCardValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = () => {
    console.log("On Submit");
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"default"} size="default">
            <div className="flex items-center">
              <ClipboardPlus className="h-4 w-4 mr-2" /> Job Card
            </div>
          </Button>
        </DialogTrigger>

        <DialogContent className="px-6 pt-6 w-[1025px] max-w-[1200px]">
          <DialogHeader className="pt-4 flex flex-row items-center justify-between">
            <div className="flex space-x-2">
              <div className="h-7 w-7 rounded-full border items-center flex justify-center">
                <Clipboard className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <DialogTitle>Job Card</DialogTitle>
                <DialogDescription>
                  Search for customer or vehicle
                </DialogDescription>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <Button variant={"outline"} size="icon">
                <div className="flex items-center">
                  <UserPlus className="h-4 w-4" />
                </div>
              </Button>
              <Button variant={"default"} size="default">
                <div className="flex items-center">
                  <Plus className="h-4 w-4 mr-2" /> Temporary
                </div>
              </Button>
            </div>
          </DialogHeader>
          <JobSearch />

          <div className="pt-3 pb-0 space-x-2 flex items-center justify-end w-full">
            <DialogClose>
              <Button disabled={loading} variant="outline">
                Cancel
              </Button>
            </DialogClose>

            <NewJobCardParticulars />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
