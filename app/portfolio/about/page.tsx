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
          <h1 className="text-right">
            <Posts title={post1Title} textContent={post1Content}></Posts>
          </h1>
          <p className="tracking-wide text-2xl my-8 font-bold uppercase">
            I help people bring their ideas to life with high-quality
            audiovisual solutions.
          </p>
          <h1>
            <Posts title={post2Title} textContent={post2Content}></Posts>
          </h1>
        </div>
      </section>

      <section className="min-h-[60vh] mx-5 sm:hidden">
        <div className="mb-6">
          <p className="tracking-wide font-black uppercase text-2xl mb-8">
            I help people bring their ideas to life with high-quality
            audiovisual solutions.
          </p>
          <div className="flex justify-center items-center flex-col gap-5">
            <Posts title={post1Title} textContent={post1Content}></Posts>

            <Posts title={post2Title} textContent={post2Content}></Posts>
          </div>
        </div>
      </section>
    </>
  );
}
