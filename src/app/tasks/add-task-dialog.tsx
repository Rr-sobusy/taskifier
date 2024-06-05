"use client"

import React, { Dispatch, SetStateAction } from 'react'
import SelectIcon from './add-task-icons'

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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MultiSelect } from '@/components/ui/multi-select'
import { format } from "date-fns"
import { Braces,  GlobeLock, NotebookPen,  Star, TabletSmartphone,ClipboardList, LucideIcon, Airplay, FilePenLine, CalendarDays } from "lucide-react";
import { type SelectSingleEventHandler } from 'react-day-picker'


interface AddTaskType {
  children: React.ReactNode
}


const Icons: { iconName: string, icon: LucideIcon }[] = [
  { iconName: "ClipboardList", icon: ClipboardList },
  {
    iconName: "Airplay",
    icon: Airplay
  }, {
    iconName: "Airplay",
    icon: Airplay
  }, {
    iconName: "FilePenLine",
    icon: FilePenLine
  }];

const Colors: string[] = ["#194A66", "#DA6051", "#46919F", "#039856"]

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

const RenderBgColor = ({...rest}) => (
  <Select name="select" {...rest}>
    <SelectTrigger className="w-full border h-10 rounded-md text-sm font-medium flex items-center justify-center hover:bg-accent">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent className="flex flex-col justify-center">
      <SelectGroup className="grid grid-cols-3 gap-1">
        {
          Colors.map((color) => (
            <SelectItem className="border pl-6" value={color}>
              <div style={{ background: color }} className="h-7 w-7 rounded-md"></div>
            </SelectItem>))
        }
      </SelectGroup>
    </SelectContent>
  </Select>
)

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

const RenderTags = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        variant={"outline"}
      >
        <p>Choose tags</p>
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-full grid grid-cols-3 gap-1">
    </PopoverContent>
  </Popover>
)

const AddTask = ({ children }: AddTaskType) => {
  const [date, setDate] = React.useState<Date>(new Date())

  const [tags, selectTag] = React.useState<string[]>()

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log(formData.get("calendar"))
  }
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="max-w-[90%] md:max-w-[26rem] rounded-none">
        <DialogHeader>
          <DialogTitle className="font-extrabold tracking-tighter text-center">Add New Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={submitHandler}>  <div className="flex flex-col gap-2">
          <Label className="font-semibold">Task Title</Label>
          <Input type="text" />
          <Label className="font-semibold">Task Description</Label>
          <Textarea />
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
              <RenderBgColor />
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