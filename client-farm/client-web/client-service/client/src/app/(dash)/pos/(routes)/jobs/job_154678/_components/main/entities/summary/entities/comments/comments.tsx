"use client"

import { useState, useMemo } from "react"
import { 
    Card, 
    CardHeader, 
    CardTitle, 
    CardContent, 
    CardFooter 
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area";
import { AddComment } from "./entities/add-comment"
import Link from "next/link"

type Props = {}

export const CustomerShopComments = (props: Props) => {
    const [activeTab, setActiveTab] = useState("all")
    const comments = [
        {
            id: 1,
            name: "John Doe",
            date: "2023-06-10 at 10:30 AM",
            text: "This product is amazing! I highly recommend it to anyone looking for a high-quality solution.",
            sentiment: "customer",
        },
        {
            id: 2,
            name: "Jane Smith",
            date: "2023-06-09 at 3:45 PM",
            text: "The product works as expected, but the delivery was a bit slow. Overall, I'm satisfied with my purchase.",
            sentiment: "cutomer",
        },
        {
            id: 3,
            name: "Michael Johnson",
            date: "2023-06-08 at 9:20 AM",
            text: "I'm disappointed with this product. It didn't meet my expectations and I'm considering returning it.",
            sentiment: "shop",
        },
        {
            id: 4,
            name: "Emily Davis",
            date: "2023-06-07 at 2:10 PM",
            text: "This is the best product I've ever used! It has exceeded all my expectations and I'm so glad I made this purchase.",
            sentiment: "customer",
        },
        {
            id: 5,
            name: "David Wilson",
            date: "2023-06-06 at 11:00 AM",
            text: "The product works fine, but I'm not sure it's worth the price. I might look for a more affordable alternative next time.",
            sentiment: "shop",
        },
    ]
    const filteredComments = useMemo(() => {
        switch (activeTab) {
            case "customer":
                return comments.filter((comment) => comment.sentiment === "customer")
            case "shop":
                return comments.filter((comment) => comment.sentiment === "shop")
            default:
                return comments
        }
    }, [activeTab, comments])
    return (
        <Card className="w-full max-w-xl">
            <CardHeader className="">
                <div className="flex flex-row items-center space-x-4 pt-0 pb-2">
                    <CardTitle className="text-md text-nowrap">
                        Comments
                    </CardTitle>
                    <div className="w-full">
                        <Separator orientation="horizontal" className="h-[0.5px]" />
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant={activeTab === "all" ? "default" : "outline"} onClick={() => setActiveTab("all")}>
                        All
                    </Button>
                    <Button variant={activeTab === "customer" ? "default" : "outline"} onClick={() => setActiveTab("customer")}>
                        Customer
                    </Button>
                    <Button variant={activeTab === "shop" ? "default" : "outline"} onClick={() => setActiveTab("shop")}>
                        Shop
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-4 max-h-[400px] overflow-auto pb-4">
                <ScrollArea className="h-[360px] py-2 pr-3">
                    {!filteredComments.length ? (
                        <>
                            <div className="bg-accent text-muted-foreground text-sm font-medium tracking-tight flex items-center justify-center w-full p-4 py-8 rounded-md">
                                No Comments.
                            </div>
                        </>
                    ) : (
                    <div className="space-y-4">
                        {filteredComments.map((comment) => (
                            <div key={comment.id} className="px-2 py-4 bg-accent rounded-md shadow-sm hover:bg-accent-hover duration-200 transition-all ease-in-out">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="font-semibold tracking-tight text-sm">{comment.name}</div>
                                    <div className="text-xs text-muted-foreground tracking-tight">{comment.date}</div>
                                </div>
                                <p className="text-sm tracking-tight">{comment.text}</p>
                            </div>
                        ))}
                    </div>
                    )}
                </ScrollArea>
            </CardContent>
            <CardFooter className="flex justify-end items-center">
                <AddComment />
            </CardFooter>
        </Card>
    )
}