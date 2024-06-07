"use client"

import React, { Dispatch, SetStateAction } from 'react'
import SelectIcon from './add-task-icons'
import AddTaskBgColor from './add-task-bgColor'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MultiSelect } from '@/components/ui/multi-select'
import { format } from "date-fns"
import { Braces, GlobeLock, NotebookPen, Star, TabletSmartphone, ClipboardList, LucideIcon, Airplay, FilePenLine, CalendarDays } from "lucide-react";
import { type SelectSingleEventHandler } from 'react-day-picker'
import { useForm } from 'react-hook-form'



interface AddTaskType {
  children: React.ReactNode
}


type TagType = {
  value: string, label: string, icon: LucideIcon
}


const tagLists = [
  {
    value: "Production",
    label: "Production",
    icon: GlobeLock,
  },
  {
    value: "Planning",
    label: "Planning",
    icon: NotebookPen,
  },
  {
    value: "Development",
    label: "Development",
    icon: Braces,
  },
  {
    value: "Testing",
    label: "Testing",
    icon: TabletSmartphone,
  },
  {
    value: "Review",
    label: "Review",
    icon: Star,
  },
] as TagType[]


const RenderCalendar = ({ date, setDate }:
  { date: Date, setDate: SelectSingleEventHandler | Dispatch<SetStateAction<Date>> }) => (<Popover>
    <PopoverTrigger name='calendar' asChild>
      <Button
        variant={"outline"}
      >
        <CalendarDays className="mr-2 h-4 w-4" />
        {date ? format(date, "PPP") : <span>Pick a date</span>}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0" align="start">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        initialFocus
      />
    </PopoverContent>
  </Popover>)


const AddTask = ({ children }: AddTaskType) => {

  const { register, handleSubmit } = useForm()

  const [date, setDate] = React.useState<Date>(new Date())

  const [tags, selectTag] = React.useState<string[]>()

  const submitHandler = handleSubmit((value) => {
    console.log(value)
  })
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="max-w-[90%] md:max-w-[26rem] rounded-none">
        <DialogHeader>
          <DialogTitle className="font-extrabold tracking-tighter text-center">Add New Task</DialogTitle>
        </DialogHeader>

        <form onSubmit={submitHandler}>  <div className="flex flex-col gap-2">
          <Label className="font-semibold">Task Title</Label>
          <Input {...register("taskTitle")} type="text" />
          <Label className="font-semibold">Task Description</Label>
          <Textarea {...register("taskDescrition")} />
          <Label className="font-semibold">Task Title</Label>
          <div className="max-w-xl max-h-[200px] overflow-y-auto">
            <MultiSelect
              options={tagLists}
              onValueChange={selectTag}
              defaultValue={tags}
              className="text-sm font-medium"
              placeholder="Select frameworks"
              animation={2}
              variant="inverted"
            />
          </div>
          <div className="flex gap-2">
            <div className="flex flex-1 flex-col gap-2">
              <Label className="font-semibold">Task Icon</Label>
              <SelectIcon />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Label className="font-semibold">Choose Task Icon</Label>
              <AddTaskBgColor />
            </div>
          </div>
          <Label className="font-semibold">Target Completion Date</Label>
          <RenderCalendar date={date} setDate={setDate} />
        </div>
          <DialogFooter className="mt-3">
            <Button type="submit" className="w-full bg-primary hover:bg-accent-foreground">Create Task</Button>
          </DialogFooter>
        </form>

      </DialogContent>
    </Dialog>
  )
}

export default AddTask