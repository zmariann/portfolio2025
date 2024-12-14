import Link from "next/link";

const projects = [
  { name: "Videos", href: "/portfolio/projects/videos" },
  { name: "Photography", href: "/portfolio/projects/photography" },
];

export default function Projects() {
  return (
    <section className="flex justify-center items-center min-h-[60vh] flex-col sm:text-7xl text-[15vw] gap-4 font-[family-name:var(--regonia-font)]">
      <div>
        {projects.map((link) => {
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
