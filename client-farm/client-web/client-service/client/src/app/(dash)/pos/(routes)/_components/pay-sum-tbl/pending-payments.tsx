import { format } from "date-fns";

import { payment_transactions } from "@/lib/data/pay-process-data";

import { PendingPaymentClient } from "./clients/pending-payments-client";
import { PendingPaymentColumn } from "./columns/pending-payments-columns";

const Payments = () => {
  const formattedPayments: PendingPaymentColumn[] = payment_transactions.map(
    (item) => ({
      id: item.invoiceID,
      customerName: item.invoiceDetails.customerDetails.name,
      totalCost: item.invoiceDetails.totalCost.amount,
      outstandingPayments: item.outstandingPayments,
      paymentStatus: item.invoiceDetails.paymentStatus,
      paymentDueDate: format(new Date(item.paymentDueDate), "dd/MM/yyyy"),
    })
  );

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-2 pt-6">
        <PendingPaymentClient data={formattedPayments} />
      </div>
    </div>
  );
};

export default Payments;
