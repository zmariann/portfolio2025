"use client";
import TiktokVideos from "../_components/tiktok-videos";
import { useState } from "react";
import Popup from "@/app/_components/popup";

interface Posts {
  title: string;
  textContent: string;
}

export default function Posts(props: Posts) {
  const [popup, setpopup] = useState(false);

  return (
    <div>
      <div className="flex w-full h-[60vh] overflow-scroll">
        <TiktokVideos></TiktokVideos>
      </div>
      <button
        className="tracking-wider text-xl sm:text-2xl underline uppercase"
        onClick={() => setpopup(true)}
      >
        TikTok
      </button>
      <Popup trigger={popup} setTrigger={setpopup}>
        <div className="flex items-center w-full h-[80vh] overflow-scroll bg-red-200">
          <TiktokVideos></TiktokVideos>
        </div>
      </Popup>
    </div>
  );
}
