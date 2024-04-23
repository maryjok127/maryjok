// src/ProductCarousel.js
import React, { useState } from 'react';
//import products from './products';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const GiftingCarousel = () => {
  const products = [
    { id: 1, name: 'Product 1', image: 'https://th.bing.com/th/id/OIP.JK2oK4OM7F9s9napPoZt0wHaEs?pid=ImgDet&rs=1' },
    { id: 2, name: 'Product 2', image: 'https://th.bing.com/th/id/OIP.JK2oK4OM7F9s9napPoZt0wHaEs?pid=ImgDet&rs=1' },
    { id: 3, name: 'Product 3', image: 'https://th.bing.com/th/id/OIP.JK2oK4OM7F9s9napPoZt0wHaEs?pid=ImgDet&rs=1' },
    { id: 4, name: 'Product 3', image: 'https://th.bing.com/th/id/OIP.JK2oK4OM7F9s9napPoZt0wHaEs?pid=ImgDet&rs=1' },
    { id: 5, name: 'Product 3', image: 'https://th.bing.com/th/id/OIP.JK2oK4OM7F9s9napPoZt0wHaEs?pid=ImgDet&rs=1' },
    { id: 6, name: 'Product 3', image: 'https://th.bing.com/th/id/OIP.JK2oK4OM7F9s9napPoZt0wHaEs?pid=ImgDet&rs=1' },
    { id: 7, name: 'Product 3', image: 'https://th.bing.com/th/id/OIP.JK2oK4OM7F9s9napPoZt0wHaEs?pid=ImgDet&rs=1' },
    // Add more products as needed
  ];
  const [startIndex, setStartIndex] = useState(0);

  const productsToShow = products.slice(startIndex, startIndex + 3);

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

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4">
      <div className="relative">
        <h1 className="text-center">Gifting Offers</h1>
        <div className="flex">
          {productsToShow.map((product) => (
            <div key={product.id} className="w-full w-1 sm:w-1/2 md:w-1/3 px-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src={`${product.image}`} // Make sure to put your images in the 'public/images/' directory
                  alt={product.name}
                  className="w-full h-auto"
                />
                {/* Add more product information here */}
              </div>
            </div>
          ))}
        </div>
        <button
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
        </button>
      </div>
    </div>
  );
};

export default GiftingCarousel;
