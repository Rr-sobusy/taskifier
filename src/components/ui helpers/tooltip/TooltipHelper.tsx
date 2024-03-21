import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"



const TooltipHelper = ({ children, title, ...rest }: { children: React.ReactNode, title: string }) => {
    return (
        <TooltipProvider>
            <Tooltip {...rest}>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent className="text-slate-500">
                    {title}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default TooltipHelper