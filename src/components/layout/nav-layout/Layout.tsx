"use client"

import React from 'react'
import { useTheme } from 'next-themes';
import BreadcrumbsHelper from '../../ui helpers/breadcrumbs/BreadcrumbsHelper'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname } from 'next/navigation';

import { SideNavSm } from '../sidenav';
import { SideNav } from '../sidenav';

import { Menu, Moon, Sun } from 'lucide-react';

const LayoutMain = ({ children }: { children: React.ReactNode }) => {
    const { theme, setTheme } = useTheme()
    const pathName = usePathname()
    const route = pathName.split("/").filter(path => path)

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <>
            <SideNav />
            <section className="flex flex-col z-10 w-screen md:w-[calc(100vw-70px)] md:relative left-[58px] md:px-8 px-3 md:min-h-[calc(100vh+10px)]">
                <header className="h-[75px] items-center flex justify-between">
                    <BreadcrumbsHelper route={route} />
                    <div className="flex justify-center items-center gap-4">
                        <SideNavSm>
                            <Menu className="block md:hidden" size={20} />
                        </SideNavSm>
                        <span className="cursor-pointer" onClick={changeTheme}>{theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}</span>
                        <div className='flex items-center gap-1'>
                            <Avatar>
                                <AvatarImage src="/man.svg" />
                                <AvatarFallback></AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </header>
                {children}
            </section></>

    )
}

export default LayoutMain