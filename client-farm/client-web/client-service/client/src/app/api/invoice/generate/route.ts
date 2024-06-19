import { NextRequest } from "next/server";

import { generatePdfService } from "@/service/invoice/server/generatePdfService";

export async function POST(req: NextRequest) {
    const result = await generatePdfService(req)
    return result
}