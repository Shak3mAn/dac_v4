import { NextRequest } from "next/server";

import { generatedJobCardPdfService } from "@/service/jc/server/generatePdfService";

export async function POST(req: NextRequest) {
  const result = await generatedJobCardPdfService(req);
  return result;
}
