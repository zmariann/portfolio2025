"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const links = [
  { name: "ABOUT", href: "/portfolio/about" },
  { name: "PROJECTS", href: "/portfolio/projects" },
  { name: "CONTACT", href: "/portfolio/contact" },
];

export default function NavLinks() {
  const [showMenu, setMenu] = useState(false);

  useEffect(() => {
    const closeDropdown = (): void => {
      setMenu(false);
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);
  const pathname = usePathname();

  return (
    <>
      <header className="sm:flex justify-between gap-6 m-10 hidden">
        <Link className="py-1" href="/portfolio">
          <p className="tracking-wider">Mariann Zászlós</p>
        </Link>

        <nav className="flex gap-6 tracking-wider">
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

      <header className="flex justify-center m-7 sm:hidden">
        <button
          className="text-xl tracking-wider"
          onClick={() => setMenu(!showMenu)}
        >
          MENU
        </button>

        {showMenu && (
          <nav className="h-[70vh] w-[90%] m-10 flex flex-col justify-center items-center gap-6 fixed bg-light-shade border-dark-shade border-[3px]">
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    "text-4xl font-black tracking-wider strokeDesktop",
                    {
                      hidden: pathname === link.href,
                    }
                  )}
                >
                  <p> {link.name} </p>
                </Link>
              );
            })}
          </nav>
        )}
      </header>
    </>
  );
}
