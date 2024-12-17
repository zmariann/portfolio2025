"use client";
import IndexVideo from "@/app/_components/index-video";

export default function Home() {
  return (
    <section className="flex sm:items-center min-h-[60vh] sm:justify-end flex-col lg:flex-row">
      <div className="sm:text-right font-black text-4xl sm:text-5xl strokeDesktop sm:m-10 m-2 tracking-wider h-[70vh] flex items-center justify-center">
        <h1>AUDIOVISUAL CONTENT UNIQUELY DESIGNED FOR YOU.</h1>
      </div>
      <IndexVideo></IndexVideo>
    </section>
  );
}
