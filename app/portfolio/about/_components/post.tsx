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
      <button
        className="tracking-wider text-xl sm:text-2xl underline uppercase"
        onClick={() => setpopup(true)}
      >
        {props.title}
      </button>
      <Popup trigger={popup} setTrigger={setpopup}>
        <div className="w-[90vw] h-[80vh] sm:w-[70vw] sm:h-[50vh] md:w-[80vw] md:h-[40vh] border-[1px] border-dark-shade  pl-5 py-3 pr-2 overflow-y-scroll scrollbar-hide overflow-scroll">
          <Typewriter text={props.textContent} speed={20} />
        </div>
      </Popup>
    </div>
  );
}
