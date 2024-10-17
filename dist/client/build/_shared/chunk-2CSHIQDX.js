import {
  require_dist
} from "/build/_shared/chunk-XBL5C6DB.js";
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
  Q
} from "/build/_shared/chunk-OHHF25P7.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
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
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_1.jpg?v=1715767477",
        url: "/collections/cult-accessories"
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
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Hero_Banners_1.jpg?v=1715767503",
        url: "/collections/cult-accessories"
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
var import_react_ga4 = __toESM(require_dist());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var TRACKING_ID = "G-T3JX7QEBFV";
import_react_ga4.default.initialize(TRACKING_ID);
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
    let per = (compareAtPrice - price) / compareAtPrice * 100;
    return Math.trunc(per);
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
  const getCurrentLine = (v_id) => {
    const line = [{ merchandiseId: v_id, quantity: 1 }];
    return line;
  };
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
            lineNumber: 62,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 59,
        columnNumber: 7
      },
      this
    );
  }
  const cartAct = () => {
    import_react_ga4.default.event({
      hitType: "BuyNow",
      category: "Cart Action",
      action: "Click",
      label: "platform"
    });
    window.location.href = window.location.href + "#cart-aside";
  };
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
            lineNumber: 87,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 83,
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
      lineNumber: 101,
      columnNumber: 15
    }, this),
    prevArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SamplePrevArrow, {}, void 0, false, {
      fileName: "app/components/ProductCarousel.jsx",
      lineNumber: 102,
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
          lineNumber: 140,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "product_info", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-lg font-semibold mt-2 text-center min-h-[50px] xs:min-h-[85px] sm:min-h-[50px]", children: product.node.title }, void 0, false, {
          fileName: "app/components/ProductCarousel.jsx",
          lineNumber: 146,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-row justify-center gap-1 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "font-bold m-auto flex  text-center text-sm xs:text-sm sm:text-xl", children: [
            "\u20B9",
            Math.trunc(product.node.priceRange.minVariantPrice.amount)
          ] }, void 0, true, {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 151,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 150,
            columnNumber: 25
          }, this),
          product.node.variants.edges[0].node.compareAtPrice?.amount && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-2 line-through opacity-50 text-sm xs:text-sm sm:text-xl", children: [
              "\u20B9",
              Math.trunc(product.node.variants.edges[0].node.compareAtPrice?.amount)
            ] }, void 0, true, {
              fileName: "app/components/ProductCarousel.jsx",
              lineNumber: 157,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("b", { className: "ml-2 text-red-500 text-sm xs:text-sm sm:text-xl", children: [
              " (",
              calculatePer(product.node.priceRange.minVariantPrice.amount, product.node.variants.edges[0].node.compareAtPrice?.amount),
              " % Off) "
            ] }, void 0, true, {
              fileName: "app/components/ProductCarousel.jsx",
              lineNumber: 160,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 156,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ProductCarousel.jsx",
          lineNumber: 149,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 145,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductCarousel.jsx",
      lineNumber: 139,
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
                lineNumber: 175,
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
                lineNumber: 180,
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
          lineNumber: 169,
          columnNumber: 21
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 168,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { "d-line": index, className: "w-[75%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        Q,
        {
          route: "/cart",
          inputs: { lines: getCurrentLine(product.node.variants.edges[0].node.id) },
          action: Q.ACTIONS.LinesAdd,
          className: "w-[83%] ",
          children: (fetcher) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "button",
            {
              disabled: !product.node.variants || !product.node.variants.edges[0].node.availableForSale,
              className: "w-[100%] h-11 bg-black hover:bg-blue-700 text-white font-bold py-1 rounded-lg inline-block home-product",
              type: "submit",
              onClick: () => cartAct(),
              children: product.node.variants && product.node.variants.edges[0].node.availableForSale ? "ADD TO CART" : "Sold out"
            },
            void 0,
            false,
            {
              fileName: "app/components/ProductCarousel.jsx",
              lineNumber: 197,
              columnNumber: 27
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 196,
            columnNumber: 25
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/ProductCarousel.jsx",
          lineNumber: 189,
          columnNumber: 21
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 188,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductCarousel.jsx",
      lineNumber: 167,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ProductCarousel.jsx",
    lineNumber: 138,
    columnNumber: 17
  }, this) }, `product_${product.node.id}`, false, {
    fileName: "app/components/ProductCarousel.jsx",
    lineNumber: 137,
    columnNumber: 13
  }, this)) }, void 0, false, {
    fileName: "app/components/ProductCarousel.jsx",
    lineNumber: 135,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/ProductCarousel.jsx",
    lineNumber: 134,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ProductCarousel.jsx",
    lineNumber: 133,
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

export {
  ImageCarousel_default,
  ProductCarousel_default,
  YouTubeVideo_default
};
//# sourceMappingURL=/build/_shared/chunk-2CSHIQDX.js.map
