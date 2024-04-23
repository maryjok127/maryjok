import React, { useState } from 'react';

const ProductPage = () => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Product Title</h1>

      <div className="mt-4">
        <h2
          className="cursor-pointer text-lg font-semibold mb-2"
          onClick={toggleDescription}
        >
          Description
        </h2>
        {showDescription && (
          <p className="text-gray-600">
            This is the complete product description. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. ...
          </p>
        )}
      </div>

      {/* Other product sections */}
      <div className="mt-4">
        <h2 className="cursor-pointer text-lg font-semibold mb-2">Specifications</h2>
        <p className="text-gray-600">
          Product specifications go here...
        </p>
      </div>

      {/* Add more product sections as needed */}
    </div>
  );
};

export default ProductPage;
