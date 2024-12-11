"use client";
import { useState } from "react";
import Popup from "@/app/_components/popup";
import VideoGallery from "@/app/_components/videogallery";
import { tiktokUrls } from "./_components/tiktok-videos";
import BackLink from "../../../_components/backLink";

export default function Videos() {
  const [popup, setpopup] = useState(false);

  return (
    <>
      <section className="bg-red-400 sm:flex justify-center items-center mt-auto hidden">
        <div className="absolute mb-24 mt-10">
          <h1 className="relative text-7xl font-[family-name:var(--regonia-font)]">
            Videos
          </h1>

          <div className="flex gap-6 ml-6 mt-2">
            
            <div className="flex justify-start flex-col">
              <button className="text-left text-xl tracking-wider uppercase"
              onClick={() => setpopup(true)}>
                Music<br></br>Video
              </button>
              <p className="flex flex-col text-sm lowercase">editor</p>
            </div>

            <div className="flex justify-start flex-col">
              <button
                className="text-left text-xl tracking-wider uppercase"
                onClick={() => setpopup(true)}
              >
                TikTok/<br></br>Reels
              </button>
              <p className="flex flex-col text-sm lowercase">
                videographer<br></br>post-production
              </p>
            </div>

            <div className="flex justify-start flex-col">
              <button className="text-left text-xl tracking-wider uppercase">
                Showreel<br></br>2021
              </button>
              <p className="flex flex-col text-sm lowercase">
                videographer <br></br>post-production
              </p>
            </div>

            <div className="flex justify-start flex-col">
              <button className="text-left text-xl tracking-wider uppercase">
                Transvanilla <br></br> 1%
              </button>
              <p className="flex flex-col text-sm lowercase">
                videographer<br></br>editor
              </p>
            </div>
          </div>
          <div className="ml-6 mt-2">
            <BackLink></BackLink>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center flex-col w-full min-h-[60vh] sm:hidden mb-5">
        <div className="flex flex-col items-start gap-3 m-3">
          <h1 className="flex flex-col text-5xl font-[family-name:var(--regonia-font)]">
            Videos
          </h1>

          <div>
            <button className="text-lg tracking-wider uppercase text-left">
              Music Video
            </button>
            <p className="flex flex-col text-sm">editor</p>
          </div>

          <div>
            <button
              className="text-lg tracking-wider uppercase text-left"
              onClick={() => setpopup(true)}
            >
              TikTok / Reels
            </button>
            <p className="flex flex-col text-sm">
              videographer | post-production
            </p>
          </div>

          <div>
            <button className="text-lg tracking-wider uppercase text-left">
              Showreel 2021
            </button>
            <p className="flex flex-col text-sm">
              videographer | post-production
            </p>
          </div>

          <div>
            <div className="text-lg tracking-wider uppercase">
              Transvanilla 1%
            </div>
            <p className="flex flex-col text-sm"> videographer | editor</p>
          </div>
          <div>
            <BackLink></BackLink>
          </div>
        </div>
      </section>
      <Popup trigger={popup} setTrigger={setpopup}>
        <VideoGallery content={tiktokUrls}></VideoGallery>
      </Popup>
    </>
  );
}
