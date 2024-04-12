import React from 'react'

import {
    Card,
    CardContent
} from "@/components/ui/card"
import { CiCalendarDate } from "react-icons/ci";

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import DatePicker from '@/components/ui helpers/date-picker/DatePicker'
import { Button } from '@/components/ui/button';

import DropdownSelect from '@/components/ui helpers/select/DropdownSelect';



const TaskForm = ({ className }: { className?: string }) => {
    return (
        <Card className={className}>

            <CardContent className="w-full">

                <form className="" action="">
                    <div className="max-w-[500px] mx-auto pt-10 flex flex-col gap-3">
                        <label className="text-sm font-semibold text-slate-600">Task Title <span className="text-red-500">*</span></label>
                        <Input className="w-full" type='Text' placeholder='Enter Task Title' />
                        <label className="text-sm font-semibold text-slate-600">Task Description</label>
                        <Textarea placeholder='Enter task description.' />
                        <label className="text-sm font-semibold text-slate-600">Priority Level <span className="text-red-500">*</span></label>
                        <DropdownSelect items={["Highest", "Medium", "Least"]} triggerPlaceholder="Select Priority level" />
                        <label className="text-sm font-semibold text-slate-600">Task Completion date</label>
                        <DatePicker>
                            <Button className="text-slate-600 flex gap-3" variant="outline"><CiCalendarDate /> Select date </Button>
                        </DatePicker>
                    </div>
                </form>
            </CardContent>

        </Card>
    )
}

export default TaskForm