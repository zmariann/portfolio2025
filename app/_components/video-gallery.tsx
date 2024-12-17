"use client";
import { useCallback, useEffect, useState } from "react";
import VideoPlayer from "./react-player";

type VideoGalleryProps = {
  content: string[];
};

const VideoGallery: React.FC<VideoGalleryProps> = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  }, [content.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + content.length) % content.length
    );
  }, [content.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleNext, handlePrevious]);
  return (
    <>
      <section className="w-full md:block hidden">
        <div className="flex justify-center items-center h-[80vh] w-full">
          <div className="w-full h-full flex justify-center items-center">
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
        <div className="text-xs text-center m-3">
          {currentIndex + 1} / {content.length}
        </div>
      </section>

      <section className="w-full md:hidden flex justify-center items-center flex-col overflow-scroll">
        <div className="flex justify-center items-center h-[80vh] w-full">
          <VideoPlayer
            url={content[currentIndex]}
            controls={true}
            muted={true}
            playing={true}
            loop={true}
          />
        </div>

        <div className="flex w-[70vw] justify-between">
          <button
            className="text-xl font-black tracking-wider uppercase"
            onClick={handlePrevious}
            disabled={content.length <= 1}
          >
            p
          </button>

          <div className="text-xs text-center m-1">
            {currentIndex + 1} / {content.length}
          </div>

          <button
            className="text-xl font-black tracking-wider uppercase"
            onClick={handleNext}
            disabled={content.length <= 1}
          >
            n
          </button>
        </div>
      </section>
    </>
  );
};

export default VideoGallery;
