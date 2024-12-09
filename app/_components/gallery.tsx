"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import VideoPlayer from "./react-player";

type GalleryProps = {
  content: string[];
};

const Gallery: React.FC<GalleryProps> = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + content.length) % content.length
    );
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      handleNext();
    } else if (event.key === "ArrowLeft") {
      handlePrevious();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="w-full">
      <div className="text-xs text-center m-1">
        {currentIndex + 1} / {content.length}
      </div>

      <div className="flex justify-center items-center h-[80vh] w-full">
        <div className=" w-full h-full flex justify-center items-center">
          <button
            className="text-xl font-black tracking-wider uppercase"
            onClick={handlePrevious}
            disabled={content.length <= 1}
          >
            p
          </button>
        </div>

        <VideoPlayer
          url={content[currentIndex]}
          controls={true}
          muted={true}
          playing={true}
          loop={true}
          width="55%"
        />

        <div className="w-full h-full flex justify-center items-center">
          <button
            className="text-xl font-black tracking-wider uppercase"
            onClick={handleNext}
            disabled={content.length <= 1}
          >
            n
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
