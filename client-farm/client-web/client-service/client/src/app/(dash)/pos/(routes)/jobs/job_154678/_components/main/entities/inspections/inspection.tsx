import React, { useState, useEffect, useMemo } from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  AddInspection,
  InspectionCard,
  InspectionFilter
} from "./entities"

import { jc_card_view_eg } from "@/lib/data/general/jc-card-view"

const Inspections = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const inspectionsPerPage = 15;

  const inspections = useMemo(() => [
    jc_card_view_eg.jobCard.inspectionChecklist.map((item, index) => {

    })
  ], [])

  return (
    <div className='flex flex-col space-y-4 w-full pr-2 pl-4'>
      {/* Inspecitons Heading */}
      <div id="servicesSection" className='space-y-2 flex flex-col w-full'>
        <div className='flex items-center justify-start text-lg font-semibold tracking-tight text-nowrap'>
          Inspections
        </div>
      </div>

    </div>
  )
}

export default Inspections