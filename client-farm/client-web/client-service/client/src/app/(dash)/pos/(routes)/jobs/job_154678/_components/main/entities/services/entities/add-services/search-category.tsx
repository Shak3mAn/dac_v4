"use client";

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

import { useToast } from "@/components/ui/use-toast"
import { useGeneralSrvCat } from "@/store/inventory/use-service"
import { GeneralServiceCategoryType } from "@/lib/types/types"

import { Button } from "@/components/ui/button";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from "@/components/ui/input";
import { general_service_cat_data } from "@/lib/data/service-data"
import { general_services } from "@/lib/data/general-services"
import { Separator } from '@/components/ui/separator';

type Props = {}

export const SearchCategory = (props: Props) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    const [showDropdown, setShowDropdown] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<GeneralServiceCategoryType[]>([]);
    const [query] = useDebounce(searchTerm, 500);
    const { toast } = useToast()

    const generalSrvCat = useGeneralSrvCat();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);
        setShowDropdown(true); // Show dropdown on input change
        const results: GeneralServiceCategoryType[] = general_service_cat_data.filter(
            (result) =>
                result.category.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(results);
    }

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

    const handleResultClick = (result: GeneralServiceCategoryType) => {
        setSearchTerm(result.category);
        setShowDropdown(false);

        generalSrvCat.onAddTempGeneralSrvCat(result);

        toast({
            title: "New Service: Category selected",
            description: `Category: ${result.category}`,
        })
    }

    const handleButtonClick = (result: GeneralServiceCategoryType) => {
        setSearchTerm(result.category);
        setShowDropdown(false);

        generalSrvCat.onAddTempGeneralSrvCat(result);

        toast({
            title: "New Service: Category selected",
            description: `Category: ${result.category}`,
        })
    }

    return (
        <>
            <div>
                <div className="text-sm font-medium">
                    Category / Key
                </div>
                {/* Search Category Input */}
                <div className='flex flex-col space-y-2 items-center pt-2 justify-start relative'>
                    <Input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full"
                    />
                    {showDropdown && searchTerm.length > 0 && (
                        <div ref={dropdownRef} className="absolute border border-input top-[40px] z-50 w-full bg-background text-primary rounded-md shadow-lg">
                            <div className="max-h-[400px] overflow-y-auto">
                                <ScrollArea className="max-h-[300px]">
                                    {searchResults.length > 0 ? (
                                        searchResults.map((result) => (
                                            <div
                                                key={result.catId}
                                                className="px-4 py-1.5 hover:bg-accent cursor-pointer"
                                                onClick={() => handleResultClick(result)}
                                            >
                                                <div className="flex justify-between">
                                                    <div className="font-normal tracking-tight text-sm">
                                                        {result.category}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground font-normal tracking-tight justify-end items-end flex italic">
                                                        #{" "}{result.catId}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-muted-foreground text-sm font-medium tracking-tight flex items-center justify-center w-full p-4 py-8 rounded-md">
                                            Category doesn&apos;t exist.
                                        </div>
                                    )}
                                </ScrollArea>
                            </div>
                        </div>
                    )}
                </div>

                {/* Button Category */}
                <div className='grid grid-cols-3 gap-2 mt-6 pr-4'>
                    {general_services.map((cat) => (
                        <div
                            key={cat.catId}
                        >
                            <Button
                                variant={searchTerm !== cat.category ? `outline` : `default`}
                                size={"default"}
                                onClick={() => handleButtonClick(cat)}
                            >
                                {cat.category}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}