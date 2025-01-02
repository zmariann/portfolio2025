import ImageGallery from "@/app/_components/img-gallery";
import { imagesCoralized } from "./_components/images-coralized";
import Title from "../_components/photo-title";
import BackLink from "@/app/_components/back-link";
import Link from "next/link";

export default function Coralized() {
  return (
    <>
      <Title name="Coralized"></Title>
      <section>
        <ImageGallery images={imagesCoralized}></ImageGallery>
        <div className="flex justify-between text-center mb-5 mx-10">
          <Link
            className="uppercase underline text-sm"
            href="/portfolio/projects/photography/event"
          >
            Next photo project
          </Link>
          <BackLink></BackLink>
        </div>
      </section>
    </>
  );
}
