"use client";

import { usePathname, useRouter } from "next/navigation";
import React, {
    ElementRef,
    useEffect,
    useRef,
    ReactNode,
    MutableRefObject,
} from "react";
import { useMediaQuery } from "usehooks-ts";

import Link from "next/link";
import { Montserrat } from "next/font/google";
import { motion, useAnimation, Variants } from "framer-motion";

import { cn } from "@/lib/utils";
import { usePosJCCardViewSidebarToggle } from "@/store/use-sidebar-toggle";
import { useJobCardToggle } from "@/store/jobs/use-jc-toggle"
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { jobs_data } from "@/lib/data/job-data"

import { DatePicker } from "./date-picker/date-picker"
import { JCToggle } from "./jc-toggle/jc-toggle";
import { JCCardItem } from "./side-card/jc-sb-card"

interface JCSearchSidebarProps {

}

export const JCSearchSidebar: React.FC<JCSearchSidebarProps> = () => {
    let isTabletMid = useMediaQuery("(max-width: 768px)");
    const sidebarRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const pathname = usePathname();
    const sidebarToggle = usePosJCCardViewSidebarToggle();
    const jcToggle = useJobCardToggle();
    const router = useRouter();

    const NavAnimationVariants: Variants = isTabletMid
        ? {
            open: {
                x: 0,
                width: "16rem",
                transition: {
                    damping: 40,
                    delay: 0,
                },
            },
            closed: {
                x: -250,
                width: 0,
                transition: {
                    damping: 40,
                    delay: 0.15,
                },
            },
        }
        : {
            open: {
                width: "24rem",
                transition: {
                    damping: 40,
                    delay: 0,
                    duration: 0.5,
                },
            },
            closed: {
                width: 0,
                transition: {
                    damping: 40,
                    delay: 0.15,
                    duration: 0.5,
                },
            },
        };

    return (
        <>
            <motion.div
                ref={sidebarRef}
                variants={NavAnimationVariants}
                initial={{
                    x: isTabletMid ? -250 : 0,
                }}
                animate={sidebarToggle.isOpen ? "open" : "closed"}
                className={cn("space-y-4 pt-1 hidden md:flex md:flex-col h-full w-full bg-background bg-opacity-100 text-primary overflow-hidden", sidebarToggle.isOpen ? "border-r border-primary/10 border-opacity-20" : "hidden")}
            >
                {sidebarToggle.isOpen ?
                    (
                        <>
                            {/* Sidebar Open */}
                            <div className="px-3 pb-1 pt-0 flex-1">
                                <div className="text-lg tracking-tight font-semibold pt-1 ml-1 text-primary/90 opacity-95 justify-start items-center flex">
                                    Job Cards
                                </div>
                                <div className="py-1 items-center w-full justify-center flex pb-3">
                                    <Input className="bg-primary/5" placeholder="Search" />
                                </div>

                                <div className="pt-2 pb-4">
                                    <Separator className="h-[0.5px]" />
                                </div>

                                <div className="flex item-center justify-center">
                                    <DatePicker />
                                </div>

                                <JCToggle />
                                <div>
                                    <Separator className="h-[0.5px]" />
                                </div>

                                <ScrollArea className="h-screen my-2 px-2">
                                    {jcToggle.isInProgress ? (
                                        <div className="space-y-2">
                                            {jobs_data.map((item) => (
                                                <div key={item.jobCard.jobCardID} className="">
                                                    {item.jobCard.status === "InProgress" && (
                                                        <JCCardItem />
                                                    )}
                                                </div>
                                            ))}
                                        </div>) : (
                                        <div className="space-y-2">
                                            {jobs_data.map((item) => (
                                                <div key={item.jobCard.jobCardID}>
                                                    {item.jobCard.status === "Completed" && (<JCCardItem />)}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </ScrollArea>

                                <div className="pt-2 pb-4">
                                    <Separator className="h-[0.5px]" />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                        </>
                    )
                }
            </motion.div>
        </>
    )
}