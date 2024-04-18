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
import { Button } from '@/components/ui/button'


import { SideNavData } from './side-nav-data'
import TooltipHelper from '@/components/ui helpers/tooltip/TooltipHelper'

// side nav portal for small devices
export const SideNavSm = ({ children }: { children: React.ReactNode }) => (<Sheet>
    <SheetTrigger>{children}</SheetTrigger>
    <SheetContent side="left">
        <SheetHeader>
            <SheetTitle className="flex justify-center"><Image height={50} width={50} alt='' src="/icon.svg" /></SheetTitle>
            <SheetDescription className="flex flex-col items-start gap-1">
              
            {
                SideNavData.map((content,index) => (<Link className="py-3 px-2 border w-full text-start"  key={index} href={content.to} >{content.title}</Link>))
            }
            </SheetDescription>
            <Link href="/tasks"><Button>CLick</Button></Link>
        </SheetHeader>
    </SheetContent>
</Sheet>)


const SideNav = () => {
    const pathName = usePathname();
    const basePath = pathName.split("/").filter(path=>path);
    return (
        <aside className="w-[70px] hidden md:flex flex-col items-center fixed border-r min-h-screen bg-background">
            <Image className="mt-5" alt="" src="\icon.svg" width={40} height={40} />
            <div className="flex flex-col mt-7 gap-1 justify-center items-center">
                {
                    SideNavData.map((content, index) => {
                        const Icon = content.icon
                        const isActive = "/" +  basePath[0] ===  content.to ? 'text-primary bg-indigo-100' : 'text-slate-500'
                        return (
                            <Link className={`w-10 h-10  flex justify-center items-center rounded-full ${isActive}`} key={index} href={content.to}>
                                <TooltipHelper title={content.title}>
                                    <Icon size={18} />
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