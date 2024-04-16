"use client"
import React, { useCallback, useState } from 'react';

import { CiCalendarDate } from "react-icons/ci";

// shadcn ui
import {
    Card,
    CardContent
} from "@/components/ui/card"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import DatePicker from '@/components/ui helpers/date-picker/DatePicker'
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import DropdownSelect from '@/components/ui helpers/select/DropdownSelect';

import { v4 } from 'uuid';

// react-icons
import { RiDeleteBin2Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";



const TaskForm = ({ className }: { className?: string }) => {

    const [subBranchState, setSubBranchState] = useState<{ id: string; branchTitle: string }[]>([{ id: v4(), branchTitle: "" }])
    const [subBranchMode, setSubBranchMode] = useState<boolean>(false);



    const submitHandler = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const title = formData.get("taskTitle");
        alert(title);

    }, [])

    const rowChangeHandler = (title:string, id: string) => {
        const state = [...subBranchState];
        let toEditKey = state.findIndex((state)=> state.id === id);
        state[toEditKey] = {id: id, branchTitle: title};
        setSubBranchState(state);
    }

    const addRow = () => {
        setSubBranchState((state) => [...state, { id: v4(), branchTitle: "" }]);
    }

    const rowDeleteHandler = (id: string) => {
        const retainedRow = subBranchState.filter((state)=> state.id !== id);
        setSubBranchState(retainedRow);
    }

    return (
        <Card className={className}>

            <CardContent className="w-full">

                <form onSubmit={submitHandler} className="">
                    <div className="max-w-[500px] mx-auto pt-10 flex flex-col gap-3">
                        <label className="text-sm font-semibold text-slate-600">Task Title <span className="text-red-500">*</span></label>
                        <Input name='taskTitle' className="w-full" type='Text' placeholder='Enter Task Title' />
                        <label className="text-sm font-semibold text-slate-600">Task Description</label>
                        <Textarea placeholder='Enter task description.' />
                        <label className="text-sm font-semibold text-slate-600">Priority Level <span className="text-red-500">*</span></label>
                        <DropdownSelect items={["Highest", "Medium", "Least"]} triggerPlaceholder="Select Priority level" />
                        <label className="text-sm font-semibold text-slate-600">Task Completion date <span className="text-red-500">*</span></label>
                        <DatePicker>
                            <Button className="text-slate-600 flex gap-3" variant="outline"><CiCalendarDate /> Select date </Button>
                        </DatePicker>
                        <div className="flex items-center space-x-2 mt-2">
                            <Checkbox onCheckedChange={() => setSubBranchMode(prev => !prev)} className="border border-black data-[state=checked]:bg-black w-5 h-5 dark:border-white" id="terms" />
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600 dark:text-slate-300"
                            >
                                Break-down tasks into sub branches
                            </label>
                        </div>

                        {/* **** Add sub branch task */}

                        <div className="flex flex-col gap-3 mt-2">
                            {
                                subBranchState.map((ctx, index) => (<div key={index} className='flex w-full gap-2'>
                                    <Input onChange={(event)=> rowChangeHandler(event.target.value, ctx.id)} value={ctx.branchTitle} disabled={!subBranchMode} className="w-full" type='text' />
                                    <Button type="button" onClick={()=>rowDeleteHandler(ctx.id)} disabled={!subBranchMode} title='Remove row' variant="outline"><RiDeleteBin2Line size={18} /></Button>
                                </div>))
                            }
                            <div className="flex gap-2 justify-end">
                                <Button type='button' onClick={addRow} disabled={!subBranchMode} variant="outline" className="flex gap-2"> <span><IoMdAdd size={18} /></span>Add Row</Button>
                                <Button type="submit">Submit</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </CardContent>

        </Card>
    )
}

export default TaskForm