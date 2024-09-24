import {useLocation} from '@remix-run/react';
import {useMemo} from 'react';

export function useVariantUrl(handle, selectedOptions) {
  const {pathname} = useLocation();

  return useMemo(() => {
    return getVariantUrl({
      handle,
      pathname,
      searchParams: new URLSearchParams(),
      selectedOptions,
    });
  }, [handle, selectedOptions, pathname]);
}

function getLastQueryParam(params) {
  const lastParam = Array.from(params.entries()).pop(); // Get the last entry
  return lastParam ? { key: lastParam[0], value: lastParam[1] } : null;
}
export function getVariantUrl({
  handle,
  pathname,
  searchParams,
  selectedOptions,
}) {
  const match = /(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(pathname);
  const isLocalePathname = match && match.length > 0;
  const getMatch = getLastQueryParam(searchParams);
  
  const path =  `/products/${handle}`;
   // isLocalePathname
    // ? `${match[0]}products/${handle}`
    // : `/products/${handle}`;

  
  selectedOptions.forEach((option) => {
    searchParams.set(option.name, option.value);
  });

  const searchString = searchParams.toString();

  console.log("match::",path,'?',searchParams.toString())
  return path + (searchString ? '?' + searchParams.toString() : '');
}
