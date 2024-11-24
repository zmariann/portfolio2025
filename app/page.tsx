import Link from "next/link";

export default function Home() {
  return (
    <Link
      href={"/portfolio"}
      className="flex items-center justify-center min-h-screen pb-40 pt-5 relative"
    >
      <div>
        <section className="">
          <h1 className="regonia text-9xl">Portfolio</h1>
          <p className="text-xl">
            Multimedia projects created by Mariann Zászlós
          </p>
        </section>

        
      </div>

      <p className="text-xl absolute bottom-0 left-0 p-20">Click anywhere to continue</p>

    </Link>
  );
}
