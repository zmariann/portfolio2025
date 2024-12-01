"use client";

import Link from "next/link";

const links = [
  { name: "INSTAGRAM", href: "/portfolio/about" },
  { name: "LINKEDIN", href: "/portfolio/projects" },
  { name: "GITHUB", href: "/portfolio/contact" },
];

export default function Footer() {
  return (
    <>
      <footer className="mt-auto sm:flex justify-between gap-6 mx-10 mb-5 hidden">
        <div className="py-6">
          <div className="flex text-xl gap-6 tracking-wider">
            {links.map((link) => {
              return (
                <Link key={link.name} href={link.href}>
                  <p> {link.name} </p>
                </Link>
              );
            })}
          </div>
        </div>
        <p className="text-[10vh] font-[family-name:var(--regonia-font)] mt-2">
          Portfolio
        </p>
      </footer>

      <footer className="mt-auto flex justify-center mx-10 mb-5 sm:hidden">
        <p className="text-5xl font-[family-name:var(--regonia-font)]">
          Portfolio
        </p>
      </footer>
    </>
  );
}
