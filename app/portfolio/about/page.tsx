import {
  post1Title,
  post1Content,
  post2Title,
  post2Content,
} from "./_components/all-posts";
import Posts from "./_components/post";

export default function About() {
  return (
    <>
      <section className="sm:flex justify-center items-center min-h-[60vh] hidden mx-10">
        <div>
          <h1 className="flex justify-end text-right">
            <Posts title={post1Title} textContent={post1Content}></Posts>
          </h1>
          <p className="tracking-wider text-2xl my-8">
            I help people bring their ideas to life with high-quality
            audiovisual solutions.
          </p>
          <Posts title={post2Title} textContent={post2Content}></Posts>
        </div>
      </section>
    </>
  );
}
