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
  const inspectionsPerPage = 9;

  const inspections = useMemo(() => [
    { id: 1, content: <InspectionCard key={1} /> },
    { id: 2, content: <InspectionCard key={2} /> },
    { id: 3, content: <InspectionCard key={3} /> },
    { id: 4, content: <InspectionCard key={4} /> },
    { id: 5, content: <InspectionCard key={5} /> },
    { id: 6, content: <InspectionCard key={6} /> },
    { id: 7, content: <InspectionCard key={7} /> },
    { id: 8, content: <InspectionCard key={8} /> },
    { id: 9, content: <InspectionCard key={9} /> },
    { id: 10, content: <InspectionCard key={10} /> },
    { id: 11, content: <InspectionCard key={11} /> },
    { id: 12, content: <InspectionCard key={12} /> },
    { id: 13, content: <InspectionCard key={13} /> },
    { id: 14, content: <InspectionCard key={14} /> },
    { id: 15, content: <InspectionCard key={15} /> },
  ], [])

  const totalPages = useMemo(() => Math.ceil(inspections.length / inspectionsPerPage), [inspections.length])

  const currentInspections = useMemo(() => inspections.slice(
    (currentPage - 1) * inspectionsPerPage,
    currentPage * inspectionsPerPage
  ), [currentPage, inspections])

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);

      const inspectionsSection = document.getElementById('inspectionsSection');
      if (inspectionsSection) {
        inspectionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  const firstInspectionIndex = (currentPage - 1) * inspectionsPerPage + 1;
  const lastInspectionIndex = Math.min(currentPage * inspectionsPerPage, inspections.length)

  return (
    <div className='flex flex-col space-y-4 w-full pr-2 pl-4'>
      {/* Inspections Heading */}
      <div id="inspectionsSection" className='space-y-2 flex flex-col w-full'>
        <div className='flex items-center justify-start text-lg font-semibold tracking-tight text-nowrap'>
          Inspections
        </div>
      </div>

      <div className='flex items-center justify-start'>
        <AddInspection />
      </div>

      <div className='grid grid-cols-3 gap-8'>
        {currentInspections.map(inspection => inspection.content)}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage - 1);
              }}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index + 1}>
              <PaginationLink
                href="#"
                isActive={currentPage === index + 1}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(index + 1);
                }}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {/* Showing X-Y of Z Inspection Cards */}
      <div className="text-sm text-muted-foreground">
        Showing <strong>{firstInspectionIndex}-{lastInspectionIndex}</strong> of <strong>{inspections.length}</strong> Inspection Cards
      </div>
    </div>
  )
}

export default Inspections;
