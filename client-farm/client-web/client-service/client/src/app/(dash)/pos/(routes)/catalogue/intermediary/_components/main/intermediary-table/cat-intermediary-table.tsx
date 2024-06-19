import { broker_data } from "@/lib/data/broker_data";
import { CatIntermediaryClientTable } from "./clients/cat-intermediary-client";
import { CatIntermediaryColumn } from "./columns/cat-intermediary-column";

export const CatIntermediaryTable = () => {
  const formattedIntermediary: CatIntermediaryColumn[] = broker_data.map(
    (item) => ({
      id: item.brokerID,
      amountOfReferrals: item.amountOfReferrals,
      brokerName: item.brokerName,
      brokerPriorityIndex: item.brokerPriorityIndex,
      contactNumber: item.contactNumber,
      contactPerson: item.contactPerson,
      workEmail: item.workEmail,
    })
  );

  return (
    <div className="flex-1 space-y-4 p-2 pt-2">
      <CatIntermediaryClientTable data={formattedIntermediary} />
    </div>
  );
};
