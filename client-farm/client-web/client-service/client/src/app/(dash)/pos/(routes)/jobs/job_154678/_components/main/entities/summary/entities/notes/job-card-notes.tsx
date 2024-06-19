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

import Link from "next/link"

import {
    AddNotes,
    DeleteNotes,
    EditNote
} from "./entities"

type Props = {}

export const JobCardNotes = (props: Props) => {
    const [activeTab, setActiveTab] = useState("notes")
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: "Meeting Notes",
            summary: "Discussed new product roadmap and timeline and much more I believe so pleease be considerate.",
            content: "Discussed various ways to integrate the product with existing products. In particular, section 3-14A Product-B integration.",
            date: "2023-06-10 at 10:30 AM",
        },
        {
            id: 2,
            title: "Brainstorming Session",
            summary: "Came up with 5 new feature ideas for the app.",
            content: "Voluptate voluptate mollit pariatur ad voluptate reprehenderit velit minim sint mollit cillum deserunt qui consectetur.",
            date: "2023-06-09 at 3:45 PM",
        },
        {
            id: 3,
            title: "Daily Standup",
            summary: "Reviewed progress on current sprint tasks.",
            content: "Cupidatat ea officia enim et nostrud dolor.",
            date: "2023-06-08 at 9:20 AM",
        },
        {
            id: 4,
            title: "Project Planning",
            summary: "Outlined the scope and timeline for the new project.",
            content: "Qui sit pariatur occaecat ad pariatur sint.",
            date: "2023-06-07 at 2:10 PM",
        },
        {
            id: 5,
            title: "Client Feedback",
            summary: "Discussed client feedback and action items.",
            content: "Occaecat duis sint Lorem id duis et.",
            date: "2023-06-06 at 11:00 AM",
        },
        {
            id: 6,
            title: "Daily Standup",
            summary: "Reviewed progress on current sprint tasks.",
            content: "Cupidatat ea officia enim et nostrud dolor.",
            date: "2023-06-08 at 9:20 AM",
        },
        {
            id: 7,
            title: "Project Planning",
            summary: "Outlined the scope and timeline for the new project.",
            content: "Qui sit pariatur occaecat ad pariatur sint.",
            date: "2023-06-07 at 2:10 PM",
        },
        {
            id: 8,
            title: "Client Feedback",
            summary: "Discussed client feedback and action items.",
            content: "Occaecat duis sint Lorem id duis et.",
            date: "2023-06-06 at 11:00 AM",
        },
    ])


    return (
        <>
            <Card className="w-full max-w-2xl">
                <CardHeader className="">
                    <div className="flex flex-row items-center space-x-4 pt-0 pb-2">
                        <CardTitle className="text-md text-nowrap">
                            Notes
                        </CardTitle>
                        <div className="w-full">
                            <Separator orientation="horizontal" className="h-[0.5px]" />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant={activeTab === "notes" ? "default" : "outline"} onClick={() => setActiveTab("notes")}>
                            Notes
                        </Button>
                        <AddNotes />
                    </div>
                </CardHeader>
                <CardContent className="space-y-6 max-h-[500px] overflow-auto pb-4">
                    <ScrollArea className="h-[450px] pt-3 pb-3">
                        {activeTab === "notes" && (
                            <div className="mx-4">
                                {!notes.length ? (
                                    <>
                                        <div className="bg-accent text-muted-foreground text-sm font-medium tracking-tight flex items-center justify-center w-full p-4 py-8 rounded-md">
                                            No Notes.
                                        </div>
                                    </>
                                ) : (
                                    <div className="grid gap-4 z-50">
                                        {notes.map((note) => (
                                            <div
                                                key={note.id}
                                                className="p-4 bg-accent rounded-md shadow-sm hover:bg-accent-hover hover:scale-105 duration-200 transition-all ease-in-out"
                                            >
                                                <div className="flex justify-between items-center mb-2">
                                                    <div className="font-semibold tracking-tight text-sm ">
                                                        {note.title}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground tracking-tight">
                                                        {note.date}
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <p className="text-sm tracking-tight truncate cursor-pointer 
                                                    hover:underline hover:underline-offset-4">
                                                        {note.summary.length > 45 ? note.summary.slice(0, 41) + "..." : note.summary}
                                                    </p>
                                                    <div className="flex items-center gap-2">
                                                        <EditNote
                                                            content={note.content}
                                                            summary={note.summary}
                                                            title={note.title}
                                                        />
                                                        <DeleteNotes
                                                            data={note}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </ScrollArea>
                </CardContent>
            </Card>
        </>
    )
}