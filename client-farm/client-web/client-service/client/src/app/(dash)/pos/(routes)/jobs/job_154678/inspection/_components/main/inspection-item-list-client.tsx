"use client";

import { Plus } from "lucide-react"
import React, { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { AddInspectionItem } from "./entities/add-inspection-item/add-inspection-item"
import { InspectionItemCard } from "./entities/inspection-item-card/inspection-item-card"

type Props = {}

export const InspectionItemListClient = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const inspectionItemsPerPage = 9;


  return (
    <div className="flex flex-col space-y-4 pb-6">
      <div className="flex items-center justify-between">
        <Heading
          title="Job Card"
          section="JC12345A"
          subSection="Inspection Item"
          description="Establish and oversee inspection items within this designated list for the specified job card."
        />
        <div className="flex flex-row space-x-2">
          <AddInspectionItem />
        </div>
      </div>

      {/* Inspection Item List */}
    </div>
  )
}