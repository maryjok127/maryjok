import {
  require_react_responsive
} from "/build/_shared/chunk-D3AIAV2V.js";
import {
  Q
} from "/build/_shared/chunk-OHHF25P7.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ProductsCorousel.jsx
var import_react = __toESM(require_react());
var import_react_responsive = __toESM(require_react_responsive());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ProductsCorousel = ({ products }) => {
  const noImg = "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/No-image-found.jpg?v=1708942129";
  let productsToShow = [];
  const [startIndex, setStartIndex] = (0, import_react.useState)(0);
  const lines = [];
  const isLargeScreen = (0, import_react_responsive.useMediaQuery)({ minWidth: 1024 });
  const endIndex = isLargeScreen ? 4 : 2;
  if (products != null || products != void 0) {
    productsToShow = products.edges.slice(startIndex, startIndex + endIndex);
  }
  const goToProduct = (url_path) => {
    window.location.href = url_path;
  };
  products.edges.map((product) => {
    product.node.variants.edges.map((line) => {
      lines.push([
        {
          merchandiseId: line.node.id,
          quantity: 1
        }
      ]);
    });
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6 py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mobile-productView p-[10px] gap-4", children: productsToShow.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: "w-full sm:w-1/3 md:w-1/3 lg:px-4 sm:px-1 md:px-3",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mst-card bg-white rounded-lg shadow-lg p-1 sm:p-2 shadow-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cursor", onClick: () => goToProduct(`/products/${product.node.handle}`), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              src: `${product.node.images.edges.length > 0 ? product.node.images.edges[0].node.url : noImg}`,
              alt: product.node.title,
              className: "w-full h-auto"
            },
            void 0,
            false,
            {
              fileName: "app/components/ProductsCorousel.jsx",
              lineNumber: 51,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product_info", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold mt-2 text-center min-h-[85px] sm:min-h-[50px]", children: product.node.title }, void 0, false, {
              fileName: "app/components/ProductsCorousel.jsx",
              lineNumber: 57,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center font-bold h-full w-full m-auto", children: [
              "\u20B9 ",
              Math.trunc(product.node.priceRange.minVariantPrice.amount)
            ] }, void 0, true, {
              fileName: "app/components/ProductsCorousel.jsx",
              lineNumber: 61,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/ProductsCorousel.jsx",
              lineNumber: 60,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ProductsCorousel.jsx",
            lineNumber: 56,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ProductsCorousel.jsx",
          lineNumber: 50,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-1 py-1 flex items-center sm:flex-row gap-3 justify-center w-[100%]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[25%] flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 32 33",
              xmlSpace: "preserve",
              className: "sm:w-[43px] w-[43px] like-home",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "path",
                  {
                    d: "M9 .5h14c4.7 0 8.5 3.8 8.5 8.5v14c0 4.7-3.8 8.5-8.5 8.5H9C4.3 31.5.5 27.7.5 23V9C.5 4.3 4.3.5 9 .5z",
                    fill: "rgb(255, 255, 255)",
                    stroke: "rgb(0, 0, 0)"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/ProductsCorousel.jsx",
                    lineNumber: 76,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "path",
                  {
                    d: "M22.3 11.8c.4.4.7.9.9 1.4.2.5.3 1.1.3 1.6 0 .6-.1 1.1-.3 1.6-.2.5-.5 1-.9 1.4l-5.6 5.6s-.1 0-.1.1h-.2s-.1 0-.1-.1l-5.6-5.6C10 17 9.5 16 9.5 14.9c0-1.1.3-2.1 1-2.9.7-.8 1.7-1.3 2.7-1.5 1.1-.1 2.1.2 3 .8l.3.2.3-.2c.8-.6 1.8-.9 2.8-.8 1.1.1 2 .5 2.7 1.3z",
                    fill: "none",
                    stroke: "rgb(0, 0, 0)"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/ProductsCorousel.jsx",
                    lineNumber: 81,
                    columnNumber: 23
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/ProductsCorousel.jsx",
              lineNumber: 70,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/ProductsCorousel.jsx",
            lineNumber: 69,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "d-line": index, className: "w-[75%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Q,
            {
              route: "/cart",
              inputs: { lines: lines[index] },
              action: Q.ACTIONS.LinesAdd,
              className: "w-[83%] ",
              children: (fetcher) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "button",
                {
                  disabled: !product.node.variants || !product.node.variants.edges[0].node.availableForSale,
                  className: "w-[100%] h-11 bg-black hover:bg-blue-700 text-white font-bold py-1 rounded-lg inline-block home-product",
                  type: "submit",
                  onClick: () => {
                    window.location.href = window.location.href + "#cart-aside";
                  },
                  children: product.node.variants && product.node.variants.edges[0].node.availableForSale ? "ADD TO CART" : "Sold out"
                },
                void 0,
                false,
                {
                  fileName: "app/components/ProductsCorousel.jsx",
                  lineNumber: 98,
                  columnNumber: 27
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/ProductsCorousel.jsx",
                lineNumber: 97,
                columnNumber: 25
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/ProductsCorousel.jsx",
              lineNumber: 90,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/ProductsCorousel.jsx",
            lineNumber: 89,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ProductsCorousel.jsx",
          lineNumber: 68,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ProductsCorousel.jsx",
        lineNumber: 49,
        columnNumber: 15
      }, this)
    },
    product.node.id,
    false,
    {
      fileName: "app/components/ProductsCorousel.jsx",
      lineNumber: 46,
      columnNumber: 13
    },
    this
  )) }, void 0, false, {
    fileName: "app/components/ProductsCorousel.jsx",
    lineNumber: 44,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/ProductsCorousel.jsx",
    lineNumber: 43,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ProductsCorousel.jsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
};
var ProductsCorousel_default = ProductsCorousel;

export {
  ProductsCorousel_default
};
//# sourceMappingURL=/build/_shared/chunk-ULO52KQE.js.map
