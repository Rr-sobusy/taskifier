import React from 'react'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress';

import { TbProgressCheck } from "react-icons/tb";

const data = [{
    title: 'Create anassssssrwarwarw UI',
    description: 'Lorem Ipsum safdafafsaf',
    progress: 25
}, {
    title: 'Create anassssssrwarwarw UI',
    description: 'Lorem Ipsum safdafafsaf',
    progress: 79
}, {
    title: 'Create anassssssrwarwarw UI',
    description: 'Lorem Ipsum safdafafsaf',
    progress: 39
}]

const UpcomingTask = ({ ...rest }) => {
    return (
        <Card {...rest}>
            <CardHeader>
                <CardTitle className="text-base text-slate-700 dark:text-slate-200 font-extrabold">Upcoming Tasks</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 overflow-hidden">

                {
                    data.map((content, index) => (<Card key={index} className='pt-5'>
                        <CardContent>
                            <h3 className="font-bold text-sm text-slate-700">{content.title}</h3>
                            <h5 className="text-slate-500 text-[.750rem]">{content.description}</h5>
                        </CardContent>
                        <CardFooter className="flex flex-col items-start gap-4">
                            <div className="flex justify-between w-full">
                                <div className="flex items-center gap-2">
                                    <TbProgressCheck className="text-slate-600" size={23} />
                                    <h5 className="text-slate-600 text-[.750rem] font-semibold">Progress
                                    </h5>
                                </div>
                                <h5 className="text-red-500 text-[.800rem] font-bold py-1 px-2 border border-red-400  rounded-xl">3 days left
                                </h5>
                            </div>
                            <Progress className="h-[.25rem]" value={content.progress} />
                            <Badge className="bg-blue-100 text-blue-700 py-1" variant="outline">25 Apr 2024</Badge>
                        </CardFooter>
                    </Card>))
                }

            </CardContent>

        </Card>
    )
}

export default UpcomingTask