import Link from "next/link";

export default function Home() {
  return (
    <Link
      href={"/portfolio"+'.html'}
      className="flex items-center justify-center min-h-screen pb-40 pt-5 sm:relative flex-col"
    >
      <div>
        <section className="sm:p-0 p-5">
          <h1 className="sm:text-9xl text-5xl font-[family-name:var(--regonia-font)]">
            Portfolio
          </h1>
          <p className="text-xl hidden sm:block">
            Video & Photo Projects Created by Mariann Zászlós
          </p>
          <p className="text-xl sm:hidden block">
            Video & Photo Projects by <br></br> Mariann Zászlós
          </p>
        </section>

        <p className="sm:text-xl sm:absolute sm:bottom-0 sm:left-0 sm:p-20 pb-10 text-sm p-5">
          Click anywhere to continue
        </p>
      </div>
    </Link>
  );
}
