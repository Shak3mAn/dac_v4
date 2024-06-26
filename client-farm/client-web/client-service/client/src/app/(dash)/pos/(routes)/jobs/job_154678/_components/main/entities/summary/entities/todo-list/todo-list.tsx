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
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator";

import Link from "next/link"
import { MoreHorizontal, TrashIcon } from "lucide-react"
import { AddTask, CellAction, EditTask } from "./entities";

type Props = {}

export const TodoList = (props: Props) => {
    const [activeTab, setActiveTab] = useState("inspection")
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Inspect electrical wiring considering what's been said reconsider",
            completed: false,
            tab: "inspection",
            dueDate: "June 10,2024",
        },
        // {
        //     id: 2,
        //     title: "Schedule HVAC maintenance",
        //     completed: false,
        //     tab: "service",
        //     dueDate: "2023-06-20",
        // },
        // {
        //     id: 3,
        //     title: "Order new air filters",
        //     completed: false,
        //     tab: "service",
        //     dueDate: "2023-06-18",
        // },
        {
            id: 4,
            title: "Clean gutters",
            completed: false,
            tab: "other",
            dueDate: "2023-06-25",
        },
        {
            id: 5,
            title: "Repaint front door",
            completed: false,
            tab: "other",
            dueDate: "2023-07-01",
        },
    ])
    const filteredTasks = useMemo(() => {
        switch (activeTab) {
            case "inspection":
                return tasks.filter((task) => task.tab === "inspection")
            case "service":
                return tasks.filter((task) => task.tab === "service")
            case "other":
                return tasks.filter((task) => task.tab === "other")
            case "finish":
                return tasks.filter((task) => task.tab === "finish")
            default:
                return tasks
        }
    }, [activeTab, tasks])

    const toggleTaskCompletion = (id: number) => {
        setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
    }
    return (
        <Card className="w-full max-w-xl">
            <CardHeader>
                <div className="flex flex-row items-center space-x-4 pt-0 pb-2">
                    <CardTitle className="text-md text-nowrap">
                        Todo-List
                    </CardTitle>
                    <div className="w-full">
                        <Separator orientation="horizontal" className="h-[0.5px]" />
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant={activeTab === "inspection" ? "default" : "outline"}
                        onClick={() => setActiveTab("inspection")}
                    >
                        Inspection
                    </Button>
                    <Button variant={activeTab === "service" ? "default" : "outline"} onClick={() => setActiveTab("service")}>
                        Service
                    </Button>
                    <Button variant={activeTab === "other" ? "default" : "outline"} onClick={() => setActiveTab("other")}>
                        Other
                    </Button>
                    {/* <Button variant={activeTab === "finish" ? "default" : "outline"} onClick={() => setActiveTab("finish")}>
                        Finished
                    </Button> */}
                </div>
            </CardHeader>
            <CardContent className="space-y-4 max-h-[400px] overflow-auto pb-4">
                <ScrollArea className="max-h-[360px] py-2 pr-3">
                    {!filteredTasks.length ? (
                        <>
                            <div className="bg-accent text-muted-foreground text-sm font-medium tracking-tight flex items-center justify-center w-full p-4 py-8 rounded-md">
                                No Tasks Available.
                            </div>
                        </>
                    ) : (
                        <div className="space-y-4">
                            {filteredTasks.map((task) => (
                                <div key={task.id} className="p-4 bg-background cursor-pointer hover:bg-accent rounded-md flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <Checkbox
                                            id={`task-${task.id}`}
                                            checked={task.completed}
                                            onCheckedChange={() => toggleTaskCompletion(task.id)}
                                        />
                                        <label
                                            htmlFor={`task-${task.id}`}
                                            className={`text-sm truncate ${task.completed ? "line-through text-muted-foreground" : ""}`}
                                            title={task.title}
                                        >
                                            {task.title.length > 30 ? task.title.slice(0, 27) + "..." : task.title}
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <EditTask categoryId={task.tab} title={task.title} />
                                        <CellAction data={task} />
                                    </div>
                                </div>

                            ))}
                        </div>
                    )}

                </ScrollArea>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <AddTask />
                <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                    prefetch={false}
                >
                    View All Tasks
                </Link>
            </CardFooter>
        </Card>
    )
}
