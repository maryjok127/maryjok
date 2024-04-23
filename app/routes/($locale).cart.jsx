import {Await, useMatches, useLoaderData} from '@remix-run/react';
import {defer, redirect} from '@shopify/remix-oxygen';
import {Suspense} from 'react';
import {CartForm} from '@shopify/hydrogen';
import {json} from '@shopify/remix-oxygen';
import {CartMain} from '~/components/Cart';
import ProductsCorousel from '~/components/ProductsCorousel';

export const meta = () => {
  return [{title: `Hydrogen | Cart`}];
};

export async function loader({params, request, context}) {
  const {handle} = params;
  const {storefront} = context;
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  const recommendedProducts = collections;
  return defer({recommendedProducts});
}
export async function action({request, context}) {
  const {session, cart} = context;

  const [formData, customerAccessToken] = await Promise.all([
    request.formData(),
    session.get('customerAccessToken'),
  ]);

  const {action, inputs} = CartForm.getFormInput(formData);

  if (!action) {
    throw new Error('No action provided');
  }

  let status = 200;
  let result;

  switch (action) {
    case CartForm.ACTIONS.LinesAdd:
      result = await cart.addLines(inputs.lines);
      break;
    case CartForm.ACTIONS.LinesUpdate:
      result = await cart.updateLines(inputs.lines);
      break;
    case CartForm.ACTIONS.LinesRemove:
      result = await cart.removeLines(inputs.lineIds);
      break;
    case CartForm.ACTIONS.DiscountCodesUpdate: {
      const formDiscountCode = inputs.discountCode;

      // User inputted discount code
      const discountCodes = formDiscountCode ? [formDiscountCode] : [];

      // Combine discount codes already applied on cart
      discountCodes.push(...inputs.discountCodes);

      result = await cart.updateDiscountCodes(discountCodes);
      break;
    }
    case CartForm.ACTIONS.BuyerIdentityUpdate: {
      result = await cart.updateBuyerIdentity({
        ...inputs.buyerIdentity,
        customerAccessToken,
      });
      break;
    }
    default:
      throw new Error(`${action} cart action is not defined`);
  }

  const cartId = result.cart.id;
  const headers = cart.setCartId(result.cart.id);
  const {cart: cartResult, errors} = result;

  const redirectTo = formData.get('redirectTo') ?? null;
  if (typeof redirectTo === 'string') {
    status = 303;
    headers.set('Location', redirectTo);
  }

  return json(
    {
      cart: cartResult,
      errors,
      analytics: {
        cartId,
      },
    },
    {status, headers},
  );
}

export default function Cart() {
  const {recommendedProducts} = useLoaderData();
  const [root] = useMatches();
  const cart = root.data?.cart;

  return (
    <div className="cart px-4">
      <h1>Cart</h1>
      <Suspense fallback={<p>Loading cart ...</p>}>
        <Await errorElement={<div>An error occurred</div>} resolve={cart}>
          {(cart) => {
            return <CartMain layout="page" cart={cart} />;
          }}
        </Await>
        <RecommendedProducts
        key={recommendedProducts.nodes[0].id}
        products={recommendedProducts.nodes[0].products}
        title="Recommended Products"
      />
      </Suspense>
    </div>
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
function JsonToHtml({ json }) {
  const renderChildren = (children) => {
    return children.map((child, index) => {
      if (child.type === 'paragraph') {
        // If the type is 'paragraph', create a <p> element
        return <p key={index}>{child.children[0].value}</p>;
      } else if (child.type === 'list') {
        // Handle list elements as needed (e.g., ul, ol)
        // You can add logic to create list elements here
        return null;
      } else {
        // Handle other types or unknown types
        return null;
      }
    });
  };

  return (
    <div>
      {renderChildren(json.children)}
    </div>
  );
};
*/

