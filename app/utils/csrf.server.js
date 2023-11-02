import {randomBytes} from 'node:crypto'

export function createCSRFToken() {
    return randomBytes(100).toString("base64");
}

export async function validateCSRFToken(request, session) {
    let body = Object.fromEntries(
      new URLSearchParams(await request.clone().text()).entries()
    )
    // then we throw an error if one of our validations didn't pass
    if (!session.has("csrf")) throw new Error("CSRF Token not included.");
    if (!body.csrf) throw new Error("CSRF Token not included.");
    if (body.csrf !== session.get("csrf"))
      throw new Error("CSRF tokens do not match.");
}