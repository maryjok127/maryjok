import {defer} from '@shopify/remix-oxygen';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  useMatches,
  useRouteError,
  useLoaderData,
  ScrollRestoration,
  isRouteErrorResponse,
} from '@remix-run/react';
import {useEffect} from "react"
import favicon from '../public/favicon.svg';
import resetStyles from './styles/reset.css';
import appStyles from './styles/app.css';
import {Layout} from '~/components/Layout';
import tailwindCss from './styles/tailwind.css';

import {
	OkendoProvider,
	getOkendoProviderData,
} from "@okendo/shopify-hydrogen";
import {getSeoMeta} from '@shopify/hydrogen';

import ReactGA from 'react-ga4';
const TRACKING_ID =  "G-T3JX7QEBFV"; 
ReactGA.initialize(TRACKING_ID);


export function links() {
  return [
    {rel: 'stylesheet', href: tailwindCss},
    {rel: 'stylesheet', href: resetStyles},
    {rel: 'stylesheet', href: appStyles},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'icon', type: 'image/svg+xml', href: favicon},
  ];
}

export async function loader({request,context}) {
  const {storefront, session, cart} = context;
  const customerAccessToken = await session.get('customerAccessToken')
  const publicStoreDomain = context.env.PUBLIC_STORE_DOMAIN;
  const {isLoggedIn, headers} = await validateCustomerAccessToken(
    customerAccessToken,
    session,
  );
  // defer the cart query by not awaiting it
  const cartPromise = cart.get();
  // defer the footer query (below the fold)
  const footerPromise = storefront.query(FOOTER_QUERY, {
    cache: storefront.CacheLong(),
    variables: {
      footerMenuHandle: 'footer', // Adjust to your footer menu handle
    },
  });
  // await the header query (above the fold)
  const headerPromise = storefront.query(HEADER_QUERY, {
    cache: storefront.CacheNone(),
    variables: {headerMenuHandle: 'main-menu' },
  });
  console.log(request.url)
  let seo = {
    title: "Mary Jo K",
    href:request.url
  }

  return defer(
    {
      seo:seo,
      cart: cartPromise,
      footer: await footerPromise,
      header: await headerPromise,
      isLoggedIn,
      publicStoreDomain,
      okendoProviderData: await getOkendoProviderData({
        context,
        subscriberId: "866361a1-6116-4d14-abc8-0565f32d51cb",
      }),
    },
    {headers},
  );
}

export default function App() {
  useEffect(()=>{
     ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  },[])

  const data = useLoaderData();
  const image= ['https://cdn.shopify.com/s/files/1/0599/7894/0607/products/Artboard2_7746b5e7-35c9-4fc8-bcd9-9d98e80a5abb.jpg','https://cdn.shopify.com/s/files/1/0599/7894/0607/products/Artboard4_7e4b511f-1796-49a7-89de-7ba7d18d3544.jpg','https://cdn.shopify.com/s/files/1/0599/7894/0607/products/Artboard2_7746b5e7-35c9-4fc8-bcd9-9d98e80a5abb.jpg?v=1681735611']
  //console.log(data.footer)
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="C5WkKr6Bq1BKgHfp7-jocFCRVsXNHOTWyCKxoEW-y-w" />
        <meta charSet="utf-8" />
        <link rel="canonical" href={data.seo.href} />

        <meta name="viewport" content="width=device-width,initial-scale=1" />   
        <meta name="oke:subscriber_id" content="866361a1-6116-4d14-abc8-0565f32d51cb" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link  rel="stylesheet" type="text/css" href="https://s3.amazonaws.com/cdn.myshopapps.com/sg-gallery-hydrogen/main.628eb170.css"></link>       
        <Meta />
        <Links />
        {/* <script src="../lookbook.js"></script> */}
      </head>
      <body>
	      <OkendoProvider okendoProviderData={data.okendoProviderData} />
        <Layout {...data}>
        <Outlet />
        </Layout>
        <ScrollRestoration />
        {/* <script async src="../google_tag_head.js"> </script>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TPDWX7TM"
        height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
        */}

        <script src='../google_tag.js'> </script> 

        <script src='../fb_pixel.js'> </script>
        <noscript><img height="1" width="1" style={{display:"none"}}
        src="https://www.facebook.com/tr?id=761666845907224&ev=PageView&noscript=1"
        /></noscript>

        <script async src="https://s3.amazonaws.com/cdn.myshopapps.com/sg-gallery-hydrogen/main.js"> </script>
        <script async src="https://s3.amazonaws.com/cdn.myshopapps.com/sg-gallery-hydrogen/787.chunk.js"> </script>
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const [root] = useMatches();
  let errorMessage = 'Unknown error';
  let errorStatus = 500;

  if (isRouteErrorResponse(error)) {
    errorMessage = error?.data?.message ?? error.data;
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout {...root.data}>
          <div className="route-error">
            <h1>Oopss</h1>
            <h2>{errorStatus}</h2>
            {errorMessage && (
              <fieldset>
                <pre>{errorMessage}</pre>
              </fieldset>
            )}
          </div>
        </Layout>
        <ScrollRestoration />
        
        <Scripts />
      </body>
    </html>
  );
}

/**
 * Validates the customer access token and returns a boolean and headers
 * @see https://shopify.dev/docs/api/storefront/latest/objects/CustomerAccessToken
 *
 * @example
 * ```ts
 * //
 * const {isLoggedIn, headers} = await validateCustomerAccessToken(
 *  customerAccessToken,
 *  session,
 *  );
 *  ```
 *  */
async function validateCustomerAccessToken(customerAccessToken, session) {
  let isLoggedIn = false;
  const headers = new Headers();
  if (!customerAccessToken?.accessToken || !customerAccessToken?.expiresAt) {
    return {isLoggedIn, headers};
  }
  const expiresAt = new Date(customerAccessToken.expiresAt);
  const dateNow = new Date();
  const customerAccessTokenExpired = expiresAt < dateNow;
  if (customerAccessTokenExpired) {
    session.unset('customerAccessToken');
    headers.append('Set-Cookie', await session.commit());
  } else {
    isLoggedIn = true;
  }
  return {isLoggedIn, headers};
}

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

const FOOTER_QUERY = `#graphql
  query Footer(
    $country: CountryCode
    $footerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    menu(handle: $footerMenuHandle) {
      ...Menu
    }
  }
  ${MENU_FRAGMENT}
`;
