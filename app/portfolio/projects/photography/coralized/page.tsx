import ImageGallery from "@/app/_components/img-gallery";
import { imagesCoralized } from "./_components/images-coralized";
import Title from "../_components/photo-title";
import NextProject from "../_components/next-project";

export default function Coralized() {
  return (
    <>
      <Title name="Coralized"></Title>
      <section>
        <ImageGallery images={imagesCoralized}></ImageGallery>
        <NextProject projectPath="/portfolio/projects/photography/event"></NextProject>
      </section>
    </>
  );
}
