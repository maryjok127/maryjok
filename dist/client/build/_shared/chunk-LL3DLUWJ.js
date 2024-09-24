import {
  require_react,
  useLocation
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/utils.js
var import_react2 = __toESM(require_react());
function useVariantUrl(handle, selectedOptions) {
  const { pathname } = useLocation();
  return (0, import_react2.useMemo)(() => {
    return getVariantUrl({
      handle,
      pathname,
      searchParams: new URLSearchParams(),
      selectedOptions
    });
  }, [handle, selectedOptions, pathname]);
}
function getLastQueryParam(params) {
  const lastParam = Array.from(params.entries()).pop();
  return lastParam ? { key: lastParam[0], value: lastParam[1] } : null;
}
function getVariantUrl({
  handle,
  pathname,
  searchParams,
  selectedOptions
}) {
  const match = /(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(pathname);
  const isLocalePathname = match && match.length > 0;
  const getMatch = getLastQueryParam(searchParams);
  const path = `/products/${handle}`;
  selectedOptions.forEach((option) => {
    searchParams.set(option.name, option.value);
  });
  const searchString = searchParams.toString();
  console.log("match::", path, "?", searchParams.toString());
  return path + (searchString ? "?" + searchParams.toString() : "");
}

export {
  useVariantUrl
};
//# sourceMappingURL=/build/_shared/chunk-LL3DLUWJ.js.map
