import React, { useState, useEffect, useMemo } from 'react';

import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  ServiceAuthorizations,
  AddService,
  AssignTechnician,
  ServiceCard,
  ServiceSearch,
  NewService
} from "./entities";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Services = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 5;

  const services = useMemo(() => [
    { id: 1, content: <ServiceCard key={1} /> },
    { id: 2, content: <ServiceCard key={2} /> },
    { id: 3, content: <ServiceCard key={3} /> },
    { id: 4, content: <ServiceCard key={4} /> },
    { id: 5, content: <ServiceCard key={5} /> },
    { id: 6, content: <ServiceCard key={6} /> },
    { id: 7, content: <ServiceCard key={7} /> },
    { id: 8, content: <ServiceCard key={8} /> }
  ], []);

  const totalPages = useMemo(() => Math.ceil(services.length / servicesPerPage), [services.length]);

  const currentServices = useMemo(() => services.slice(
    (currentPage - 1) * servicesPerPage,
    currentPage * servicesPerPage
  ), [currentPage, services]);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);

      const servicesSection = document.getElementById('servicesSection');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const firstServiceIndex = (currentPage - 1) * servicesPerPage + 1;
  const lastServiceIndex = Math.min(currentPage * servicesPerPage, services.length);

  return (
    <div className='flex flex-col space-y-4 w-full pr-2 pl-4'>
      {/* Service Heading */}
      <div id="servicesSection" className='space-y-2 flex flex-col w-full'>
        <div className='flex items-center justify-start text-lg font-semibold tracking-tight text-nowrap'>
          Services
        </div>
      </div>

      <div className='flex justify-between items-center'>
        {/* Search & Services */}
        <div className='flex items-center space-x-2'>
          <ServiceSearch />
          <AddService />
        </div>

        {/* Assign Technichian & Authorizations */}
        <div className='flex items=center space-x-2'>
          <AssignTechnician />
          <ServiceAuthorizations />
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        {currentServices.map(service => service.content)}
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

      {/* Showing X-Y of Z Service Cards */}
      <div className="text-sm text-muted-foreground">
        Showing <strong>{firstServiceIndex}-{lastServiceIndex}</strong> of <strong>{services.length}</strong> Service Cards
      </div>
    </div>
  );
}

export default Services;
