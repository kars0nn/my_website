import { createCSRFToken, validateCSRFToken } from '~/utils/csrf.server';
import { getSession, commitSession } from '~/utils/cookie.server';
import { json } from "@remix-run/node";
import { useFetcher, useLoaderData } from '@remix-run/react';
import { SongCard } from "~/components/song-card";
import { useEffect } from "react"

export let loader = async ({ request }) => {
  /*  
      a CSRF token is here because I want to 
      have a guest book and need to update 
      the spotify shit every few seconds.
  */

  let session = await getSession(request.headers.get("Cookie"));
  let csrf = createCSRFToken();
  session.set("csrf", csrf);
  return json(
    { csrf },
    { headers: { "Set-Cookie": await commitSession(session) } }
  );
};

export const meta = () => {
  return [
    { title: "karson's website" },
    { name: "description", content: "see my information here." },
    { name: "theme-color", content: "#0ea5e9" }
  ];
};

export default function Index() {
  let { csrf } = useLoaderData();
  let fetcher = useFetcher();

  useEffect(() => {
    if (fetcher.type === "init") {
      fetcher.load("/api/get_song");
    }
  }, [fetcher]);

  let song = fetcher?.data?.song;

  return (
    <>
      <div className="lg:pl-80 lg:pr-80 md:pl-4 md:pr-4 md:m-0 mx-4">
        <div className="md:flex md:-mx-4 place-items-center justify-center flex-col">
          <div className="w-full md:w-3/5 bg-white/10 rounded-md shadow-md p-4">
            <p className='font-bold text-xs pb-3'>
              Welcome to my website!
            </p>
            <h1 className='font-extrabold text-4xl'>
              I'm Karson.
            </h1>
            {/* <p>I have been learning how to program for 3 years, most of my experience is in Javascript. Most of my projects are just for fun, however I am open to making something for you if you ask!</p> */}
          </div>
          <br />
          <div className="w-full md:w-3/5 bg-white/10 rounded-md shadow-md p-4">
            <p className='text-sm pb-2 font-bold -translate-y-1 '>
              my spotify activity:
            </p>
            <SongCard song={song} />
          </div>
        </div>
      </div>
    </>
  );
}
