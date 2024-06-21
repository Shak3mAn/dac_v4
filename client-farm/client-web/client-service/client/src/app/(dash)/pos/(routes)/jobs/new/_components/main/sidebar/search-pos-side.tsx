"use client";

import { usePathname, useRouter } from "next/navigation";
import {
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
import { usePosSidebarToggle } from "@/store/use-sidebar-toggle";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { general_service_cat_data } from "@/lib/data/service-data";

interface PosSidebarProps {
  // Add any additional props if necessary
}

export const PosJobSearchSidebar: React.FC<PosSidebarProps> = () => {
  let isTabletMid = useMediaQuery("(max-width: 768px)");
  const sidebarRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const pathname = usePathname();
  const sidebarToggle = usePosSidebarToggle();
  const router = useRouter();

  // useEffect(() => {}, []);

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
          width: "16rem",
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
        className={cn("space-y-4 pt-3 hidden md:flex md:flex-col h-full w-full bg-background bg-opacity-100 text-primary overflow-hidden", sidebarToggle.isOpen ? "border-r border-primary/10 border-opacity-20" : "hidden")}
      >
        {sidebarToggle.isOpen ? (
          <>
            {/* Sidebar Opened */}
            <div className="px-3 pb-1 pt-1 flex-1">
              <div className="py-2 items-center w-full justify-center flex">
                <Input className="bg-primary/5" placeholder="Search" />
              </div>
              <div className="text-sm tracking-tight font-bold pt-3 pb-3 ml-1 text-primary/90 opacity-95 justify-start items-center flex">
                Categories
              </div>

              <Separator className="h-[0.5px]" />

              <ScrollArea  className="h-screen my-2">
                <div className="space-y-[1px] pr-4 py-2">
                  {general_service_cat_data.map((service) => (
                    <div
                      key={service.catId}
                      className={cn(
                        "text-sm text-primary/95 flex px-2 py-2 w-full justify-start font-normal cursor-pointer hover:text-primary/95 hover:bg-primary/10 rounded transition-all ease-in-out duration-300",
                        service.catId === pathname
                          ? "text-primary/20 bg-background/10"
                          : "text-primary"
                      )}
                    >
                      <div className="flex items-center flex-1">
                        {service.category}
                      </div>
                    </div>
                  ))}
                </div>
                <ScrollBar hidden />
              </ScrollArea>
              <Separator className="h-[0.5px]" />
            </div>
          </>
        ) : (
          <div></div>
        )}
      </motion.div>
    </>
  );
};
