"use client";
import { ReactNode } from "react";

interface Popup {
  children: ReactNode;
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Popup(props: Popup) {
  return props.trigger ? (
    <div className="fixed top-0 left-0 w-full min-h-screen flex justify-center items-center flex-col bg-light-shade">
      <button
        className="text-xl font-black tracking-wider m-1"
        onClick={() => props.setTrigger(false)}
      >
        X
      </button>
      <div>{props.children}</div>
    </div>
  ) : (
    ""
  );
}
