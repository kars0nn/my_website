import { createCookieSessionStorage } from "@remix-run/node"; // or cloudflare/deno
require('dotenv').config();

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: process.env.COOKIE_NAME,
      secrets: [process.env.COOKIE_SECRET],
      sameSite: "lax",
    },
});