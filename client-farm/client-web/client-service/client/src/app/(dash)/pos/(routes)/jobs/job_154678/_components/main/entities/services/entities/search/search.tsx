"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { useJobCardServices } from "@/store/jobs/use-jc";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { JCServiceDetail } from "@/lib/types/types"


export const ServiceSearch = () => {
    const router = useRouter();
    const initialRender = useRef(true);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<JCServiceDetail[]>([]);
    const [query] = useDebounce(searchTerm, 500);
    const [showDropdown, setShowDropdown] = useState(false);

    const jobCardServices = useJobCardServices()
    const { toast } = useToast()

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);
        setShowDropdown(true); // Show dropdown on input change
        const results: JCServiceDetail[] = [
            {
                id: "SRV12",
                name: "Brake System Repair",
                description: "Replace Brake Pads",
                cost: {
                    amount: 100,
                    currency: "USD",
                },
                quantity: 1,
                status: "InProgress",
                authorization: "Authorized",
                category: "Brake Services",
                technicians: [
                    {
                        id: "Tech002",
                        name: "Lisa Johnson",
                    },
                ],
            },
            {
                id: "SRV2",
                name: "Oil Change",
                description: "Engine Oil Replacement",
                cost: {
                    amount: 50,
                    currency: "USD",
                },
                quantity: 1,
                status: "Completed",
                authorization: "Authorized",
                category: "Engine Services",
                technicians: [
                    {
                        id: "Tech002",
                        name: "Lisa Johnson",
                    },
                ],
            },
            {
                id: "SRV14",
                name: "Oil Change",
                description: "Engine Oil Replacement",
                cost: {
                    amount: 50,
                    currency: "USD",
                },
                quantity: 1,
                status: "Pending",
                authorization: "Pending",
                category: "Engine Services",
                technicians: [
                    {
                        id: "Tech002",
                        name: "Lisa Johnson",
                    },
                ],

            },
            {
                id: "SRV18",
                name: "Oil Change",
                description: "Engine Oil Replacement",
                cost: {
                    amount: 50,
                    currency: "USD",
                },
                quantity: 1,
                status: "InProgress",
                authorization: "Authorized",
                category: "Engine Services",
                technicians: [
                    {
                        id: "Tech002",
                        name: "Lisa Johnson",
                    },
                ],
            },
        ].filter((result) =>
            result.name.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(results);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => { }, [searchTerm]);

    const handleResultClick = (result: JCServiceDetail) => {
        setSearchTerm(result.name);
        setShowDropdown(false);

        jobCardServices.onAddServiceItem(result);
        toast({
            title: "Service: Service selected",
            description: `Name: ${result.name}`,
        })

    };

    return (
        <div className="flex flex-col space-y-2 items-center pt-1 justify-center relative">
            <Input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearch}
                className="w-[300px] bg-primary/5 bg-opacity-45"
            />
            {showDropdown && searchTerm.length > 0 && (
                <div ref={dropdownRef} className="absolute border border-input top-[40px] z-50 w-[300px] bg-background text-primary rounded-md shadow-lg">
                    <div className="max-h-[400px] overflow-y-auto">
                        <ScrollArea className="max-h-[300px]">
                            {searchResults.length > 0 ? (
                                searchResults.map((result) => (
                                    <div
                                        key={result.id}
                                        className="px-4 py-3 hover:bg-accent cursor-pointer"
                                        onClick={() => handleResultClick(result)}
                                    >
                                        <div className="flex justify-between">
                                            <div className="font-semibold tracking-tight text-base">
                                                {result.name}
                                            </div>
                                            <div className="text-xs text-muted-foreground font-medium tracking-tight justify-end items-end flex">
                                                {result.category.replace(" Services", "")}
                                            </div>
                                        </div>
                                         <div className="text-muted-foreground text-xs tracking-tight flex">
                                            <span>
                                                #{result.id} -
                                            </span>
                                            <span className="ml-1 truncate">
                                                {result.description.length > 30 ? result.description.slice(0, 27) + "..." : result.description}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-muted-foreground text-sm font-medium tracking-tight flex items-center justify-center w-full p-4 py-8 rounded-md">
                                    Service doesn&apos;t exist.
                                </div>
                            )}
                        </ScrollArea>
                    </div>
                </div>
            )}
        </div>
    );
};
