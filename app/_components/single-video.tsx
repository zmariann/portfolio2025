"use client";
import React from "react";
import VideoPlayer from "./react-player";

type VideoGalleryProps = {
  content: string;
};

const SingleVideo: React.FC<VideoGalleryProps> = ({ content }) => {
  return (
    <div className="w-full sm:h-[90vh] h-screen">
    <VideoPlayer
      url={content}
      controls={true}
      muted={false}
      playing={true}
      loop={true}
    />
    </div>
  );
};

export default SingleVideo;
