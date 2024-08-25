"use client";
import React from "react";
import ColoredSection from "./ColoredSection";
import { ImageGallery } from "react-image-grid-gallery";

const imagesArray = [
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "/gallery3.png",
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: "/gallery1.png",
    },
    {
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: "/gallery2.png",
    },
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "/gallery1.png",
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: "/gallery2.png",
    },
    {
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: "/gallery3.png",
    },
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "/gallery2.png",
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: "/gallery3.png",
    },
    {
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: "/gallery1.png",
    },
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "/gallery2.png",
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: "/gallery3.png",
    },
    {
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: "/gallery1.png",
    }
  ];

const Gallery = () => {
    
  return (
    <ColoredSection color="WHITE" id="gallery">
      <div className="bg-black py-56  lg:px-96 h-auto">
        <h1 className="text-white text-3xl md:text-4xl lg:text-[56px] font-semibold font-bebasneue">
          .GALLERY
        </h1>
        <div className="py-20">
        <ImageGallery
            imagesInfoArray={imagesArray}
            columnCount={4}
            columnWidth={320}
            gapSize={10}

            />

        </div>
      </div>
    </ColoredSection>
  );
};

export default Gallery;
