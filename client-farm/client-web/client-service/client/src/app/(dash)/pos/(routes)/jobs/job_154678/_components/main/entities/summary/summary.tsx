import React from 'react'

import {
  ActivityLog,
  CustomerShopComments,
  JobCardNotes,
  JobMetaInfo,
  SummaryServicesCost,
  SummaryServicesItemTable,
  TodoList,
  VehicleCustomerDetail
} from "./entities";

import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";


type Props = {}

const Summary = (props: Props) => {
  return (
    <>
      <div className='flex flex-col space-y-4 w-full pr-2 pl-4'>
        {/* Summary Heading */}
        <div className='space-y-2 flex flex-col w-full'>
          <div className='flex items-center justify-start text-lg font-semibold tracking-tight text-nowrap'>
            Summary
          </div>
          {/* <div className="w-full">
            <Separator orientation="horizontal" className="h-[0.5px]" />
          </div> */}
        </div>

        {/* TodoList & Customer-Shop Comments */}
        <div className='grid grid-cols-2 gap-x-4'>
          {/* To-Do List */}
          <div>
            <TodoList />
          </div>

          {/* Client-Shop Comments */}
          <div>
            <CustomerShopComments />
          </div>
        </div>

        {/* Job Information */}
        <Card>
          <CardContent className='py-4 px-6'>
            <div className='flex flex-col pt-2'>
              <div className="flex flex-row items-center space-x-4 mx-4">
                <CardTitle className="text-md text-nowrap">
                  Services
                </CardTitle>
                <div className="w-full">
                  <Separator orientation="horizontal" className="h-[0.5px]" />
                </div>
              </div>
              <SummaryServicesItemTable />

              <SummaryServicesCost />

              {/* Vehicle & Customer */}
              <div className="flex flex-row items-center space-x-4 mx-4 pt-2 pb-6">
                <CardTitle className="text-md text-nowrap">
                  Vehicle & Customer
                </CardTitle>
                <div className="w-full">
                  <Separator orientation="horizontal" className="h-[0.5px]" />
                </div>
              </div>

              <VehicleCustomerDetail />

              {/* Job Meta Data */}
              <div className="flex flex-row items-center space-x-4 mx-4 pt-6 pb-6">
                <CardTitle className="text-md text-nowrap">
                  Job Information
                </CardTitle>
                <div className="w-full">
                  <Separator orientation="horizontal" className="h-[0.5px]" />
                </div>
              </div>

              <JobMetaInfo />

              <div className='py-4' />
            </div>
          </CardContent>
        </Card>

        {/* Notes */}
        <div className='grid grid-cols-7 gap-x-4'>
          <div className='col-span-6'>
            <JobCardNotes />
          </div>

          <div className='col-sapn-1' />
        </div>
      </div>
    </>
  )
}

export default Summary