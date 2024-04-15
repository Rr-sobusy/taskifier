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
import { Checkbox } from '@/components/ui/checkbox';

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
                        <label className="text-sm font-semibold text-slate-600">Task Completion date <span className="text-red-500">*</span></label>
                        <DatePicker>
                            <Button className="text-slate-600 flex gap-3" variant="outline"><CiCalendarDate /> Select date </Button>
                        </DatePicker>
                        <div className="flex items-center space-x-2 mt-2">
                            <Checkbox className="border border-black data-[state=checked]:bg-black w-5 h-5 dark:border-white" id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600 dark:text-slate-300"
                            >
                                Break-down tasks into sub branches
                            </label>
                        </div>

                        {/* **** Add sub branch task */}

                        <div className="flex flex-col gap-2">
                            {
                                ["rex","randy"].map((cntx, index) => (<div className='flex w-full gap-2'>
                                    <Input className="w-full" type='text' />
                                    <Button variant="outline">Remove</Button>
                                </div>))
                            }
                        </div>
                    </div>
                </form>
            </CardContent>

        </Card>
    )
}

export default TaskForm