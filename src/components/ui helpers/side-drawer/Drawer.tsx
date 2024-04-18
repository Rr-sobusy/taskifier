import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { Close } from "@radix-ui/react-dialog"

import Link from 'next/link'



const Drawer = ({ children }: { children: React.ReactNode }) => {
    return (
        <Sheet>
            <SheetTrigger>{children}</SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                    <Link href="/tasks"><Button>CLick</Button></Link>

                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default Drawer