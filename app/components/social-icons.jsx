import { FaGithub, FaDiscord, FaHeart } from "react-icons/fa";
import { LuMailPlus } from "react-icons/lu";

export function SocialIconRoot({ children, link, title }) {
  return (
    <div title={title} className="p-3 rounded-xl bg-white/20 shadow-sm hover:bg-white/25 w-auto hover:shadow-md hover:cursor-pointer transition-all duration-100 ease-in-out">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href={link}
      >
        {children}
      </a>
    </div>
  );
}

export function GitHubIcon() {
  return (
    <SocialIconRoot title="view my github!" link={"https://github.com/kars0nn"}>
      <FaGithub className="text-3xl" />
    </SocialIconRoot>
  );
}

export function DiscordIcon() {
  return (
    <SocialIconRoot title="join my discord!">
      <FaDiscord className="text-3xl" />
    </SocialIconRoot>
  );
}

export function EmailIcon() {
  return (
    <SocialIconRoot title="email me! (not set up yet)" link={"mailto:admin@karson.lol"}>
      <LuMailPlus className="text-3xl" />
    </SocialIconRoot>
  )
}

export function SupportIcon() {
  return (
    <div title="support me!" className="p-3 rounded-xl hover:animate-jump animate-once bg-white/20 shadow-sm hover:bg-white/25 w-auto hover:shadow-md hover:cursor-pointer transition-all duration-100 ease-in-out text-pink-300">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://karson.lol"
      >
        <FaHeart title="Support me" className="text-3xl" />
      </a>
    </div>
  )
}
