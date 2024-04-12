import React from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const DropdownSelect = ({ triggerPlaceholder, items, ...rest }: { items: string[], triggerPlaceholder: string }) => {
    return (
        <Select {...rest}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={triggerPlaceholder} />
            </SelectTrigger>
            <SelectContent>
                {
                    items.map((content, index) => (<SelectItem key={index} value={content}>{content}</SelectItem>))
                }

            </SelectContent>
        </Select>
    )
}

export default DropdownSelect