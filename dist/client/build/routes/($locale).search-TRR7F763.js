import {
  NoSearchResults,
  SearchForm,
  SearchResults
} from "/build/_shared/chunk-APF24Q2F.js";
import "/build/_shared/chunk-OHHF25P7.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).search.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: `Hydrogen | Search` }];
};
function SearchPage() {
  const { searchTerm, searchResults } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Search" }, void 0, false, {
      fileName: "app/routes/($locale).search.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchForm, { searchTerm }, void 0, false, {
      fileName: "app/routes/($locale).search.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    !searchTerm || !searchResults.totalResults ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NoSearchResults, {}, void 0, false, {
      fileName: "app/routes/($locale).search.jsx",
      lineNumber: 54,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchResults, { results: searchResults.results }, void 0, false, {
      fileName: "app/routes/($locale).search.jsx",
      lineNumber: 56,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).search.jsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
export {
  SearchPage as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).search-TRR7F763.js.map
