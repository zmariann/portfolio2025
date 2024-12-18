import BackLink from "@/app/_components/back-link";

export default function Photography() {
  return (
    <section className="w-full min-h-[60vh] flex justify-center items-center flex-col">
      <div className="m-5">
        <h1>| Under construction |</h1>
        <p className="mb-6">
          For more info get in touch: CONTACT@ZMARIANN.COM{" "}
        </p>
        <div className="mb-6">
          <p className="mb-2">
            Check my product photography portfolio{" "}
            <a
              href="/photography/product.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline uppercase"
            >
              here.
            </a>
          </p>
          <p>
            Check my event photography portfolio{" "}
            <a
              href="/photography/event.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline uppercase"
            >
              here.
            </a>
          </p>
        </div>
        <BackLink></BackLink>
      </div>
    </section>
  );
}
