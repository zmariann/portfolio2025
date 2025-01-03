import ImageGallery from "@/app/_components/img-gallery";
import { imagesPeople } from "./_components/images-people";
import Title from "../_components/photo-title";
import NextProject from "../_components/next-project";

export default function People() {
  return (
    <>
      <Title name="People"></Title>
      <section>
        <ImageGallery images={imagesPeople}></ImageGallery>
        <NextProject projectPath="/portfolio/projects/photography/products"></NextProject>
      </section>
    </>
  );
}
