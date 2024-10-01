import {useRef,Suspense,useEffect} from 'react';
import {defer, redirect} from '@shopify/remix-oxygen';
import {Await, Link, useLoaderData} from '@remix-run/react';
import {useState} from 'react';
import ProductsCorousel from '~/components/ProductsCorousel';
import {
  Image,
  VariantSelector,
  getSelectedProductOptions,
  CartForm,Money
} from '@shopify/hydrogen';
import {getVariantUrl} from '~/utils';
import {
	OKENDO_PRODUCT_REVIEWS_FRAGMENT,
	OKENDO_PRODUCT_STAR_RATING_FRAGMENT,
	OkendoReviews,
	OkendoStarRating,
  // WithOkendoReviewsSnippet,
	// WithOkendoStarRatingSnippet
} from "@okendo/shopify-hydrogen";
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
} from 'react-share';
//import {getWishlistSocialCount} from '../swym/store-apis';

export const meta = ({data}) => {
  return [{title: `Hydrogen | ${data.product.title}`}];
};

function getLastQueryParam(params) {
  const lastParam = Array.from(params.entries()).pop(); // Get the last entry
  return lastParam ? { key: lastParam[0], value: lastParam[1] } : null;
}
export async function loader({params, request, context}) {
  const {handle} = params;
  const {storefront} = context;
 
  const selectedOptions = getSelectedProductOptions(request).filter(
    (option) =>
      // Filter out Shopify predictive search query params
      !option.name.startsWith('_sid') &&
      !option.name.startsWith('_pos') &&
      !option.name.startsWith('_psq') &&
      !option.name.startsWith('_ss') &&
      !option.name.startsWith('_v'),
  );

  if (!handle) {
    throw new Error('Expected product handle to be defined');
  }
  
  const {product} = await storefront.query(PRODUCT_QUERY, {
    variables: {handle, selectedOptions},
  });

  const products = await storefront.query(PRODUCTS_QUERY);
  const productsreturn = products.products;

  // In order to show which variants are available in the UI, we need to query
  // all of them. But there might be a *lot*, so instead separate the variants
  // into it's own separate query that is deferred. So there's a brief moment
  // where variant options might show as available when they're not, but after
  // this deffered query resolves, the UI will update.
  const variants = await storefront.query(VARIANTS_QUERY, {
    variables: {handle},
  });

  if (!product?.id) {
    throw new Response(null, {status: 404});
  }
  const firstVariant = product.variants.nodes[0];
  const firstVariantIsDefault = Boolean(
    firstVariant.selectedOptions.find(
      (option) => option.name === 'Title' && option.value === 'Default Title',
    ),
  );
  const url = new URL(request.url);
  let searchParams = new URLSearchParams(url.search);
  const opt = getLastQueryParam(searchParams);
  if (firstVariantIsDefault) {
    product.selectedVariant = firstVariant;
  } else {
    if(opt){
      const filterVar = variants.product.variants.nodes.filter(node => node.selectedOptions.find((option) =>option.name === opt.key && option.value === opt.value)) 
      product.selectedVariant = filterVar.length > 0 ? filterVar[0] : variants.product.variants.nodes[0];
    }else{
      product.selectedVariant = firstVariant;
    }
    //console.log("Filter:::",filterVar.length,filterVar, variants.product.variants.nodes[0])
    // if no selected variant was returned from the selected options,
    // we redirect to the first variant's url with it's selected options applied
    // if (!product.selectedVariant) {
    //   return redirectToFirstVariant({product, request});
    // }
  }
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  const recommendedProducts = collections;
  return defer({product, variants, productsreturn ,recommendedProducts});
}

function redirectToFirstVariant({product, request}) {
  const url = new URL(request.url);
  const firstVariant = product.variants.nodes[0];

  return redirect(
    getVariantUrl({
      pathname: url.pathname,
      handle: product.handle,
      selectedOptions: firstVariant.selectedOptions,
      searchParams: new URLSearchParams(url.search),
    })
  );
}

//const [activeImg, setActiveImage] = useState(0)

export default function Product() {
  const {product, variants, productsreturn,recommendedProducts} = useLoaderData();
  const {selectedVariant} = product;
  const [activeVariant, setActiveVar] = useState([]); 
  const shareUrl = `https://15f63f.myshopify.com/products/${product.handle}`;
  const [socialCount, setSocialCount] = useState();

  useEffect(() => {
    setActiveVar(selectedVariant)
  }, [selectedVariant,product])

  return (
    <>
      <ProductMain
        selectedVariant={activeVariant}
        product={product}
        variants={variants}
        shareUrl={shareUrl}
        recommendedProducts={recommendedProducts}
      />
      {productsreturn && <ProductsCorousel products={productsreturn} />}
    </>
  );
}

function ProductImage({image, activeImg, setActiveImage, product}) {
  const ImageSrc = [];

  product.images.edges.forEach((item) => {
    ImageSrc.push(item.node.url);
  });
  //console.log(ImageSrc)
  const [images, setImages] = useState(ImageSrc);
  //const [activeImg, setActiveImage] = useState(activeImg)
  // console.log(image)
  if (!image) {
    return <div className="" />;
  }
  return (
    <>
      <div className="lg:grid flex flex-col-reverse lg:grid-cols-[20%_80%] gap-2 lg:gap-0 items-center">
        <div className="flex  lg:flex-col  justify-between lg:h-[325px] overflow-x-auto gap-[5px]">
          {product.images.edges &&
            product.images.edges.map((item, index) => (
              <img
                src={images[index]}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer product-image-caro "
                onClick={() => setActiveImage(images[index])}
              />
            ))}
        </div>
        <img
          src={activeImg}
          alt=""
          className="w-[90%] border border-[#e5e5e5] h-full aspect-square object-cover rounded-xl p-[10px] border-1 border-[#e5e5e5] hover:scale-x-125 md:hover:scale-125 transition duration-300 cursor-pointer mst-card"
        />
      </div>
    </>
  );
}

function ProductMain({selectedVariant, product, shareUrl, variants,recommendedProducts}) {
  const ImageSrc = [];
  product.images.edges.forEach((item) => {
    ImageSrc.push(item.node.url);
  });
 
  const [images, setImages] = useState(ImageSrc);
  const expaction = product.metafields[0]?.value;
  const key_ingredients = product.metafields[1]?.value;
  const How_To_use = product.metafields[2]?.value;
  const who_can_use = product.metafields[3]?.value;
  const why_us = product.metafields[4]?.value;
  const ingredient = product.metafields[5]?.value;
  const [activeTab, setActiveTab] = useState('Ingredient');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [activeImg, setActiveImage] = useState(images[0]);
  const [moreText, setMoreText] = useState(true);

  return (
    <>
      {/*<ProductImage image={selectedVariant?.image} />*/}
      <div className="flex m-[2%] gap-2 items-center">
        <Link className='mst-color' to="/">Home</Link>
        <img src="/next.png" alt="next" width={20} height={20} />
        <span className="font-semibold mst-color">Product page</span>
      </div>
      <div className="final-product mst-card-shadow shadow-lg p-4 flex flex-col justify-between lg:flex-row lg:gap-8 lg:ml-8 lg:mr-8 items-start relative">
        <div className="flex flex-col gap-6 lg:w-2/4 flex-wrap items-center lg:sticky top-[240px]">
          {/*<img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
            <div className='flex flex-row justify-between h-full overflow-y-auto'>
              {product.images.edges && product.images.edges.map((item,index)=>(
                <img src={images[index]} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images[index])}/>
              ))
              }
            </div>*/}
          <ProductImage
            image={selectedVariant?.image}
            product={product}
            activeImg={activeImg}
            setActiveImage={setActiveImage}
          />
        </div>
        {/* ABOUT */}
        <div className="flex flex-col lg:w-3/4">
          <div>
            <h1 className="text-2xl font-bold mt-0 mb-0">
              {product.title}
            </h1>
            <div className='flex py-2 px-2'>
            <OkendoStarRating
              productId={product.id}
              okendoStarRatingSnippet={product.okendoStarRatingSnippet}
            />
            </div>
            <ProductPrice selectedVariant={selectedVariant} />
          </div>
          <div>
            <Suspense
              fallback={
                <ProductForm
                  product={product}
                  selectedVariant={selectedVariant}
                  variants={[]}
                  activeImg={activeImg}
                  setActiveImage={setActiveImage}
                />
              }
            >
              <Await
                errorElement="There was a problem loading product variants"
                resolve={variants}
              >
                {(data) => (
                  <ProductForm
                    product={product}
                    selectedVariant={selectedVariant}
                    activeImg={activeImg}
                    setActiveImage={setActiveImage}
                    variants={data.product?.variants.nodes || []}
                  />
                )}
              </Await>
            </Suspense>
          </div>
          <div className='grid grid-cols-4 gap-4 p-4 border-dotted mt-4'>
            <img src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Vegetarian.jpg?v=1712825726"/>  
            <img src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Cruelty-Free.jpg?v=1712825726"/>  
            <img src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/High_Quality.jpg?v=1712825727"/>  
            <img src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Suitable_for_all_Skin_Types.jpg?v=1715852367"/>     
          </div>
          <h2 className="mt-[10px]">Product Description</h2>
          <div className="shadow-p relative p-4 sm:p-0">
            <div className="product_desc" dangerouslySetInnerHTML={{__html: product.descriptionHtml}}></div>
            {/* {moreText && (
              <>
              <div
                className="expect"
                dangerouslySetInnerHTML={{__html: product.description}}
              />
              </>
            )} */}
          </div>
          <div className='flex'>
          <OkendoReviews
            productId={product.id}
            okendoReviewsSnippet={product.okendoReviewsSnippet}
          />
          </div>
        </div>
        <div className="absolute cursor-pointer group flex flex-col items-center top-[-36px] lg:top-[15px] right-2">
          <img
            className="sharelogo mst-color"
            src="/share.png"
            width={22}
            height={22}
            alt="share"
          />
          <span className="text-sm font-semibold ">Share</span>
          <div className="hidden group-hover:block" style={{ background: '#0000', height: '100vh', width: '100%'}}>
          <div className='flex gap-2 m-2'>
          <FacebookShareButton
            url={shareUrl}
            quote={'Title'}
            hashtag={'#product...'}
          >
          <FacebookIcon size={25} round={true} />
          </FacebookShareButton>

          <WhatsappShareButton
            url={shareUrl}
            quote={'Title'}
            hashtag={'#product...'}
          >
          <WhatsappIcon size={25} round={true} /> </WhatsappShareButton>
          </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1320px] p-[10px] m-auto">
        <div>
          <h2 className="text-center lg:text-2xl mt-[4%] mb-[2%] uppercase">
            Key Features{/* What to Expect from {product.title} ? */}
          </h2>
          {expaction && (
            <div
              className="expect"
              dangerouslySetInnerHTML={{__html: expaction}}
            />
          )}
        </div>
        <div className="container mx-auto mt-5 p-5">
          <h1 className="lg:text-3xl font-semibold mb-4 text-center mt-[4%] mb-[2%] uppercase">
            Product Information
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 overflow-y-auto lg:justify-center gap-2">
            <div
              className={`cursor-pointer py-2 px-2 border-b-4 uppercase whitespace-nowrap ${
                activeTab === 'Ingredient' ? 'border-active' : ''
              }`}
              onClick={() => handleTabClick('Ingredient')}
              style={{border: '1px solid #e5e5e5'}}
            >
             Ingredients
            </div>
            <div
              style={{border: '1px solid #e5e5e5'}}
              className={`cursor-pointer py-2 px-2 border-b-4 uppercase whitespace-nowrap ${
                activeTab === 'How to Use' ? 'border-active' : ''
              }`}
              onClick={() => handleTabClick('How to Use')}
              
            >
              How to Use
            </div>
            <div
              className={`cursor-pointer py-2 px-2 border-b-4 uppercase whitespace-nowrap ${
                activeTab === 'Who Can Use' ? 'border-active' : ''
              }`}
              onClick={() => handleTabClick('Who Can Use')}
              style={{border: '1px solid #e5e5e5'}}
            >
             Who Can Use
            </div>
            <div
              className={`cursor-pointer py-2 px-2 border-b-4 uppercase whitespace-nowrap ${
                activeTab === 'Why us' ? 'border-active' : ''
              }`}
              onClick={() => handleTabClick('Why us')}
              style={{border: '1px solid #e5e5e5'}}
            >
              Why us
            </div>
          </div>
          <div className="mt-4">
            {activeTab === 'Key Ingredients' && key_ingredients && (
              <div className="overflow-y-auto overflow-x-auto">
                {key_ingredients && (
                  <div
                    className="expect"
                    dangerouslySetInnerHTML={{__html: key_ingredients}}
                  />
                )}
              </div>
            )}
            {activeTab === 'How to Use' && How_To_use && (
              <div className="meta_info_card overflow-y-auto">
                <div
                  className="key-ing"
                  dangerouslySetInnerHTML={{__html: How_To_use}}
                />
              </div>
            )}
            {activeTab === 'Who Can Use' && who_can_use && (
              <div className="meta_info_card overflow-y-auto">
                <div dangerouslySetInnerHTML={{__html: who_can_use}} />
              </div>
            )}
            {activeTab === 'Ingredient' && ingredient && (
              <div className="overflow-y-auto">
                <div style={{maxWidth:"100%"}} dangerouslySetInnerHTML={{__html: ingredient}} />
              </div>
            )}
            {activeTab === 'meta_info_card Why us' && why_us && (
              <div className="overflow-y-auto">
                <div dangerouslySetInnerHTML={{__html: why_us}} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='recommended_products'>
      <RecommendedProducts
        key={recommendedProducts.nodes[0].id}
        products={recommendedProducts.nodes[0].products}
        title="Recommended Products"
      />
      </div>
    </>
  );
}

//{"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Onion, in combination with coconut, reduces hair fall and promotes growth of lost hair."}]}]}

function ProductPrice({selectedVariant}) {
  let price = Math.trunc(selectedVariant?.price?.amount);
  let compareAtPrice = Math.trunc(selectedVariant?.compareAtPrice?.amount);
  const calculatePer = ()=>{
    let per = (compareAtPrice - price) / (compareAtPrice) * 100;
    return Math.trunc(per);
  }
  return (
    <div className="product-price flex gap-[10px] mb-2 text-xl">
      {selectedVariant?.compareAtPrice ? (
        <>
          <div className="product-price-on-sale font-semibold flex items-center">
            <h1 className='m-0'>{selectedVariant ? <Money withoutTrailingZeros data={selectedVariant.price} /> : null}</h1>
            &nbsp;
            <s className='opacity-50'>
              <Money withoutTrailingZeros data={selectedVariant.compareAtPrice} />
            </s>
            &nbsp;
            <b className='text-red-500'> ({ calculatePer() } % Off) </b>
          </div>
        </>
      ) : (
        selectedVariant?.price && (
          <h1 className='m-0'><Money withoutTrailingZeros className="font-semibold" data={selectedVariant?.price} /></h1>
        )
      )}
    </div>
  );
}

function ProductForm({
  product,
  selectedVariant,
  variants,
  activeImg,
  setActiveImage}) {
  const [pincode, setPinCode] = useState(""); 
  const [serviceble, setServiceble] = useState({status:null, msg:''})
  //const [estimatedDelivery,setEstimatedDelivery] = useState("")
  const handlePinChange =(e)=> {
    setPinCode(e.target.value)
  }
  console.log("product opt ::", product.options)
  const getEstimatedDate = (edd)=>{
    const date = new Date();
    date.setDate(date.getDate()  + edd);
    const estimatedDateDelivery = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(date));
    return estimatedDateDelivery;
  }
  
  const checkAvailibility = ()=>{
      // Get Token Valid to 24 hours;
    fetch("https://appapi.shipdelight.com/generate-token?api_key=65eaba0ac23f74c2d7346965",{method:"POST"}).then((res) => res.json()).then((result)=>{
      const { success,data } = result;
      if(success){
        const headers = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${data.access_token}`
        }
        const params = {
          "pickup_pincode": 400009,
          "delivery_pincode": parseInt(pincode),
          "pay_type": "PPD",
          "service_type": "F",
          "courier_service_type": "AIR"
        }  
        fetch("https://appapi.shipdelight.com/serviceability_tat",{method:"POST",headers:headers, body:JSON.stringify(params) }).then((res)=> res.json()).then((result)=>{
          const { data, errors } = result;
          if(errors?.length){
            setServiceble({status:false,msg:'Invalid Pincode'});
          }else{
            const isServicebale = data?.response.delivery_pincode_serviceable;
            var estimateDate = getEstimatedDate(data?.response.edd);
            const msg = data?.response.delivery_pincode_serviceable ? estimateDate : 'Service is not available at this location';
            setServiceble({status:isServicebale,msg:msg});
          }
          setTimeout(()=>{
            setServiceble({status:null,msg:''});
          },5000)
        })
      }
    })
  }
  const closeRef = useRef(null);
  return (
    <div className="product-form">
      <VariantSelector
        handle={product.handle}
        options={product.options}
        variants={variants}
        //productPath="/products-test"
      >
        {({option}) => (
          <ProductOptions
            key={option.name}
            option={option}
            activeImg={activeImg}
            closeRef={closeRef}
            selectedVariant={selectedVariant}
            setActiveImage={setActiveImage}
          />
        )}
      </VariantSelector>
      <br />
      {/* <WishlistButton
        selectedVariant={selectedVariant}
        productData={product}
        setWishlistSocialCount={setWishlistSocialCount}
      /> */}
      <div className="mb-2">
        <p> Check Availibility / Estimated Delivery </p>
        <div className="flex items-baseline">
        <input className="w-48 sm:w-[320px] block rounded-bl-lg rounded-tl-lg border bg-transparent bg-clip-padding  text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3]  focus:text-neutral-700 focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 mst-card" value={pincode} onChange={handlePinChange} type="text" placeholder="Enter your pincode" /> 
        <button onClick={()=> checkAvailibility() } className="w-[130px] sm:w-[150px] m-4 h-11 bg-black hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg"> Check Now </button>
        </div>
        { serviceble.status!= null &&
        <p className={`font-bold ${serviceble.status ? 'text-green-500' : 'text-orange-500'}` }> Estimated Delivery : { serviceble.msg } </p>
        }
      </div>
      <AddToCartButton
        disabled={!selectedVariant || !selectedVariant.availableForSale}
        onClick={() => {
          window.location.href = window.location.href + '#cart-aside';
        }}
        lines={
          selectedVariant
          ? [
              {
                merchandiseId: selectedVariant.id,
                quantity: 1,
              },
            ]
          : []
        }
      >
        {selectedVariant?.availableForSale ? 'ADD TO CART' : 'Sold out'}
      </AddToCartButton>
    </div>
  );
}

function ProductOptions({option,activeImg,closeRef,setActiveImage,selectedVariant}) {
  const [selectedVar, setVar] = useState({0:true});
  useEffect(()=>{
    setActiveImage(selectedVariant?.image?.url);
  },[selectedVariant]);

  const setImg = (index)=>{
    setVar({[index]:true})
  }
  
  console.log("----option ::",option)
  return (
    <>
      <div className="product-options" key={option.name}>
        <h5 className="font-semibold">{option.name}</h5>
        <div className="product-options-grid items-center">
          {option.values.map(({value, isAvailable, isActive, to},index) => {
            return (
              <Link
                ref={closeRef}
                className="product-options-item"
                key={option.name + value}
                prefetch="intent" 
                replace
                preventScrollReset
                to={to}
                style={{
                  border: selectedVar[index]
                    ? '1px solid #d0715f'
                    : '1px solid transparent',
                  borderRadius: '5px',

                }}
                onClick={() =>  setImg(index) }
              >
              <img className='color-swatch' src={`https://cdn.shopify.com/s/files/1/0809/4253/0882/files/${value}.png`} alt={value} />
              </Link>
            );
          })}
        </div>
        <br />
      </div>
    </>
  );
}

function AddToCartButton({analytics, children, disabled, lines, onClick}) {
  const [qty, setQty] = useState(1);
  lines[0].quantity = qty;
  //console.log("AddToCartButton variant_id::",lines);
  return (
    <>
      <CartForm
        route="/cart"
        inputs={{lines}}
        action={CartForm.ACTIONS.LinesAdd}
      >
        {(fetcher) => (
          <>
            <input
              name="analytics"
              type="hidden"
              value={JSON.stringify(analytics)}
            />
            <div className="flex flex-row items-center gap-4 mobile-cart-product">
              <div
                className="flex flex-row items-center py-[6px] px-[8px] rounded-xl"
                style={{border: '1px solid #000', background: 'white'}}
              >
                <a
                  className=" text-xl"
                  onClick={() => {
                    if (qty != 0) {
                      setQty((prev) => prev - 1);
                    }
                  }}
                >
                  -
                </a>
                <span className="px-4">{qty}</span>
                <a
                  className=" text-xl"
                  onClick={() => setQty((prev) => prev + 1)}
                >
                  +
                </a>
              </div>
              <button
                className="w-[150px] h-11 bg-black hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg product-cart-btn"
                type="submit"
                onClick={onClick}
                disabled={disabled ?? fetcher.state !== 'idle'}
              >
                {children}
              </button>
            </div>
          </>
        )} 
      </CartForm>
    </>
  );
}

function RecommendedProducts({products, title}) {
  return (
    <>
      <h1 className="text-center font-semibold my-[15px]">{title} </h1>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={products}>
            {/*<ShopifyCarousel products={products}></ShopifyCarousel>*/}
            {<ProductsCorousel products={products}></ProductsCorousel>}
          </Await>
        </Suspense>
        <br />
      </div>
    </>
  );
}
//variants.nodes[0].image.url
const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    quantityAvailable
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`;

const PRODUCT_FRAGMENT = `#graphql
  ${OKENDO_PRODUCT_STAR_RATING_FRAGMENT}
  ${OKENDO_PRODUCT_REVIEWS_FRAGMENT}
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    tags
    productType
    metafields(identifiers: [{namespace: "custom", key: "what_to_expect"},{namespace: "custom", key: "key_ingredients"}, {namespace: "custom", key: "how_to_use1"},{namespace: "custom", key: "who_can_use"},{namespace: "custom", key: "why_we"},{namespace: "custom", key: "key_ingredients"} ]){
      key
      value
    }
    images(first:10){
      edges{
        node{
          url
        }
      }
    }
    options {
      name
      values
    }
    
    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    variants(first: 10) {
      nodes {
        ...ProductVariant
      }
    }
    seo {
      description
      title
    }
    ...OkendoStarRatingSnippet
		...OkendoReviewsSnippet
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
`;

const PRODUCT_VARIANTS_FRAGMENT = `#graphql
  fragment ProductVariants on Product {
    variants(first: 50) {
      nodes {
        ...ProductVariant
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;

const VARIANTS_QUERY = `#graphql
  ${PRODUCT_VARIANTS_FRAGMENT}
  query ProductVariants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...ProductVariants
    }
  }
`;

const PRODUCTS_QUERY = `#graphql
  query {
  products(first: 250, query:"tags:* Under 100 OR Under 1000"){
    edges{
      node{
        id
        title
        handle
        tags
        images(first:1){
          edges{
            node{
              url
              id
            }
          }
        }
        featuredImage {
          id
        }
      }
    }
}
  }
`;

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    products(first:100){
      edges{
        node{
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 100) {
          edges {
          node {
                availableForSale
                id
                metafields(identifiers: [{namespace: "custom", key: "isdefault"} ]){
                    key
                    value
                  }
                }
              }
        }
        images(first:1){
          edges{
            node{
              url
            }
          }
        }
        }
      }
    }
    id
    title
    metafields(identifiers: [{namespace: "custom", key: "from_customer_inbox"}, {namespace: "custom", key: "1_custom_colllection"}]){
      id
      key
      namespace
      value
    }
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 100) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`
const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    metafields(identifiers: [{namespace: "custom", key: "customized"}, {namespace: "custom", key: "reviewed_products"}]){
      key
      value
    }
    variants(first: 100) {
      edges {
        node {
          id
          availableForSale
          metafields(identifiers: [{namespace: "custom", key: "isdefault"} ]){
              key
              value
            }
          # Add other variant fields you need
        }
      }
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 10) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 10, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;
