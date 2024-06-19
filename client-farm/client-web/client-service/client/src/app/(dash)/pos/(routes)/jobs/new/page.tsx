"use client";

import React from "react";
import {
    ArrowRight,
    ClipboardCheck,
    Info,
    MousePointerClick,
    Pencil,
    ShoppingCart,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Heading } from "@/components/ui/heading";
import { Loader } from "@/components/ui/loader";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CustomerDetails, JobCardSBToggle, JobCardServicesSummary, PosJobSearchSidebar, VehicleDetails } from "./_components";

import { usePosSidebarToggle } from "@/store/use-sidebar-toggle";
import { GeneralTooltip } from "@/components/misc/general-tooltip";
import { general_services } from "@/lib/data/general-services";
import { service_data } from "@/lib/data/service-data";

interface Service {
    id: string;
    name: string;
}

interface Category {
    catId: string;
    category: string;
    services: Service[];
}

const NewJobCardPage = () => {
    const [selectedCategory, setSelectedCategory] = React.useState<string>("");
    const [selectedSrvc, setSelectedSrvc] = React.useState<string>("");
    const sidebarToggle = usePosSidebarToggle();

    const helpStyling =
        "z-10 cursor-pointer text-muted-foreground hover:bg-primary/0 hover:text-primary hover:rounded-full hover:scale-110 transition-all duration-200 ease-in-out -mt-2";

    React.useEffect(() => {
        setSelectedSrvc("");
    }, []);

    const handleClickService = () => {
        console.log("Selected Service");
    };

    const handleMainCategory = ({ itemId }: { itemId: string }) => {
        console.log("Main Category Selected: ", itemId);
        setSelectedCategory(itemId);
    };

    const handleSelectedCategory = () => {
        console.log("Selected Category Selected: ");
    };
    return (
        <>
            <div className="scrollbar-hide">
                <div className="flex flex-col space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between">
                        <Heading
                            title="Job Card"
                            section="New Job"
                            description="Create a new job card for the customer"
                        />
                        <div className="flex flex-col space-y-2 justify-start items-end">
                            <div>
                                <span className="text-xl font-bold leading-none tracking-tight">
                                    Vehicle Reg No. :
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-md font-normal text-muted-foreground">
                                    KAA 123B
                                </span>
                                <div className="-mt-2">
                                    {/* <CustomerDetails /> */}
                                    <VehicleDetails />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Separator />
                    {/* Tags | Job Card Summary */}
                    <div className="flex items-center justify-between px-4">
                        <div className="flex space-x-2">
                            <div className="flex items-center justify-center bg-primary/10 bg-opacity-20 px-5 py-1.5 rounded-full cursor-pointer">
                                <span className="text-xs tracking-tight text-primary font-medium leading-none">
                                    # Painting
                                </span>
                            </div>
                            <div className="flex items-center justify-center bg-primary/10 bg-opacity-20 px-5 py-1.5 rounded-full cursor-pointer">
                                <span className="text-xs tracking-tight text-primary font-medium leading-none">
                                    # Maintenance
                                </span>
                            </div>
                            <div className="flex items-center justify-center bg-primary/10 bg-opacity-20 px-5 py-1.5 rounded-full cursor-pointer">
                                <span className="text-xs tracking-tight text-primary font-medium leading-none">
                                    # Body Work
                                </span>
                            </div>
                        </div>

                        <JobCardServicesSummary />
                    </div>
                    {/* Customer Description */}
                    <div>
                        <Accordion
                            type="single"
                            collapsible
                            className="pt-0 px-4 space-y-2 flex flex-col w-full"
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <div className="flex space-x-2">
                                        <span className="text-2xl font-bold tracking-tight">
                                            Customer Description :
                                        </span>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className={cn(helpStyling)}
                                        >
                                            <GeneralTooltip label="Edit">
                                                <Pencil className="h-3 w-3" />
                                            </GeneralTooltip>
                                        </Button>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <span className="text-sm text-muted-foreground leading-normal w-4/5">
                                        The vehicle presents several maintenance concerns warranting
                                        attention. Among these are anomalous noises and a subtle
                                        vibration observed during operation, necessitating a
                                        comprehensive inspection. Additionally, the current exterior
                                        paint exhibits signs of deterioration, prompting a
                                        discussion on the prospect of a new paint job. Furthermore,
                                        there are critical body-related issues, notably the front
                                        right fender requiring repair and a substantial dent on the
                                        left side demanding immediate attention and resolution.
                                    </span>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <Separator className="h-[0.5px] hidden" />
                    {/* Services POS */}
                    <div
                        className={cn(
                            "flex",
                            sidebarToggle.isOpen ? "space-x-4" : "space-x-4"
                        )}
                    >
                        <PosJobSearchSidebar />
                        <div className="space-y-4 flex flex-col">
                            <div className="flex space-x-2 items-center">
                                <JobCardSBToggle />
                                <span className="text-lg font-semibold tracking-tight">
                                    Categories
                                </span>
                            </div>
                            <div className="grid grid-cols-4 gap-3 w-full">
                                {general_services.map((service) => (
                                    <div key={service.catId}>
                                        <div
                                            className="bg-primary/30 min-h-[250px] h-full min-w-[200px] px-6 flex grow flex-col rounded-lg cursor-pointer shadow-md hover:scale-105 hover:shadow-lg active:scale-95 transition-all ease-in-out duration-300 justify-between"
                                            onClick={() =>
                                                handleMainCategory({ itemId: service.catId })
                                            }
                                        >
                                            <div className="pt-6">
                                                <span className="text-md text-primary font-semibold">
                                                    {service.category}
                                                </span>
                                            </div>
                                            <div className="flex-col-reverse justify-end items-end flex pb-6">
                                                {service_data.map((item) => (
                                                    <div key={item.catId}>
                                                        {service.catId === item.catId && (
                                                            <div className="space-x-1.5 flex items-center justify-center">
                                                                <ArrowRight className="h-4 w-4" />
                                                                <span className="text-sm font-normal text-primary">
                                                                    View All {item.services.length}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="py-2 w-full">
                                <Separator className="h-[0.5px]" />
                            </div>
                            {/* Selected Category Service List */}
                            <div>
                                {service_data.map((category) => (
                                    <div key={category.catId}>
                                        {selectedCategory === category.catId ? (
                                            <div className="space-y-4 flex flex-col">
                                                <div className="flex items-center">
                                                    <span className="text-lg font-semibold tracking-tight">
                                                        Services
                                                    </span>
                                                </div>
                                                <div className="grid grid-cols-4 gap-3 w-full">
                                                    {category.services.map((service) => (
                                                        <div key={service.id}>
                                                            <div className="bg-background rounded-lg min-h-[200px] h-full px-4 min-w-[150px] border border-primary flex flex-col cursor-pointer shadow-sm hover:scale-105 hover:shadow-lg active:scale-95 transition-all ease-in-out duration-300 justify-between">
                                                                <div className="pt-4">
                                                                    <span className="text-md text-primary font-medium">
                                                                        {service.name}
                                                                    </span>
                                                                </div>
                                                                <div className="flex-col-reverse justify-end items-end flex pb-4">
                                                                    <div className="space-x-1.5 flex items-center justify-center">
                                                                        <MousePointerClick className="h-4 w-4" />
                                                                        <span className="text-sm font-normal text-primary">
                                                                            Add To Cart
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <></>
                                        )}{" "}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewJobCardPage;
