
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import Link from 'next/link'



const BreadcrumbsHelper = ({ route }: { route: string[] }) => {

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {
                    route.map((item, index) => <>
                        <BreadcrumbItem key={index} className="capitalize">
                            <BreadcrumbSeparator />
                            <Link className={`text-[.75rem] ${index === route.length - 1 ? 'text-slate-700' : 'text-slate-400'}  tracking-tight font-semibold hover:text-slate-600 dark:text-slate-300`} href={`/${item}`}>
                                {item}
                            </Link>
                        </BreadcrumbItem>
                    </>)
                }
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default BreadcrumbsHelper