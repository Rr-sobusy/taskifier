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

        if (user) {
          return user;
        } else {
          return null;
        }
        // console.log(JSON.stringify(credentials))
        // return null
      },
    }),
  ],
});
