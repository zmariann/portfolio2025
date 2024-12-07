import Link from "next/link";

const projects = [
  { name: "Videos", href: "/portfolio/projects/videos" },
  { name: "Products", href: "/portfolio/projects" },
  { name: "Coralized", href: "/portfolio/contact" },
];

export default function Projects() {
  return (
    <section className="flex justify-center items-center min-h-[60vh] flex-col sm:text-7xl text-5xl gap-4 font-[family-name:var(--regonia-font)]">
      {projects.map((link) => {
        return (
          <Link key={link.name} href={link.href} className="">
            <p> {link.name} </p>
          </Link>
        );
      })}
    </section>
  );
}
