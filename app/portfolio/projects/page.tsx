import Link from "next/link";
import { linksProjects } from "@/app/_components/links-inside";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects',
};

export default function Projects() {
  return (
    <section className="flex justify-center items-center min-h-[60vh] flex-col sm:text-7xl text-[15vw] font-[family-name:var(--regonia-font)] leading-none">
      <div>
        {linksProjects.map((link) => {
          return (
            <Link key={link.name} href={link.href}>
              <p> {link.name} </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
