"use client";

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

// import { useToast } from "@/components/ui/use-toast"

type Props = {}

export const PartSearchbar = (props: Props) => {
    return (
        <div>
            {/* Part Category */}
            <div
                className='flex flex-col space-y-2 items-center pt-2 justify-start relative'
            >
                Part Category
            </div>

            {/* Part Name */}
            <div
            className='flex flex-col space-y-2 items-center pt-2 justify-start relative'
            >

            </div>

            {/* Part Vehicle Model */}
            <div
            className='flex flex-col space-y-2 items-center pt-2 justify-start relative'
            >

            </div>
        </div>
    )
}