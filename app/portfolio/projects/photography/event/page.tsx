import ImageGallery from "@/app/_components/img-gallery";
import { imagesEvent } from "./_components/images-event";
import Title from "../_components/photo-title";
import NextProject from "../_components/next-project";

export default function Coralized() {
  return (
    <>
      <Title name="Event"></Title>
      <section>
        <ImageGallery images={imagesEvent}></ImageGallery>
        <NextProject projectPath="/portfolio/projects/photography/rosa"></NextProject>
      </section>
    </>
  );
}
