import VideoPlayer from "./react-player";

export default function IndexVideo() {
  return (
    <>
      <div className="hidden sm:block">
        <VideoPlayer
          url="/multimedia.mp4"
          loop={true}
          playing={true}
          muted={true}
        ></VideoPlayer>
      </div>
      <div className="block sm:hidden">
        <VideoPlayer
          url="/mobileSize.mp4"
          width="100%"
          height="100%"
          loop={true}
          playing={true}
          muted={true}
        />
      </div>
    </>
  );
}
