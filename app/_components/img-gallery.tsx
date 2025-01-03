"use client";
import React, { useState, useEffect } from "react";

interface ImageProps {
  src: string;
  alt: string;
}
interface ImageGalleryProps {
  images: ImageProps[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    setImageLoaded(false);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => {
        const currentIndex = prevIndex ?? 0;
        return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      });
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => {
        const currentIndex = prevIndex ?? 0;
        return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
      if (event.key === "Escape") closeLightbox();
    };

    if (selectedImageIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden aspect-square relative">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-light-shade flex items-center justify-center transition-opacity duration-300"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 border-dark-shade border-[1px] bg-light-shade text-xl font-black w-8 h-8 pt-[1px] z-10"
          >
            X
          </button>

          <div
            className="relative max-w-4xl w-full mx-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
              loading="lazy"
              onLoad={handleImageLoad}
              className={`w-auto h-auto max-w-full max-h-[90vh] transition-opacity duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          <div onClick={(e) => e.stopPropagation()}>
            <button
              onClick={prevImage}
              className="absolute left-4 top-[90%] transform -translate-y-1/2 border-dark-shade text-xl font-black w-8 h-8 pr-[3px] pt-[3px] border-[1px] bg-light-shade z-10"
            >
              &#10094;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-[90%] transform -translate-y-1/2 border-dark-shade text-xl font-black w-8 h-8 pl-[2px] pt-[3px] border-[1px] bg-light-shade z-10"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
