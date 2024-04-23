import React from 'react';
import {Await, useLoaderData, Link} from '@remix-run/react';

const ProductCard = ({ product }) => {
    const url = product.node.images.edges[0].node.url;
    //console.log('product'+product);
    //console.log(product.node.handle)
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden m-5">
      <img className="w-full h-48 object-cover" src={url}  />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
            <Link to={`/products/${product.node.handle}`}>{product.node.title}</Link></h2>
        {/*<p className="text-gray-600">${product.priceRange.minVariantPrice.amount}</p>*/}
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">
          Add to
        </button>
      </div>
  </div>
  );
};

export default ProductCard;
//alt={product.title}