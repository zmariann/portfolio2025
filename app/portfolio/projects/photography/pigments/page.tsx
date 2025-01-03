import ImageGallery from "@/app/_components/img-gallery";
import { imagesPigments } from "./_components/images-pigments";
import Title from "../_components/photo-title";
import NextProject from "../_components/next-project";

export default function Coralized() {
  return (
    <>
      <Title name="Pigments"></Title>
      <section>
        <ImageGallery images={imagesPigments}></ImageGallery>
        <NextProject projectPath="/portfolio/projects/photography/event"></NextProject>
      </section>
    </>
  );
}