"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import React, { HTMLAttributes } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const LoginPage = () => {

  const submitHandler = async (e: any) => {


    // e.preventDefault();

    // const formData = new FormData(e.currentTarget)

    // const res = await fetch('/api/test', {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     name: formData.get("name"),
    //     password: formData.get("password"),
    //     auth: formData.get("username")
    //   })
    // })
    alert("ok")

  }

  return (
    <form className="w-screen h-screen flex justify-center items-center" action="">
       <Card className='lg:w-1/3 md:w-3/4 flex flex-col gap-5 w-full h-full md:h-[550px] px-6 py-8 md:py-8 rounded-xl'>
      <div className='flex flex-col items-center'>
        <h2 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl'>Task<span className='text-primary tracking-wide'>ifier</span></h2>
        <h6 className='font-sans text-gray-600 font-semibold tracking-wider text-[.8rem]'>Catch up with your favorite anime and manga series!</h6>
      </div>

      {/* Input fields */}
      <div className='flex flex-col md:gap-3 gap-4 mt-9 md:mt-0'>
        <div className='flex flex-col gap-1'>
          <label className='text-slate-700 md:text-base text-xl font-semibold tracking-tight scroll-m-20'>Username</label>
          <Input name='username' className='py-6 md:py-6 text-sm text-slate-700' placeholder='Enter your username or email' />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='text-slate-700 md:text-base text-xl font-semibold tracking-tight scroll-m-20'>Password</label>
          <Input name='password' className='py-6 md:py-6 text-sm text-slate-700' placeholder='Enter your password' />
        </div>

      </div>
      <div className='flex items-center flex-col gap-3'>
        <Button type='submit' className='py-6 w-full'>Login</Button>
        <Button variant="outline" type='submit' className='py-6 w-full'>Register</Button>
      </div>

      <div className='h-[12px] flex justify-center items-center'>
        <h5 className='font-sans text-primary font-semibold text-sm grid grid-cols-3 gap-2 items-center __dashed-text'>Or continue with</h5>
      </div>

      <div className='flex gap-2 mt-3 md:mt-0'>
        <Button className='w-full font-semibold flex gap-2' variant="outline">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg> Github
        </Button>
        <Button className='w-full font-semibold flex gap-2' variant="outline">
          <img alt='' src='https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg'></img>   Google
        </Button>
      </div>

    </Card>
    </form>
  )
}


export default LoginPage