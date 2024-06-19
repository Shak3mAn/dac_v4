import { insurer_data } from "@/lib/data/insurer-data";
import { CatInsuranceClientTable } from "./client/cat-insurance-client";
import { CatInsuranceColumn } from "./columns/cat-insurance-column";

export const CatInsuranceTable = () => {
  const formattedInsurance: CatInsuranceColumn[] = insurer_data.map((item) => ({
    id: item.insurerID,
    activeInsuranceJobs: item.activeInsuranceJobs,
    contactNumber: item.contactNumber,
    contactPerson: item.contactPerson,
    email: item.email,
    insurerAmountOfJobs: item.insurerAmountOfJobs,
    insurerName: item.insurerName,
  }));

  return (
    <div className="flex-1 space-y-4 p-2 pt-2">
      <CatInsuranceClientTable data={formattedInsurance} />
    </div>
  );
};
