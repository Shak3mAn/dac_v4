import { NextRequest } from "next/server";

import { exportInvoiceService } from "@/service/invoice/server/exportInvoiceService";

export async function POST(req: NextRequest) {
  const result = await exportInvoiceService(req);
  return result;
}
