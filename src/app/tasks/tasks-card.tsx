import React from 'react'
import { CardHeader, CardContent, CardDescription, Card } from '@/components/ui/card'

import { cn } from '@/lib/utils'

type TaskCarkProps = {

}



const TaskCard = (props:TaskCarkProps) => {
    return (
        <Card className={cn("w-full md:w-1/2 lg:w-1/3 xl:w-1/4")}>
            <CardHeader>
                rex
            </CardHeader>
            <CardContent>
                randy
            </CardContent>
            
        </Card>
    )
}

export default TaskCard