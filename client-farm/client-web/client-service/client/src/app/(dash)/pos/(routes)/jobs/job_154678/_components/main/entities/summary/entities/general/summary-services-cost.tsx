import React from 'react'

import { Separator } from "@/components/ui/separator";

import { jc_card_view_eg } from "@/lib/data/general/jc-card-view"

type Props = {}

export const SummaryServicesCost = (props: Props) => {
    return (
        <div className='grid grid-cols-3 gap-x-2 pt-2 pb-4'>
            <div />
            <div />
            <div className="flex flex-col w-full space-y-1 pr-6">
                {/* Totals */}
                <div className='flex flex-row justify-between items-center pb-1'>
                    <span className='text-muted-foreground font-normal text-sm tracking-tight'>
                        Labor:
                    </span>
                    <span className='text-muted-foreground tracking-tight text-sm font-normal'>
                        ${jc_card_view_eg.jobCard.costing.labor}
                    </span>
                </div>
                <div className='flex flex-row justify-between items-center pb-1'>
                    <span className='text-muted-foreground font-normal text-sm tracking-tight'>
                        Parts:
                    </span>
                    <span className='text-muted-foreground tracking-tight text-sm font-normal'>
                        ${jc_card_view_eg.jobCard.costing.parts}
                    </span>
                </div>
                <div className='flex flex-row justify-between items-center pb-1'>
                    <span className='text-muted-foreground text-sm font-normal tracking-tight'>
                        VAT + Tax:
                    </span>
                    <span className='text-muted-foreground text-sm tracking-tight font-normal'>
                        ${jc_card_view_eg.jobCard.costing.vat_tax}
                    </span>
                </div>
                <div>
                    <Separator orientation='horizontal' className='h-[0.5px]' />
                </div>
                <div className='flex flex-row justify-between items-center pb-1'>
                    <span className='text-primary font-semibold text-sm tracking-tight'>
                        Total:
                    </span>
                    <span className='text-primary tracking-tight text-sm font-semibold'>
                        ${jc_card_view_eg.jobCard.costing.total}
                    </span>
                </div>
            </div>
        </div>
    )
}