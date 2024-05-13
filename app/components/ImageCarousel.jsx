import React, {useState} from 'react';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {useMediaQuery} from 'react-responsive';
import Slider from "react-slick";

const ImageCarousel = () => {
  const isSmall = useMediaQuery({maxWidth: 640});
  var imageSrc = []
  const goToCollection=(url)=>{
    window.location.href = url
  }
  var imageSrc = []
  if(!isSmall){
    imageSrc = [{
      url:"/collections/cult-makeup",
      img:'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_1.jpg?v=1713342696'
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_3.jpg?v=1713342905",
      url:"/collections/way-2-slay-mjk",
    },
    {
      img:'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_2.jpg?v=1713342905',
      url:"/collections/rizz-roll-mjk"
    },
    {
      img:'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/pro_studio__banner_5_opt_2.jpg?v=1714388254',
      url:'collections/pro-studio-mjk'
    }];
  }else{
    imageSrc = [{
      url:"/collections/cult-makeup",
      img:'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_1.jpg?v=1713342696'
    },
    {
      img:'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Hero_Banners_2.jpg?v=1713353171',
      url:"/collections/way-2-slay-mjk",
    },
    {
      img:'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Hero_Banners_4.jpg?v=1713353171',
      url:"/collections/rizz-roll-mjk"
    },
    {
      img:'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/pro_studio_mobile_banner_3_700_x_470.jpg?v=1714388254',
      url:'collections/pro-studio-mjk'
    }];
  }
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button 
        className="absolute top-1/2 transform -translate-y-1/2  bg-opacity-75 rounded-full p-2 ml-4 hover:bg-opacity-100 text-white"
        onClick={onClick}>
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100 mst-arrow"
          size={40}
        />
      </button>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-opacity-75 rounded-full p-2 mr-4 hover:bg-opacity-100 text-white"
          onClick={onClick}
        >
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100 mst-arrow"
            size={40}
          />
        </button>
    );
  }
  const settings = {
    infinite: true,
    speed: 500,
    initialSlide: isSmall ? 1 : 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3500,
    cssEase: "linear",
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
    }
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
 
  return (
    <div className="relative">
      <Slider {...settings}>
        {
          imageSrc.map((item)=>(
            <>
              <img
              onClick={()=> goToCollection(item.url) }
              className={`lg:w-full md:w-full cursor-pointer sm:w-full object-cover ${isSmall ? 'rounded-2xl' : '' } w-[100%]`}
              src={item.img}
            />
            </>
          ))
        }
      </Slider>
      {/* <button
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
      </button> */}
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
