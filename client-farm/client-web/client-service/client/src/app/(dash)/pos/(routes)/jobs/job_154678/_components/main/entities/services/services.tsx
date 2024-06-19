import React from 'react'

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

type Props = {}

const Services = (props: Props) => {
  return (
    <>
      <div className='flex flex-col space-y-4 w-full pr-2 pl-4'>
        {/* Service Heading */}
        <div className='space-y-2 flex flex-col w-full'>
          <div className='flex items-center justify-start text-lg font-semibold tracking-tight text-nowrap'>
            Services
          </div>
        </div>

        <div className='flex justify-between items-center'>
          {/* Search & Services */}
          <div className='flex items-center space-x-2'>
            {/* Search */}
            <div>
              <ServiceSearch />
            </div>
            {/* Services */}
            <div>
              {/* <AddService /> */}
              <AddService />
            </div>
          </div>

          {/* Assign Technichian & Authorizations */}
          <div className='flex items=center space-x-2'>
            {/* Assign Technician */}
            <div>
              <AssignTechnician />
            </div>

            {/* Authorizations */}
            <div>
              <ServiceAuthorizations />
            </div>

          </div>
        </div>

          <div className=" flex flex-col space-y-4">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>

      </div>
    </>
  )
}

export default Services