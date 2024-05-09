"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import React, { FormEvent } from 'react'
import {
    Card,
} from "@/components/ui/card"
import { useForm } from "react-hook-form"

import { UserSchema } from '@/types/UserSchema'
import { UserType } from '@/types/UserSchema'
import { zodResolver } from "@hookform/resolvers/zod"


const LoginPage = () => {

    const { handleSubmit, register } = useForm<UserType>({ resolver: zodResolver(UserSchema) })

    const submitHandler = async (e: any) => {
        alert("rex")
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="w-screen h-screen flex justify-center items-center">
            <Card className='lg:w-1/3 md:w-3/4 flex flex-col shadow-md gap-7 w-full h-full md:h-[550px] px-6 py-8 md:py-8 rounded-xl'>
                <div className='flex flex-col items-center'>
                    <h2 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl'>Task<span className='text-primary tracking-wide'>ifier</span></h2>
                    <h6 className='font-sans text-gray-600 font-semibold tracking-wider text-[.8rem]'>Delivering the tasks smooth as slick!</h6>
                </div>

                <label className='text-slate-800 md:text-lg font-extrabold text-2xl text-center tracking-tight scroll-m-20'>Sign Up</label>

                {/* Input fields */}
                <div className="flex flex-col md:gap-1 gap-2 md:mt-0">
                    <label className='text-slate-700 md:text-base font-extrabold text-xl tracking-tight scroll-m-20'>Username</label>
                    <Input {...register("userName")} name='name' className='py-6 md:py-3 text-sm text-slate-700' placeholder='Ex. John Doe' />
                    <label className='text-slate-700 md:text-base font-extrabold text-xl tracking-tight scroll-m-20'>Email</label>
                    <Input {...register("email")} name='name' className='py-6 md:py-3 text-sm text-slate-700' placeholder='johndoe@email.com' />
                    <label className='text-slate-700 md:text-base font-extrabold text-xl tracking-tight scroll-m-20'>Password</label>
                    <Input {...register("password")} type='password' name='name' className='py-6 md:py-3 text-sm text-slate-700' placeholder='*********' />
                    <label className='text-slate-700 md:text-base font-extrabold text-xl tracking-tight scroll-m-20'>Repeat Password</label>
                    <Input {...register("password")} type='password' name='name' className='py-6 md:py-3 text-sm text-slate-700' placeholder='*********' />
                    <Button className="mt-3" type='submit'>Register</Button>
                </div>

            </Card>
        </form>
    )
}


export default LoginPage