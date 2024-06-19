import React from 'react'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button";


type Props = {}

const ActivityLog = (props: Props) => {
  return (
    <div className="mx-6 my-4">
    <Card>
      <CardHeader>
        <CardTitle>Activity Log</CardTitle>
        <CardDescription>View your recent activity and updates.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20">
          <div className="grid gap-1 text-sm relative">
            <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
            <div className="font-medium">John Doe joined a new project</div>
            <div className="text-gray-500 dark:text-gray-400">2 hours ago</div>
          </div>
          <div className="grid gap-1 text-sm relative">
            <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
            <div className="font-medium">Jane Doe completed a task</div>
            <div className="text-gray-500 dark:text-gray-400">4 hours ago</div>
          </div>
          <div className="grid gap-1 text-sm relative">
            <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
            <div className="font-medium">John Doe commented on a post</div>
            <div className="text-gray-500 dark:text-gray-400">6 hours ago</div>
          </div>
          <div className="grid gap-1 text-sm relative">
            <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
            <div className="font-medium">Jane Doe uploaded a new file</div>
            <div className="text-gray-500 dark:text-gray-400">8 hours ago</div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View all activity
        </Button>
      </CardFooter>
    </Card>
  </div>
)
}
export default ActivityLog