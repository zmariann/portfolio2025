"use client";
import IndexVideo from "@/app/_components/index-video";

export default function Home() {
  return (
    <section className="flex sm:items-center min-h-[60vh] sm:justify-end flex-col lg:flex-row">
      <h1 className="text-right font-black text-5xl strokeDesktop m-10 hidden sm:block tracking-wider">
        AUDIOVISUAL CONTENT UNIQUELY DESIGNED FOR YOU.
      </h1>
      <IndexVideo></IndexVideo>
    </section>
  );
}
