import {useState} from 'react';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {useMediaQuery} from 'react-responsive';
import Slider from "react-slick";
//import products from './products';

const ProductCarousel = ({products}) => {
  const noImg = "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/No-image-found.jpg?v=1708942129"
  let productsToShow = [];
  const lines = [];
  var len = products.edges.length;
  const isLargeScreen = useMediaQuery({minWidth: 1024});
  const eIndex = isLargeScreen ? len < 4 ? len : 4 : 2;
  productsToShow = products;

 
  products.edges.map((product) => {
    product.node.variants.edges.map((line) => {
      if(line.node.availableForSale){
      lines.push([
        {
          merchandiseId: line.node.id,
          quantity: 1,
        },
      ]);
    }
    });
  });

  const goToProduct=(url_path)=>{
    window.location.href = url_path
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button 
        className="absolute lg:left-[-90px] top-1/2 transform -translate-y-1/2  bg-white bg-opacity-75 rounded-full p-2 ml-4 hover:bg-opacity-100 z-40 text-white"
        onClick={onClick}>
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100 mst-arrow"
          size={40}
        />
      </button>
    );
  }

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button 
          className="absolute lg:right-[-90px] right-0 top-1/2 transform -translate-y-1/2  bg-white bg-opacity-75 rounded-full p-2 mr-4 hover:bg-opacity-100 text-white"
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
    infinite:true,
    dots: false,
    speed: 500,
    slidesToShow: eIndex,
    slidesToScroll: 1,
    nextArrow:<SampleNextArrow />,
    prevArrow: <SamplePrevArrow /> ,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: eIndex,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: eIndex,
          slidesToScroll: eIndex,
          initialSlide: 1,
          dots: true
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };
  return (
    <div className="recommended_section w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6">
      <div>
        <Slider {...settings}>
          {productsToShow.edges.map((product, index) => (
            <div key={`product_${product.node.id}`} className="w-full" >
                <div className="bg-white mst-card rounded-lg shadow-lg mx-2 p-1 sm:p-2 ">
                  <div className='cursor' onClick={()=> goToProduct(`/products/${product.node.handle}`)}>
                    <img
                      src={`${ product.node.images.edges.length > 0 ? product.node.images.edges[0].node.url : noImg }`} // Make sure to put your images in the 'public/images/' directory
                      alt={product.node.title}
                      className="w-full h-auto"
                    />
                    <div className='product_info'>
                      <h2 className="text-lg font-semibold mt-2 text-center min-h-[85px] sm:min-h-[50px]">
                        {product.node.title}
                      </h2>
                      <div>
                        <h1 className="text-center font-bold h-full w-full m-auto">
                        &#x20b9;{Math.trunc(product.node.priceRange.minVariantPrice.amount)} 
                        &nbsp;&nbsp;
                        { product.node.variants.edges[0].node.compareAtPrice?.amount ?
                          <s className="opacity-50 text-xl">
                          &#x20b9;{Math.trunc(product.node.variants.edges[0].node.compareAtPrice?.amount)} 
                          </s>
                          :
                          <s className="opacity-50 text-xl">
                          &#x20b9;{Math.trunc(product.node.priceRange.minVariantPrice.amount)} 
                          </s>
                        }
                        </h1>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
          ))}
   
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
