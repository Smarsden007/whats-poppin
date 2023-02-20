import React from "react";
import Orange from './../Media/Orange.png'
import Beige from './../Media/Beige.png'
import Green from './../Media/Green.png'
import Purple from './../Media/Purple.png'
import Yellow from './../Media/Yellow.png'
import Valentine from './../Media/Valentine.png'




const images = [
  {
    id: 1,
    src: Orange,
    alt: "Image 1",
  },
  {
    id: 2,
    src: Beige,
    alt: "Image 2",
  },
  {
    id: 3,
    src: Green,
    alt: "Image 3",
  },
  {
    id: 4,
    src: Purple,
    alt: "Image 4",
  },
  {
    id: 5,
    src: Yellow,
    alt: "Image 4",
  },
  {
    id: 6,
    src: Valentine,
    alt: "Image 4",
  },
];



const ImageGallery = () => {
  return (
    <div className="flex flex-wrap justify-center bg-[#F4ECD6]">
      {images.map((image) => (
        <div
          key={image.id}
          className="w-full md:w-1/2 lg:w-1/3 p-2 cursor-pointer"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
