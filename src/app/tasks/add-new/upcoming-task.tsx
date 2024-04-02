import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { cn } from '@/lib/utils'



const UpcomingTask = ({ className }: { className?: string }) => {
    return (
        <Card className={cn(className)}>
            <CardHeader>
                <CardTitle className="text-slate-700 text-base">Upcoming Task</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}

export default UpcomingTask