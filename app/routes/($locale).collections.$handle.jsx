import {json, redirect} from '@shopify/remix-oxygen';
import {useState,useEffect} from 'react';
import {useLoaderData, Link} from '@remix-run/react';
import {
  getPaginationVariables,
  Image,
  Money,
} from '@shopify/hydrogen';
import {useMediaQuery} from 'react-responsive';
import { CartForm } from '@shopify/hydrogen';
import {useVariantUrl} from '~/utils';
import {Fragment} from 'react';
import {Dialog, Disclosure, Menu, Transition} from '@headlessui/react';
import {XMarkIcon} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid';

import {
	OKENDO_PRODUCT_STAR_RATING_FRAGMENT,
	OkendoStarRating,
} from "@okendo/shopify-hydrogen";

import CollectionCarousel from "../components/CollectionCarousel"

import {getSeoMeta} from '@shopify/hydrogen';

export const meta = ({matches,data}) => {
  let desc = data.seo.description.length ? data.seo.description.substring(0, 150) : "Desciption not available"
  let metaD = {title:data.seo.title, description: desc + '...'}
  return getSeoMeta(...matches.map((match) => metaD));
};


const sortOptions = [
  {name: 'Most Popular', href: '#', value:'', current: true},
  // {name: 'Best Rating', href: '#', value:'', current: false},
  {name: 'Newest', href: '#', value:'created_asc', current: false},
  {name: 'Price: Low to High', value:'lh', href: '#', current: false},
  {name: 'Price: High to Low', value:'hl', href: '#', current: false},
];
const subCategories = [
  {name: 'Way 2 Slay', href: '/collections/way-2-slay-mjk'},
  {name: 'Rizz & Roll', href: '/collections/rizz-roll-mjk'},
  {name: 'Pro Studio', href: '/collections/pro-studio-mjk'},
];
const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      {value: 'new-arrivals', label: 'New Arrivals', checked: false}
    ],
  },
  {
    id:"price",
    name:"Price",
    options:[{value: '299', label: "₹0 - ₹299"},{value: '499', label: "₹300 - ₹499"},
    {value: '899', label: '₹500 - ₹899'},{value: '900', label:"₹900+"}]
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export async function loader({request, params, context}) {
  const {handle} = params;
  //console.log("handle::",handle)
  const {storefront} = context;
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 100,
  });
  console.log("paginationVariables::",paginationVariables)
  // await the header query (above the fold)
  const headerPromise = storefront.query(HEADER_QUERY, {
    cache: storefront.CacheNone(),
    variables: {
      headerMenuHandle: 'main-menu', // Adjust to your header menu handle
    },
  });

  const all_collections = await storefront.query(ALL_COLLECTIONS_QUERY, {
    cache: storefront.CacheNone(),
  });
  
  if (!handle) {
    return redirect('/collections');
  } 


  const { collections } = all_collections;
  const {collection} = await storefront.query(COLLECTION_QUERY, {
    variables: {handle, ...paginationVariables},
  });
  if (!collection) {
    throw new Response(`Collection ${handle} not found`, {
      status: 404,
    });
  }
  let desc = collection.description.split(" ", 100).join(" ");
  let seo = {
    title: `MARY JO K - ${collection.title}`,
    description: desc,
  }
  return json({collection, collections,  header: await headerPromise,handle,seo});
}

export default function Collection() {
  var collectionArray = [];
  const {collection , header, handle, collections} = useLoaderData();
  const { menu } = header;
  let subMenu = menu.items;
  var sortArr = subMenu.filter((item)=> item.title.toLowerCase() === handle );
  collectionArray = sortArr.length ? sortArr[0]?.items : [];
  //console.log("all_collections:",collectionArray);
  const sortColl = collectionArray.map((coll)=> collections.edges.filter((item)=> item.node.title === coll.title))
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  var productsToShow1 = [];
  const lines = [];
  const [startIndex, setStartIndex] = useState(0);
  const [productsToShow, setProductToShow] = useState([])
  const [productsToShowDump, setProductToShowDump] = useState([])
  const [imgUrl , setImgUrl  ] = useState("");
  const isLargeScreen = useMediaQuery({minWidth: 1024});
  const isSmall = useMediaQuery({maxWidth: 640});
  const [ readMore, setMore ] = useState(false)
  const endIndex = isLargeScreen ? 4 : 2;
 

  useEffect(()=>{
    if (collection.products != null || collection.products != undefined) {
      productsToShow1 = collection.products.nodes;
      setProductToShow(productsToShow1)
      setProductToShowDump(productsToShow1)
    }
  },[])
 
  collection.products.nodes.map((product) => {
    product.variants.nodes.map((line) => {
        lines.push({
          merchandiseId: line.id,
          quantity: 1,
        });
    });
  });
  
  const sortCollectionProducts= (sort_by)=> {
    var data = collection.products.nodes;
    switch(sort_by){
      case 'lh':  sortArray(data,"ascending"); 
                  break;
      case 'hl':  sortArray(data,"descending");
                  break;
      case 'created_asc': sortByDate(data,"ascending");
                  break;
      case 'created_desc':sortByDate(data,"descending");
                  break;
      default:
        setProductToShow(data)
    }
  }

  const sortArray = (data,sortOrder="ascending") => {
    const sortedData = [...data].sort((a, b) => {
        var nodeA =a,nodeB=b;
        if (sortOrder === 'ascending') {
            return parseFloat(nodeA.priceRange.maxVariantPrice.amount) - parseFloat(nodeB.priceRange.maxVariantPrice.amount);
        } else {
            return parseFloat(nodeB.priceRange.maxVariantPrice.amount) - parseFloat(nodeA.priceRange.maxVariantPrice.amount);
        }
    });
    setProductToShow(sortedData)
  }
  
  const sortByDate = (data,sortOrder="ascending") => {
    const sortedData = [...data].sort((a, b) => {
      var nodeA = a, nodeB = b;
      if (sortOrder === 'ascending') {
        return new Date(nodeA.publishedAt).getTime() - new Date(nodeB.publishedAt).getTime();
      } else {
        return  new Date(nodeB.publishedAt).getTime() - new Date(nodeA.publishedAt).getTime();
      }
    });
    setProductToShow(sortedData)
  }

  const filterData = (e)=>{
    var price = parseInt(e.target.value);
    console.log("filter::",e.target.checked)
    var isChecked = e.target.checked;
    var filterData = productsToShow;
    if(isChecked){
      let filter = filterData.filter((item)=> item.priceRange.maxVariantPrice.amount > price )
      console.log("filter::",filter)
      setProductToShow(filter)
    }else{
      setProductToShow(productsToShowDump)
    }
  }
  
  const calculatePer = (original_price, disc_price)=>{
    let price = Math.trunc(original_price);
    let compareAtPrice = Math.trunc(disc_price);
    let per = (compareAtPrice - price) / (compareAtPrice) * 100;
    return Math.trunc(per);
  }
  function getPath(url_path) {
    let url = new URL(url_path);
    let path = url.pathname;
    return path;
  }

  const goToProduct=(url_path)=>{
    window.location.href = url_path
  }

  useEffect(()=>{
    var img = "";
    if(isSmall){
      img = collection?.metafields[0] ? collection?.metafields[0].value : collection?.image?.url;
    }else{
      img = collection?.image?.url;
    }
    setImgUrl(img)
  },[collection])

  return (
    <>
      <div>
        <img
          key={collection.handle}
          src={imgUrl}
          style={{ objectFit: 'cover', width: '100%'}}
        ></img>
      </div>
      <div className="bg-white mx-2.5">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      <h3 className="sr-only">Categories</h3>
                      <ul
                        role="list"
                        className="px-2 py-3 font-medium text-gray-900"
                      >
                        {subCategories.map((category) => (
                          <li key={category.name}>
                            <a href={category.href} className="block px-2 py-3">
                              {category.name}
                            </a>
                          </li>
                        ))}
                      </ul>

                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-t border-gray-200 px-4 py-6"
                        >
                          {({open}) => (
                            <>
                              
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400">
                                  <span className="font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        onChange={(e)=> filterData(e) }
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <section className="collectionContent sm:mt-4 overflow-auto">
            { sortArr.length ?
             <CollectionCarousel collections={collection} handle={handle} sortArr={sortColl} />
             :
             null
            } 
          </section>
          <main className="mx-auto max-w-8xl px-0 sm:px-4 sm:px-6 lg:px-8">
            <div className="flex gap-1 items-center">
              <Link className='mst-color' to="/">Home</Link>
              <img src="/next.png" alt="next" width={20} height={20} />
              <Link to="/collections" className="font-semibold mst-color">Collection</Link>
            </div>
            <div className="flex items-baseline justify-between border-b mst-border pb-6 m-0 relative">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:block hidden my-[15px] mst-color">
                {collection.title}
              </h1>

              <div className="flex items-center sm:mr-10">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 mst-color">
                      Sort
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500 mst-color"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({active}) => (
                              <a
                                onClick={()=> sortCollectionProducts(option.value) }
                                className={classNames(
                                  option.current
                                    ? 'font-medium text-gray-900'
                                    : 'text-gray-500',
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm',
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type="button"
                  className="second-filter -m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                >
                  <span className="sr-only">View grid</span>
                  <Squares2X2Icon className="h-5 w-5 mst-color" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="right-filter -m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-12 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <div className="shadow-md px-4 py-2 sm:mst-card">
                  <form className="hidden lg:block lg:sticky lg:top-[120px]">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="space-y-4 border-gray-200 pb-6 text-sm font-medium text-gray-900"
                    >
                      {subCategories.map((category) => (
                        <li
                          key={category.name}
                          className="border-b border-[#ece6e6] pb-2"
                        >
                          <a
                            href={category.href}
                            className="font-bold text-[18px]"
                          >
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-b border-gray-200 py-2"
                      >
                        {({open}) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-[18px] text-black font-bold">
                                <span className="">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-4">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      onChange={(e)=> filterData(e)}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-gray-600"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </div>
                
                {/* Product grid */}
                <div className="lg:col-span-3">
                  <div className="w-full max-w-screen-xl">
                    <div className="cursor grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                      {productsToShow.map((product, index) => (
                        <div className="cursor mst-card-md"  key={product.id}>
                          <div
                            className="bg-white rounded-lg shadow-lg p-2 px-2 sm:px-2"
                            style={{
                              boxShadow:
                                'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            }}
                          >
                          <div onClick={()=>goToProduct(`/products/${product.handle}`)}>
                            <img
                              src={product.images.edges[0]?.node?.url}
                              alt={product.title}
                              className="w-full h-auto rounded"
                            />
                            <div className='product_info'>
                              <div className="sm:text-lg text-[17px] xs:text-[14px] font-semibold mt-2 text-center min-h-[50px] xs:min-h-[65px] sm:min-h-[55px]">
                                {product.title}
                              </div>
                              <div>
                                <div className="text-center sm:text-[26px] text-[21px] xs:text-[19px] font-bold m-auto w-full">
                                &#x20b9;{Math.trunc(product.priceRange.maxVariantPrice.amount)} &nbsp; 
                               
                                &nbsp;&nbsp;
                                { product.variants.nodes[0].compareAtPrice?.amount ?
                                  <s className="opacity-50 text-xl">
                                  &#x20b9;{Math.trunc(product.variants.nodes[0].compareAtPrice?.amount)} 
                                  </s>
                                  :
                                  <s className="opacity-50 text-xl">
                                  &#x20b9;{Math.trunc(product.priceRange?.maxVariantPrice.amount)} 
                                  </s>
                                }
                                <b className='ml-2 text-red-500 text-sm xs:text-sm sm:text-xl'> ({ calculatePer(product.priceRange.minVariantPrice.amount,product.variants.nodes[0].compareAtPrice?.amount) } % Off) </b>
                                 </div>
                              </div>
                            </div>
                            <div className='flex justify-center pt-1'>
                            <OkendoStarRating
                              productId={product.id}
                              okendoStarRatingSnippet={product.OkendoStarRatingSnippet}
                            />
                            </div>
                          </div>
                            <div className="px-1 py-1 flex items-center sm:flex-row gap-3 justify-center w-[100%]">
                              <div className='w-[25%] flex justify-center'>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 32 33"
                                  xmlSpace="preserve"
                                  // width="2.8em"
                                  // height="2.8em"
                                  className="home-like h-[30px] w-[30px] sm:w-[43px] sm:h-[43px]"
                                >
                                  <path
                                    d="M9 .5h14c4.7 0 8.5 3.8 8.5 8.5v14c0 4.7-3.8 8.5-8.5 8.5H9C4.3 31.5.5 27.7.5 23V9C.5 4.3 4.3.5 9 .5z"
                                    fill="rgb(255, 255, 255)"
                                    stroke="rgb(0, 0, 0)"
                                  />
                                  <path
                                    d="M22.3 11.8c.4.4.7.9.9 1.4.2.5.3 1.1.3 1.6 0 .6-.1 1.1-.3 1.6-.2.5-.5 1-.9 1.4l-5.6 5.6s-.1 0-.1.1h-.2s-.1 0-.1-.1l-5.6-5.6C10 17 9.5 16 9.5 14.9c0-1.1.3-2.1 1-2.9.7-.8 1.7-1.3 2.7-1.5 1.1-.1 2.1.2 3 .8l.3.2.3-.2c.8-.6 1.8-.9 2.8-.8 1.1.1 2 .5 2.7 1.3z"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                  ></path>
                                </svg>
                              </div>
                              <div className='w-[75%]'>
                              <CartForm
                                route="/cart"
                                inputs={{lines: lines[index]}}
                                action={CartForm.ACTIONS.LinesAdd}
                                className="flex-grow"
                              >
                                {(fetcher) => (
                                  <>
                                    <button
                                      className="w-[100%] h-11 bg-black hover:bg-blue-700 text-white font-bold py-1 rounded-lg inline-block home-product"
                                      type="submit"
                                      onClick={() => {
                                        window.location.href =
                                          window.location.href + '#cart-aside';
                                      }}
                                    >
                                      Add To Cart
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
                  </div>
                </div>
              </div>
            </section>
            <div className='collection_desc'>
            { !readMore ?
              <p dangerouslySetInnerHTML={{ __html: collection?.descriptionHtml.slice(0, 200) }} className="my-4"></p>
              :
              <p dangerouslySetInnerHTML={{ __html: collection?.descriptionHtml}} className="my-4"></p>
            }
            { !readMore && collection?.descriptionHtml &&  <button onClick={()=> setMore(true)} className="bg-black text-white font-bold py-1 px-2"> Read More </button>}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

function ProductsGrid({products}) {
  return (
    <div className="products-grid">
      {products.map((product, index) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            loading={index < 8 ? 'eager' : undefined}
          />
        );
      })}
    </div>
  );
}

function ProductItem({product, loading}) {
  const variant = product.variants.nodes[0];
  const variantUrl = useVariantUrl(product.handle, variant.selectedOptions);
  return (
    <Link
      className="product-item"
      key={product.id}
      prefetch="intent"
      to={variantUrl}
    >
      {product.featuredImage && (
        <Image
          alt={product.featuredImage.altText || product.title}
          aspectRatio="1/1"
          data={product.featuredImage}
          loading={loading}
          sizes="(min-width: 45em) 400px, 100vw"
        />
      )}
      <h4>{product.title}</h4>
      <small>
        <Money data={product.priceRange.minVariantPrice} />
      </small>
     
    </Link>
  );
}

const PRODUCT_ITEM_FRAGMENT = `#graphql
  ${OKENDO_PRODUCT_STAR_RATING_FRAGMENT}
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    handle
    productType
    tags
    publishedAt
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
    }
    priceRange {
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
    images(first:10){
      edges{
        node{
          url
        }
      }
    }
    metafields(identifiers: [{namespace: "custom", key: "what_to_expect"},{namespace: "custom", key: "key_ingredients"}, {namespace: "custom", key: "how_to_use1"},{namespace: "custom", key: "who_can_use"},{namespace: "custom", key: "why_we"} ]){
      key
      value
    }
    variants(first: 1) {
      nodes {
        id
        compareAtPrice {
          amount
          currencyCode
        }
        selectedOptions {
          name
          value
        }
        metafields(identifiers: [{namespace: "custom", key: "isdefault"} ]){
          key
          value
        }
      }
    }
    ...OkendoStarRatingSnippet
  }
`;

const ALL_COLLECTIONS_QUERY = `#graphql
  query {
    collections(first: 100) {
      edges {
        node {
          id
          title
          handle
          metafields(identifiers: [{namespace: "custom", key: "mobile_banner"},{namespace: "custom", key: "sub_category_icon"}]){
            value
          }
        }
      }
    }
}
`
// NOTE: https://shopify.dev/docs/api/storefront/2022-04/objects/collection
const COLLECTION_QUERY = `#graphql
  ${PRODUCT_ITEM_FRAGMENT}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      descriptionHtml
      image{
        url
      }
      metafields(identifiers: [{namespace: "custom", key: "mobile_banner"}]){
        value
      }
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

const PRODUCTTAGS_QUERY = `#graphql
   {
  productTags(first:16){
    edges{
      node
    }
  }
  }
`;

const MENU_FRAGMENT = `#graphql
  fragment Menu on Menu {
    id
    items {
      id
      title
      url
      items{
        title
        url
        
      }
    }
  }
`;

const HEADER_QUERY = `#graphql
  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }
  query Header(
    $country: CountryCode
    $headerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    shop {
      ...Shop
    }
    menu(handle: $headerMenuHandle) {
      ...Menu
    }
  }
  ${MENU_FRAGMENT}
`;

