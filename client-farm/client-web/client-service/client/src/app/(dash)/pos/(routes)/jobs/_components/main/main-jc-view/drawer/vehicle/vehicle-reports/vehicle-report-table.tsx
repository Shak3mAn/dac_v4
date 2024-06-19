import { format } from "date-fns";

import { jobs_data } from "@/lib/data/job-data";

import { VehicleReportClient } from "./client/report-client";
import { VehicleReportColumn } from "./column/report-column";

const VehicleServiceReport = () => {
  const formattedVehicles: VehicleReportColumn[] = jobs_data.map((item) => ({
    id: item.jobCard.jobCardID,
    serviceName: item.jobCard.servicesDetails[0].name,
    jobType: item.jobCard.jobType,
    startDateTime: format(new Date(item.jobCard.startDateTime), "dd/MM/yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-2 pt-2">
        <VehicleReportClient data={formattedVehicles} />
      </div>
    </div>
  );
};

export default VehicleServiceReport;