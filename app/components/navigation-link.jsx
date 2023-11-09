import { NavLink } from "@remix-run/react";

// Using shadows for the borders so layout doesn't shift

export function NavigationLink({ content, link }) {
  return (
    <NavLink to={link} className={({ isActive }) =>
      isActive
        ? "bg-white/10 shadow-md py-3 px-7 rounded-full active:shadow-sm font-bold text-xl transition-all duration-150 ease-in-out font-mono"
        : "py-3 px-7 rounded-full hover:bg-white/10 hover:shadow-md active:shadow-sm font-bold text-xl transition-all duration-300 ease-in-out font-mono"
    }>
      {content}
    </NavLink>
  );
}
