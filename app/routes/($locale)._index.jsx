import {defer} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link, NavLink} from '@remix-run/react';
import {Suspense, useEffect} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import ImageCarousel from '~/components/ImageCarousel';
import ProductCarousel from '~/components/ProductCarousel';
import GiftingCollection from '~/components/GiftingCollection';
import CustomizedProducts from '~/components/CustomizedProducts';
import YouTubeVideo from '~/components/YouTubeVideo';
import {useMediaQuery} from 'react-responsive';
import CustomizedCollection from '~/components/CustomizedCollection';
import BlogCorousel from '~/components/BlogCorousel'
import Testimonials from '~/components/Testimonials';
import LooksComp from '~/components/LooksComp';
import Slider from "react-slick";

import ReactGA from "react-ga4";

const TRACKING_ID = "G-T3JX7QEBFV"; 

ReactGA.initialize(TRACKING_ID);

export const meta = () => {
  return [{title: 'Home - MARY JO K'}];
};

export async function loader({context}) {
  const {storefront} = context;
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  //console.log(collections.nodes[0].products);
  const collectionProducts = collections;
  const featuredCollection = collections.nodes;
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);
  const {products} = await storefront.query(RECOMMENDED_PRODUCTS_QUERY);
  const {blogs} = await storefront.query(BLOGS_QUERY);
  const {page} = await storefront.query(PAGE_QUERY, {
    variables: {
      handle: 'testimonials'
    },
  });

  const headerPromise = storefront.query(HEADER_QUERY, {
    cache: storefront.CacheNone(),
    variables: {
      headerMenuHandle: 'main-menu', // Adjust to your header menu handle
    },
  });

  return defer({
    featuredCollection,
    recommendedProducts,
    collections,
    collectionProducts,
    products,
    blogs, 
    page,
    header: await headerPromise
  });
}

export default function Homepage() {

  useEffect(()=>{
     ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  },[]);
  
  const noImg = "https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_600x600.gif"
  const data = useLoaderData();
  const { header ,page:testimonialPage } = data;
  
  //console.log("menu ::",testimonialPage)
  var menus = header.menu.items;
  var collectionArray = menus.filter((item)=> item.title !== "Home");
  const isLargeScreen = useMediaQuery({minWidth: 1024});
  const isSmall = useMediaQuery({maxWidth: 640});

  var GiftCollections = [];
  var ReviewCollection = [];
  var BuildYourOwnColl = [];
  var ThirdHeroCollection = [];

  collectionArray.map((col,index)=>{
    let collNodes = data.collections.nodes;
    collectionArray[index]['image'] = {'url': noImg } 
    collNodes.map((item)=> {
      if(item.title.trim() === col.title.trim()){
        let isImg = item.image?.url;
        collectionArray[index]['handle'] = col.title.toLowerCase();
        collectionArray[index]['image'] = {'url': isImg ? isImg : noImg }
      };
    })
  })
  var looks = [];
  //console.log("collectionArray:",collectionArray)
  data.collectionProducts.nodes.forEach((col) => {
    if (col.metafields[0] != null && col.metafields[0].value == 'true') {
      ReviewCollection.push(col);
    }
    if(col.title === "Lookbooks"){
      looks.push(col)
    }
    if (col.title == "Build Your Own Kit") {
      BuildYourOwnColl.push(col);
    }
    if(col.title=='3rd Hero Collection'){
      ThirdHeroCollection.push(col)
    }
    if (col.title == "Gift Under 500" || col.title == "Gift Under 1000" || col.title == "Gifts Under 2000") {
      GiftCollections.push(col);
    }
  });
  BuildYourOwnColl = BuildYourOwnColl[0]?.products.edges;
  ThirdHeroCollection =  ThirdHeroCollection[0].products;
  GiftCollections = GiftCollections;
  //console.log(data.collectionProducts.nodes[7].metafields[1].value)

  function getPath(url_path) {
    let url = new URL(url_path);
    let path = url.pathname;
    return path;
  }
  const goToCollection=(url_path)=>{
    window.location.href = url_path
  }

  let totalLen = collectionCult.length;
  const settings = {
  centerMode: isSmall ? true : false,
  dots: totalLen > 3 ? true : false,
  infinite: true,
  speed: 500,
  initialSlide: isSmall ? 1 : 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        dots: true
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
  }
  return (
    <div className="home">
      { isSmall ?
        <section className="collectionContent lg:hidden block sm:mt-4 overflow-auto ">
        <div className="inline-flex gap-4">
          {collectionArrayStatic?.map((item, index) => (
            <div
              className="col-item sm:w-auto  rounded-lg hover:shadow-md cursor-pointer"
              key={`coll_crsl_${index}`}
            >
              <div className="image">
                <NavLink to={`/collections/${item.url}`}>
                  <img
                    width={80}
                    height={80}
                    alt={item.collectionname}
                    src={item.collectionimageurl}
                
                  />
                </NavLink>
              </div>
              <div className="collectionname  sm:text-lg text-[12px] font-semibold  text-center px-[15px] pb-[12px]  pt-[5px]">
                {item.collectionname}
              </div>
            </div>
          ))}
        </div>
      </section>
      :
      null
      }
      
      <div>
        <ImageCarousel ></ImageCarousel>
      </div>
      <RecommendedProducts
        key={data.collectionProducts.nodes[0].id}
        products={data.collectionProducts.nodes[0].products}
        title="CULT FAVES"
      />
      <div className='slider-container mb-8 max-w-screen-xl mx-auto lg:px-16 sm:px-4 md:px-6'>
        <h1 className="text-center lg:text=[28px] text-[20px]">
        CHOOSE YOUR CULT
        </h1> 
        <Slider {...settings}>
          { collectionCult.map((coll,index)=>{
              return <div key={`cult_choose_${index}`} className="px-2" >
                <div className="bg-white">  
                  <img
                    onClick={()=> goToCollection(`/collections/${coll.handle}`)}
                    src={`${coll.url}`} 
                    alt={coll.title}
                    className="lg:w-full lg:h-auto rounded-2xl w:[100%] sm:w-[375px] sm:w-[250px] cursor"
                  />
                </div>
            </div>
            })
          }
        </Slider>
      </div>

      {/*---Banner Statis section 8 --- */}
      {isLargeScreen && (
         <a href="/collections/daily-essentials">
          <div className="my-[15px]">
            <img
              src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Daily_Essentials_banner.jpg?v=1709971600"
              className="w-[100%] m-auto"
            ></img>
          </div>
        </a>
      )}
      {isSmall && (
        <a href="/collections/daily-essentials">
          <div className="my-[15px]">
            <img
              src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_everyday_style.jpg?v=1712816125"
              className="w-[100%] m-auto rounded-2xl"
            ></img>
          </div>
        </a>
      )}
      {/* -- Section 9 --  COll Name : 3rd Hero Collection */}
      <RecommendedProducts
        key={ThirdHeroCollection.edges[0].node.id}
        products={ThirdHeroCollection}
        title="DAILY MUST-HAVES"
      />
      <GiftingCollection collections={GiftCollections} title={'Glamorous Gift Picks'}  />

      <YouTubeVideo></YouTubeVideo>

      {isLargeScreen && (
         <a>
          <div className="my-[15px]">
            <img
              src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Lookbook_Banner.jpg?v=1709971241"
              className="w-[100%] m-auto"
            ></img>
          </div>
        </a>
      )}
      {isSmall && (
        <a>
          <div className="my-[15px]">
            <img
              src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_look_book.jpg?v=1712816125"
              className="w-[100%] m-auto rounded-2xl"
            ></img>
          </div>
        </a>
      )}
  
    <LooksComp looks={looks} />
    <div>
      <a href="/pages/about-us">
        <div>
          {!isSmall ?
          <img
            src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/About_US.jpg?v=1712993514"
            className="w-[100%] m-auto"
          ></img>
          :
          <img
          src="https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_about_us.jpg?v=1713353871"
          className="w-[100%] m-auto rounded-2xl"
        ></img>
        } 
        </div>
      </a>
    
    {/* <CustomizedCollection collections={collectionArray} title="Choose Your Own Fashion" /> */}
    </div>
      {/*<RecommendedProducts products={data.recommendedProducts} />*/}
      <div className='mx-8'>
      <BlogCorousel  isSmall={isSmall} collections={data.blogs} title="CULT CHAPTERS" />
      </div>
      {/*console.log(data.collectionProducts)*/}
      <Testimonials page={testimonialPage} isSmall={isSmall} />
    </div>
  );
}

function FeaturedCollection({collection}) {
  const image = collection.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
    >
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
      <h3 className="px-5">{collection.title}</h3>
    </Link>
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
            {<ProductCarousel products={products}></ProductCarousel>}
          </Await>
        </Suspense>
        <br />
      </div>
    </>
  );
}

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
                id
                availableForSale
                compareAtPrice {
                  amount
                  currencyCode
                }
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
`;

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
          availableForSale
          compareAtPrice {
            amount
            currencyCode
          }
          id
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
/*
const GET_COLLECTION_BY_HANDLE = gql`
query GetCollectionByHandle($handle: String!) {
  collectionByHandle(handle: $handle) {
    id
    title
    products(first: 10) {
      edges {
        node {
          id
          title
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
}
`;

console.log(GET_COLLECTION_BY_HANDLE);*/

const COLLECTION_QUERY = `#graphql
  fragment Collection on Collection {
        id
        title
        handle
        description
      }
  query Collections ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...Collections
      }
    }
  }`;

const BLOGS_QUERY = `#graphql
  query Blogs(
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    blogs(first: 100) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      nodes {
        title
        handle
        articles(first:10){
        edges{
          node{
            image {
              id
              url
            }
            id
          }
        }
      }
        seo {
          title
          description
        }
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

const PAGE_QUERY = `#graphql
  query Page(
    $language: LanguageCode,
    $country: CountryCode,
    $handle: String!
  )
  @inContext(language: $language, country: $country) {
    page(handle: $handle) {
      id
      title
      body
      seo {
        description
        title
      }
    }
  }
`;


const collectionCult = [
  {
    title: 'Way 2 Slay',
    handle:"way-2-slay-mjk",
    url: 'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Way_2_Slay-01.jpg?v=1713511899',
  },
  {
    title: 'Rizz & Roll MJK',
    handle:"rizz-roll-mjk",
    url: 'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/RIzz_and_Roll-01.jpg?v=1713511899',
  },
  {
    title: 'Pro Studio MJK',
    handle:"pro-studio-mjk",
    url: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Pro-studio_1-01.jpg?v=1713511899",
  }
];

const collectionArrayStatic = [
  {
    collectionname: 'Face',
    url:"face",
    collectionimageurl: 'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Face-Icon-Mobile.jpg?v=1713183444',
  },
  {
    collectionname: 'Lips',
    url:"lips",
    collectionimageurl: 'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Lips-icon-mobile.jpg?v=1713183444',
  },
  {
    collectionname: 'Eyes',
    url:"eyes",
    collectionimageurl: 'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Kajal-Icon-Mobile.jpg?v=1713183444',
  },
  {
    collectionname: 'Nail',
    url:"nails",
    collectionimageurl: 'https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Nail_Categories-02.jpg?v=1713183501',
  }
];