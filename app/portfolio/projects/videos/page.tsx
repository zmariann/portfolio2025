import Link from "next/link";
import BackLink from "./_components/backLink";

export default function Videos() {
  return (
    <>
      <section>
        <h1>Videos</h1>
        <ul>
          <li>
            Music<br></br>Video
          </li>
          <li>
            <Link href="/portfolio/projects/videos/tiktok">TikTok/<br></br>Reels</Link>
          </li>
          <li>
            Showreel/<br></br>2020
          </li>
        </ul>
      </section>
      <BackLink></BackLink>
    </>
  );
}
