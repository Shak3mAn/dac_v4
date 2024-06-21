"use client";

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

import { useToast } from "@/components/ui/use-toast"
import { useTechnician } from "@/store/users/use-technician"
import { TechnicianDataType } from "@/lib/types/types"

import { Button } from "@/components/ui/button";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from "@/components/ui/input";

import { technicians_data } from "@/lib/data/technician-data";

type Props = {}

export const TechnicianSearch = (props: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<TechnicianDataType[]>([]);
  const [query] = useDebounce(searchTerm, 500);
  const { toast } = useToast()

  const techItem = useTechnician();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    setShowDropdown(true); // Show dropdown on input change
    const results: TechnicianDataType[] = technicians_data.filter(
      (result) =>
        result.fullName.toLowerCase().includes(term.toLowerCase())
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

  const handleResultClick = (result: TechnicianDataType) => {
    setSearchTerm(result.fullName);
    setShowDropdown(false);

    techItem.onAddTempTechnicianItem(result);

    toast({
      title: "Technician: Name selected",
      description: `Name: ${result.fullName}`,
    })
  }
  return (
    <div>
      <div className="text-sm font-medium">
        Technician
      </div>
      {/*  Technician Input */}
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
                      key={result.technicianId}
                      className="px-4 py-1.5 hover:bg-accent cursor-pointer"
                      onClick={() => handleResultClick(result)}
                    >
                      <div className="flex justify-between">
                        <div className="font-normal tracking-tight text-sm">
                          {result.fullName}
                        </div>
                        <div className="text-xs text-muted-foreground font-normal tracking-tight justify-end items-end flex italic">
                          {" "}{result.initial}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-muted-foreground text-sm font-medium tracking-tight flex items-center justify-center w-full p-4 py-8 rounded-md">
                    Technician doesn&apos;t exist.
                  </div>
                )}
              </ScrollArea>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}