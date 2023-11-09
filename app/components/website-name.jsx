import { Link } from "@remix-run/react";

export function WebsiteName({ content }) {
    return (
        <Link to="/" className="text-xl md:text-4xl animate-rotate-x animate-once font-extrabold transition-all duration-300 ease-in-out">
            {content}
        </Link>
    )
}