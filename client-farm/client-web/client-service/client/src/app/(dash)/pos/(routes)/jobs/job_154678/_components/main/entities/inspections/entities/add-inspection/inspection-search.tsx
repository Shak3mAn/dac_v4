"use client";

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { useDebounce } from "use-debounce";
import { useToast } from "@/components/ui/use-toast";
import { useInspection } from "@/store/inventory/use-service";
import { InspectionListType } from "@/lib/types/types";
import { Button } from "@/components/ui/button";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from "@/components/ui/input";
import { inspection_checklist_data } from "@/lib/data/inspection-checklist-data";

type Props = {};

export const InspectionSearch = (props: Props) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [query] = useDebounce(searchTerm, 500);
    const { toast } = useToast();
    const inspectionItem = useInspection();

    const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setShowDropdown(true);
    }, []);

    const searchResults = useMemo(() => {
        if (!query) return [];
        return inspection_checklist_data.filter(result =>
            result.name.toLowerCase().includes(query.toLowerCase())
        );
    }, [query]);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setShowDropdown(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);

    const handleResultClick = useCallback((result: InspectionListType) => {
        const cleanedName = result.name.replace("Inspection", "").trim();
        setSearchTerm(cleanedName);
        setShowDropdown(false);

        inspectionItem.onAddTempInspectionItem(result);

        toast({
            title: "Inspection: Inspection selected",
            description: `Name: ${cleanedName} Inspection`,
        });
    }, [inspectionItem, toast]);

    return (
        <div>
            <div className="text-sm font-medium">Inspection List</div>
            <div className="flex flex-col space-y-2 items-center pt-2 justify-start relative">
                <Input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full"
                />
                {showDropdown && searchTerm.length > 0 && (
                    <div ref={dropdownRef} className="absolute border border-input top-[40px] z-50 w-full bg-background text-primary rounded-md shadow-lg">
                        <ScrollArea className="max-h-[300px]">
                            {searchResults.length > 0 ? (
                                searchResults.map(result => {
                                    const cleanedName = result.name.replace("Inspection", "").trim();
                                    return (
                                        <div
                                            key={result.id}
                                            className="px-4 py-1.5 hover:bg-accent cursor-pointer"
                                            onClick={() => handleResultClick(result)}
                                        >
                                            <div className="flex justify-between">
                                                <div className="font-normal tracking-tight text-sm">
                                                    {cleanedName}
                                                </div>
                                                <div className="text-xs text-muted-foreground font-normal tracking-tight justify-end items-end flex italic">
                                                    #{" "}{result.id}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="text-muted-foreground text-sm font-medium tracking-tight flex items-center justify-center w-full p-4 py-8 rounded-md">
                                    Inspection category doesn&apos;t exist.
                                </div>
                            )}
                        </ScrollArea>
                    </div>
                )}
            </div>
        </div>
    );
};
