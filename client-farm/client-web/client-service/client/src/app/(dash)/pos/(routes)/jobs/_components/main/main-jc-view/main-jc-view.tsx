import React from 'react'

import { usePosJCCardViewSidebarToggle } from "@/store/use-sidebar-toggle";
import { cn } from '@/lib/utils';
import { JCSearchSidebar } from './sidebar/search-jc-side';
import JCViewToggle from './card-view/jc-toggle';
import JCCardView from './card-view/jc-card-view';

type Props = {}

const MainJCCardView = (props: Props) => {

  const sidebarToggle = usePosJCCardViewSidebarToggle();

  return (
    <div className='pt-2'>
      <div className={cn(
        "flex",
        sidebarToggle.isOpen ? "space-x-4" : "space-x-4"
      )}>
        {/* Sidebar */}
        <JCSearchSidebar />
        <div className='space-y-1.5 flex flex-col w-full'>
          <div className='flex space-x-2 items-center'>
            <JCViewToggle />
            <span className='text-md text-primary font-semibold tracking-tight'>
              Card View
            </span>
          </div>
          <div className='w-full flex'>
            <JCCardView />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainJCCardView;