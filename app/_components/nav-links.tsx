"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const linksDesktop = [
  { name: "ABOUT", href: "/portfolio/about" },
  { name: "PROJECTS", href: "/portfolio/projects" },
  { name: "CONTACT", href: "/portfolio/contact" },
];

const homeMobile = { name: "HOME", href: "/portfolio" };
const linksMobile = [homeMobile].concat(linksDesktop);

export default function NavLinks() {
  const pathname = usePathname();
  const btnRef = useRef(null);
  const [showMenu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu((prev) => !prev);
  }

  const handleLinkClick = () => {
    setMenu(false);
  };

  return (
    <>
      <header className="sm:flex justify-between gap-6 m-10 hidden">
        <Link className="py-1" href="/portfolio">
          <p className="tracking-wider">Mariann Zászlós</p>
        </Link>

        <nav className="flex gap-6 tracking-wider">
          {linksDesktop.map((link) => {
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
        <button ref={btnRef} onClick={toggleMenu} className="">
          {showMenu ? (
            <p className="text-xl font-black tracking-wider">X</p>
          ) : (
            <p className="text-xl tracking-wider">MENU</p>
          )}
        </button>

        {showMenu && (
          <nav className="min-h-[68vh] min-w-[90%] m-10 flex flex-col justify-center items-center fixed bg-light-shade border-dark-shade border-[3px] requires-no-scroll">
            {linksMobile.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={clsx(
                    "text-[11vw] font-black tracking-wider strokeDesktop",
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
