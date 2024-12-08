import VideoPlayer from "@/app/_components/react-player";

const tiktokUrls = [
  "/tiktok/001.mp4",
  "/tiktok/002.mp4",
  "/tiktok/003.mp4",
  "/tiktok/004.mp4",
  "/tiktok/005.mp4",
  "/tiktok/006.mp4",
  "/tiktok/007.mp4",
];

export default function TiktokVideos() {
  return (
    <>
      {tiktokUrls.map((url, i) => {
        return (
          <div className="bg-slate-400" key={i}>
            <VideoPlayer url={url} width="270px" height="480px"/>
          </div>
        );
      })}
    </>
  );
}
