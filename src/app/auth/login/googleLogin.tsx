import React from 'react'
import { Button } from '@/components/ui/button'
import { signIn, signOut } from '@/auth'

const GoogleLogin = () => {

    const formAction = async () => {
        "use server"
        // await signIn("google", {
        //     redirectTo: "/dashboard"
        // })
        await signOut();
    }
    return (
        <form className='w-full' action={formAction}>
            <Button className='w-full font-semibold flex gap-2' variant="outline">
                <img alt='' src='https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg'></img>   Google
            </Button>
        </form>
    )
}

export default GoogleLogin