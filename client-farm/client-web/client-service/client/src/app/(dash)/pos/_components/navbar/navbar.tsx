"use client";

import * as React from "react";
// import { useMediaQuery } from "usehooks-ts";
import { ThemeToggle } from "./theme-toggle/theme-toggle";
import MenuToggle from "./menu-toggle/menu-toggle";
import PosNotifications from "./notifications/notification";
import PosInbox from "./inbox/inbox";
import PosSearch from "./search/search";
import PosAvatar from "./avatar/avatar";
import { InvoiceJCToggle } from "./misc/invoice-jc";
import { FullscreenToggle } from "./fullscreen/fullscreen";
import { PosOptions } from "./options/pos-options";
// import { Separator } from "@/components/ui/separator";

import { useRouteSelect } from "@/store/pos/general";

interface NavbarProps {
  // You can define any props if needed
}

const PosNavbar: React.FC<NavbarProps> = () => {
  //   const isTabletMid = useMediaQuery("(max-width: 768px)");

  const routeSelect = useRouteSelect();

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="border-b shadow-sm w-full sticky top-0 bg-background z-[50]">
      <div className="flex h-16 items-center p-4">
        <div className="flex justify-between w-full">
          <div className="flex">
            <div className="pt-1">
              <MenuToggle />
            </div>

            {/* Separator */}
            <div className="flex justify-center items-center mx-2 md:hidden">
              {/* <Separator orientation="vertical" /> */}
            </div>

            {/* Greetings */}
            <div className="pl-4 pr-5">
              {!routeSelect.isRoute && (
                <>
                  {hour >= 12 ? (
                    hour >= 16 ? (
                      <div className="flex flex-col">
                        <h3 className="text-lg font-bold tracking-tight text-card-foreground">
                          Good Evening
                        </h3>
                        <p className="text-sm font-normal text-muted-foreground">
                          John
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col">
                        <h3 className="text-lg font-bold tracking-tight text-card-foreground">
                          Good Afternoon
                        </h3>
                        <p className="text-sm font-normal text-muted-foreground">
                          John
                        </p>
                      </div>
                    )
                  ) : (
                    <div className="flex flex-col">
                      <h3 className="text-lg font-bold tracking-tight text-card-foreground">
                        Good Morning
                      </h3>
                      <p className="text-sm font-normal text-muted-foreground">
                        John
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
            <div>
              {/* Separator */}
              <div className="hidden md:justify-center md:items-center md:mx-2 md:flex">
                {/* <Separator orientation="vertical" /> */}
              </div>

              <div>
                <PosSearch />
              </div>
            </div>
          </div>

          {/* Mobile Sidebar & Search Bar*/}

          {/* Avatar, Notification & Others... */}
          <div className="hidden ml-auto sm:flex items-center space-x-4">
            <div className="mx-1">
              {/* <Separator orientation="vertical" /> */}
            </div>
            {/* <InvoiceJCToggle /> */}
            <PosOptions />
            <PosInbox />
            <PosNotifications />
            <ThemeToggle />
            <FullscreenToggle />
            <div className="pl-4 pr-6">
              <PosAvatar />
            </div>
          </div>

          {/* ETC */}
        </div>
      </div>
    </div>
  );
};

export default PosNavbar;
