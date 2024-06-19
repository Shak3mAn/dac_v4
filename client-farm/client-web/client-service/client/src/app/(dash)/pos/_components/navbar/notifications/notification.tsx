"use client";

import * as React from "react";
import { Bell, CheckCheck } from "lucide-react";
import { cva } from "class-variance-authority";
import * as Dropdown from "@radix-ui/react-dropdown-menu";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const notification = [
  {
    id: 1,
    name: "John Doe",
    initials: "JD",
    vehicle: "KBC 123Z",
    message: "new job card",
    date: "6 December 2023",
    time: "7:15 PM",
    color: "bg-[#0a4c0a]",
    new: true,
    job: true,
  },
  {
    id: 2,
    name: "Alice Wambui",
    initials: "AW",
    vehicle: "KBC 123Z",
    message: "vehicle inspection report done",
    date: "7 December 2023",
    time: "10:45 AM",
    color: "bg-[#d1b009]",
    new: true,
    shop: true,
  },
  {
    id: 3,
    name: "Stanley Omondi",
    initials: "SO",
    vehicle: "KAA 123C",
    message: "request for spares",
    date: "12 December 2023",
    time: "2:19 PM",
    color: "bg-[#d10909]",
    new: true,
    shop: true,
  },
  {
    id: 4,
    name: "Stanley Omondi",
    initials: "SO",
    vehicle: "KAA 123C",
    message: "paint shortage",
    date: "19 December 2023",
    time: "1:45 PM",
    color: "bg-[#ba09d1]",
    new: true,
    shop: true,
  },
  {
    id: 5,
    name: "Maurice Mulinge",
    initials: "MM",
    vehicle: "KAB 123C",
    message: "new client",
    date: "20 December 2023",
    time: "1:45 PM",
    color: "bg-[#d16309]",
    new: true,
    customer: true,
  },
  {
    id: 6,
    name: "John Doe",
    initials: "JD",
    vehicle: "KBC 123Z",
    message: "new job card",
    date: "6 December 2023",
    time: "7:15 PM",
    color: "bg-[#b3d109]",
    new: true,
    job: true,
  },
  {
    id: 7,
    name: "Alice Wambui",
    initials: "AW",
    vehicle: "KBC 123Z",
    message: "vehicle inspection report done",
    date: "7 December 2023",
    time: "10:45 AM",
    color: "bg-[#d10909]",
    new: true,
    shop: true,
  },
  {
    id: 8,
    name: "Stanley Omondi",
    initials: "SO",
    vehicle: "KAA 123C",
    message: "request for spares",
    date: "12 December 2023",
    time: "2:19 PM",
    color: "bg-[#09d1c4]",
    new: true,
    shop: true,
  },
  {
    id: 9,
    name: "Stanley Omondi",
    initials: "SO",
    vehicle: "KAA 123C",
    message: "paint shortage",
    date: "19 December 2023",
    time: "1:45 PM",
    color: "bg-[#091ad1]",
    new: true,
    shop: true,
  },
  {
    id: 10,
    name: "Maurice Mulinge",
    initials: "MM",
    vehicle: "KAB 123C",
    message: "new client",
    date: "20 December 2023",
    time: "1:45 PM",
    color: "bg-[#d10984]",
    new: true,
    customer: true,
  },
  {
    id: 11,
    name: "John Doe",
    initials: "JD",
    vehicle: "KBC 123Z",
    message: "new job card",
    date: "6 December 2023",
    time: "7:15 PM",
    color: "bg-[#b609d1]",
    new: true,
    job: true,
  },
  {
    id: 12,
    name: "Alice Wambui",
    initials: "AW",
    vehicle: "KBC 123Z",
    message: "vehicle inspection report done",
    date: "7 December 2023",
    time: "10:45 AM",
    color: "bg-[#09d18b]",
    new: true,
    shop: true,
  },
  {
    id: 13,
    name: "Stanley Omondi",
    initials: "SO",
    vehicle: "KAA 123C",
    message: "request for spares",
    date: "12 December 2023",
    time: "2:19 PM",
    color: "bg-[#099cd1]",
    new: true,
    shop: true,
  },
  {
    id: 14,
    name: "Stanley Omondi",
    initials: "SO",
    vehicle: "KAA 123C",
    message: "paint shortage",
    date: "19 December 2023",
    time: "1:45 PM",
    color: "bg-[#a909d1]",
    new: true,
    shop: true,
  },
  {
    id: 15,
    name: "Maurice Mulinge",
    initials: "MM",
    vehicle: "KAB 123C",
    message: "new client",
    date: "20 December 2023",
    time: "1:45 PM",
    color: "bg-[#05b2e7]",
    new: true,
    customer: true,
  },
];

interface NotificationsProps {}

interface NotificationsState {
  loading: boolean;
  open: boolean;
  read: boolean;
  viewAll: boolean;
  customers: boolean;
  jobs: boolean;
  shop: boolean;
}

const PosNotifications: React.FC<NotificationsProps> = () => {
  const [state, setState] = React.useState<NotificationsState>({
    loading: false,
    open: false,
    read: false,
    viewAll: false,
    customers: false,
    jobs: false,
    shop: false,
  });

  React.useEffect(() => {
    if (state.read) {
      setState((prevState) => ({ ...prevState, read: false }));
    }
  }, [state.read]);

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <div>
            <>
              <div className="absolute animate-ping ml-8 -mt-1 z-20 h-3 w-3 rounded-full bg-red-800 opacity-90" />
              <div className="absolute ml-8 -mt-1 z-20 h-3 w-3 rounded-full bg-red-800 opacity-90" />
            </>
            <Button variant="outline" size="icon">
              <Bell className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </div>
        </PopoverTrigger>

        <PopoverContent className="pb-2 px-4 pt-2  flex flex-col w-screen sm:w-[420px] sm:ml-0 h-full max-h-[550px]">
          <div className="flex justify-between items-start w-full">
            <Label className="px-2 py-1.5 text-lg font-semibold">
              Notifications
            </Label>

            <div className="flex cursor-pointer px-3 hover:scale-100 hover:bg-primary/5 dark:hover:bg-[#d7d6d6] dark:hover:bg-opacity-15 hover:bg-opacity-10 transition-all ease-in-out duration-200 active:scale-95 rounded-lg">
              <div className="py-2">
                <CheckCheck className="w-[1rem] h-[1rem] text-[#120210] dark:text-white " />
              </div>
              <Label className="cursor-pointer px-2 pl-1 py-1.5 text-[13px] text-[#120210] dark:text-white font-medium hover:font-semibold">
                Read
              </Label>
            </div>
          </div>

          {/* Notifications */}
          <div className="pt-1 border-t border-b border-primary/10 pb-2">
            <Tabs defaultValue="all">
              <TabsList className="grid w-full grid-cols-4 h-9 rounded-lg px-1 bg-primary/5">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:shadow-sm px-[2px] py-1 items-start rounded-md text-[13px] font-sans font-semibold"
                >
                  View all
                </TabsTrigger>
                <TabsTrigger
                  value="customers"
                  className="data-[state=active]:shadow-sm px-[2px] py-1 items-start rounded-md text-[13px] font-sans font-semibold"
                >
                  Clients
                </TabsTrigger>
                <TabsTrigger
                  value="jobs"
                  className="data-[state=active]:shadow-sm px-[2px] py-1 items-start rounded-md text-[13px] font-sans font-semibold"
                >
                  Jobs
                </TabsTrigger>
                <TabsTrigger
                  value="shop"
                  className="data-[state=active]:shadow-sm px-[2px] py-1 items-start rounded-md text-[13px] font-sans font-semibold"
                >
                  Shop
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <ScrollArea className="h-[350px]">
                  {notification.map((notification) => (
                    <div
                      className="py-3 border-b border-primary/10 flex items-center"
                      key={notification.id}
                    >
                      <div className="flex space-x-2 px-1">
                        <div
                          className={cn(
                            "flex items-center rounded-lg justify-center text-primary px-2 text-xs font-bold  uppercase bg-background border border-primary/85"
                          )}
                        >
                          {notification.initials}
                        </div>
                        <div className="flex flex-col space-y-1">
                          <div className="text-primary pt-0 text-sm items-start flex">
                            <span className="font-semibold">
                              {notification.name}{" "}
                            </span>
                            <span className="font-normal pl-1">
                              {notification.message}
                            </span>
                          </div>
                          <div className="text-xs font-normal text-muted-foreground flex w-full">
                            <span>{notification.date}</span>
                            <span className="pl-1">
                              &#8226; {notification.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>
              <TabsContent value="customers">
                <ScrollArea className="h-[350px]">
                  {notification.map((notification) => (
                    <div
                      className="py-3 border-b border-primary/10 flex items-center"
                      key={notification.id}
                    >
                      <div className="flex space-x-2 px-1">
                        <div
                          className={cn(
                            "flex items-center rounded-lg justify-center text-primary px-2 text-xs font-bold uppercase bg-background border border-primary/85"
                          )}
                        >
                          {notification.initials}
                        </div>
                        <div className="flex flex-col space-y-1">
                          <div className="text-primary pt-0 text-sm items-start flex">
                            <span className="font-semibold">
                              {notification.name}{" "}
                            </span>
                            <span className="font-normal pl-1">
                              {notification.message}
                            </span>
                          </div>
                          <div className="text-xs font-normal text-muted-foreground flex w-full">
                            <span>{notification.date}</span>
                            <span className="pl-1">
                              &#8226; {notification.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>
              <TabsContent value="jobs">
                <ScrollArea className="h-[350px]">
                  {notification.map((notification) => (
                    <div
                      className="py-3  border-b border-primary/10 flex items-center"
                      key={notification.id}
                    >
                      <div className="flex space-x-2 px-1">
                        <div
                          className={cn(
                            "flex items-center rounded-lg justify-center text-primary px-2 text-xs font-bold  uppercase bg-background border border-primary/85"
                          )}
                        >
                          {notification.initials}
                        </div>
                        <div className="flex flex-col space-y-1">
                          <div className="text-primary pt-0 text-sm items-start flex">
                            <span className="font-semibold">
                              {notification.name}{" "}
                            </span>
                            <span className="font-normal pl-1">
                              {notification.message}
                            </span>
                          </div>
                          <div className="text-xs font-normal text-muted-foreground flex w-full">
                            <span>{notification.date}</span>
                            <span className="pl-1">
                              &#8226; {notification.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>
              <TabsContent value="shop">
                <ScrollArea className="h-[350px]">
                  {notification.map((notification) => (
                    <div
                      className="py-3 border-b border-primary/10 flex items-center"
                      key={notification.id}
                    >
                      <div className="flex space-x-2 px-1">
                        <div
                          className={cn(
                            "flex items-center rounded-lg justify-center text-primary px-2 text-xs font-bold  uppercase bg-background border border-primary/85"
                          )}
                        >
                          {notification.initials}
                        </div>
                        <div className="flex flex-col space-y-1">
                          <div className="text-primary pt-0 text-sm items-start flex">
                            <span className="font-semibold">
                              {notification.name}{" "}
                            </span>
                            <span className="font-normal pl-1">
                              {notification.message}
                            </span>
                          </div>
                          <div className="text-xs font-normal text-muted-foreground flex w-full">
                            <span>{notification.date}</span>
                            <span className="pl-1">
                              &#8226; {notification.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </div>

          {/* Options */}
          <div className="pt-2">
            <Button variant="outline" size="default" className="w-full">
              View All Notifications
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default PosNotifications;
