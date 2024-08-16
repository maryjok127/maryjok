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
      url:"",
      img:'',
    },
    {
      img:'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_1.jpg?v=1715767477',
      url:"/collections/cult-accessories",
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_3.jpg?v=1713342905",
      url:"/collections/way-2-slay-mjk",
    },
    {
      img:'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_2.jpg?v=1715944709',
      url:"/collections/rizz-roll-mjk"
    },
    {
      img:'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/pro_studio__banner_5_opt_2.jpg?v=1714388254',
      url:'collections/pro-studio-mjk'
    }];
  }else{
    imageSrc = [{
      url:"",
      img:''
    },          
    {
      img:'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Hero_Banners_1.jpg?v=1715767503',
      url:"/collections/cult-accessories",
    },
    {
      img:'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Hero_Banners_2.jpg?v=1713353171',
      url:"/collections/way-2-slay-mjk",
    },
    {
      img:'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Hero_Banners_4.jpg?v=1715944487',
      url:"/collections/rizz-roll-mjk"
    },
    {
      img:'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/pro_studio_mobile_banner_3_700_x_470.jpg?v=1715944382',
      url:'collections/pro-studio-mjk'
    }];
  }
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button 
        className="absolute top-1/2 z-10 transform -translate-y-1/2  bg-opacity-75 rounded-full p-2 ml-4 hover:bg-opacity-100 text-white"
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  return (
    <div className="relative">
      <Slider {...settings}>
        {
          imageSrc.map((item,index)=>(
              <img key={`img_crsll_${index}`}
              onClick={()=> goToCollection(item.url) }
              className={`lg:w-full md:w-full cursor-pointer sm:w-full object-cover ${isSmall ? 'rounded-2xl' : '' } w-[100%]`}
              src={item.img}
            />
          ))
        }
      </Slider>
    </div>
  );
};
export default ImageCarousel;
