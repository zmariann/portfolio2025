import { links } from "@/app/_components/links";

export default function Contact() {
  return (
    <>
      <section className="sm:flex justify-center items-center min-h-[60vh] hidden">
        <p className="text-xl tracking-wider">CONTACT@ZMARIANN.COM</p>
      </section>

      <section className="flex justify-center items-center min-h-[60vh] sm:hidden">
        <div>
          <p className="text-xl tracking-wider mx-1">CONTACT@ZMARIANN.COM</p>
          <div className="tracking-wider flex justify-between mx-1">
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
