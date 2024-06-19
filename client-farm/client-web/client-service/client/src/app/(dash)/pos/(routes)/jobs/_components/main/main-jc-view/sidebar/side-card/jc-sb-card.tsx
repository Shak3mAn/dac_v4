"use client"

import React from "react"
import { Truck, Car, Umbrella } from 'lucide-react';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { GeneralTooltip } from "@/components/misc/general-tooltip";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface JCCardViewCardProps {

}

export const JCCardItem: React.FC<JCCardViewCardProps> = () => {
    const helpingStyling = "= h-5 w-5 text-muted-foreground"
    return (
        <Card className="hover:bg-accent-hover data-[state=active]:bg-accent p-4 hover:scale-100 active:scale-95 transition-all ease-in-out duration-200 cursor-pointer">
            <div className="grid grid-cols-4 gap-1 mb-1">
                <div className="flex flex-row  items-center justify-start space-x-2 pl-1">
                    <div className="text-nowrap text-primary text-xl tracking-tight font-semibold flex">
                        Job ID:
                    </div>
                    <CardTitle className="flex text-sm text-nowrap font-normal text-muted-foreground">
                        # JC12345
                    </CardTitle>
                </div>
            </div>

            <div className="flex space-x-1.5 px-1">
                <div className="flex items-center justify-center bg-primary/5 bg-opacity-35 px-2 py-1.5 rounded-md cursor-pointer">
                    <span className="text-xs tracking-tight text-primary font-medium leading-none">
                        Commercial
                    </span>
                </div>
                <div className="flex items-center justify-center bg-primary bg-opacity-10 px-2 py-1.5 rounded-md cursor-pointer">
                    <span className="text-xs tracking-tight text-muted font-normal leading-none">
                        KAA 123B
                    </span>
                </div>
            </div>


            <div className="flex items-end justify-end pt-2">
                <div className="flex items-center justify-center bg-primary/5 bg-opacity-20 px-2 py-1.5 rounded-md cursor-pointer">
                    <span className="text-xs tracking-tight text-primary font-medium leading-none">
                        Select
                    </span>
                </div>
            </div>
        </Card>
    )
}