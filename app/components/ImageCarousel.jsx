import React, {useState} from 'react';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const ImageCarousel = ({images , isSmall}) => {
  //'cult-makeup','way-2-slay-mjk',rizz-roll-mjk','pro-studio-mjk',
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  var mobImgHeight= {height:"inherit"}
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length,
    );
  };
  const goToCollection=(index)=>{
    switch(index){
      case 0: { window.location.href = "/collections/cult-makeup" }
      break;
      case 1: { window.location.href = "/collections/way-2-slay-mjk" }
      break;
      case 2: { window.location.href = "/collections/rizz-roll-mjk" }
      break;
      default : { window.location.href = "/collections/pro-studio-mjk" }
    }
  }
  if(isSmall) mobImgHeight = {height:"inherit"}
  return (
    <div className="relative">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white"
        onClick={() =>
          setCurrentImageIndex(
            (currentImageIndex - 1 + images.length) % images.length,
          )
        }
      >
      <MdChevronLeft
        className="opacity-50 cursor-pointer hover:opacity-100 mst-arrow"
        size={40}
      />
      </button>
      <img
        onClick={()=> goToCollection(currentImageIndex) }
        className={`lg:w-full md:w-full cursor-pointer sm:w-full object-cover ${isSmall ? 'rounded-2xl' : '' } w-[100%]`}
        src={images[currentImageIndex]}
      />
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white"
        onClick={() =>
          setCurrentImageIndex((currentImageIndex + 1) % images.length)
        }
      >
      <MdChevronRight
        className="opacity-50 cursor-pointer hover:opacity-100 mst-arrow"
        size={40}
      />
      </button>
    </div>
  );
};
export default ImageCarousel;
/*
import React, { useState, useRef } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null); // Create a ref for the element to scroll to.

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const scrollToElement = () => {
    // Scroll to the element with the specified ref.
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: 'smooth', // You can adjust the scrolling behavior.
        block: 'start',     // Scrolls to the top of the element.
      });
    }
  };

  return (
    <div className="overflow-y-auto h-full md:h-80 border border-gray-300 rounded-lg shadow-lg">
      <div className="flex space-x-4 p-4 group-hover:scrollbar-auto">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full md:w-80 md:h-80 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
*/
