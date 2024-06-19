"use client";

import React, { useState, useMemo } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useInventoryItem } from "@/store/inventory/use-inventory";
import { useServiceOption} from "@/store/inventory/use-service"

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
import { formatDateTime } from "@/lib/utils/date-time-format";

import { InventoryItem, ServiceOption } from "@/lib/types/types";
import { inv_data } from "@/lib/data/inventory-data";

const formSchema = z.object({
    categoryd: z.string().min(1),
    partNameId: z.string().min(1),
})

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
        id: `${item.itemCategory.toLowerCase().replace(/\s+/g, "-")}-${
          categorySet.size
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

  const emptyServiceOptionItem = {
    id: "",
    catId: "",
    category: "",
    
  }

  const categories = useCategories(inv_data);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  // Filter inventory data based on selected category
  const filteredInventory = useMemo(() => {
    if (!selectedCategory) {
      return inv_data; // If no category selected, show all inventory
    }
    return inv_data.filter((item) => item.itemCategory === selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
     
    </div>
  );
};
