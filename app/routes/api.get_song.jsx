import { json } from "@remix-run/node";
import { getSong } from "~/utils/fetch-song.server";

export const loader = async ({request}) => {
    let song = await getSong();

    return json({ song }, 200)
};