import { Footer } from "./components/footer";
import { NavigationLink } from "./components/navigation-link";
import { WebsiteName } from "./components/website-name";
import styles from "./styles/app.css"
import NProgress from "nprogress";
import nProgressStyles from "nprogress/nprogress.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from "@remix-run/react";
import {
  useEffect
} from 'react'

export const links = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: nProgressStyles }
];

export default function App() {
  let transition = useNavigation();

  useEffect(() => {
    if (transition.state === "idle" || transition.submission) NProgress.done();
    else NProgress.start();
    NProgress.configure({ showSpinner: false });
  }, [transition.state]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="text-white bg-no-repeat min-h-screen bg-gradient-to-tr to-sky-600 from-cyan-500">
        <Navigation>
          <Outlet />
        </Navigation>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function Navigation({ children }) {
  return (
    <>
      <div className="p-4 md:p-4 lg:p-6 mx-auto flex max-w-8xl items-center justify-between shadow-md backdrop-blur-sm bg-white/5 mb-6">
        <WebsiteName content={"karson.lol"} />
        <div className="hidden flex-col mt-8 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0">
          <NavigationLink content={"Blog"} link={"/blog"} />
          <NavigationLink content={"Uptime"} link={"https://uptime.karson.lol"} />
        </div>
        <div className="md:hidden flex-col space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0">
          <a className="bg-white/10 p-3 rounded-lg shadow-md" href="https://uptime.karson.lol" target="_blank" rel="noreferrer noopener" >
            uptime
          </a>
        </div>
      </div>
      {children}
    </>
  )
}
