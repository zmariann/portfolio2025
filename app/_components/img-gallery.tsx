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
    setImageLoaded(false); // Reset loading state
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

  // Handle keyboard navigation
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

  // Lazy load lightbox image
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg aspect-square relative"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center transition-opacity duration-300"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full mx-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-3xl font-bold z-10"
            >
              &times;
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl px-4 py-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 z-10"
            >
              &#10094; {/* Left arrow */}
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl px-4 py-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 z-10"
            >
              &#10095; {/* Right arrow */}
            </button>

            <img
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
              loading="lazy"
              onLoad={handleImageLoad}
              className={`w-auto h-auto max-w-full max-h-[90vh] rounded-lg transition-opacity duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
