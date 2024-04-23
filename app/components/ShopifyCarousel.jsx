import React, { useState } from 'react';
//import { data } from c'./mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {Await, useLoaderData, Link} from '@remix-run/react';

function ShopifyCarousel({products}) {
  //console.log(products);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100'  size={40} />
        <div
          id='slider'
          className=' h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {products.edges.map((item) => (
            <div className='inline-block'>
            <img 
              className=' p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' 
              src={item.node.images.edges[0].node.url}
              alt='/'
            />
            <h2 className="text-xl font-semibold mb-2">
            <Link to={`/products/${item.node.handle}`}>{item.node.title}</Link></h2>
            <button className='rounded bg-indigo-500'>Add to Shopify</button>
            </div>
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100'  size={40}
        onClick={()=>
         console.log('Button Clicked')
        }
        />
      </div>
    </>
  );

}

export default ShopifyCarousel;

{/*
<>
      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100'  size={40} />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {products.edges.map((item) => (
            <div className='inline-block'>
            <img 
              className='md:w-[220px] sm:w-[50px] p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' 
              src={item.node.images.edges[0].node.url}
              alt='/'
            />
            <h2 className="text-xl font-semibold mb-2">
            <Link to={`/products/${item.node.handle}`}>{item.node.title}</Link></h2>
            <button className='rounded bg-indigo-500'>Add to cart</button>
            </div>
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100'  size={40}
        onClick={()=>
         console.log('Button Clicked')
        }
        />
      </div>
    </>
    */

}