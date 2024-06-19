"use client";

import { cn } from "@/lib/utils";
import { usePosSecondarySidebarToggle, useSidebarToggle } from "@/store/use-sidebar-toggle";
// import PosNavbar from "./_components/navbar/navbar";
// import { MainSidebar } from "./_components/sidebar/main-sidebar";
import React from "react";
// import { DashFooter } from "./_components/footer/dash-footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import Providers from "@/lib/providers/providers";
// import { SecondarySidebar } from "./_components/sidebar/secondary-sidebar";
import { useRouteSelect } from "@/store/pos/general";
import { DashFooter, MainSidebar, PosNavbar, SecondarySidebar } from "./_components"

const PosLayout = ({ children }: { children: React.ReactNode }) => {
    const sidebarToggle = useSidebarToggle();
    const routeSelect = useRouteSelect();

    React.useLayoutEffect(() => {
        sidebarToggle.onClose();
    }, [])

    return (
        <>
            <Providers>
                <div>
                    <div className="flex flex-row h-full scrollbar-none">
                        <div className={cn("hidden fixed md:flex h-full w-auto ")}>
                            <MainSidebar />
                        </div>
                        {/* <div
            className={cn("",
              routeSelect.isRoute && "w-[250px]"
                
            )}
          /> */}
                        {/* <div
                            className={cn(
                                "hidden md:flex h-full w-auto ",
                                routeSelect.isRoute &&
                                sidebarToggle.isOpen &&
                                "fixed ml-[250px]",
                                routeSelect.isRoute &&
                                !sidebarToggle.isOpen &&
                                "fixed ml-[4rem]",
                                !routeSelect.isRoute && "ml-0 hidden"
                            )}
                        >
                            <SecondarySidebar />
                        </div> */}
                        <aside
                            id="navigation"
                            className={cn(
                                "h-full w-full flex-grow transition-all ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-1000 data-[state=open]:duration-1000 inset-y-0 left-0  data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left fade-in-100 fade-out-100",
                                sidebarToggle.isOpen ? "ml-[250px]" : "ml-[4rem]",
                            )}
                        >
                            <PosNavbar />
                            <div className="pb-8">{children}</div>
                            <DashFooter />
                            <ScrollToTop />
                        </aside>
                    </div>
                </div>
            </Providers>
        </>
    );
};

export default PosLayout;
