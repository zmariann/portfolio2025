"use client";

import Link from "next/link";

const links = [
  { name: "INSTAGRAM", href: "/portfolio/about" },
  { name: "LINKEDIN", href: "/portfolio/projects" },
  { name: "GITHUB", href: "/portfolio/contact" },
];

export default function Footer() {
  return (
    <footer className="mt-auto flex justify-between gap-6 m-10">
      <div className="py-4">
        <div className="flex text-xl gap-6">
          {links.map((link) => {
            return (
              <Link key={link.name} href={link.href} className="">
                <p className=""> {link.name} </p>
              </Link>
            );
          })}
        </div>
      </div>
      <p className="text-6xl font-[family-name:var(--regonia-font)]">
        Portfolio
      </p>
    </footer>
  );
}
