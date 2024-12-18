"use client";
import React from "react";
import VideoPlayer from "./react-player";

type VideoGalleryProps = {
  content: string;
};

const SingleVideo: React.FC<VideoGalleryProps> = ({ content }) => {
  return (
    <div className="w-full flex justify-center items-center sm:h-screen mb-10 h-screen">
      <div className="sm:h-[80vh] sm:w-[90%] w-full h-[85vh]">
        <VideoPlayer
          url={content}
          controls={true}
          muted={false}
          playing={true}
          loop={true}
        />
      </div>
    </div>
  );
};

export default SingleVideo;
