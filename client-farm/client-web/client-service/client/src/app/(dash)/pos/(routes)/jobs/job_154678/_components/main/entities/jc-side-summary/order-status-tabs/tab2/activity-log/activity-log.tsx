"use client"

import React from 'react'
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Props = {}

const ActivityLog = (props: Props) => {
    const [loading, setLoading] = useState(false);

    return (
        <div className="flex flex-col w-full space-y-1.5">
            <div className="flex flex-row items-center space-x-4 pb-1">
                <span className="text-primary text-xs tracking-normal uppercase font-bold mb-1">
                    Activities
                </span>
                <div className="w-full">
                    <Separator
                        orientation="horizontal"
                        className="h-[0.5px]"
                    />
                </div>
            </div>

            <div className="grid gap-3 relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20">
                <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                    <div className="font-medium text-sm tracking-tight">John Doe joined a new project</div>
                    <div className="text-muted-foreground text-xs">June 10, 2024 - 2 hours ago</div>
                </div>
                <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                    <div className="font-medium text-sm tracking-tight">Jane Doe completed a task</div>
                    <div className="text-muted-foreground text-xs">June 10, 2024 - 4 hours ago</div>
                </div>
                <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                    <div className="font-medium text-sm tracking-tight">John Doe commented on a post</div>
                    <div className="text-muted-foreground text-xs">June 10, 2024 - 6 hours ago</div>
                </div>
                <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                    <div className="font-medium text-sm tracking-tight">Jane Doe uploaded a new file</div>
                    <div className="text-muted-foreground text-xs">June 10, 2024 - 8 hours ago</div>
                </div>
            </div>

            <div className='pt-2 flex items-center justify-center w-full'>
                <Button
                    disabled={loading}
                    variant={"outline"}
                    size="default"
                    className='w-full'
                >
                    <div className='flex items-center'>
                        View all activities
                    </div>
                </Button>
            </div>
        </div>
    )
}
export default ActivityLog