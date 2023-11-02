import { Link } from "@remix-run/react";

// Outline for actual component

export function NavigationLink({ content, link }) {
  return (
    <Link className="font-mono" to={link}>{content}</Link>
  );
}
