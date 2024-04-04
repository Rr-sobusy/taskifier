import React from 'react'

import {
    Card,
    CardContent,
    CardFooter,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'



const UpcomingTask = ({ className }: { className?: string }) => {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle className="text-base text-slate-700 dark:text-slate-200 font-extrabold">Upcoming Tasks</CardTitle>
            </CardHeader>
            <CardContent>
                <Card className='pt-5'>
                    <CardContent>
                        <Badge variant="outline" className="py-1 bg-green-200">Doing</Badge>

                    </CardContent>
                    <CardFooter className="flex justify-between">
                    <Badge variant="outline" className="py-1 bg-accent">04 Apr</Badge>
                    </CardFooter>
                </Card>
            </CardContent>
        </Card>
    )
}

export default UpcomingTask