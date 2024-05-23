"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


import { SideNavData } from './side-nav-data'
import TooltipHelper from '@/components/ui helpers/tooltip/TooltipHelper'

// side nav portal for small devices
export const SideNavSm = ({ children }: { children: React.ReactNode }) => {
    const pathName = usePathname();
    const basePath = pathName.split("/").filter(path => path);
    return (<Sheet>
        <SheetTrigger>{children}</SheetTrigger>
        <SheetContent side="left">
            <SheetHeader className="flex flex-col gap-2">
                <SheetTitle className="flex justify-center"><Image height={50} width={50} alt='' src="/icon.svg" /></SheetTitle>
                <div className='border py-4 px-2 text-lg flex flex-col'>
                    <p className='text-lg font-extrabold'>Workspace</p>
                </div>
            </SheetHeader>
            <SheetDescription className="flex flex-col items-start gap-1 mt-2">

                {
                    SideNavData.map((content, index) => {
                        const Icon = content.icon
                        return (<Link className={`${"/" + basePath[0] === content.to && 'bg-primary text-slate-200'} py-4 px-3 w-full text-start text-sm font-extrabold rounded-lg flex items-center gap-2`} key={index} href={content.to} >
                            <span>{<Icon size={16} />}</span>
                            {content.title}</Link>)
                    })
                }
            </SheetDescription>

        </SheetContent>
    </Sheet>)
}


const SideNav = () => {
    const pathName = usePathname();
    const basePath = pathName.split("/").filter(path => path);
    return (
        <aside className="w-[70px] hidden md:flex flex-col items-center fixed border-r min-h-screen bg-background">
            <Image className="mt-5" alt="" src="\icon.svg" width={40} height={40} />
            <div className="flex flex-col mt-7 gap-3 justify-center items-center">
                {
                    SideNavData.map((content, index) => {
                        const Icon = content.icon
                        const isActive = "/" + basePath[0] === content.to ? 'text-foreground bg-primary' : 'text-foreground bg-accent'
                        return (
                            <Link className={`w-10 h-10  flex justify-center items-center rounded-xl ${isActive}`} key={index} href={content.to}>
                                <TooltipHelper title={content.title}>
                                    <Icon size={14} />
                                </TooltipHelper>
                            </Link>
                        )
                    })
                }
            </div>
        </aside>
    )
}

export default SideNav