import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  session : {
      strategy : 'jwt'
  },
  providers: [
    Credentials({
      credentials: {
          username: {}
      },
      authorize: async (credentials) => {
        const user = { id: 1, name: "rexrandy" }
        if (user) {
          throw new Error("not authenticated")
        }
        else {
          return user
        }

  
      }
    })
  ],
})