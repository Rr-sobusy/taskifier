import React from 'react'

import {
    Card,
    CardContent,
    CardFooter,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CiCalendarDate } from "react-icons/ci";

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import DatePicker from '@/components/ui helpers/date-picker/DatePicker'
import { Button } from '@/components/ui/button';



const TaskForm = ({ className }: { className?: string }) => {
    return (
        <Card className={className}>

            <CardContent className="flex justify-center w-full gap-5 pt-14">
             
            <form className="flex flex-col gap-2" action="">
                  <label className="text-sm font-semibold text-slate-600">Task Title <span className="text-red-500">*</span></label>
                  <Input type='Text' placeholder='Enter Task Title' />
                  <label className="text-sm font-semibold text-slate-600">Task Description</label>
                  <Textarea placeholder='Enter task description.' />
                  <label className="text-sm font-semibold text-slate-600">Task Completion date</label>
                <DatePicker>
                    <Button className="text-slate-600 flex gap-3" variant="outline"><CiCalendarDate /> Select date</Button>
                </DatePicker>
                </form>
            </CardContent>

        </Card>
    )
}

export default TaskForm