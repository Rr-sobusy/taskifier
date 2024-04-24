import { signIn } from "@/auth";
import React from 'react'
import { Button } from "./ui/button";

export function SignIn({
    provider,
    ...props
  }: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
    return (
      <form
        action={async () => {
          "use server"
          await signIn(provider)
        }}
      >
        <Button {...props}>Sign In</Button>
      </form>
    )
  }