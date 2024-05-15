import {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {
  CartForm,
} from '@shopify/hydrogen';
//import products from './products';

const ProductsCorousel = ({products}) => {
  const noImg = "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/No-image-found.jpg?v=1708942129"
  let productsToShow = [];
  const [startIndex, setStartIndex] = useState(0);
  //const [endIndex, setEndIndex]  = useState();
  const lines = [];
  const isLargeScreen = useMediaQuery({minWidth: 1024});
  const endIndex = isLargeScreen ? 4 : 2;
 
  if (products != null || products != undefined) {
    productsToShow = products.edges.slice(startIndex, startIndex + endIndex);
    //console.log(productsToShow);
  }

  const goToProduct=(url_path)=>{
    window.location.href = url_path
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

  return (
    <div className="w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6 py-6">
      <div className="relative">
        <div className="flex mobile-productView p-[10px] gap-4">
          {productsToShow.map((product,index) => (
            <div key={product.node.id}
              className="w-full sm:w-1/3 md:w-1/3 lg:px-4 sm:px-1 md:px-3"
            >
              <div className="mst-card bg-white rounded-lg shadow-lg p-1 sm:p-2 shadow-md">
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
                      &#x20b9; {Math.trunc(product.node.priceRange.minVariantPrice.amount)} 
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Add more product information here */}
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
                            onClick={() => {
                              window.location.href =
                                window.location.href + '#cart-aside';
                            }}
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
        </div>
        {/* <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 ml-4 hover:bg-opacity-75"
          onClick={() =>
            setStartIndex((prevIndex) =>
              prevIndex === 0
                ? products.edges.length - (products.edges.length % 2)
                : prevIndex,
            )
          }
        >
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          size={40}
        />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 mr-4 hover:bg-opacity-75"
          onClick={() =>
            setStartIndex(
              (prevIndex) => (prevIndex + 1) % products.edges.length,
            )
          }
        >
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          size={40}
        /> 
        </button>
        */}
      </div>
    </div>
  );
};

export default ProductsCorousel;
