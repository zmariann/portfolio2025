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
      <section>
        <h1>Videos</h1>
        <ul>
          <li>
            Music<br></br>Video
          </li>
          <li>
            <button
              className="tracking-wider text-xl sm:text-2xl underline uppercase"
              onClick={() => setpopup(true)}
            >
              TikTok/<br></br>Reels
            </button>
            <Popup trigger={popup} setTrigger={setpopup}>
              <Gallery content={tiktokUrls}></Gallery>
            </Popup>
          </li>
          <li>
            Showreel/<br></br>2020
          </li>
        </ul>
      </section>
      <BackLink></BackLink>
    </>
  );
}
