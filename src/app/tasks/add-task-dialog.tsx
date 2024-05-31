import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import { format } from "date-fns"

import { ClipboardList, LucideIcon, Airplay, FilePenLine } from 'lucide-react'

type AddTaskType = {
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

const RenderIcons = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Select>
      <SelectTrigger className="w-full border h-10 rounded-md flex items-center justify-center">
        <SelectValue placeholder="Select an icon" />
      </SelectTrigger>
      <SelectContent className="flex flex-col justify-center">
        <SelectGroup className="grid grid-cols-3 gap-1">
          {
            Icons.map((Icon, key) => (
              <SelectItem className="border pl-7" value={key.toString()}>
                <Icon.icon size={23} className="text-foreground" />
              </SelectItem>))
          }
        </SelectGroup>
      </SelectContent>
    </Select>)
}

const RenderBgColor = () => (
  <Select>
    <SelectTrigger className="w-full border h-10 rounded-md flex items-center justify-center">
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


const AddTask = ({ children }: AddTaskType) => {
  const [date, setDate] = React.useState<Date>()
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="max-w-[90%] md:max-w-[30rem] rounded-none">
        <DialogHeader>
          <DialogTitle className="font-extrabold tracking-tighter text-center">Add New Task</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <Label className="font-semibold">Task Title</Label>
          <Input type="text" />
          <Label className="font-semibold">Task Description</Label>
          <Textarea />
          <Label className="font-semibold">Target Completion Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
              >
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
          </Popover>
          <div className="flex gap-2">
            <div className="flex flex-1 flex-col gap-2">
              <Label className="font-semibold">Task Icon</Label>
              <RenderIcons />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Label className="font-semibold">Choose Task Icon</Label>
              <RenderBgColor />
            </div>
          </div>
          <Label className="font-semibold">Task Title</Label>
          <Input type="text" />
        </div>
        <DialogFooter>
          <Button className="w-full">Create Task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddTask