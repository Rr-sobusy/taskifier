"use client"
import React from 'react'
import BreadcrumbsHelper from './BreadcrumbsHelper'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SideNavSm } from '../sidenav'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu } from 'lucide-react'


const Header = () => {

    const { theme, setTheme } = useTheme()
    const pathName = usePathname()
    const route = pathName.split("/").filter(path => path)

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
  return (
    <header className="h-[75px] items-center flex justify-between">
                    <BreadcrumbsHelper route={route} />
                    <div className="flex justify-center items-center gap-3">
                        <SideNavSm>
                            <Menu className="block md:hidden" size={20} />
                        </SideNavSm>
                        <span className="cursor-pointer" onClick={changeTheme}>{theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}</span>
                        <div className='flex items-center'>
                            <Avatar className="w-7 h-7">
                                <AvatarImage src="/man.svg" />
                                <AvatarFallback></AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </header>
  )
}

export default Header;