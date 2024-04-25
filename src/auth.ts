import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username : {}

      },
      authorize : (credentials) => {
        let user = null;
        let isValid = true
        if(!isValid) {
          throw new Error("not authenticated")
        }
        return credentials.username;
      }
    })
  ],
})