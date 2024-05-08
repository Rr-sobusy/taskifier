"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import React, { FormEvent } from 'react'
import {
    Card,
} from "@/components/ui/card"


const LoginPage = () => {

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget)

        const res = await fetch('/api/test', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name: formData.get("name"),
                password: formData.get("password"),
                auth: formData.get("username")
            })
        })
    }

    return (
        <form onSubmit={submitHandler} className="w-screen h-screen flex justify-center items-center">
            <Card className='lg:w-1/3 md:w-3/4 flex flex-col shadow-md gap-7 w-full h-full md:h-[550px] px-6 py-8 md:py-8 rounded-xl'>
                <div className='flex flex-col items-center'>
                    <h2 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl'>Task<span className='text-primary tracking-wide'>ifier</span></h2>
                    <h6 className='font-sans text-gray-600 font-semibold tracking-wider text-[.8rem]'>Delivering the tasks smooth as slick!</h6>
                </div>

                {/* Input fields */}
               <div className="flex flex-col md:gap-3 gap-4 mt-9 md:mt-0">

               </div>

            </Card>
        </form>
    )
}


export default LoginPage