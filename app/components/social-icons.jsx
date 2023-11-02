import { FaGithub, FaDiscord, FaHeart } from "react-icons/fa";
import { LuMailPlus } from "react-icons/lu";

export function SocialIconRoot({ children, link }) {
  return (
    <div className="p-2 rounded-xl bg-neutral-800 w-auto hover:shadow-md hover:cursor-pointer hover:drop-shadow-md shadow-gray-500 transition-all duration-100 ease-in-out">
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
    <SocialIconRoot link={"https://github.com/kars0nn"}>
      <FaGithub className="text-3xl" />
    </SocialIconRoot>
  );
}

export function DiscordIcon() {
  return (
    <SocialIconRoot>
      <FaDiscord className="text-3xl" />
    </SocialIconRoot>
  );
}

export function EmailIcon() {
  return (
    <SocialIconRoot link={"mailto:karson@dkarson.com"}>
      <LuMailPlus className="text-3xl" />
    </SocialIconRoot>
  )
}

export function SupportIcon() {
  return (
    <div className="p-1 hover:p-1.5 rounded-xl bg-pink-400/20 text-pink-500 border-4 border-pink-500 hover:border-2 w-auto hover:shadow-md hover:cursor-pointer hover:drop-shadow-md shadow-gray-500 transition-all duration-100 ease-in-out">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href={"https://dkarson.com"}
      >
        <FaHeart title="Support me" className="text-3xl" />
      </a>
    </div>
  )
}
