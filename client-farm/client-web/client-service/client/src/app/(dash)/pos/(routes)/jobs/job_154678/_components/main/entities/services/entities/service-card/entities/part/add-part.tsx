"use client";

import { Bolt } from "lucide-react";
import { PiEngine } from "react-icons/pi";
import React, { useState, useMemo } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useInventoryItem } from "@/store/inventory/use-inventory";
import { useServiceOption } from "@/store/inventory/use-service"
import { useJobCard } from "@/store/jobs/use-jc"
import { useSidebarToggle } from "@/store/use-sidebar-toggle"
import { useAddPartModalToggle, useAddPartTab } from "@/store/general/use-modal-toggle"

import { formatDateTime } from "@/lib/utils/date-time-format";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { GeneralTooltip } from "@/components/misc/general-tooltip";

import { CustomPartTab } from "./tabs/cutom-part"
import { InventorySearchTab } from "./tabs/inventory-search";

import {
  InventoryItem,
  ServiceOption,
  JCPart
} from "@/lib/types/types";
import { inv_data } from "@/lib/data/inventory-data";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  categoryId: z.string().min(1),
  partNameId: z.string().min(1)
})

type AddPartFormValues = z.infer<typeof formSchema>;

type ItemCategory = {
  id: string;
  name: string;
};

type Props = {};

// Utility function to generate unique categories
const generateUniqueCategories = (
  inventoryData: InventoryItem[]
): ItemCategory[] => {
  const categories: ItemCategory[] = [];
  const categorySet = new Set<string>();

  inventoryData.forEach((item) => {
    if (!categorySet.has(item.itemCategory)) {
      categorySet.add(item.itemCategory);
      categories.push({
        id: `${item.itemCategory.toLowerCase().replace(/\s+/g, "-")}-${categorySet.size
          }`,
        name: item.itemCategory,
      });
    }
  });

  return categories;
};

// Custom hook to manage categories
const useCategories = (inventoryData: InventoryItem[]): ItemCategory[] => {
  const categories = useMemo(
    () => generateUniqueCategories(inventoryData),
    [inventoryData]
  );

  return categories;
};

export const AddPart = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


  const addPartTab = useAddPartTab();
  const addPartModalToggle = useAddPartModalToggle();
  const categories = useCategories(inv_data);
  const { isOpen } = useSidebarToggle();

  const handleOnChange = (open: boolean) => {
    if (!open) {
      addPartModalToggle.isOpen;
    }

    addPartModalToggle.onOpen();
  }

  return (
    <>
      <Dialog onOpenChange={handleOnChange}>
        <DialogTrigger asChild>
          {isOpen ? (
              <Button variant={"outline"} size={"icon"}>
                <div className='flex items-center'>
                  <PiEngine className='h-4 w-4' />
                </div>
              </Button>
          ) : (
            <Button variant={"outline"} className="h-auto py-1">
              <div className="flex items-center">Part</div>
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="px-6 pt-6 w-[800px] max-w-[1000px]">

          <DialogHeader className="">
            <DialogTitle>Add Part</DialogTitle>
            <DialogDescription>
              Fill out the form below to add a new part.
            </DialogDescription>

            <div className="flex gap-2 pt-2">
              <Button
                variant={addPartTab.isInventory ? "default" : "outline"}
                onClick={() => addPartTab.onInventory()}
              >
                Inventory
              </Button>
              <Button variant={!addPartTab.isInventory ? "default" : "outline"} onClick={() => addPartTab.onCustom()}>
                Custom
              </Button>
            </div>

            <div className="w-full pt-2">
              <Separator orientation="horizontal" className="h-[1px]" />
            </div>
          </DialogHeader>
          {addPartTab.isInventory ? (
            <>
              <InventorySearchTab />
            </>
          ) : (
            <>
              <CustomPartTab />
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
