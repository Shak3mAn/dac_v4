import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Loader } from "@/components/ui/loader";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BadgeHelp, MoreHorizontal } from "lucide-react";

export const InboxClient = () => {
    return (
        <>
            <div className="flex items-center pb-6 justify-between">
                <Heading
                    title="Inbox"
                    description="Inbox."
                />

                <Button variant="default" size="default">
                    <div className="flex items-center">
                        <MoreHorizontal className="h-4 w-4 mr-2" />
                    </div>
                </Button>
            </div>

            <div>
                <Separator />
            </div>
        </>
    )
}