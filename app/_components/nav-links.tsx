"use client";

import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { linksDesktop, linksMobile, homeMobile } from "./links-inside";
import { useEffect } from "react";

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

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showMenu]);

  return (
    <>
      <header className="sm:flex justify-between gap-6 m-10 hidden">
        <Link className="py-1" href={homeMobile.href}>
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

      <header className="flex justify-center m-7 sm:hidden top-0 left-0 z-50">
        <button ref={btnRef} onClick={toggleMenu} className="top-0 left-0 z-50">
          {showMenu ? (
            <p className="text-xl font-black">X</p>
          ) : (
            <p className="text-xl tracking-wider">MENU</p>
          )}
        </button>

        {showMenu && (
          <>
            <div
              className="fixed inset-0 bg-light-shade bg-opacity-50 z-40"
              onClick={toggleMenu}
            ></div>

            <nav className="min-h-[68vh] min-w-[90%] m-10 flex flex-col justify-center items-center fixed bg-light-shade border-dark-shade border-[2px] z-50">
              {linksMobile.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={clsx(
                    "text-[12vw] font-black tracking-wider strokeMobile",
                    {
                      hidden: pathname === link.href,
                    }
                  )}
                >
                  <p>{link.name}</p>
                </Link>
              ))}
            </nav>
          </>
        )}
      </header>
    </>
  );
}
