import Link from "next/link";

export default function Home() {
  return (
    <Link
      href={"/portfolio"}
      className="flex items-center justify-center min-h-screen pb-40 pt-5 relative"
    >
      <section className="sm:p-0 p-5">
        <h1 className="regonia sm:text-9xl text-5xl">Portfolio</h1>
        <p className="text-xl hidden sm:block">
          Multimedia projects created by Mariann Zászlós
        </p>
        <p className="text-xl sm:hidden block">
          Multimedia projects <br></br> created by Mariann Zászlós
        </p>
      </section>

      <p className="sm:text-xl absolute bottom-0 sm:left-0 sm:p-20 pb-10 text-lg">
        Click anywhere to continue
      </p>
    </Link>
  );
}
