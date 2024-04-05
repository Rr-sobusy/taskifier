import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


import { SideNavData } from './side-nav-data'
import Image from 'next/image'

import TooltipHelper from '../ui helpers/tooltip/TooltipHelper'

const SideNav = () => {
    const pathName = usePathname();
    return (
        <aside className="w-[70px] hidden md:flex flex-col fixed items-center border-r min-h-screen bg-background">
            <Image className="mt-5" alt="" src="\icon.svg" width={40} height={40} />
            <div className="flex flex-col mt-7 gap-1 justify-center items-center">
                {
                    SideNavData.map((content, index) => {
                        const Icon = content.icon
                        const isActive = pathName === content.to ? 'text-primary bg-indigo-100' : 'text-slate-500'
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