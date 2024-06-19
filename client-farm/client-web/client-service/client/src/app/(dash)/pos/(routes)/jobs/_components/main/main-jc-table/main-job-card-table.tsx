import { format } from "date-fns";

import { jobs_data } from "@/lib/data/job-data";

import { MainJobCardColumns } from "./columns/main-job-card-column";
import { MainJobCardTableClient } from "./client/main-job-card-table-client";

export const MainJobCardTable = () => {
  const formattedMainJobCard: MainJobCardColumns[] = jobs_data.map((item) => ({
    id: item.jobCard.jobCardID,
    customerName: item.jobCard.customerDetails.name,
    estimatedCompletionTime: format(
      new Date(item.jobCard.estimatedCompletionTime),
      "dd/MM/yyyy 'at' hh:mm aaa"
    ),
    jobPriority: item.jobCard.jobPriority,
    jobType: item.jobCard.jobType,
    paymentStatus: item.jobCard.paymentStatus,
    registrationNumber: item.jobCard.vehicleDetails.licensePlate,
    status: item.jobCard?.status,
    totalCost: item.jobCard.costing.total,
    vehicleMake: item.jobCard.vehicleDetails.make,
    vehicleModel: item.jobCard.vehicleDetails.model,
  }));

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-2 pt-6">
        <MainJobCardTableClient data={formattedMainJobCard} />
      </div>
    </div>
  );
};
