import { NextRequest } from "next/server";

import { exportJobCardService } from "@/service/jc/server/exportJCService";

export async function POST(req: NextRequest) {
    const result = await exportJobCardService(req)
    return result
}