"use client";
import { useState } from "react";
import Popup from "@/app/_components/popup";
import VideoGallery from "@/app/_components/video-gallery";
import BackLink from "@/app/_components/back-link";
import { videosmenu } from "./videos-menu";
import SingleVideo from "@/app/_components/single-video";
import { tiktokUrls } from "./tiktok-videos";

export default function VideoPopups() {
  const [activePopup, setActivePopup] = useState<null | string>(null);

  const togglePopup = (popupKey: string | null) => {
    setActivePopup(popupKey);
  };
  return (
    <>
      <section className="md:flex justify-center items-center mt-auto hidden">
        <div className="absolute mb-24 mt-10">
          <h1 className="relative text-7xl font-[family-name:var(--regonia-font)]">
            Videos
          </h1>

          <div className="flex gap-6 ml-6 mt-2">
            {videosmenu.map((project) => {
              return (
                <div
                  key={project.popupName}
                  className="flex justify-start flex-col"
                >
                  <button
                    className="text-left text-xl tracking-wider uppercase"
                    onClick={() => togglePopup(project.popupName)}
                  >
                    {project.title1}
                    <br></br>
                    {project.title2}
                  </button>
                  <p className="flex flex-col text-sm lowercase">
                    {project.role1}
                    <br></br>
                    {project.role2}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="ml-6 mt-2">
            <BackLink></BackLink>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col w-full min-h-[60vh] md:hidden mb-5">
        <div className="flex flex-col items-start gap-3 m-3">
          <h1 className="flex flex-col text-5xl font-[family-name:var(--regonia-font)]">
            Videos
          </h1>

          {videosmenu.map((project) => {
            return (
              <div key={project.popupName}>
                <button
                  onClick={() => togglePopup(project.popupName)}
                  className="text-lg tracking-wider uppercase text-left"
                >
                  {project.title1} {project.title2}
                </button>
                {project.role2 === "" ? (
                  <p className="flex flex-col text-sm">{project.role1}</p>
                ) : (
                  <p className="flex flex-col text-sm">
                    {project.role1} | {project.role2}
                  </p>
                )}
              </div>
            );
          })}
          <div>
            <BackLink></BackLink>
          </div>
        </div>
      </section>
      <Popup
        trigger={activePopup !== null}
        setTrigger={() => setActivePopup(null)}
      >
        {activePopup === "musicvideo" && (
          <SingleVideo content="https://www.youtube.com/watch?v=AFMhjvr_Uj4" />
        )}

        {activePopup === "tiktok" && <VideoGallery content={tiktokUrls} />}

        {activePopup === "showreel2021" && (
          <SingleVideo content="/showreel2021.mp4" />
        )}

        {activePopup === "transvanilla" && (
          <SingleVideo content="https://www.youtube.com/watch?v=A5Zav6wC-AE" />
        )}

        {activePopup === "gardening" && (
          <SingleVideo content="/furgeFugeBemutatkozo.mp4" />
        )}
      </Popup>
    </>
  );
}
