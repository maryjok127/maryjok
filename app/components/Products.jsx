import React, { useState } from 'react';
//import './App.css'; // Import your Tailwind CSS styles

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center">
      <img src={selectedImage} alt="Product" className="w-full border mb-4" />
      <div className="flex space-x-4 overflow-x-auto">
        {images.map(image => (
          <img
            key={image}
            src={image}
            alt="Product Thumbnail"
            className={`h-16 border cursor-pointer ${selectedImage === image ? 'border-blue-500' : ''}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

const ProductDetails = ({ details }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Product Details</h2>
      <div className={`text-gray-600 ${expanded ? 'block' : 'truncate'}`}>
        {details}
      </div>
      {!expanded && (
        <button
          className="text-blue-500 hover:underline focus:outline-none"
          onClick={() => setExpanded(!expanded)}
        >
          Read More
        </button>
      )}
    </div>
  );
};

const Products = () => {
  const images = [
    'https://th.bing.com/th?id=OIP.3_bobYyHpOg5flCNp9h1dQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    'https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png',
    'https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png',
    // Add more image URLs
  ];

  const details = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non rhoncus
  velit. Donec ullamcorper nulla non metus auctor fringilla.
  `;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Product Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductGallery images={images} />
        <ProductDetails details={details} />
      </div>
    </div>
  );
};

export default Products;
