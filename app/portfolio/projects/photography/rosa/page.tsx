import ImageGallery from "@/app/_components/img-gallery";
import { imagesRosa } from "./_components/images-rosa";
import Title from "../_components/photo-title";
import NextProject from "../_components/next-project";

export default function Coralized() {
  return (
    <>
      <Title name="Rosa"></Title>
      <section>
        <ImageGallery images={imagesRosa}></ImageGallery>
        <NextProject projectPath="/portfolio/projects/photography/people"></NextProject>
      </section>
    </>
  );
}