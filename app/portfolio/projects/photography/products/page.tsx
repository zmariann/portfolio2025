import ImageGallery from "@/app/_components/img-gallery";
import { imagesProducts } from "./_components/images-products";
import Title from "../_components/photo-title";
import NextProject from "../_components/next-project";

export default function Products() {
  return (
    <>
      <Title name="Products"></Title>
      <section>
        <ImageGallery images={imagesProducts}></ImageGallery>
        <NextProject projectPath="/portfolio/projects/photography/coralized"></NextProject>
      </section>
    </>
  );
}
