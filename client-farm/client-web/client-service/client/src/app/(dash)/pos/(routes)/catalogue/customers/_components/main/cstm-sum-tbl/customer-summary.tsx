import { customerDetails } from "@/lib/data/customer_data";

import { CustomerSummaryClient } from "./clients/customer-summary-client";
import { CustomerSummaryColumn } from "./columns/customer-summary-columns";

const CustomersSummary = () => {
  const formattedCustomers: CustomerSummaryColumn[] = customerDetails.map(
    (item) => ({
      id: item.customerId,
      customerName: item.customerName,
      customerInitial: item.customerInitial,
      customerEmail: item.customerEmail,
      customerPhoneNumber: item.customerPhone,
      vehicles: item.vehicles.length,
    })
  );

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-2 pt-6">
        <CustomerSummaryClient data={formattedCustomers} />
      </div>
    </div>
  );
};

export default CustomersSummary;