import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
        auth: {},
      },
      authorize: async (credentials) => {
        let user = { id: "", username: "", auth: "", email: "" };
        user = {
          id: "1",
          username: credentials.username as string,
          auth: "sample123",
          email: "arwarwara@yahoo.com",
        };
        console.log(JSON.stringify(user))
        return null
      },
    }),
  ],
});
