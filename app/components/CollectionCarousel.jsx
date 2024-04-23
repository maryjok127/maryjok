// src/ProductCarousel.js
import React, {useState} from 'react';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {Await, useLoaderData, Link} from '@remix-run/react';
import {useMediaQuery} from 'react-responsive';
import {
  VariantSelector,
  getSelectedProductOptions,
  CartForm,
} from '@shopify/hydrogen';
//import collections from './collections';


const CollectionCarousel = ({collection , handle , sortArr,all_collections}) => {
  const noImg = "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/No-image-found.jpg?v=1708942129"
  let collectionsToShow = [];

  const [startIndex, setStartIndex] = useState(0);
  const isLargeScreen = useMediaQuery({minWidth: 1024});
  const eIndex = isLargeScreen ? len < 4 ? len : 4 : 2;
  const [endIndex, setEndIndex]  = useState(eIndex);
  var len = sortArr?.length;
  if (sortArr != null || sortArr != undefined) {
    collectionsToShow = sortArr.slice(startIndex, endIndex);
  }

  console.log("Meta :;",collectionsToShow[0]?.node?.metafields)
  const nextCollections= () => {
    setStartIndex((prevIndex) => len == endIndex ? prevIndex -1 : prevIndex + 1 );
    setEndIndex((prevIndex) => len == endIndex ? prevIndex-1 : prevIndex + 1);
  };

  const prevCollections = () => {
    setStartIndex((prevIndex) => len == endIndex ? prevIndex -1 : prevIndex + 1 );
    setEndIndex((prevIndex) => len == endIndex ? prevIndex-1 : prevIndex + 1);
  };
  console.log("collectionsToShow::",startIndex, endIndex);
  function getPath(url_path) {
    let url = new URL(url_path);
    let path = url.pathname;
    return path;
  }

  function goToCollection(url_path){
    let url = `/collections/${url_path}` //getPath(url_path);
    console.log(url)
    window.location.href = url
  }

  return (
    <div className="recommended_section w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6">
      <div className="relative">
        <div className="flex grid-row-1 grid-cols-2 gap-4">
          {collectionsToShow.map((coll, index) => (
            <div key={`coll_corousel_${index}`} className="w-full cursor" onClick={()=> goToCollection(coll[0]?.node?.handle)}>
                <div className="bg-white mst-card rounded-lg shadow-lg p-2 w-32 h-40 sm:w-40">
                 
                    <img
                      src={coll[0]?.node?.metafields[1]?.value || noImg }// Make sure to put your images in the 'public/images/' directory
                      className="w-full h-auto coll_cor_img rounded-full"
                    />
                    <h2 className="text-sm font-semibold mt-2 text-center">
                      {coll[0]?.node?.title}
                    </h2>
                 
              </div>
            </div>
          ))}
        </div>
        { sortArr?.length > eIndex &&
        <>
        <button 
          className="absolute lg:left-[-150px] top-1/2 transform -translate-y-1/2 lg:bg-[#faebd7] bg-white bg-opacity-75 rounded-full p-2 ml-4 hover:bg-opacity-100 mst-arrow"
          onClick={() => prevCollections() }
        >
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            size={30}
          />
        </button>
        <button 
          className="absolute lg:right-[-150px] right-0 top-1/2 transform -translate-y-1/2 lg:bg-[#faebd7] bg-white bg-opacity-75 rounded-full p-2 mr-4 hover:bg-opacity-100 mst-arrow"
          onClick={() => nextCollections() }
        >
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            size={30}
          />
        </button>
        </>
      }
      </div>
    </div>
  );
};

export default CollectionCarousel;
