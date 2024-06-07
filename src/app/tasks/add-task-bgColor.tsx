import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Colors: string[] = ["#194A66", "#DA6051", "#46919F", "#039856"];


const AddTaskBgColor = ({ ...rest }) => {
    return (
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
}

export default AddTaskBgColor