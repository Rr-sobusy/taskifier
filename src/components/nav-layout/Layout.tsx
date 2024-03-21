import React from 'react'
import BreadcrumbsHelper from '../ui helpers/breadcrumbs/BreadcrumbsHelper'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'


const LayoutMain = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="flex flex-col w-screen md:w-[calc(100vw-70px)] md:px-5">
            <header className="h-[60px] items-center flex justify-between">
                <BreadcrumbsHelper />
                <div className="flex justify-center items-center gap-4">
                    <Image height={20} width={20} alt="" src="/night-icon.svg" />
                    <Avatar>
                        <AvatarImage src="/man.svg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </header>


            {children}
        </section>
    )
}

export default LayoutMain