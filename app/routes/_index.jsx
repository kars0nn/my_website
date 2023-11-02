import { DiscordIcon, EmailIcon, GitHubIcon, SupportIcon } from "~/components/social-icons";
import { createCSRFToken, validateCSRFToken } from '~/utils/csrf.server';
import { getSession, commitSession } from '~/utils/cookie.server';
import { json } from "@remix-run/node";
import { getSong } from "~/utils/fetch-song.server";
import { useLoaderData } from '@remix-run/react';
import { SongCard } from "~/components/song-card";

export let loader = async ({ request }) => {
  /*  
      a CSRF token is here because I want to 
      have a guest book and need to update 
      the spotify shit every few seconds.
  */

  let session = await getSession(request.headers.get("Cookie"));
  let csrf = createCSRFToken();
  let song = await getSong();
  session.set("csrf", csrf);
  return json(
    { csrf, song },
    { headers: { "Set-Cookie": await commitSession(session) } }
  );
};

export const meta = () => {
  return [
    { title: "karson's website" },
    { name: "description", content: "see my information here." },
  ];
};

export default function Index() {
  let { csrf, song } = useLoaderData();

  return (
    <>
      <div className="max-w-2xl m-auto">
        <div className="grid sm:grid-cols-2 gap-2 place-items-center md:h-screen">
          <div>
            <h1 className="font-bold text-5xl pb-3 pt-10 md:pt-0 font-sans">karson d.</h1>
            <p className="pb-3">Welcome! </p>
            <span className="flex w-full items-center justify-start gap-3">
              <GitHubIcon />
              <DiscordIcon />
              <EmailIcon />
              <SupportIcon />
            </span>
          </div>
          <div className="mt-6 md:mt-0 min-w-full">
            <SongCard song={song} />
          </div>
        </div>
      </div>
    </>
  );
}
