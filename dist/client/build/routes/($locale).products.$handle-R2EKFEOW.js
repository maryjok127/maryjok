import {
  FacebookIcon$1,
  FacebookShareButton$1,
  WhatsappIcon$1,
  WhatsappShareButton$1
} from "/build/_shared/chunk-G5T6MYWF.js";
import {
  ProductsCorousel_default
} from "/build/_shared/chunk-QN7RQRAI.js";
import {
  c,
  d,
  l,
  p
} from "/build/_shared/chunk-DGST5VAI.js";
import "/build/_shared/chunk-5Q66IB7E.js";
import "/build/_shared/chunk-D3AIAV2V.js";
import "/build/_shared/chunk-BSZVYZCA.js";
import {
  Go,
  Mn,
  Money,
  Q
} from "/build/_shared/chunk-OHHF25P7.js";
import {
  Await,
  Link,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).products.$handle.jsx
var import_react = __toESM(require_react());
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return Go(data.seo);
};
function Product() {
  const { product, variants, productsreturn, recommendedProducts } = useLoaderData();
  const { selectedVariant } = product;
  const [activeVariant, setActiveVar] = (0, import_react3.useState)([]);
  const shareUrl = `https://15f63f.myshopify.com/products/${product.handle}`;
  const [socialCount, setSocialCount] = (0, import_react3.useState)();
  (0, import_react.useEffect)(() => {
    setActiveVar(selectedVariant);
  }, [selectedVariant, product]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      ProductMain,
      {
        selectedVariant: activeVariant,
        product,
        variants,
        shareUrl,
        recommendedProducts
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 139,
        columnNumber: 7
      },
      this
    ),
    productsreturn && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductsCorousel_default, { products: productsreturn }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 146,
      columnNumber: 26
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 138,
    columnNumber: 5
  }, this);
}
function ProductImage({ image, activeImg, setActiveImage, product }) {
  const ImageSrc = [];
  product.images.edges.forEach((item) => {
    ImageSrc.push(item.node.url);
  });
  const [images, setImages] = (0, import_react3.useState)(ImageSrc);
  if (!image) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "" }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 162,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:grid flex flex-col-reverse lg:grid-cols-[20%_80%] gap-2 lg:gap-0 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex  lg:flex-col  justify-between lg:h-[325px] overflow-x-auto gap-[5px]", children: product.images.edges && product.images.edges.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: images[index],
        alt: "",
        className: "w-24 h-24 rounded-md cursor-pointer product-image-caro ",
        onClick: () => setActiveImage(images[index])
      },
      `prod_${index}`,
      false,
      {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 170,
        columnNumber: 15
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 167,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: activeImg,
        alt: "",
        className: "w-[90%] border border-[#e5e5e5] h-full aspect-square object-cover rounded-xl p-[10px] border-1 border-[#e5e5e5] hover:scale-x-125 md:hover:scale-125 transition duration-300 cursor-pointer mst-card"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 179,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 166,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 165,
    columnNumber: 5
  }, this);
}
function ProductMain({ selectedVariant, product, shareUrl, variants, recommendedProducts }) {
  const ImageSrc = [];
  product.images.edges.forEach((item) => {
    ImageSrc.push(item.node.url);
  });
  const [images, setImages] = (0, import_react3.useState)(ImageSrc);
  const expaction = product.metafields[0]?.value;
  const key_ingredients = product.metafields[1]?.value;
  const How_To_use = product.metafields[2]?.value;
  const who_can_use = product.metafields[3]?.value;
  const why_us = product.metafields[4]?.value;
  const ingredient = product.metafields[5]?.value;
  const [activeTab, setActiveTab] = (0, import_react3.useState)("Ingredient");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [activeImg, setActiveImage] = (0, import_react3.useState)(images[0]);
  const [moreText, setMoreText] = (0, import_react3.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex m-[2%] gap-2 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "mst-color", to: "/", children: "Home" }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 213,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/next.png", alt: "next", width: 20, height: 20 }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 214,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold mst-color", children: "Product page" }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 215,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 212,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "final-product mst-card-shadow shadow-lg p-4 flex flex-col justify-between lg:flex-row lg:gap-8 lg:ml-8 lg:mr-8 items-start relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-6 lg:w-2/4 flex-wrap items-center lg:sticky top-[240px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        ProductImage,
        {
          image: selectedVariant?.image,
          product,
          activeImg,
          setActiveImage
        },
        void 0,
        false,
        {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 226,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 218,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col lg:w-3/4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mt-0 mb-0", children: product.title }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 236,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex py-2 px-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            c,
            {
              productId: product.id,
              okendoStarRatingSnippet: product.okendoStarRatingSnippet
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 240,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 239,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductPrice, { selectedVariant }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 245,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 235,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          import_react.Suspense,
          {
            fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              ProductForm,
              {
                product,
                selectedVariant,
                variants: [],
                activeImg,
                setActiveImage
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).products.$handle.jsx",
                lineNumber: 250,
                columnNumber: 17
              },
              this
            ),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Await,
              {
                errorElement: "There was a problem loading product variants",
                resolve: variants,
                children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  ProductForm,
                  {
                    product,
                    selectedVariant,
                    activeImg,
                    setActiveImage,
                    variants: data.product?.variants.nodes || []
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/($locale).products.$handle.jsx",
                    lineNumber: 264,
                    columnNumber: 19
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).products.$handle.jsx",
                lineNumber: 259,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 248,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 247,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-4 gap-4 p-4 border-dotted mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Vegetarian.jpg?v=1712825726" }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 276,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Cruelty-Free.jpg?v=1712825726" }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 277,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/High_Quality.jpg?v=1712825727" }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 278,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Suitable_for_all_Skin_Types.jpg?v=1715852367" }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 279,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 275,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-[10px]", children: "Product Description" }, void 0, false, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 281,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "shadow-p relative p-4 sm:p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product_desc", dangerouslySetInnerHTML: { __html: product.descriptionHtml } }, void 0, false, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 283,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 282,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          d,
          {
            productId: product.id,
            okendoReviewsSnippet: product.okendoReviewsSnippet
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 294,
            columnNumber: 11
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 293,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 234,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute cursor-pointer group flex flex-col items-center top-[-36px] lg:top-[15px] right-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            className: "sharelogo mst-color",
            src: "/share.png",
            width: 22,
            height: 22,
            alt: "share"
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 301,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-semibold ", children: "Share" }, void 0, false, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 308,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden group-hover:block", style: { background: "#0000", height: "100vh", width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2 m-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            FacebookShareButton$1,
            {
              url: shareUrl,
              quote: "Title",
              hashtag: "#product...",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FacebookIcon$1, { size: 25, round: true }, void 0, false, {
                fileName: "app/routes/($locale).products.$handle.jsx",
                lineNumber: 316,
                columnNumber: 11
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 311,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            WhatsappShareButton$1,
            {
              url: shareUrl,
              quote: "Title",
              hashtag: "#product...",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsappIcon$1, { size: 25, round: true }, void 0, false, {
                  fileName: "app/routes/($locale).products.$handle.jsx",
                  lineNumber: 324,
                  columnNumber: 11
                }, this),
                " "
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 319,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 310,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 309,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 300,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 217,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-[1320px] p-[10px] m-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-center lg:text-2xl mt-[4%] mb-[2%] uppercase", children: "Key Features" }, void 0, false, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 331,
          columnNumber: 11
        }, this),
        expaction && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "expect",
            dangerouslySetInnerHTML: { __html: expaction }
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 335,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 330,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto mt-5 p-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "lg:text-3xl font-semibold mb-4 text-center mt-[4%] mb-[2%] uppercase", children: "Product Information" }, void 0, false, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 342,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 sm:grid-cols-4 overflow-y-auto lg:justify-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: `cursor-pointer py-2 px-2 border-b-4 uppercase whitespace-nowrap ${activeTab === "Ingredient" ? "border-active" : ""}`,
              onClick: () => handleTabClick("Ingredient"),
              style: { border: "1px solid #e5e5e5" },
              children: "Ingredients"
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 346,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              style: { border: "1px solid #e5e5e5" },
              className: `cursor-pointer py-2 px-2 border-b-4 uppercase whitespace-nowrap ${activeTab === "How to Use" ? "border-active" : ""}`,
              onClick: () => handleTabClick("How to Use"),
              children: "How to Use"
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 355,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: `cursor-pointer py-2 px-2 border-b-4 uppercase whitespace-nowrap ${activeTab === "Who Can Use" ? "border-active" : ""}`,
              onClick: () => handleTabClick("Who Can Use"),
              style: { border: "1px solid #e5e5e5" },
              children: "Who Can Use"
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 365,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: `cursor-pointer py-2 px-2 border-b-4 uppercase whitespace-nowrap ${activeTab === "Why us" ? "border-active" : ""}`,
              onClick: () => handleTabClick("Why us"),
              style: { border: "1px solid #e5e5e5" },
              children: "Why us"
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 374,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 345,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
          activeTab === "Key Ingredients" && key_ingredients && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-y-auto overflow-x-auto", children: key_ingredients && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "expect",
              dangerouslySetInnerHTML: { __html: key_ingredients }
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 388,
              columnNumber: 19
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 386,
            columnNumber: 15
          }, this),
          activeTab === "How to Use" && How_To_use && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "meta_info_card overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "key-ing",
              dangerouslySetInnerHTML: { __html: How_To_use }
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 397,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 396,
            columnNumber: 15
          }, this),
          activeTab === "Who Can Use" && who_can_use && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "meta_info_card overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: who_can_use } }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 405,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 404,
            columnNumber: 15
          }, this),
          activeTab === "Ingredient" && ingredient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { maxWidth: "100%" }, dangerouslySetInnerHTML: { __html: ingredient } }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 410,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 409,
            columnNumber: 15
          }, this),
          activeTab === "meta_info_card Why us" && why_us && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: why_us } }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 415,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 414,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 384,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 341,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 329,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "recommended_products", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      RecommendedProducts,
      {
        products: recommendedProducts.nodes[0].products,
        title: "Recommended Products"
      },
      recommendedProducts.nodes[0].id,
      false,
      {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 422,
        columnNumber: 7
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 421,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 210,
    columnNumber: 5
  }, this);
}
function ProductPrice({ selectedVariant }) {
  let price = Math.trunc(selectedVariant?.price?.amount);
  let compareAtPrice = Math.trunc(selectedVariant?.compareAtPrice?.amount);
  const calculatePer = () => {
    let per = (compareAtPrice - price) / compareAtPrice * 100;
    return Math.trunc(per);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-price flex gap-[10px] mb-2 text-xl", children: selectedVariant?.compareAtPrice ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-price-on-sale font-semibold flex items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "m-0", children: selectedVariant ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { withoutTrailingZeros: true, data: selectedVariant.price }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 446,
      columnNumber: 52
    }, this) : null }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 446,
      columnNumber: 13
    }, this),
    "\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("s", { className: "opacity-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { withoutTrailingZeros: true, data: selectedVariant.compareAtPrice }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 449,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 448,
      columnNumber: 13
    }, this),
    "\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { className: "text-red-500", children: [
      " (",
      calculatePer(),
      " % Off) "
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 452,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 445,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 444,
    columnNumber: 9
  }, this) : selectedVariant?.price && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "m-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { withoutTrailingZeros: true, className: "font-semibold", data: selectedVariant?.price }, void 0, false, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 457,
    columnNumber: 31
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 457,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 442,
    columnNumber: 5
  }, this);
}
function ProductForm({
  product,
  selectedVariant,
  variants,
  activeImg,
  setActiveImage
}) {
  const [pincode, setPinCode] = (0, import_react3.useState)("");
  const [serviceble, setServiceble] = (0, import_react3.useState)({ status: null, msg: "" });
  const handlePinChange = (e) => {
    setPinCode(e.target.value);
  };
  const getEstimatedDate = (edd) => {
    const date = /* @__PURE__ */ new Date();
    date.setDate(date.getDate() + edd);
    const estimatedDateDelivery = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(new Date(date));
    return estimatedDateDelivery;
  };
  const checkAvailibility = () => {
    fetch("https://appapi.shipdelight.com/generate-token?api_key=65eaba0ac23f74c2d7346965", { method: "POST" }).then((res) => res.json()).then((result) => {
      const { success, data } = result;
      if (success) {
        const headers = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${data.access_token}`
        };
        const params = {
          "pickup_pincode": 400009,
          "delivery_pincode": parseInt(pincode),
          "pay_type": "PPD",
          "service_type": "F",
          "courier_service_type": "AIR"
        };
        fetch("https://appapi.shipdelight.com/serviceability_tat", { method: "POST", headers, body: JSON.stringify(params) }).then((res) => res.json()).then((result2) => {
          const { data: data2, errors } = result2;
          if (errors?.length) {
            setServiceble({ status: false, msg: "Invalid Pincode" });
          } else {
            const isServicebale = data2?.response.delivery_pincode_serviceable;
            var estimateDate = getEstimatedDate(data2?.response.edd);
            const msg = data2?.response.delivery_pincode_serviceable ? estimateDate : "Service is not available at this location";
            setServiceble({ status: isServicebale, msg });
          }
          setTimeout(() => {
            setServiceble({ status: null, msg: "" });
          }, 5e3);
        });
      }
    });
  };
  const closeRef = (0, import_react.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Mn,
      {
        handle: product.handle,
        options: product.options,
        variants,
        children: ({ option }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          ProductOptions,
          {
            optionValues: product.options,
            option,
            activeImg,
            closeRef,
            selectedVariant,
            setActiveImage
          },
          option.name,
          false,
          {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 531,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 524,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 542,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: " Check Availibility / Estimated Delivery " }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 549,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-baseline", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "w-48 sm:w-[320px] block rounded-bl-lg rounded-tl-lg border bg-transparent bg-clip-padding  text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3]  focus:text-neutral-700 focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 mst-card", value: pincode, onChange: handlePinChange, type: "text", placeholder: "Enter your pincode" }, void 0, false, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 551,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => checkAvailibility(), className: "w-[130px] sm:w-[150px] m-4 h-11 bg-black hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg", children: " Check Now " }, void 0, false, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 552,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 550,
        columnNumber: 9
      }, this),
      serviceble.status != null && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `font-bold ${serviceble.status ? "text-green-500" : "text-orange-500"}`, children: [
        " Estimated Delivery : ",
        serviceble.msg,
        " "
      ] }, void 0, true, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 555,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 548,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      AddToCartButton,
      {
        disabled: !selectedVariant || !selectedVariant.availableForSale,
        onClick: () => {
          window.location.href = window.location.href + "#cart-aside";
        },
        lines: selectedVariant ? [
          {
            merchandiseId: selectedVariant.id,
            quantity: 1
          }
        ] : [],
        children: selectedVariant?.availableForSale ? "ADD TO CART" : "Sold out"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 558,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 523,
    columnNumber: 5
  }, this);
}
function ProductOptions({ option, optionValues, activeImg, closeRef, setActiveImage, selectedVariant }) {
  const [selectedVar, setVar] = (0, import_react3.useState)({ 0: true });
  (0, import_react.useEffect)(() => {
    setActiveImage(selectedVariant?.image?.url);
  }, [selectedVariant]);
  const setImg = (index) => {
    setVar({ [index]: true });
  };
  let swatches = optionValues[0].optionValues;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-options", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "font-semibold", children: option.name }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 593,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-options-grid items-center", children: option.values.map(({ value, isAvailable, isActive, to }, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        padding: "4px",
        border: selectedVar[index] ? "1px solid #d0715f" : "1px solid transparent",
        borderRadius: "5px"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          ref: closeRef,
          className: "product-options-item color-swatch",
          prefetch: "intent",
          replace: true,
          preventScrollReset: true,
          to,
          style: {
            backgroundColor: swatches[index]?.swatch?.color,
            width: "40px"
          },
          onClick: () => setImg(index)
        },
        option.name + value,
        false,
        {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 604,
          columnNumber: 15
        },
        this
      ) }, `p-opts_${index}`, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 597,
        columnNumber: 15
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 594,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 625,
      columnNumber: 9
    }, this)
  ] }, option.name, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 592,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 591,
    columnNumber: 5
  }, this);
}
function AddToCartButton({ analytics, children, disabled, lines, onClick }) {
  const [qty, setQty] = (0, import_react3.useState)(1);
  lines[0].quantity = qty;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Q,
    {
      route: "/cart",
      inputs: { lines },
      action: Q.ACTIONS.LinesAdd,
      children: (fetcher) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            name: "analytics",
            type: "hidden",
            value: JSON.stringify(analytics)
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).products.$handle.jsx",
            lineNumber: 644,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row items-center gap-4 mobile-cart-product", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "flex flex-row items-center py-[6px] px-[8px] rounded-xl",
              style: { border: "1px solid #000", background: "white" },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "a",
                  {
                    className: " text-xl",
                    onClick: () => {
                      if (qty != 0) {
                        setQty((prev) => prev - 1);
                      }
                    },
                    children: "-"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/($locale).products.$handle.jsx",
                    lineNumber: 654,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-4", children: qty }, void 0, false, {
                  fileName: "app/routes/($locale).products.$handle.jsx",
                  lineNumber: 664,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "a",
                  {
                    className: " text-xl",
                    onClick: () => setQty((prev) => prev + 1),
                    children: "+"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/($locale).products.$handle.jsx",
                    lineNumber: 665,
                    columnNumber: 17
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 650,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              className: "w-[150px] h-11 bg-black hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg product-cart-btn",
              type: "submit",
              onClick,
              disabled: disabled ?? fetcher.state !== "idle",
              children
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).products.$handle.jsx",
              lineNumber: 672,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/($locale).products.$handle.jsx",
          lineNumber: 649,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 643,
        columnNumber: 11
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 637,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 636,
    columnNumber: 5
  }, this);
}
function RecommendedProducts({ products, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center font-semibold my-[15px]", children: [
      title,
      " "
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 691,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 693,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: products, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductsCorousel_default, { products }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 696,
        columnNumber: 14
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 694,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 693,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).products.$handle.jsx",
        lineNumber: 699,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).products.$handle.jsx",
      lineNumber: 692,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).products.$handle.jsx",
    lineNumber: 690,
    columnNumber: 5
  }, this);
}
var PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    quantityAvailable
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`;
var PRODUCT_FRAGMENT = `#graphql
  ${l}
  ${p}
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    tags
    productType
    metafields(identifiers: [{namespace: "custom", key: "what_to_expect"},{namespace: "custom", key: "key_ingredients"}, {namespace: "custom", key: "how_to_use1"},{namespace: "custom", key: "who_can_use"},{namespace: "custom", key: "why_we"},{namespace: "custom", key: "key_ingredients"} ]){
      key
      value
    }
    images(first:10){
      edges{
        node{
          url
        }
      }
    }
    options {
      name
      values
      optionValues{
        swatch{
          color
        }
      }
    }
    
    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    variants(first: 10) {
      nodes {
        ...ProductVariant
      }
    }
    seo {
      description
      title
    }
    ...OkendoStarRatingSnippet
		...OkendoReviewsSnippet
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;
var PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
`;
var PRODUCT_VARIANTS_FRAGMENT = `#graphql
  fragment ProductVariants on Product {
    variants(first: 50) {
      nodes {
        ...ProductVariant
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;
var VARIANTS_QUERY = `#graphql
  ${PRODUCT_VARIANTS_FRAGMENT}
  query ProductVariants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...ProductVariants
    }
  }
`;
export {
  Product as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).products.$handle-R2EKFEOW.js.map
