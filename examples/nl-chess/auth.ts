import NextAuth from "next-auth";
import { OAuthConfig } from "next-auth/providers";

const NodeLocProvider = {
  id: "nodeloc",
  name: "NodeLoc",
  type: "oauth",
  authorization: {
    url: "http://conn.nodeloc.cc/oauth2/auth",
    params: { scope: "openid profile" },
  },
  token: "http://conn.nodeloc.cc/oauth2/token",
  userinfo: "http://conn.nodeloc.cc/oauth2/userinfo",
  clientId: process.env.NODELOC_CLIENT_ID,
  clientSecret: process.env.NODELOC_CLIENT_SECRET,
} satisfies OAuthConfig<any>;

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [NodeLocProvider],
});
