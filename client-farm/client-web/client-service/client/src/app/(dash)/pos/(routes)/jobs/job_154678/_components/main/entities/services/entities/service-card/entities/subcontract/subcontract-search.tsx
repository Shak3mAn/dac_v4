"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { useDebounce } from "use-debounce";
import { useToast } from "@/components/ui/use-toast";
import { useSubcontractor } from "@/store/users/use-subcontractor";
import { SubcontractorDataType, SubcontractorService } from "@/lib/types/types";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { formatDateTime } from "@/lib/utils/date-time-format";
import { subcontractor_data } from "@/lib/data/subcontractor-data";

type Props = {};

export const SubcontractSearch = (props: Props) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const serviceDropdownRef = useRef<HTMLDivElement>(null);

    const [showDropdown, setShowDropdown] = useState(false);
    const [showServiceDropdown, setShowServiceDropdown] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSubcontractor, setSelectedSubcontractor] = useState<SubcontractorDataType | null>(null);
    const [serviceSearchTerm, setServiceSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [serviceLoading, setServiceLoading] = useState(false);
    const [query] = useDebounce(searchTerm, 500);
    const [serviceQuery] = useDebounce(serviceSearchTerm, 500);
    const { toast } = useToast();
    const currentDateTime = formatDateTime(new Date());

    const subcontractItem = useSubcontractor();

    const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);
        setShowDropdown(true); // Show dropdown on input change
        setLoading(true); // Set loading state
    }, []);

    const handleServiceSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setServiceSearchTerm(term);
        setShowServiceDropdown(true); // Show dropdown on input change
        setServiceLoading(true); // Set loading state
    }, []);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setShowDropdown(false);
        }
        if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(event.target as Node)) {
            setShowServiceDropdown(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);

    useEffect(() => {
        if (query) {
            setLoading(false); // Reset loading state after query debounce
        }
    }, [query]);

    useEffect(() => {
        if (serviceQuery) {
            setServiceLoading(false); // Reset loading state after serviceQuery debounce
        }
    }, [serviceQuery]);

    const searchResults = useMemo(() => {
        if (!query) return [];
        return subcontractor_data.filter((result) =>
            result.subcontractorName.toLowerCase().includes(query.toLowerCase())
        );
    }, [query]);

    const serviceSearchResults = useMemo(() => {
        if (!selectedSubcontractor || !serviceQuery) return [];
        return selectedSubcontractor.servicesOffered?.filter((service) =>
            service.serviceName.toLowerCase().includes(serviceQuery.toLowerCase())
        ) || [];
    }, [selectedSubcontractor, serviceQuery]);

    const handleResultClick = (result: SubcontractorDataType) => {
        setSearchTerm(result.subcontractorName);
        setSelectedSubcontractor(result);
        setShowDropdown(false);

        toast({
            title: `Subcontractor: ${result.subcontractorName} selected.`,
            description: `${currentDateTime}`,
        });
    };

    const handleServiceResultClick = (service: SubcontractorService) => {
        setServiceSearchTerm(service.serviceName);
        setShowServiceDropdown(false);

        if (selectedSubcontractor) {
            const selectedService = {
                ...selectedSubcontractor,
                servicesOffered: [service],
            };
            subcontractItem.onAddTempSubcontractorItem(selectedService);

            toast({
                title: `Service: ${service.serviceName} selected.`,
                description: `${currentDateTime}`,
            });
        }
    };

    return (
        <div>
            <div className="text-sm font-medium">Subcontractor</div>
            {/* Subcontractor Input */}
            <div className="flex flex-col space-y-2 items-center pt-2 justify-start relative">
                <Input
                    type="text"
                    placeholder="Search Subcontractor"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full"
                />
                {showDropdown && searchTerm.length > 0 && (
                    <div
                        ref={dropdownRef}
                        className="absolute border border-input top-[40px] z-50 w-full bg-background text-primary rounded-md shadow-lg"
                    >
                        <div className="max-h-[400px] overflow-y-auto">
                            <ScrollArea className="max-h-[300px]">
                                {loading ? (
                                    <div className="text-muted-foreground text-sm font-medium tracking-tight flex items-center justify-center w-full p-4 py-8 rounded-md">
                                        Loading...
                                    </div>
                                ) : (
                                    searchResults.length > 0 ? (
                                        searchResults.map((result) => (
                                            <div
                                                key={result.subcontractorID}
                                                className="px-4 py-1.5 hover:bg-accent cursor-pointer"
                                                onClick={() => handleResultClick(result)}
                                            >
                                                <div className="flex flex-col space-y-1">
                                                    <div className="font-normal tracking-tight text-sm">{result.subcontractorName}</div>
                                                    <div className="text-xs text-muted-foreground font-normal tracking-tight flex">
                                                        {result.address.length > 45 ? result.address.slice(0, 42) + "..." : result.address}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-muted-foreground text-sm font-medium tracking-tight flex items-center justify-center w-full p-4 py-8 rounded-md">
                                            Subcontractor doesn&apos;t exist.
                                        </div>
                                    )
                                )}
                            </ScrollArea>
                        </div>
                    </div>
                )}
            </div>

            <>
                <div className="text-sm font-medium mt-4">Services Offered</div>
                {/* Services Offered Input */}
                <div className="flex flex-col space-y-2 items-center pt-2 justify-start relative">
                    <Input
                        type="text"
                        placeholder="Search Service"
                        value={serviceSearchTerm}
                        onChange={handleServiceSearch}
                        className="w-full"
                        disabled={!selectedSubcontractor}
                    />
                    {showServiceDropdown && serviceSearchTerm.length > 0 && (
                        <div
                            ref={serviceDropdownRef}
                            className="absolute border border-input top-[40px] z-50 w-full bg-background text-primary rounded-md shadow-lg"
                        >
                            <div className="max-h-[400px] overflow-y-auto">
                                <ScrollArea className="max-h-[300px]">
                                    {serviceLoading ? (
                                        <div className=" text-muted-foreground text-sm font-medium tracking-tight flex items-center justify-center w-full p-4 py-8 rounded-md">
                                            Loading...
                                        </div>
                                    ) : (
                                        serviceSearchResults.length > 0 ? (
                                            serviceSearchResults.map((service) => (
                                                <div
                                                    key={service.serviceID}
                                                    className="px-4 py-1.5 hover:bg-accent cursor-pointer"
                                                    onClick={() => handleServiceResultClick(service)}
                                                >
                                                    <div className="flex flex-col space-y-1">
                                                        <div className="font-normal tracking-tight text-sm">{service.serviceName}</div>
                                                        <div className="text-xs text-muted-foreground font-normal tracking-tight flex">
                                                            {service.description.length > 45 ? service.description.slice(0, 42) + "..." : service.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="text-muted-foreground text-sm font-medium tracking-tight flex items-center justify-center w-full p-4 py-8 rounded-md">
                                                Service doesn&apos;t exist.
                                            </div>
                                        )
                                    )}
                                </ScrollArea>
                            </div>
                        </div>
                    )}
                </div>
            </>

        </div>
    );
};
