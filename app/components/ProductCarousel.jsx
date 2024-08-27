import {useState} from 'react';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {useMediaQuery} from 'react-responsive';
import Slider from "react-slick";
import {
  VariantSelector,
  getSelectedProductOptions,
  CartForm,
} from '@shopify/hydrogen';

import ReactGA from 'react-ga4';
const TRACKING_ID = "G-T3JX7QEBFV"; 
ReactGA.initialize(TRACKING_ID);

//import products from './products';

const ProductCarousel = ({products}) => {
  const noImg = "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/No-image-found.jpg?v=1708942129"
  let productsToShow = [];
  const lines = [];
  var len = products.edges.length;
  const isLargeScreen = useMediaQuery({minWidth: 1024});
  const eIndex = isLargeScreen ? len < 4 ? len : 4 : 2;
  productsToShow = products;

  
  const calculatePer = (original_price, disc_price)=>{
    let price = Math.trunc(original_price);
    let compareAtPrice = Math.trunc(disc_price);
    let per = (compareAtPrice - price) / (compareAtPrice) * 100;
    return Math.trunc(per);
  }

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
        className="absolute z-10 lg:left-[-90px] top-1/2 transform -translate-y-1/2  bg-white bg-opacity-75 rounded-full p-2 ml-4 hover:bg-opacity-100 z-4 text-white"
        onClick={onClick}>
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100 mst-arrow"
          size={40}
        />
      </button>
    );
  }

  const cartAct = ()=>{
    ReactGA.event({
        hitType: "BuyNow",
        category: 'Cart Action',
        action: 'Click',
        label: "platform",
    });
    window.location.href = window.location.href + '#cart-aside';
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
                      <h2 className="text-lg font-semibold mt-2 text-center min-h-[50px] xs:min-h-[85px] sm:min-h-[50px]">
                        {product.node.title}
                      </h2>
                      <div className='flex flex-row justify-center gap-1 items-center'>
                        <div className='flex items-center justify-center'>
                          <div className="font-bold m-auto flex  text-center text-sm xs:text-sm sm:text-xl"> 
                          &#x20b9;{Math.trunc(product.node.priceRange.minVariantPrice.amount)} 
                          </div>
                        </div>
                        { product.node.variants.edges[0].node.compareAtPrice?.amount &&
                          <div className='flex items-center justify-center'>
                            <div className="ml-2 line-through opacity-50 text-sm xs:text-sm sm:text-xl">
                            &#x20b9;{Math.trunc(product.node.variants.edges[0].node.compareAtPrice?.amount)} 
                            </div>
                            <b className='ml-2 text-red-500 text-sm xs:text-sm sm:text-xl'> ({ calculatePer(product.node.priceRange.minVariantPrice.amount,product.node.variants.edges[0].node.compareAtPrice?.amount) } % Off) </b>
                          </div>
                        }
                       
                      </div>
                    </div>
                    </div>
                    <div className="px-1 py-1 flex items-center sm:flex-row gap-3 justify-center w-[100%]">
                  <div className="w-[25%] flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 33"
                      xmlSpace="preserve"
                      className="sm:w-[43px] w-[43px] like-home"
                    >
                      <path
                        d="M9 .5h14c4.7 0 8.5 3.8 8.5 8.5v14c0 4.7-3.8 8.5-8.5 8.5H9C4.3 31.5.5 27.7.5 23V9C.5 4.3 4.3.5 9 .5z"
                        fill="rgb(255, 255, 255)"
                        stroke="rgb(0, 0, 0)"
                      ></path>
                      <path
                        d="M22.3 11.8c.4.4.7.9.9 1.4.2.5.3 1.1.3 1.6 0 .6-.1 1.1-.3 1.6-.2.5-.5 1-.9 1.4l-5.6 5.6s-.1 0-.1.1h-.2s-.1 0-.1-.1l-5.6-5.6C10 17 9.5 16 9.5 14.9c0-1.1.3-2.1 1-2.9.7-.8 1.7-1.3 2.7-1.5 1.1-.1 2.1.2 3 .8l.3.2.3-.2c.8-.6 1.8-.9 2.8-.8 1.1.1 2 .5 2.7 1.3z"
                        fill="none"
                        stroke="rgb(0, 0, 0)"
                      ></path>
                    </svg>
                  </div>
              
                  <div d-line={index} className="w-[75%]">
                    <CartForm
                      route="/cart"
                      inputs={{lines: lines[index]}}
                      action={CartForm.ACTIONS.LinesAdd}
                      className="w-[83%] "
                    >
                      {(fetcher) => (
                        <>
                          <button
                          disabled={!product.node.variants || !product.node.variants.edges[0].node.availableForSale}
                            className="w-[100%] h-11 bg-black hover:bg-blue-700 text-white font-bold py-1 rounded-lg inline-block home-product"
                            type="submit"
                            onClick={() => cartAct() }
                          >
                           { product.node.variants && product.node.variants.edges[0].node.availableForSale ? 'ADD TO CART' : 'Sold out'}
                          </button>
                        </>
                      )}
                    </CartForm>
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
