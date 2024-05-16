import {
  require_lib
} from "/build/_shared/chunk-6I5S762C.js";
import {
  MdChevronLeft,
  MdChevronRight
} from "/build/_shared/chunk-AQMJZ442.js";
import {
  require_react_responsive
} from "/build/_shared/chunk-D3AIAV2V.js";
import {
  ee
} from "/build/_shared/chunk-VY5OJHMS.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ProductCarousel.jsx
var import_react = __toESM(require_react());
var import_react_responsive = __toESM(require_react_responsive());
var import_react_slick = __toESM(require_lib());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ProductCarousel = ({ products }) => {
  const noImg = "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/No-image-found.jpg?v=1708942129";
  let productsToShow = [];
  const lines = [];
  var len = products.edges.length;
  const isLargeScreen = (0, import_react_responsive.useMediaQuery)({ minWidth: 1024 });
  const eIndex = isLargeScreen ? len < 4 ? len : 4 : 2;
  productsToShow = products;
  const calculatePer = (original_price, disc_price) => {
    let price = Math.trunc(original_price);
    let compareAtPrice = Math.trunc(disc_price);
    let per = (compareAtPrice - price) / price * 100;
    return Math.trunc(per);
  };
  products.edges.map((product) => {
    product.node.variants.edges.map((line) => {
      if (line.node.availableForSale) {
        lines.push([
          {
            merchandiseId: line.node.id,
            quantity: 1
          }
        ]);
      }
    });
  });
  const goToProduct = (url_path) => {
    window.location.href = url_path;
  };
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute z-10 lg:left-[-90px] top-1/2 transform -translate-y-1/2  bg-white bg-opacity-75 rounded-full p-2 ml-4 hover:bg-opacity-100 z-4 text-white",
        onClick,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          MdChevronLeft,
          {
            className: "opacity-50 cursor-pointer hover:opacity-100 mst-arrow",
            size: 40
          },
          void 0,
          false,
          {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 52,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 49,
        columnNumber: 7
      },
      this
    );
  }
  function SampleNextArrow(props) {
    const { onClick } = props;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute lg:right-[-90px] right-0 top-1/2 transform -translate-y-1/2  bg-white bg-opacity-75 rounded-full p-2 mr-4 hover:bg-opacity-100 text-white",
        onClick,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          MdChevronRight,
          {
            className: "opacity-50 cursor-pointer hover:opacity-100 mst-arrow",
            size: 40
          },
          void 0,
          false,
          {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 67,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 63,
        columnNumber: 7
      },
      this
    );
  }
  const settings = {
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: eIndex,
    slidesToScroll: 1,
    nextArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SampleNextArrow, {}, void 0, false, {
      fileName: "app/components/ProductCarousel.jsx",
      lineNumber: 81,
      columnNumber: 15
    }, this),
    prevArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SamplePrevArrow, {}, void 0, false, {
      fileName: "app/components/ProductCarousel.jsx",
      lineNumber: 82,
      columnNumber: 16
    }, this),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: eIndex,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: eIndex,
          slidesToScroll: eIndex,
          initialSlide: 1,
          dots: true
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "recommended_section w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_slick.default, { ...settings, children: productsToShow.edges.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white mst-card rounded-lg shadow-lg mx-2 p-1 sm:p-2 ", children: [
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
          fileName: "app/components/ProductCarousel.jsx",
          lineNumber: 120,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product_info", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold mt-2 text-center min-h-[50px] xs:min-h-[85px] sm:min-h-[50px] ", children: product.node.title }, void 0, false, {
          fileName: "app/components/ProductCarousel.jsx",
          lineNumber: 126,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row justify-center gap-1 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-bold m-auto flex  text-center text-sm xs:text-sm sm:text-xl", children: [
            "\u20B9",
            Math.trunc(product.node.priceRange.minVariantPrice.amount)
          ] }, void 0, true, {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 131,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 130,
            columnNumber: 25
          }, this),
          product.node.variants.edges[0].node.compareAtPrice?.amount && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2 line-through opacity-50 text-sm xs:text-sm sm:text-xl", children: [
              "\u20B9",
              Math.trunc(product.node.variants.edges[0].node.compareAtPrice?.amount)
            ] }, void 0, true, {
              fileName: "app/components/ProductCarousel.jsx",
              lineNumber: 137,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { className: "ml-2 text-red-500 text-sm xs:text-sm sm:text-xl", children: [
              " (",
              calculatePer(product.node.priceRange.minVariantPrice.amount, product.node.variants.edges[0].node.compareAtPrice?.amount),
              " % Off) "
            ] }, void 0, true, {
              fileName: "app/components/ProductCarousel.jsx",
              lineNumber: 140,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 136,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ProductCarousel.jsx",
          lineNumber: 129,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 125,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductCarousel.jsx",
      lineNumber: 119,
      columnNumber: 19
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
                fileName: "app/components/ProductCarousel.jsx",
                lineNumber: 155,
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
                fileName: "app/components/ProductCarousel.jsx",
                lineNumber: 160,
                columnNumber: 23
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/ProductCarousel.jsx",
          lineNumber: 149,
          columnNumber: 21
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 148,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "d-line": index, className: "w-[75%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        ee,
        {
          route: "/cart",
          inputs: { lines: lines[index] },
          action: ee.ACTIONS.LinesAdd,
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
              fileName: "app/components/ProductCarousel.jsx",
              lineNumber: 177,
              columnNumber: 27
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 176,
            columnNumber: 25
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/ProductCarousel.jsx",
          lineNumber: 169,
          columnNumber: 21
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 168,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductCarousel.jsx",
      lineNumber: 147,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ProductCarousel.jsx",
    lineNumber: 118,
    columnNumber: 17
  }, this) }, `product_${product.node.id}`, false, {
    fileName: "app/components/ProductCarousel.jsx",
    lineNumber: 117,
    columnNumber: 13
  }, this)) }, void 0, false, {
    fileName: "app/components/ProductCarousel.jsx",
    lineNumber: 115,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/ProductCarousel.jsx",
    lineNumber: 114,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ProductCarousel.jsx",
    lineNumber: 113,
    columnNumber: 5
  }, this);
};
var ProductCarousel_default = ProductCarousel;

export {
  ProductCarousel_default
};
//# sourceMappingURL=/build/_shared/chunk-QWJLNLDH.js.map
