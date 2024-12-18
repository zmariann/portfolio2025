import { links } from "@/app/_components/links-out";

export default function Contact() {
  return (
    <>
      <section className="flex justify-center items-center min-h-[60vh]">
        <div>
          <p className="text-xl tracking-wider mx-1 sm:mx-0">
            CONTACT@ZMARIANN.COM
          </p>
          <div className="tracking-wider flex justify-between mx-1 sm:hidden">
            {links.map((link) => {
              return (
                <a key={link.name} href={link.href}>
                  <p> {link.name} </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
