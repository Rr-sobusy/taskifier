"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import React, { HTMLAttributes } from 'react'


const LoginPage = () => {

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)

    const res = await fetch('/api/test', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password"),
        auth : formData.get("username")
      })
    })

  }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <form onSubmit={submitHandler} className="min-w-[400px] py-10 rounded-lg px-5 bg-secondary flex gap-3 flex-col justify-center">
        <h3 className="font-extrabold text-lg text-center">Login</h3>
        <label>UserName</label>
        <Input name='username' className="" type='text' />
        <label>Password</label>
        <Input name='password' className="" type='text' />
        <Button type='submit'>Login</Button>
        <Button onClick={()=>{
          console.log(process.env.AUTH_SECRET)
        }} type='button'>Check</Button>
      </form>
    </div>
  )
}


export default LoginPage