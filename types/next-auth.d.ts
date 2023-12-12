import { JWT } from "@auth/core/jwt"
import NextAuth, { type DefaultSession } from "next-auth"

type UserId = string

declare module "@auth/core/jwt" {
  interface JWT {
    id: UserId
  }
}

declare module "@auth/core" {
  interface Session {
    user: {
      id: UserId
    } & DefaultSession["user"]
  }
}
