import {defer} from '@shopify/remix-oxygen';
import CustomizedCollection from '../components/CustomizedCollection';
import OfferCarousel from "../components/OfferCarousel"
import {useLoaderData} from '@remix-run/react';

export const meta = () => {
  return [{title: 'Login'}];
};

export async function loader({context}) {
  const {storefront} = context;
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  const collectionProducts = collections;
  return defer({
    collectionProducts
  });
}

export default function Offers() {
  const data = useLoaderData();
  var GiftCollections = [];
    data.collectionProducts.nodes.forEach((col) => {
    if (col.title == "Gift Under 500" || col.title == "Gift Under 1000" || col.title == "Gifts Under 2000") {
      GiftCollections.push(col);
    }
  });
  // console.log("Offers::",GiftCollections)
  GiftCollections = GiftCollections;
  return (
    <>
      <div className="page">
        <OfferCarousel collections={GiftCollections} title={'Gifting Offers'} />
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
          variants(first: 100) {
          edges {
          node {
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
    description
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
