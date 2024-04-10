"use client";

import { NavLink } from "@/types/navLinks.js";
import Link from "next/link";
import { usePathname } from "next/navigation.js";

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Photos", href: "/photo" },
] as const;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className=" border-b-2 border-slate-950 p-4 tracking-tight">
      <div className="flex gap-3">
        {navLinks.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className={`${
              pathname === href
                ? "underline-offset-8 underline  decoration-sky-500 font-bold decoration-4"
                : ""
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
