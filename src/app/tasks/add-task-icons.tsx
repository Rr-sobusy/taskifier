import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { type LucideIcon, ClipboardList, Airplay, FilePenLine, } from 'lucide-react';

type NewType = {};

type Props = NewType

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

const SelectIcon = (props: Props) => {
    const { ...rest } = props
    return (
        <Select {...rest}>
            <SelectTrigger className="w-full border h-10 rounded-md text-sm font-medium  flex items-center justify-center hover:bg-accent">
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
        </Select>
    )
}

export default SelectIcon