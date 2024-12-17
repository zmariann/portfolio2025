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
    <section className="w-full flex flex-col mt-2">
      <div className="flex justify-center items-center h-[80vh] w-full flex-col md:flex-row">
        <div className="hidden md:flex w-full h-full justify-center items-center">
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
          playing={true}
          loop={true}
        />

        <div className="md:hidden flex w-[70vw] justify-between">
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

        <div className="hidden w-full h-full md:flex justify-center items-center">
          <button
            className="text-xl font-black tracking-wider uppercase"
            onClick={handleNext}
            disabled={content.length <= 1}
          >
            n
          </button>
        </div>
      </div>

      <div className="hidden md:block text-xs text-center m-3">
        {currentIndex + 1} / {content.length}
      </div>
    </section>
  );
};

export default VideoGallery;
