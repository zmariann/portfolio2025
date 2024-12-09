"use client";
import { useState } from "react";
import Popup from "@/app/_components/popup";
import Gallery from "@/app/_components/gallery";
import { tiktokUrls } from "./_components/tiktok-videos";
import Link from "next/link";
import BackLink from "../../../_components/backLink";

export default function Videos() {
  const [popup, setpopup] = useState(false);

  return (
    <>
      <section className="bg-red-400 flex justify-center items-center mt-auto">
        <div className="absolute mb-24">
        <h1 className="relative text-7xl font-[family-name:var(--regonia-font)]">Videos</h1>
        <div className="flex gap-6 ml-6 mt-2">
          <div className="text-xl tracking-wider uppercase">
            Music<br></br>Video
          </div>

          <button
            className="text-xl tracking-wider uppercase"
            onClick={() => setpopup(true)}
          >
            TikTok/<br></br>Reels
          </button>

          <Popup trigger={popup} setTrigger={setpopup}>
            <Gallery content={tiktokUrls}></Gallery>
          </Popup>

          <div className="text-xl tracking-wider uppercase">
            Showreel/<br></br>2020
          </div>
        </div>
        </div>
      </section>
      <div className="sm:hidden block"><BackLink></BackLink></div>
      
    </>
  );
}
