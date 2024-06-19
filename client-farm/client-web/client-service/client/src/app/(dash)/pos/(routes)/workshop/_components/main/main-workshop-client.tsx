"use client";

import { NewWorkshopRequestModal } from "./misc/requests-modal/workshop-requests";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Loader } from "@/components/ui/loader";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ClipboardPenLine, Globe, Info, Truck } from "lucide-react";
import { MdOutlineEngineering } from "react-icons/md";
import { FaTruckPickup } from "react-icons/fa6";
import { ServiceBay } from "./misc/service-bay/service-bay";
import { TechnicianAvailability, WorkshopAppointments, WorkshopRequest } from "./tables";

export const MainWorkshopClient = () => {
    const helpStyling =
        "z-10 h-4 w-4 cursor-pointer text-muted-foreground hover:bg-primary/5 hover:text-primary hover:rounded-full hover:scale-110 transition-all duration-200 ease-in-out";
    return (
        <>
            <div className="flex items-center pb-6 justify-between">
                <Heading
                    title="Workshop"
                    description="Oversee workshop requests and technician actions, track job activity, and perform other managerial duties."
                />

                <NewWorkshopRequestModal />
            </div>

            <div className="mb-6">
                <Separator className="h-[0.5px]" />
            </div>

            {/* Workshop Summary Cards */}
            <div className="grid grid-cols-4 gap-4">
                <Card>
                    <div className="flex items-end justify-end pt-2 pr-2">
                        <Info className={cn(helpStyling)} />
                    </div>
                    <CardContent className="justify-between flex -mt-6">
                        <div className="flex items-center justify-center pt-4">
                            <Globe className="h-14 w-14 text-muted-foreground" />
                        </div>

                        <div className="flex flex-col items-end">
                            <CardHeader className="flex items-end space-y-0 pb-1 -mr-2">
                                <CardTitle className="text-md text-right font-medium capitalize">
                                    Appointments
                                </CardTitle>
                                <CardDescription className="text-xs font-normal">
                                    This Week
                                </CardDescription>
                            </CardHeader>
                            <div className="text-2xl font-bold pr-4">12</div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <div className="flex items-end justify-end pt-2 pr-2">
                        <Info className={cn(helpStyling)} />
                    </div>
                    <CardContent className="justify-between flex -mt-6">
                        <div className="flex items-center justify-center pt-4">
                            <FaTruckPickup className="h-14 w-14 text-muted-foreground" />
                        </div>
                        <div className="flex flex-col items-end">
                            <CardHeader className="flex items-end space-y-0 pb-1 -mr-2">
                                <CardTitle className="text-md font-medium text-right">
                                    Pickups Approved
                                </CardTitle>
                                <CardDescription className="text-xs font-normal">
                                    This Week
                                </CardDescription>
                            </CardHeader>
                            <div className="text-2xl font-bold pr-4">2</div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <div className="flex items-end justify-end pt-2 pr-2">
                        <Info className={cn(helpStyling)} />
                    </div>
                    <CardContent className="justify-between flex -mt-6">
                        <div className="flex items-center justify-center pt-4">
                            <ClipboardPenLine className="h-14 w-14 text-muted-foreground" />
                        </div>
                        <div className="flex flex-col items-end">
                            <CardHeader className="flex items-end space-y-0 pb-1 -mr-2">
                                <CardTitle className="text-md font-medium text-right">
                                    Active Job Cards
                                </CardTitle>
                                <CardDescription className="text-xs font-normal">
                                    This Week
                                </CardDescription>
                            </CardHeader>
                            <div className="text-2xl font-bold pr-4">21</div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <div className="flex items-end justify-end pt-2 pr-2">
                        <Info className={cn(helpStyling)} />
                    </div>
                    <CardContent className="justify-between flex -mt-6">
                        <div className="flex items-center justify-center pt-4">
                            <MdOutlineEngineering className="h-14 w-14 text-muted-foreground" />
                        </div>
                        <div className="flex flex-col items-end">
                            <CardHeader className="flex items-end space-y-0 pb-1 -mr-2">
                                <CardTitle className="text-md text-right font-medium">
                                    Technical Personnel
                                </CardTitle>
                                <CardDescription className="text-xs font-normal">
                                    available
                                </CardDescription>
                            </CardHeader>
                            <div className="text-2xl font-bold pr-4">8</div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Service Bay & Technician Availability */}
            <div className="mt-4 grid gap-4 md:grid-cols-8">
                <div className="col-span-5">
                    <ServiceBay />
                </div>
                <div className="col-span-3">
                    <TechnicianAvailability />
                </div>
            </div>

            {/* Appointments */}
            <div className="mt-4">
                <WorkshopAppointments />
            </div>

            {/* Requests */}
            <div className="mt-4">
                <WorkshopRequest />
            </div>
        </>
    );
};
