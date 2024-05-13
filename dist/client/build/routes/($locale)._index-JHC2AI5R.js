import {
  ImageCarousel_default,
  YouTubeVideo_default
} from "/build/_shared/chunk-UTIKAAM3.js";
import {
  ProductCarousel_default,
  require_lib
} from "/build/_shared/chunk-XO3LOQFD.js";
import "/build/_shared/chunk-AQMJZ442.js";
import {
  require_react_responsive
} from "/build/_shared/chunk-D3AIAV2V.js";
import "/build/_shared/chunk-BSZVYZCA.js";
import "/build/_shared/chunk-VY5OJHMS.js";
import {
  Await,
  NavLink,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale)._index.jsx
var import_react4 = __toESM(require_react());

// app/components/GiftingCollection.jsx
var import_react = __toESM(require_react());
var import_react_responsive = __toESM(require_react_responsive());
var import_react_slick = __toESM(require_lib());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var GiftingCollection = ({ collections, title }) => {
  let productsToShow = [];
  const [startIndex, setStartIndex] = (0, import_react.useState)(0);
  const isLargeScreen = (0, import_react_responsive.useMediaQuery)({ minWidth: 1024 });
  const goToCollection = (url_path) => {
    window.location.href = url_path;
  };
  console.log("isLarge ::", isLargeScreen);
  let totalLen = collections.length;
  const settings = {
    centerMode: isLargeScreen ? false : true,
    dots: totalLen > 3 ? true : false,
    infinite: false,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "recommended_section w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center font-semibold mb-[15px]", children: [
      title,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-light", children: " Perfect for Any Occasion " }, void 0, false, {
        fileName: "app/components/GiftingCollection.jsx",
        lineNumber: 56,
        columnNumber: 3
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/GiftingCollection.jsx",
      lineNumber: 54,
      columnNumber: 1
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_slick.default, { ...settings, children: collections.map((coll, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          onClick: () => goToCollection(`/collections/${coll.handle}`),
          src: coll.image.url,
          alt: coll.title,
          className: "lg:w-full lg:h-auto rounded-lg w:[100%] sm:w-[375px] sm:w-[250px] cursor"
        },
        void 0,
        false,
        {
          fileName: "app/components/GiftingCollection.jsx",
          lineNumber: 64,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/GiftingCollection.jsx",
        lineNumber: 63,
        columnNumber: 13
      }, this) }, `gift_${index}`, false, {
        fileName: "app/components/GiftingCollection.jsx",
        lineNumber: 62,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/GiftingCollection.jsx",
      lineNumber: 60,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/components/GiftingCollection.jsx",
      lineNumber: 59,
      columnNumber: 1
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/GiftingCollection.jsx",
    lineNumber: 53,
    columnNumber: 1
  }, this);
};
var GiftingCollection_default = GiftingCollection;

// app/routes/($locale)._index.jsx
var import_react_responsive3 = __toESM(require_react_responsive());

// app/components/BlogCorousel.jsx
var import_react2 = __toESM(require_react());
var import_react_responsive2 = __toESM(require_react_responsive());
var import_react_slick2 = __toESM(require_lib());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var MobileProductCorousel = ({ products, title, settings }) => {
  const [startIndex, setStartIndex] = (0, import_react2.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full max-w-screen-2xl mx-auto px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-center mt-0 lg:text-[28px] text-[20px]", children: title }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_slick2.default, { ...settings, children: products.nodes.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-2 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: `/blogs/${product.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        src: `${product.articles.edges[0].node.image.url}`,
        alt: product.title,
        className: "mst-card lg:w-full lg:h-auto lg:px-5 sm:mx-3 w-[320px]"
      },
      void 0,
      false,
      {
        fileName: "app/components/BlogCorousel.jsx",
        lineNumber: 20,
        columnNumber: 15
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 19,
      columnNumber: 15
    }, this) }, `blog_${index}`, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 18,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
};
var DesktopCorousel2 = ({ products, title, settings }) => {
  const [startIndex, setStartIndex] = (0, import_react2.useState)(0);
  const productsToShow = products.nodes.slice(startIndex, startIndex + 3);
  const isMobile = (0, import_react_responsive2.useMediaQuery)({ maxWidth: 640 });
  const nextProducts = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % products.length);
  };
  settings.infinite = false;
  const prevProducts = () => {
    setStartIndex(
      (prevIndex) => prevIndex === 0 ? products.length - products.length % 3 : prevIndex - 1
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full max-w-screen-2xl mx-auto px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-center", children: title }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 68,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_slick2.default, { ...settings, children: products.nodes.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-2 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: `/blogs/${product.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        src: `${product.articles.edges[0].node.image.url}`,
        alt: product.title,
        className: "mst-card lg:w-full lg:h-auto"
      },
      void 0,
      false,
      {
        fileName: "app/components/BlogCorousel.jsx",
        lineNumber: 73,
        columnNumber: 19
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 72,
      columnNumber: 19
    }, this) }, `blog_${index}`, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 71,
      columnNumber: 17
    }, this)) }, void 0, false, {
      fileName: "app/components/BlogCorousel.jsx",
      lineNumber: 69,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 67,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 66,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
};
var BlogCorousel = ({ collections, title, isSmall }) => {
  let totalLen = collections.nodes.length;
  const settings = {
    centerMode: isSmall ? true : false,
    dots: totalLen > 3 ? true : false,
    infinite: false,
    speed: 500,
    initialSlide: isSmall ? 1 : 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: isSmall ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MobileProductCorousel, { products: collections, settings, title }, void 0, false, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 132,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DesktopCorousel2, { products: collections, settings, title }, void 0, false, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 136,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/BlogCorousel.jsx",
    lineNumber: 130,
    columnNumber: 5
  }, this);
};
var BlogCorousel_default = BlogCorousel;

// app/components/Testimonials.jsx
var import_react_slick3 = __toESM(require_lib());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var Testimonials = ({ page, isSmall }) => {
  const context = page.body.split("<p>split_code</p>");
  let totalLen = context.length;
  const settings = {
    centerMode: isSmall ? true : false,
    dots: totalLen > 3 ? true : false,
    infinite: false,
    speed: 500,
    initialSlide: isSmall ? 1 : 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "wrapper w-full text-center mb-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: " Testimonials " }, void 0, false, {
      fileName: "app/components/Testimonials.jsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_slick3.default, { ...settings, children: context.map((content, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "flex gap-4 justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "shadow-xl p-4 min-h-[220px]", dangerouslySetInnerHTML: { __html: content } }, void 0, false, {
        fileName: "app/components/Testimonials.jsx",
        lineNumber: 51,
        columnNumber: 21
      }, this) }, `testimonials_${index}`, false, {
        fileName: "app/components/Testimonials.jsx",
        lineNumber: 50,
        columnNumber: 24
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/Testimonials.jsx",
      lineNumber: 48,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Testimonials.jsx",
      lineNumber: 47,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Testimonials.jsx",
    lineNumber: 45,
    columnNumber: 9
  }, this);
};
var Testimonials_default = Testimonials;

// app/components/LooksComp.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var LooksComp = ({ looks }) => {
  var products = looks.length ? looks[0].products.edges : [];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "looks", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "uppercase text-center font-semibold my-[15px]", children: " L.I.T : Looks In Trend " }, void 0, false, {
      fileName: "app/components/LooksComp.jsx",
      lineNumber: 5,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 sm:grid-cols-4 md:px-4 lg:px-24", children: products.map((product) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: product?.node.images.edges[0].node.url }, void 0, false, {
          fileName: "app/components/LooksComp.jsx",
          lineNumber: 11,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "looks_tittle absolute bottom-2 text-center", children: [
          " ",
          product?.node.title,
          " "
        ] }, void 0, true, {
          fileName: "app/components/LooksComp.jsx",
          lineNumber: 12,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/LooksComp.jsx",
        lineNumber: 10,
        columnNumber: 29
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/LooksComp.jsx",
      lineNumber: 6,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/LooksComp.jsx",
    lineNumber: 4,
    columnNumber: 9
  }, this);
};
var LooksComp_default = LooksComp;

// app/routes/($locale)._index.jsx
var import_react_slick4 = __toESM(require_lib());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Hydrogen | Home" }];
};
function Homepage() {
  const noImg = "https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_600x600.gif";
  const data = useLoaderData();
  const { header, page: testimonialPage } = data;
  var menus = header.menu.items;
  var collectionArray = menus.filter((item) => item.title !== "Home");
  const isLargeScreen = (0, import_react_responsive3.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive3.useMediaQuery)({ maxWidth: 640 });
  var imageSrc = [];
  if (!isSmall) {
    imageSrc = [
      "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_1.jpg?v=1713342696",
      "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_3.jpg?v=1713342905",
      "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_2.jpg?v=1713342905",
      "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/pro_studio__banner_5_opt_2.jpg?v=1714388254"
    ];
  } else {
    imageSrc = [
      "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Hero_Banners_1.jpg?v=1713353171",
      "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Hero_Banners_2.jpg?v=1713353171",
      "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Hero_Banners_4.jpg?v=1713353171",
      "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/pro_studio_mobile_banner_3_700_x_470.jpg?v=1714388254"
    ];
  }
  var GiftCollections = [];
  var ReviewCollection = [];
  var BuildYourOwnColl = [];
  var ThirdHeroCollection = [];
  collectionArray.map((col, index) => {
    let collNodes = data.collections.nodes;
    collectionArray[index]["image"] = { "url": noImg };
    collNodes.map((item) => {
      if (item.title.trim() === col.title.trim()) {
        let isImg = item.image?.url;
        collectionArray[index]["handle"] = col.title.toLowerCase();
        collectionArray[index]["image"] = { "url": isImg ? isImg : noImg };
      }
      ;
    });
  });
  var looks = [];
  data.collectionProducts.nodes.forEach((col) => {
    if (col.metafields[0] != null && col.metafields[0].value == "true") {
      ReviewCollection.push(col);
    }
    if (col.title === "Lookbooks") {
      looks.push(col);
    }
    if (col.title == "Build Your Own Kit") {
      BuildYourOwnColl.push(col);
    }
    if (col.title == "3rd Hero Collection") {
      ThirdHeroCollection.push(col);
    }
    if (col.title == "Gift Under 500" || col.title == "Gift Under 1000" || col.title == "Gifts Under 2000") {
      GiftCollections.push(col);
    }
  });
  BuildYourOwnColl = BuildYourOwnColl[0]?.products.edges;
  ThirdHeroCollection = ThirdHeroCollection[0].products;
  GiftCollections = GiftCollections;
  function getPath(url_path) {
    let url = new URL(url_path);
    let path = url.pathname;
    return path;
  }
  const goToCollection = (url_path) => {
    window.location.href = url_path;
  };
  let totalLen = collectionCult.length;
  const settings = {
    centerMode: isSmall ? true : false,
    dots: totalLen > 3 ? true : false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3e3,
    initialSlide: isSmall ? 1 : 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
          autoplaySpeed: 3e3,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          autoplaySpeed: 3e3,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true
        }
      },
      {
        breakpoint: 520,
        settings: {
          autoplay: true,
          autoplaySpeed: 3e3,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "home", children: [
    isSmall ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "collectionContent lg:hidden block sm:mt-4 overflow-auto ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "inline-flex gap-4", children: collectionArrayStatic?.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "div",
      {
        className: " col-item sm:w-auto  rounded-lg hover:shadow-md cursor-pointer",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NavLink, { to: `/collections/${item.url}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "img",
            {
              width: 80,
              height: 80,
              alt: item.collectionname,
              src: item.collectionimageurl
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale)._index.jsx",
              lineNumber: 189,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/($locale)._index.jsx",
            lineNumber: 188,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/($locale)._index.jsx",
            lineNumber: 187,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "collectionname  sm:text-lg text-[12px] font-semibold  text-center px-[15px] pb-[12px]  pt-[5px]", children: item.collectionname }, void 0, false, {
            fileName: "app/routes/($locale)._index.jsx",
            lineNumber: 198,
            columnNumber: 15
          }, this)
        ]
      },
      index,
      true,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 183,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 181,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 180,
      columnNumber: 9
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ImageCarousel_default, { isSmall, images: imageSrc }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 210,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 209,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      RecommendedProducts,
      {
        products: data.collectionProducts.nodes[0].products,
        title: "CULT FAVES"
      },
      data.collectionProducts.nodes[0].id,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 212,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "slider-container mb-8 max-w-screen-xl mx-auto lg:px-16 sm:px-4 md:px-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-center lg:text=[28px] text-[20px] mt-[15px]", children: "CHOOSE YOUR CULT" }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 218,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_slick4.default, { ...settings, children: collectionCult.map((coll, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "px-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "img",
          {
            onClick: () => goToCollection(`/collections/${coll.handle}`),
            src: `${coll.url}`,
            alt: coll.title,
            className: "lg:w-full lg:h-auto rounded-2xl w:[100%] sm:w-[375px] sm:w-[250px] cursor"
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale)._index.jsx",
            lineNumber: 225,
            columnNumber: 19
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/($locale)._index.jsx",
          lineNumber: 224,
          columnNumber: 17
        }, this) }, `cult_choose_${index}`, false, {
          fileName: "app/routes/($locale)._index.jsx",
          lineNumber: 223,
          columnNumber: 22
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 221,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 217,
      columnNumber: 7
    }, this),
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "/collections/daily-essentials", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "my-[15px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "img",
      {
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Daily_Essentials_banner.jpg?v=1709971600",
        className: "w-[100%] m-auto"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 242,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 241,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 240,
      columnNumber: 10
    }, this),
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "/collections/daily-essentials", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "my-[15px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "img",
      {
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_everyday_style.jpg?v=1712816125",
        className: "w-[100%] m-auto rounded-2xl"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 252,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 251,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 250,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      RecommendedProducts,
      {
        products: ThirdHeroCollection,
        title: "DAILY MUST-HAVES"
      },
      ThirdHeroCollection.edges[0].node.id,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 260,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(GiftingCollection_default, { collections: GiftCollections, title: "Glamorous Gift Picks" }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 265,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(YouTubeVideo_default, {}, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 267,
      columnNumber: 7
    }, this),
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "my-[15px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "img",
      {
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Lookbook_Banner.jpg?v=1709971241",
        className: "w-[100%] m-auto"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 272,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 271,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 270,
      columnNumber: 10
    }, this),
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "my-[15px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "img",
      {
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_look_book.jpg?v=1712816125",
        className: "w-[100%] m-auto rounded-2xl"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 282,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 281,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 280,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LooksComp_default, { looks }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 290,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "/pages/about-us", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: !isSmall ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "img",
      {
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/About_US.jpg?v=1712993514",
        className: "w-[100%] m-auto"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 295,
        columnNumber: 11
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "img",
      {
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_about_us.jpg?v=1713353871",
        className: "w-[100%] m-auto rounded-2xl"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 300,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 293,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 292,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 291,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BlogCorousel_default, { isSmall, collections: data.blogs, title: "CULT CHAPTERS" }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 312,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 311,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Testimonials_default, { page: testimonialPage, isSmall }, void 0, false, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 315,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 178,
    columnNumber: 5
  }, this);
}
function RecommendedProducts({ products, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-center font-semibold my-[15px]", children: [
      title,
      " "
    ] }, void 0, true, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 340,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 342,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Await, { resolve: products, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ProductCarousel_default, { products }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 345,
        columnNumber: 14
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 343,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 342,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale)._index.jsx",
        lineNumber: 348,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale)._index.jsx",
      lineNumber: 341,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale)._index.jsx",
    lineNumber: 339,
    columnNumber: 5
  }, this);
}
var MENU_FRAGMENT = `#graphql
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
var HEADER_QUERY = `#graphql
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
var collectionCult = [
  {
    title: "Way 2 Slay",
    handle: "way-2-slay-mjk",
    url: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Way_2_Slay-01.jpg?v=1713511899"
  },
  {
    title: "Rizz & Roll MJK",
    handle: "rizz-roll-mjk",
    url: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/RIzz_and_Roll-01.jpg?v=1713511899"
  },
  {
    title: "Pro Studio MJK",
    handle: "pro-studio-mjk",
    url: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Pro-studio_1-01.jpg?v=1713511899"
  }
];
var collectionArrayStatic = [
  {
    collectionname: "Face",
    url: "face",
    collectionimageurl: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Face-Icon-Mobile.jpg?v=1713183444"
  },
  {
    collectionname: "Lips",
    url: "lips",
    collectionimageurl: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Lips-icon-mobile.jpg?v=1713183444"
  },
  {
    collectionname: "Eyes",
    url: "eyes",
    collectionimageurl: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Kajal-Icon-Mobile.jpg?v=1713183444"
  },
  {
    collectionname: "Nail",
    url: "nails",
    collectionimageurl: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Nail_Categories-02.jpg?v=1713183501"
  }
];
export {
  Homepage as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale)._index-JHC2AI5R.js.map
