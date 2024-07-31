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
  require_prop_types
} from "/build/_shared/chunk-UER42TUN.js";
import {
  ee
} from "/build/_shared/chunk-VY5OJHMS.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __export,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ImageCarousel.jsx
var import_react = __toESM(require_react());
var import_react_responsive = __toESM(require_react_responsive());
var import_react_slick = __toESM(require_lib());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ImageCarousel = () => {
  const isSmall = (0, import_react_responsive.useMediaQuery)({ maxWidth: 640 });
  var imageSrc = [];
  const goToCollection = (url) => {
    window.location.href = url;
  };
  var imageSrc = [];
  if (!isSmall) {
    imageSrc = [
      {
        url: "/collections/cult-accessories",
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_1.jpg?v=1715767477"
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_3.jpg?v=1713342905",
        url: "/collections/way-2-slay-mjk"
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_2.jpg?v=1715944709",
        url: "/collections/rizz-roll-mjk"
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/pro_studio__banner_5_opt_2.jpg?v=1714388254",
        url: "collections/pro-studio-mjk"
      }
    ];
  } else {
    imageSrc = [
      {
        url: "/collections/cult-accessories",
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Hero_Banners_1.jpg?v=1715767503"
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Hero_Banners_2.jpg?v=1713353171",
        url: "/collections/way-2-slay-mjk"
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Hero_Banners_4.jpg?v=1715944487",
        url: "/collections/rizz-roll-mjk"
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/pro_studio_mobile_banner_3_700_x_470.jpg?v=1715944382",
        url: "collections/pro-studio-mjk"
      }
    ];
  }
  function PrevArrow(props) {
    const { onClick } = props;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute top-1/2 z-10 transform -translate-y-1/2  bg-opacity-75 rounded-full p-2 ml-4 hover:bg-opacity-100 text-white",
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
            fileName: "app/components/ImageCarousel.jsx",
            lineNumber: 54,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ImageCarousel.jsx",
        lineNumber: 51,
        columnNumber: 7
      },
      this
    );
  }
  function NextArrow(props) {
    const { onClick } = props;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute right-0 top-1/2 transform -translate-y-1/2 bg-opacity-75 rounded-full p-2 mr-4 hover:bg-opacity-100 text-white",
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
            fileName: "app/components/ImageCarousel.jsx",
            lineNumber: 69,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ImageCarousel.jsx",
        lineNumber: 65,
        columnNumber: 7
      },
      this
    );
  }
  const settings = {
    infinite: true,
    speed: 500,
    initialSlide: isSmall ? 1 : 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextArrow, {}, void 0, false, {
      fileName: "app/components/ImageCarousel.jsx",
      lineNumber: 85,
      columnNumber: 16
    }, this),
    prevArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrevArrow, {}, void 0, false, {
      fileName: "app/components/ImageCarousel.jsx",
      lineNumber: 86,
      columnNumber: 16
    }, this),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_slick.default, { ...settings, children: imageSrc.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "img",
    {
      onClick: () => goToCollection(item.url),
      className: `lg:w-full md:w-full cursor-pointer sm:w-full object-cover ${isSmall ? "rounded-2xl" : ""} w-[100%]`,
      src: item.img
    },
    `img_crsll_${index}`,
    false,
    {
      fileName: "app/components/ImageCarousel.jsx",
      lineNumber: 122,
      columnNumber: 15
    },
    this
  )) }, void 0, false, {
    fileName: "app/components/ImageCarousel.jsx",
    lineNumber: 119,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ImageCarousel.jsx",
    lineNumber: 118,
    columnNumber: 5
  }, this);
};
var ImageCarousel_default = ImageCarousel;

// app/components/ProductCarousel.jsx
var import_react2 = __toESM(require_react());
var import_react_responsive2 = __toESM(require_react_responsive());
var import_react_slick2 = __toESM(require_lib());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var ProductCarousel = ({ products }) => {
  const noImg = "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/No-image-found.jpg?v=1708942129";
  let productsToShow = [];
  const lines = [];
  var len = products.edges.length;
  const isLargeScreen = (0, import_react_responsive2.useMediaQuery)({ minWidth: 1024 });
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
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "button",
      {
        className: "absolute z-10 lg:left-[-90px] top-1/2 transform -translate-y-1/2  bg-white bg-opacity-75 rounded-full p-2 ml-4 hover:bg-opacity-100 z-4 text-white",
        onClick,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "button",
      {
        className: "absolute lg:right-[-90px] right-0 top-1/2 transform -translate-y-1/2  bg-white bg-opacity-75 rounded-full p-2 mr-4 hover:bg-opacity-100 text-white",
        onClick,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
    nextArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SampleNextArrow, {}, void 0, false, {
      fileName: "app/components/ProductCarousel.jsx",
      lineNumber: 81,
      columnNumber: 15
    }, this),
    prevArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SamplePrevArrow, {}, void 0, false, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "recommended_section w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_slick2.default, { ...settings, children: productsToShow.edges.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white mst-card rounded-lg shadow-lg mx-2 p-1 sm:p-2 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "cursor", onClick: () => goToProduct(`/products/${product.node.handle}`), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "product_info", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-lg font-semibold mt-2 text-center min-h-[50px] xs:min-h-[85px] sm:min-h-[50px]", children: product.node.title }, void 0, false, {
          fileName: "app/components/ProductCarousel.jsx",
          lineNumber: 126,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-row justify-center gap-1 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "font-bold m-auto flex  text-center text-sm xs:text-sm sm:text-xl", children: [
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
          product.node.variants.edges[0].node.compareAtPrice?.amount && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-2 line-through opacity-50 text-sm xs:text-sm sm:text-xl", children: [
              "\u20B9",
              Math.trunc(product.node.variants.edges[0].node.compareAtPrice?.amount)
            ] }, void 0, true, {
              fileName: "app/components/ProductCarousel.jsx",
              lineNumber: 137,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("b", { className: "ml-2 text-red-500 text-sm xs:text-sm sm:text-xl", children: [
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-1 py-1 flex items-center sm:flex-row gap-3 justify-center w-[100%]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-[25%] flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 33",
          xmlSpace: "preserve",
          className: "sm:w-[43px] w-[43px] like-home",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { "d-line": index, className: "w-[75%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        ee,
        {
          route: "/cart",
          inputs: { lines: lines[index] },
          action: ee.ACTIONS.LinesAdd,
          className: "w-[83%] ",
          children: (fetcher) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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

// app/components/YouTubeVideo.jsx
var import_react3 = __toESM(require_react());
var import_react_responsive3 = __toESM(require_react_responsive());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var MobileVideo = ({ playVideo, src, isPlay, embedUrl }) => {
  console.log("MobileVideo:", isPlay);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full h-full mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative rounded-lg cursor-pointer", onClick: () => playVideo(), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "relative rounded-2xl", src, alt: "Youtube Video" }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "absolute top-[50%] left-[50%]", src: "/youtube_icon.png" }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    isPlay && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "iframe",
      {
        title: "YouTube Video",
        className: "absolute top-0 left-0 w-full h-full rounded-2xl",
        src: embedUrl,
        allowFullScreen: true,
        autoPlay: "1",
        mute: "1",
        allow: "autoplay"
      },
      void 0,
      false,
      {
        fileName: "app/components/YouTubeVideo.jsx",
        lineNumber: 12,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/YouTubeVideo.jsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/YouTubeVideo.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
};
var DesktopVideo = ({ playVideo, src, isPlay, embedUrl }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-4/5 mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative rounded-2xl p-10 cursor-pointer", onClick: () => playVideo(), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "rounded-2xl relative", src, alt: "Youtube Video" }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "absolute top-[50%] left-[50%]", src: "/youtube_icon.png" }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    isPlay && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "iframe",
      {
        title: "YouTube Video",
        className: "absolute top-0 left-0 w-full h-full rounded-2xl",
        src: embedUrl,
        allowFullScreen: true,
        autoPlay: "1",
        mute: "1",
        allow: "autoplay"
      },
      void 0,
      false,
      {
        fileName: "app/components/YouTubeVideo.jsx",
        lineNumber: 34,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/YouTubeVideo.jsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/YouTubeVideo.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
};
var YouTubeVideo = () => {
  const embedUrl = `https://www.youtube.com/embed/WKKai8jures?si=RwowF2iZZmbeL8H3?&autoplay=1`;
  const src = "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/youtube_thumbnail.jpg?v=1713503453";
  const isLargeScreen = (0, import_react_responsive3.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive3.useMediaQuery)({ maxWidth: 640 });
  const [play, setPlay] = (0, import_react3.useState)(false);
  const playVideo = () => {
    setPlay(!play);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DesktopVideo, { embedUrl, playVideo, isPlay: play, src }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 64,
      columnNumber: 25
    }, this),
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MobileVideo, { embedUrl, playVideo, isPlay: play, src }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 65,
      columnNumber: 19
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/YouTubeVideo.jsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
};
var YouTubeVideo_default = YouTubeVideo;

// node_modules/react-ga/dist/esm/components/OutboundLink.js
var import_react4 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/react-ga/dist/esm/utils/console/warn.js
function warn(s) {
  console.warn("[react-ga]", s);
}

// node_modules/react-ga/dist/esm/components/OutboundLink.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
var _excluded = ["to", "target"];
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var NEWTAB = "_blank";
var MIDDLECLICK = 1;
var OutboundLink = /* @__PURE__ */ function(_Component) {
  _inherits(OutboundLink3, _Component);
  var _super = _createSuper(OutboundLink3);
  function OutboundLink3() {
    var _this;
    _classCallCheck(this, OutboundLink3);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "handleClick", function(event2) {
      var _this$props = _this.props, target = _this$props.target, eventLabel = _this$props.eventLabel, to = _this$props.to, onClick = _this$props.onClick, trackerNames = _this$props.trackerNames;
      var eventMeta = {
        label: eventLabel
      };
      var sameTarget = target !== NEWTAB;
      var normalClick = !(event2.ctrlKey || event2.shiftKey || event2.metaKey || event2.button === MIDDLECLICK);
      if (sameTarget && normalClick) {
        event2.preventDefault();
        OutboundLink3.trackLink(eventMeta, function() {
          window.location.href = to;
        }, trackerNames);
      } else {
        OutboundLink3.trackLink(eventMeta, function() {
        }, trackerNames);
      }
      if (onClick) {
        onClick(event2);
      }
    });
    return _this;
  }
  _createClass(OutboundLink3, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props, href = _this$props2.to, target = _this$props2.target, oldProps = _objectWithoutProperties(_this$props2, _excluded);
      var props = _objectSpread(_objectSpread({}, oldProps), {}, {
        target,
        href,
        onClick: this.handleClick
      });
      if (target === NEWTAB) {
        props.rel = "".concat(props.rel ? props.rel : "", " noopener noreferrer").trim();
      }
      delete props.eventLabel;
      delete props.trackerNames;
      return /* @__PURE__ */ import_react4.default.createElement("a", props);
    }
  }]);
  return OutboundLink3;
}(import_react4.Component);
_defineProperty(OutboundLink, "trackLink", function() {
  warn("ga tracking not enabled");
});
OutboundLink.propTypes = {
  eventLabel: import_prop_types.default.string.isRequired,
  target: import_prop_types.default.string,
  to: import_prop_types.default.string,
  onClick: import_prop_types.default.func,
  trackerNames: import_prop_types.default.arrayOf(import_prop_types.default.string)
};
OutboundLink.defaultProps = {
  target: null,
  to: null,
  onClick: null,
  trackerNames: null
};

// node_modules/react-ga/dist/esm/core.js
var core_exports = {};
__export(core_exports, {
  addTrackers: () => addTrackers,
  default: () => core_default,
  event: () => event,
  exception: () => exception,
  ga: () => ga2,
  initialize: () => initialize,
  modalview: () => modalview,
  outboundLink: () => outboundLink,
  pageview: () => pageview,
  plugin: () => plugin,
  send: () => send,
  set: () => set,
  testModeAPI: () => testModeAPI,
  timing: () => timing
});

// node_modules/react-ga/dist/esm/utils/mightBeEmail.js
function mightBeEmail(s) {
  return typeof s === "string" && s.indexOf("@") !== -1;
}

// node_modules/react-ga/dist/esm/utils/redactEmail.js
var redacted = "REDACTED (Potential Email Address)";
function redactEmail(string) {
  if (mightBeEmail(string)) {
    warn("This arg looks like an email address, redacting.");
    return redacted;
  }
  return string;
}

// node_modules/react-ga/dist/esm/utils/trim.js
function trim(s) {
  return s && s.toString().replace(/^\s+|\s+$/g, "");
}

// node_modules/react-ga/dist/esm/utils/toTitleCase.js
var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
function toTitleCase(string) {
  return trim(string).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title) {
    if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" && (title.charAt(index + match.length) !== "-" || title.charAt(index - 1) === "-") && title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }
    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }
    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}

// node_modules/react-ga/dist/esm/utils/format.js
function format() {
  var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var titleCase = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var redactingEmail = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var _str = s || "";
  if (titleCase) {
    _str = toTitleCase(s);
  }
  if (redactingEmail) {
    _str = redactEmail(_str);
  }
  return _str;
}

// node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js
function removeLeadingSlash(string) {
  if (string.substring(0, 1) === "/") {
    return string.substring(1);
  }
  return string;
}

// node_modules/react-ga/dist/esm/utils/loadGA.js
var isLoaded = false;
function loadGA_default(options) {
  if (isLoaded)
    return;
  isLoaded = true;
  var gaAddress = "https://www.google-analytics.com/analytics.js";
  if (options && options.gaAddress) {
    gaAddress = options.gaAddress;
  } else if (options && options.debug) {
    gaAddress = "https://www.google-analytics.com/analytics_debug.js";
  }
  var onerror = options && options.onerror;
  (function(i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * /* @__PURE__ */ new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    a.onerror = onerror;
    m.parentNode.insertBefore(a, m);
  })(window, document, "script", gaAddress, "ga");
}

// node_modules/react-ga/dist/esm/utils/console/log.js
function log(s) {
  console.info("[react-ga]", s);
}

// node_modules/react-ga/dist/esm/utils/testModeAPI.js
var gaCalls = [];
var testModeAPI_default = {
  calls: gaCalls,
  ga: function ga() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    gaCalls.push([].concat(args));
  },
  resetCalls: function resetCalls() {
    gaCalls.length = 0;
  }
};

// node_modules/react-ga/dist/esm/core.js
var _excluded2 = ["category", "action", "label", "value", "nonInteraction", "transport"];
function _objectWithoutProperties2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _typeof2(obj) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof2(obj);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var _isNotBrowser = typeof window === "undefined" || typeof document === "undefined";
var _debug = false;
var _titleCase = true;
var _testMode = false;
var _alwaysSendToDefaultTracker = true;
var _redactEmail = true;
var internalGa = function internalGa2() {
  var _window;
  if (_testMode)
    return testModeAPI_default.ga.apply(testModeAPI_default, arguments);
  if (_isNotBrowser)
    return false;
  if (!window.ga)
    return warn("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually");
  return (_window = window).ga.apply(_window, arguments);
};
function _format(s) {
  return format(s, _titleCase, _redactEmail);
}
function _gaCommand(trackerNames) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var command = args[0];
  if (typeof internalGa === "function") {
    if (typeof command !== "string") {
      warn("ga command must be a string");
      return;
    }
    if (_alwaysSendToDefaultTracker || !Array.isArray(trackerNames))
      internalGa.apply(void 0, args);
    if (Array.isArray(trackerNames)) {
      trackerNames.forEach(function(name) {
        internalGa.apply(void 0, _toConsumableArray(["".concat(name, ".").concat(command)].concat(args.slice(1))));
      });
    }
  }
}
function _initialize(gaTrackingID, options) {
  if (!gaTrackingID) {
    warn("gaTrackingID is required in initialize()");
    return;
  }
  if (options) {
    if (options.debug && options.debug === true) {
      _debug = true;
    }
    if (options.titleCase === false) {
      _titleCase = false;
    }
    if (options.redactEmail === false) {
      _redactEmail = false;
    }
    if (options.useExistingGa) {
      return;
    }
  }
  if (options && options.gaOptions) {
    internalGa("create", gaTrackingID, options.gaOptions);
  } else {
    internalGa("create", gaTrackingID, "auto");
  }
}
function addTrackers(configsOrTrackingId, options) {
  if (Array.isArray(configsOrTrackingId)) {
    configsOrTrackingId.forEach(function(config) {
      if (_typeof2(config) !== "object") {
        warn("All configs must be an object");
        return;
      }
      _initialize(config.trackingId, config);
    });
  } else {
    _initialize(configsOrTrackingId, options);
  }
  return true;
}
function initialize(configsOrTrackingId, options) {
  if (options && options.testMode === true) {
    _testMode = true;
  } else {
    if (_isNotBrowser) {
      return;
    }
    if (!options || options.standardImplementation !== true)
      loadGA_default(options);
  }
  _alwaysSendToDefaultTracker = options && typeof options.alwaysSendToDefaultTracker === "boolean" ? options.alwaysSendToDefaultTracker : true;
  addTrackers(configsOrTrackingId, options);
}
function ga2() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  if (args.length > 0) {
    internalGa.apply(void 0, args);
    if (_debug) {
      log("called ga('arguments');");
      log("with arguments: ".concat(JSON.stringify(args)));
    }
  }
  return window.ga;
}
function set(fieldsObject, trackerNames) {
  if (!fieldsObject) {
    warn("`fieldsObject` is required in .set()");
    return;
  }
  if (_typeof2(fieldsObject) !== "object") {
    warn("Expected `fieldsObject` arg to be an Object");
    return;
  }
  if (Object.keys(fieldsObject).length === 0) {
    warn("empty `fieldsObject` given to .set()");
  }
  _gaCommand(trackerNames, "set", fieldsObject);
  if (_debug) {
    log("called ga('set', fieldsObject);");
    log("with fieldsObject: ".concat(JSON.stringify(fieldsObject)));
  }
}
function send(fieldObject, trackerNames) {
  _gaCommand(trackerNames, "send", fieldObject);
  if (_debug) {
    log("called ga('send', fieldObject);");
    log("with fieldObject: ".concat(JSON.stringify(fieldObject)));
    log("with trackers: ".concat(JSON.stringify(trackerNames)));
  }
}
function pageview(rawPath, trackerNames, title) {
  if (!rawPath) {
    warn("path is required in .pageview()");
    return;
  }
  var path = trim(rawPath);
  if (path === "") {
    warn("path cannot be an empty string in .pageview()");
    return;
  }
  var extraFields = {};
  if (title) {
    extraFields.title = title;
  }
  if (typeof ga2 === "function") {
    _gaCommand(trackerNames, "send", _objectSpread2({
      hitType: "pageview",
      page: path
    }, extraFields));
    if (_debug) {
      log("called ga('send', 'pageview', path);");
      var extraLog = "";
      if (title) {
        extraLog = " and title: ".concat(title);
      }
      log("with path: ".concat(path).concat(extraLog));
    }
  }
}
function modalview(rawModalName, trackerNames) {
  if (!rawModalName) {
    warn("modalName is required in .modalview(modalName)");
    return;
  }
  var modalName = removeLeadingSlash(trim(rawModalName));
  if (modalName === "") {
    warn("modalName cannot be an empty string or a single / in .modalview()");
    return;
  }
  if (typeof ga2 === "function") {
    var path = "/modal/".concat(modalName);
    _gaCommand(trackerNames, "send", "pageview", path);
    if (_debug) {
      log("called ga('send', 'pageview', path);");
      log("with path: ".concat(path));
    }
  }
}
function timing() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, category = _ref.category, variable = _ref.variable, value = _ref.value, label = _ref.label;
  var trackerNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  if (typeof ga2 === "function") {
    if (!category || !variable || typeof value !== "number") {
      warn("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number");
      return;
    }
    var fieldObject = {
      hitType: "timing",
      timingCategory: _format(category),
      timingVar: _format(variable),
      timingValue: value
    };
    if (label) {
      fieldObject.timingLabel = _format(label);
    }
    send(fieldObject, trackerNames);
  }
}
function event() {
  var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, category = _ref2.category, action = _ref2.action, label = _ref2.label, value = _ref2.value, nonInteraction = _ref2.nonInteraction, transport = _ref2.transport, args = _objectWithoutProperties2(_ref2, _excluded2);
  var trackerNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  if (typeof ga2 === "function") {
    if (!category || !action) {
      warn("args.category AND args.action are required in event()");
      return;
    }
    var fieldObject = {
      hitType: "event",
      eventCategory: _format(category),
      eventAction: _format(action)
    };
    if (label) {
      fieldObject.eventLabel = _format(label);
    }
    if (typeof value !== "undefined") {
      if (typeof value !== "number") {
        warn("Expected `args.value` arg to be a Number.");
      } else {
        fieldObject.eventValue = value;
      }
    }
    if (typeof nonInteraction !== "undefined") {
      if (typeof nonInteraction !== "boolean") {
        warn("`args.nonInteraction` must be a boolean.");
      } else {
        fieldObject.nonInteraction = nonInteraction;
      }
    }
    if (typeof transport !== "undefined") {
      if (typeof transport !== "string") {
        warn("`args.transport` must be a string.");
      } else {
        if (["beacon", "xhr", "image"].indexOf(transport) === -1) {
          warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`");
        }
        fieldObject.transport = transport;
      }
    }
    Object.keys(args).filter(function(key) {
      return key.substr(0, "dimension".length) === "dimension";
    }).forEach(function(key) {
      fieldObject[key] = args[key];
    });
    Object.keys(args).filter(function(key) {
      return key.substr(0, "metric".length) === "metric";
    }).forEach(function(key) {
      fieldObject[key] = args[key];
    });
    send(fieldObject, trackerNames);
  }
}
function exception(_ref3, trackerNames) {
  var description = _ref3.description, fatal = _ref3.fatal;
  if (typeof ga2 === "function") {
    var fieldObject = {
      hitType: "exception"
    };
    if (description) {
      fieldObject.exDescription = _format(description);
    }
    if (typeof fatal !== "undefined") {
      if (typeof fatal !== "boolean") {
        warn("`args.fatal` must be a boolean.");
      } else {
        fieldObject.exFatal = fatal;
      }
    }
    send(fieldObject, trackerNames);
  }
}
var plugin = {
  /**
   * require:
   * GA requires a plugin
   * @param name {String} e.g. 'ecommerce' or 'myplugin'
   * @param options {Object} optional e.g {path: '/log', debug: true}
   * @param trackerName {String} optional e.g 'trackerName'
   */
  require: function require2(rawName, options, trackerName) {
    if (typeof ga2 === "function") {
      if (!rawName) {
        warn("`name` is required in .require()");
        return;
      }
      var name = trim(rawName);
      if (name === "") {
        warn("`name` cannot be an empty string in .require()");
        return;
      }
      var requireString = trackerName ? "".concat(trackerName, ".require") : "require";
      if (options) {
        if (_typeof2(options) !== "object") {
          warn("Expected `options` arg to be an Object");
          return;
        }
        if (Object.keys(options).length === 0) {
          warn("Empty `options` given to .require()");
        }
        ga2(requireString, name, options);
        if (_debug) {
          log("called ga('require', '".concat(name, "', ").concat(JSON.stringify(options)));
        }
      } else {
        ga2(requireString, name);
        if (_debug) {
          log("called ga('require', '".concat(name, "');"));
        }
      }
    }
  },
  /**
   * execute:
   * GA execute action for plugin
   * Takes variable number of arguments
   * @param pluginName {String} e.g. 'ecommerce' or 'myplugin'
   * @param action {String} e.g. 'addItem' or 'myCustomAction'
   * @param actionType {String} optional e.g. 'detail'
   * @param payload {Object} optional e.g { id: '1x5e', name : 'My product to track' }
   */
  execute: function execute(pluginName, action) {
    var payload;
    var actionType;
    for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }
    if (args.length === 1) {
      payload = args[0];
    } else {
      actionType = args[0];
      payload = args[1];
    }
    if (typeof ga2 === "function") {
      if (typeof pluginName !== "string") {
        warn("Expected `pluginName` arg to be a String.");
      } else if (typeof action !== "string") {
        warn("Expected `action` arg to be a String.");
      } else {
        var command = "".concat(pluginName, ":").concat(action);
        payload = payload || null;
        if (actionType && payload) {
          ga2(command, actionType, payload);
          if (_debug) {
            log("called ga('".concat(command, "');"));
            log('actionType: "'.concat(actionType, '" with payload: ').concat(JSON.stringify(payload)));
          }
        } else if (payload) {
          ga2(command, payload);
          if (_debug) {
            log("called ga('".concat(command, "');"));
            log("with payload: ".concat(JSON.stringify(payload)));
          }
        } else {
          ga2(command);
          if (_debug) {
            log("called ga('".concat(command, "');"));
          }
        }
      }
    }
  }
};
function outboundLink(args, hitCallback, trackerNames) {
  if (typeof hitCallback !== "function") {
    warn("hitCallback function is required");
    return;
  }
  if (typeof ga2 === "function") {
    if (!args || !args.label) {
      warn("args.label is required in outboundLink()");
      return;
    }
    var fieldObject = {
      hitType: "event",
      eventCategory: "Outbound",
      eventAction: "Click",
      eventLabel: _format(args.label)
    };
    var safetyCallbackCalled = false;
    var safetyCallback = function safetyCallback2() {
      safetyCallbackCalled = true;
      hitCallback();
    };
    var t = setTimeout(safetyCallback, 250);
    var clearableCallbackForGA = function clearableCallbackForGA2() {
      clearTimeout(t);
      if (!safetyCallbackCalled) {
        hitCallback();
      }
    };
    fieldObject.hitCallback = clearableCallbackForGA;
    send(fieldObject, trackerNames);
  } else {
    setTimeout(hitCallback, 0);
  }
}
var testModeAPI = testModeAPI_default;
var core_default = {
  initialize,
  ga: ga2,
  set,
  send,
  pageview,
  modalview,
  timing,
  event,
  exception,
  plugin,
  outboundLink,
  testModeAPI: testModeAPI_default
};

// node_modules/react-ga/dist/esm/index.js
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys3(Object(source), true).forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
OutboundLink.origTrackLink = OutboundLink.trackLink;
OutboundLink.trackLink = outboundLink;
var OutboundLink2 = OutboundLink;
var esm_default = _objectSpread3(_objectSpread3({}, core_exports), {}, {
  OutboundLink: OutboundLink2
});

export {
  ImageCarousel_default,
  ProductCarousel_default,
  YouTubeVideo_default,
  esm_default
};
//# sourceMappingURL=/build/_shared/chunk-B2SFPE2R.js.map
