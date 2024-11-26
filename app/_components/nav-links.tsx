"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "ABOUT", href: "/portfolio/about" },
  { name: "PROJECTS", href: "/portfolio/projects" },
  { name: "CONTACT", href: "/portfolio/contact" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between gap-6 m-10">
      <Link className="" href="/portfolio">
        <p>Mariann Zászlós</p>
      </Link>
      <nav className="flex gap-6">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx("text-xl", {
                "font-black text-2xl": pathname === link.href,
              })}
            >
              <p> {link.name} </p>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
