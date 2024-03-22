import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

type Props = {}

const BreadcrumbsHelper = (props: Props) => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink className="text-[.75rem] tracking-tight font-semibold hover:text-slate-600 text-slate-400" href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink className="text-[.75rem] tracking-tight font-semibold hover:text-slate-600 text-slate-400" href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink className="text-[.75rem] tracking-tight font-semibold hover:text-slate-600 text-slate-400" href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default BreadcrumbsHelper