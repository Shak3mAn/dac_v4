"use client";

import { Separator } from "@/components/ui/separator";

import { JobCardSearchColumn, columns } from "../columns/search-columns";
import { SearchDataTable } from "@/components/ui/search-data-table";
import { DataTable } from "@/components/ui/data-table";

interface JobCardSearchClientProps {
  data: JobCardSearchColumn[];
}

export const JobCardSearchClient: React.FC<JobCardSearchClientProps> = ({
  data,
}) => {
  return (
    <>
      <Separator className="h-[0.5px]" />
      <SearchDataTable
        searchKey1="customerName"
        searchKey2="customerPhoneNumber"
        searchKey3="registrationNumber"
        columns={columns}
        data={data}
      />
    </>
  );
};
