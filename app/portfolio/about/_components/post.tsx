"use client";

import { useState } from "react";
import Popup from "@/app/_components/popup";
import Typewriter from "@/app/_components/typewriter";

interface Posts {
  title: string;
  textContent: string;
}

export default function Posts(props: Posts) {
  const [popup, setpopup] = useState(false);

  return (
    <div>
      <h1 className="font-black text-5xl strokeDesktop tracking-wide">
        {props.title}
      </h1>
      <button className="underline" onClick={() => setpopup(true)}>
        Read more...
      </button>
      <Popup trigger={popup} setTrigger={setpopup}>
        <div className="w-[100vw] h-[90vh] sm:w-[70vw] sm:h-[50vh] md:w-[80vw] md:h-[40vh] border-[10px] border-mainBlack pl-5 py-3 pr-2 overflow-y-scroll scrollbar-hide overflow-scroll">
          <Typewriter text={props.textContent} speed={20} />
        </div>
      </Popup>
    </div>
  );
}
