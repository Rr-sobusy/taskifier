import React from 'react'

import {
    Card,
    CardContent,
    CardFooter,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress';

import { TbProgressCheck } from "react-icons/tb";



const UpcomingTask = ({ className }: { className?: string }) => {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle className="text-base text-slate-700 dark:text-slate-200 font-extrabold">Upcoming Tasks</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 overflow-hidden">
                <Card className='pt-5'>
                    <CardContent>
                        <h3 className="font-bold text-sm text-slate-700">Create anassssssrwarwarw UI</h3>
                        <h5 className="text-slate-500 text-[.750rem]">Lorem Ipsum safdafafsaf</h5>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-4">
                        <div className="flex gap-2 items-center">
                            <TbProgressCheck className="text-slate-600" size={23} />
                            <h5 className="text-slate-600 text-[.750rem] font-semibold">Progress</h5>
                        </div>
                        <Progress  className="h-[.25rem]" value={50} />
                        <Badge className="bg-blue-100 text-blue-700 py-1" variant="outline">25 Apr 2024</Badge>
                    </CardFooter>
                </Card>
                <Card className='pt-5'>
                    <CardContent>
                        <h3 className="font-bold text-sm text-slate-700">Create anassssssrwarwarw UI</h3>
                        <h5 className="text-slate-500 text-[.750rem]">Lorem Ipsum safdafafsaf</h5>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-4">
                        <div className="flex gap-2 items-center">
                            <TbProgressCheck className="text-slate-600" size={23} />
                            <h5 className="text-slate-600 text-[.750rem] font-semibold">Progress</h5>
                        </div>
                        <Progress  className="h-[.25rem]" value={50} />
                        <Badge className="bg-blue-100 text-blue-700 py-1" variant="outline">25 Apr 2024</Badge>
                    </CardFooter>
                </Card>
                <Card className='pt-5'>
                    <CardContent>
                        <h3 className="font-bold text-sm text-slate-700">Create anassssssrwarwarw UI</h3>
                        <h5 className="text-slate-500 text-[.750rem]">Lorem Ipsum safdafafsaf</h5>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-4">
                        <div className="flex gap-2 items-center">
                            <TbProgressCheck className="text-slate-600" size={23} />
                            <h5 className="text-slate-600 text-[.750rem] font-semibold">Progress</h5>
                        </div>
                        <Progress  className="h-[.25rem]" value={50} />
                        <Badge className="bg-blue-100 text-blue-700 py-1" variant="outline">25 Apr 2024</Badge>
                    </CardFooter>
                </Card>
                <Card className='pt-5'>
                    <CardContent>
                        <h3 className="font-bold text-sm text-slate-700">Create anassssssrwarwarw UI</h3>
                        <h5 className="text-slate-500 text-[.750rem]">Lorem Ipsum safdafafsaf</h5>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-4">
                        <div className="flex gap-2 items-center">
                            <TbProgressCheck className="text-slate-600" size={23} />
                            <h5 className="text-slate-600 text-[.750rem] font-semibold">Progress</h5>
                        </div>
                        <Progress  className="h-[.25rem]" value={50} />
                        <Badge className="bg-blue-100 text-blue-700 py-1" variant="outline">25 Apr 2024</Badge>
                    </CardFooter>
                </Card>
            </CardContent>
            
        </Card>
    )
}

export default UpcomingTask