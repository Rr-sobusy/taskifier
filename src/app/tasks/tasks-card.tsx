import React from 'react'
import { CardHeader, CardContent, CardDescription, Card } from '@/components/ui/card'

import { cn } from '@/lib/utils'

type TaskCarkProps = {

}



const TaskCard = (props:TaskCarkProps) => {
    return (
        <Card className={cn("bg-accent dark:bg-accent")}>
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