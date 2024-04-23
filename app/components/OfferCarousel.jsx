// src/ProductCarousel.js
import React, { useState } from 'react';
//import products from './products';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const OfferCarousel = (collections) => {
  const [startIndex, setStartIndex] = useState(0);
  const productsToShow = collections.collections;//.slice(startIndex, startIndex + 3);
  const nextProducts = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % products.length);
  };

  const prevProducts = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0
        ? products.length - (products.length % 3)
        : prevIndex - 3
    );
  };
  const goToCollection=(url_path)=>{
    window.location.href = url_path
  }

  const copyCoupan = (code)=>{
    navigator.clipboard.writeText(code);
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4">
      <div className="relative">
        <h1 className="text-center"> Special Offers </h1>
        <div className="flex flex-wrap">
          {productsToShow.map((product) => (
            <div key={product.id}  className="w-full flex-auto sm:w-1/2 md:w-1/3 py-2 px-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img
                  onClick={()=> goToCollection(`/collections/${product.handle}`)}
                  src={`${product.image.url}`} // Make sure to put your images in the 'public/images/' directory
                  alt={product.name}
                  className="w-full h-auto"
                />
                <div className="grid grid-rows-1 grid-flow-col gap-4"> 
                  {/* <div className="code"> { product.handle } </div> */}
                  <div className='col-span-6'></div>
                  <div className='coupan_code_wrapper cursor outline-dotted p-2 auto-cols-auto'>
                  <b id="coupan_code">{product.description} &nbsp; </b>
                  <svg onClick={()=> copyCoupan(product.description) } height="30" width="30" className='flex justify-center align-center' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect className='w-8 flex justify-center align-center' fill="none"/><polyline points="216 184 216 40 72 40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><rect x="40" y="72" width="144" height="144" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>
                  </div>
                  
                </div>
                {/* Add more product information here */}
              </div>
            </div>
          ))}
        </div>
        {/* <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 ml-4 hover:bg-opacity-75"
          onClick={()=>setStartIndex((prevIndex) =>
            prevIndex === 0
              ? products.length - (products.length % 3)
              : prevIndex - 3
          )}
        >
          <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100'  size={40} />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75"
          onClick={()=>setStartIndex((prevIndex) => (prevIndex + 3) % products.length)}
        >
          <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100'  size={40} />
        </button> */}
      </div>
    </div>
  );
};

export default OfferCarousel;
