import {
  post1Title,
  post1Content,
  post2Title,
  post2Content,
} from "./_components/all-posts";
import Posts from "./_components/post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
};

export default function About() {
  return (
    <section className="flex justify-center items-center min-h-[40vh] sm:min-h-[60vh] md:min-h-[40vh] lg:min-h-[70vh] sm:mx-10 md:mx-5 mx-5 flex-col">
      <h1 className="w-full sm:w-3/4 mb-4 text-right">
        <Posts title={post1Title} textContent={post1Content}></Posts>
      </h1>
      <div className="h-[50vh] sm:h-[30vh] md:w-3/4 md:h-[40vh] lg:h-auto border-[1px] border-dark-shade sm:m-2 sm:p-3 p-2 overflow-scroll scrollbar-hide">
        <p className="tracking-wide text-lg sm:text-xl font-black uppercase">
          I help people bring their ideas to life with high-quality
          audiovisual solutions.
        </p>
        <p className="tracking-wide text-lg">
          Quality photo and video content is an essential part of a successful
          social media presence. While a clumsy design or poor-quality video
          creates a negative impression and hides the strengths of your
          services, a well-thought-out visual presentation grabs attention,
          makes you stand out from the crowd, builds trust, strengthens your
          brand, and helps you convey what you truly represent. I can help you
          get the most out of your brand's online presence.
        </p>
      </div>
      <h1 className="w-full md:w-3/4 m-4">
        <Posts title={post2Title} textContent={post2Content}></Posts>
      </h1>
    </section>
  );
}
