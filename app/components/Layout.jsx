import {Await} from '@remix-run/react';
import {Suspense} from 'react';
import {Aside} from '~/components/Aside';
import {Footer} from '~/components/Footer';
import {Header, HeaderMenu} from '~/components/Header';
import {CartMain} from '~/components/Cart';
import {
  PredictiveSearchForm,
  PredictiveSearchResults,
} from '~/components/Search';
import AnnouncementBar from './AnnouncemnetBar';
import ImageCarousel from './ImageCarousel';
import ProductCarousel from './ProductCarousel';
import OfferCarousel from './OfferCarousel';
import ProductPage from './ProductPage';
import YouTubeVideo from './YouTubeVideo';


export function Layout({cart, children = null, footer, header, isLoggedIn}) {
  const images= [
    'https://cdn.shopify.com/s/files/1/0810/9863/7603/files/6995513d5b84551a7c89579bda02b56d.jpg?v=1693061468',
    'https://cdn.shopify.com/s/files/1/0810/9863/7603/files/6995513d5b84551a7c89579bda02b56d.jpg?v=1693061468',
    'https://cdn.shopify.com/s/files/1/0810/9863/7603/files/6995513d5b84551a7c89579bda02b56d.jpg?v=1693061468',
    // Add more image URLs
  ];
  //console.log(children);
  

  return (
    <>
    <AnnouncementBar></AnnouncementBar>
      <CartAside cart={cart} />
      <SearchAside />
      <MobileMenuAside menu={header.menu} />
      <Header header={header} cart={cart} isLoggedIn={isLoggedIn} />
      <main>{children}</main>
      <Suspense>
        <Await resolve={footer}>
          {(footer) => <Footer menu={header.menu} />}
        </Await>
      </Suspense>
    </>
  );
}

function CartAside({cart}) {
  return (
    <Aside id="cart-aside" heading="CART">
      <Suspense fallback={<p>Loading cart ...</p>}>
        <Await resolve={cart}>
          {(cart) => {
            return <CartMain cart={cart} layout="aside" />;
          }}
        </Await>
      </Suspense>
    </Aside>
  );
}

function SearchAside() {
  return (
    <Aside id="search-aside" heading="SEARCH">
      <div className="predictive-search">
        <br />
        <PredictiveSearchForm>
          {({fetchResults, inputRef}) => (
            <div>
              <input
                name="q"
                onChange={fetchResults}
                onFocus={fetchResults}
                placeholder="Search"
                ref={inputRef}
                type="search"
              />
              &nbsp;
              <button type="submit">Search from Custom</button>
            </div>
          )}
        </PredictiveSearchForm>
        <PredictiveSearchResults />
      </div>
    </Aside>
  );
}

function MobileMenuAside({menu}) {
  return (
    <Aside id="mobile-menu-aside" heading="MENU">
      <HeaderMenu menu={menu} viewport="mobile" />
    </Aside>
  );
}
