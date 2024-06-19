import { formatter } from "@/lib/utils";

import { jobs_data } from "@/lib/data/job-data";

import { JobSummaryColumn } from "./columns/job-summary-columns";
import { JobSummaryClient } from "./clients/job-summary-clients";

const JobSummary = () => {
  const formattedJobs: JobSummaryColumn[] = jobs_data.map((item) => ({
    id: item.jobCard.jobCardID,
    jobPriority: item.jobCard.jobPriority,
    status: item.jobCard.status || "",
    vehicleReg: item.jobCard.vehicleDetails.licensePlate,
  }));
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-2 pt-6">
        <JobSummaryClient data={formattedJobs} />
      </div>
    </div>
  );
};

export default JobSummary;
