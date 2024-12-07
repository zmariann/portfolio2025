import {
  post1Title,
  post1Content,
  post2Title,
  post2Content,
} from "./_components/all-posts";
import Posts from "./_components/post";

export default function About() {
  return (
    <section className="flex justify-center items-center min-h-[60vh] sm:mx-10 mx-8">
      <div>
        <h1 className="text-right">
          <Posts title={post1Title} textContent={post1Content}></Posts>
        </h1>

        <p className="tracking-wide text-lg sm:text-2xl my-3 font-bold uppercase">
          I help people bring their ideas to life with high-quality audiovisual
          solutions.
        </p>
        <h1>
          <Posts title={post2Title} textContent={post2Content}></Posts>
        </h1>
      </div>
    </section>
  );
}
