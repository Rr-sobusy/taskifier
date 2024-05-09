import { z, ZodType } from "zod";


export type UserType = {
    userName: string
    email: string
    password: string
}

export const UserSchema: ZodType<UserType> = z.object({
    userName: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(8)
})

