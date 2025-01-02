import BackLink from "@/app/_components/back-link";
import Link from "next/link";
import { linksPhoto } from "@/app/_components/links-inside";

export default function Photography() {
  return (
    <section className="w-full min-h-[60vh] flex justify-center items-center flex-col sm:text-7xl text-5xl font-[family-name:var(--regonia-font)] mb-5">
      <div className="flex flex-col items-start">
        {linksPhoto.map((link) => {
          return (
            <Link href={link.href} key={link.name}>
              {link.name}
            </Link>
          );
        })}
        <BackLink></BackLink>
      </div>
    </section>
  );
}
