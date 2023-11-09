import { DiscordIcon, EmailIcon, GitHubIcon, SupportIcon } from "~/components/social-icons";

export function Footer() {
    return (
        <>
            <div className="p-12 flex items-center justify-center ">
                <div className="flex gap-3">
                    <GitHubIcon />
                    <DiscordIcon />
                    <EmailIcon />
                    <SupportIcon />
                </div>
            </div>
        </>
    )
}