"use client";
import React from "react";
import dynamic from "next/dynamic";
export const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

interface VideoPlayerProps {
  url: string;
  width?: string;
  height?: string;
  loop?: boolean;
  playing?: boolean;
  muted?: boolean;
  controls?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  width = "100%",
  height = "100%",
  loop,
  playing,
  muted,
  controls,
}) => {
  return (
    <ReactPlayer
      url={url}
      width={width}
      height={height}
      loop={loop}
      playing={playing}
      muted={muted}
      controls={controls}
    />
  );
};

export default VideoPlayer;
