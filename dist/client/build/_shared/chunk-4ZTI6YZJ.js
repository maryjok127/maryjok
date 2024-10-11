import {
  require_dist
} from "/build/_shared/chunk-XBL5C6DB.js";
import {
  useVariantUrl
} from "/build/_shared/chunk-5Q66IB7E.js";
import {
  Image,
  Money,
  ee
} from "/build/_shared/chunk-HVSKXXZX.js";
import {
  Link,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Cart.jsx
var import_react_ga4 = __toESM(require_dist());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var TRACKING_ID = "G-T3JX7QEBFV";
import_react_ga4.default.initialize(TRACKING_ID);
function CartMain({ layout, cart }) {
  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount = cart && Boolean(cart.discountCodes.filter((code) => code.applicable).length);
  const className = `cart-main ${withDiscount ? "with-discount" : ""}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartEmpty, { hidden: linesCount, layout }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartDetails, { cart, layout }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
function CartDetails({ layout, cart }) {
  const cartHasItems = !!cart && cart.totalQuantity > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cart-details", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLines, { lines: cart?.lines, layout }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    cartHasItems && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartSummary, { cost: cart.cost, layout, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartDiscounts, { discountCodes: cart.discountCodes }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartCheckoutActions, { cartHasItems, checkoutUrl: cart.checkoutUrl }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 31,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 29,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
function CartLines({ lines, layout }) {
  if (!lines)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-labelledby": "cart-lines", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: lines.nodes.map((line) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLineItem, { line, layout }, line.id, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 45,
    columnNumber: 11
  }, this)) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 43,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
function CartLineItem({ layout, line }) {
  const { id, merchandise } = line;
  const { product, title, image, selectedOptions } = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "cart-line", children: [
    image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Image,
      {
        alt: title,
        aspectRatio: "1/1",
        data: image,
        height: 100,
        loading: "lazy",
        width: 100
      },
      void 0,
      false,
      {
        fileName: "app/components/Cart.jsx",
        lineNumber: 60,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[100%]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          prefetch: "intent",
          to: lineItemUrl,
          onClick: () => {
            if (layout === "aside") {
              window.location.href = lineItemUrl;
            }
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: product.title.toLowerCase().split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ") }, void 0, false, {
            fileName: "app/components/Cart.jsx",
            lineNumber: 82,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/components/Cart.jsx",
            lineNumber: 81,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/Cart.jsx",
          lineNumber: 71,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLinePrice, { line, as: "span" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "", children: selectedOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex font-semibold text-md", children: option.value !== "Default Title" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "span",
        {
          className: "inline-flex items-center px-2.5 py-0.5 rounded-full leading-4 text-blue-800",
          dangerouslySetInnerHTML: { __html: option.value }
        },
        void 0,
        false,
        {
          fileName: "app/components/Cart.jsx",
          lineNumber: 98,
          columnNumber: 19
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 97,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 95,
        columnNumber: 15
      }, this) }, option.name, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 94,
        columnNumber: 13
      }, this)) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLineQuantity, { line }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 109,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, id, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}
function CartCheckoutActions({ checkoutUrl, cartHasItems }) {
  const checkout = () => {
    import_react_ga4.default.event({
      category: "purchase",
      action: "purchase"
    });
    console.log("cartHasItems::", cartHasItems, typeof cartHasItems);
    if (!cartHasItems) {
      window.open("/collections/all-products", "_self");
    } else {
      window.open(checkoutUrl, "_self");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", onClick: () => checkout(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "checkout bg-black text-white text-center p-[10px] rounded", children: "Continue to Checkout \u2192" }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 133,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 137,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 131,
    columnNumber: 5
  }, this);
}
function CartSummary({ cost, layout, children = null }) {
  const className = layout === "page" ? "cart-summary-page px-2" : "cart-summary-aside";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-labelledby": "cart-summary", className, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "cart-subtotal flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: "Subtotal : \xA0" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 150,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: cost?.subtotalAmount?.amount ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: cost?.subtotalAmount }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 153,
        columnNumber: 13
      }, this) : "-" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 151,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 149,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 147,
    columnNumber: 5
  }, this);
}
function CartLineRemoveButton({ lineIds }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    ee,
    {
      className: "w-full",
      route: "/cart",
      action: ee.ACTIONS.LinesRemove,
      inputs: { lineIds },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit text-[#fa4a0b] ", className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/delete.png", alt: "delete", width: 22, height: 22 }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 174,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 173,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/Cart.jsx",
      lineNumber: 167,
      columnNumber: 5
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 166,
    columnNumber: 5
  }, this);
}
function CartLineQuantity({ line }) {
  if (!line || typeof line?.quantity === "undefined")
    return null;
  const { id: lineId, quantity } = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cart-line-quantiy items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "quantity", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        CartLineUpdateButton,
        {
          lines: [{ id: lineId, quantity: prevQuantity }],
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              "aria-label": "Decrease quantity",
              disabled: quantity <= 1,
              name: "decrease-quantity",
              value: prevQuantity,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2212 " }, void 0, false, {
                fileName: "app/components/Cart.jsx",
                lineNumber: 202,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/Cart.jsx",
              lineNumber: 196,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/Cart.jsx",
          lineNumber: 193,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: quantity }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 205,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        CartLineUpdateButton,
        {
          lines: [{ id: lineId, quantity: nextQuantity }],
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              "aria-label": "Increase quantity",
              name: "increase-quantity",
              value: nextQuantity,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "+" }, void 0, false, {
                fileName: "app/components/Cart.jsx",
                lineNumber: 214,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/Cart.jsx",
              lineNumber: 209,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/Cart.jsx",
          lineNumber: 206,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 192,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 191,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLineRemoveButton, { lineIds: [lineId] }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 220,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 190,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 188,
    columnNumber: 5
  }, this);
}
function CartLinePrice({ line, priceType = "regular", ...passthroughProps }) {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount)
    return null;
  const moneyV2 = priceType === "regular" ? line.cost.totalAmount : line.cost.compareAtAmountPerQuantity;
  if (moneyV2 == null) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { withoutTrailingZeros: true, ...passthroughProps, data: moneyV2 }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 240,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 239,
    columnNumber: 5
  }, this);
}
function CartEmpty({ hidden = false, layout = "aside" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", "data-hidden": hidden, hidden, children: !hidden && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col flex justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "empty_cart_img", alt: "empty_cart", src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Cartdekstop.png?v=1709018650" }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 251,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 250,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: " Looks like you haven\u2019t added anything yet, let\u2019s get you started!" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 254,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 257,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          className: "w-[100%] h-11 bg-black text-white",
          onClick: () => {
            if (layout === "aside") {
              window.location.href = "/collections/all-products";
            }
          },
          children: "Continue shopping"
        },
        void 0,
        false,
        {
          fileName: "app/components/Cart.jsx",
          lineNumber: 258,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 253,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 249,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 247,
    columnNumber: 5
  }, this);
}
function CartDiscounts({ discountCodes }) {
  const codes = discountCodes?.filter((discount) => discount.applicable)?.map(({ code }) => code) || [];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { hidden: !codes.length, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: "Discount(s)" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 286,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdateDiscountForm, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cart-discount", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: codes?.join(", ") }, void 0, false, {
          fileName: "app/components/Cart.jsx",
          lineNumber: 289,
          columnNumber: 15
        }, this),
        "\xA0",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Remove" }, void 0, false, {
          fileName: "app/components/Cart.jsx",
          lineNumber: 291,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 288,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 287,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 285,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 284,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdateDiscountForm, { discountCodes: codes, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "discountCode", placeholder: "Discount code" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 300,
        columnNumber: 11
      }, this),
      "\xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          type: "submit text-[#fa4a0b]",
          className: "text-white bg-[#f48580] p-[8px] rounded",
          children: "Apply"
        },
        void 0,
        false,
        {
          fileName: "app/components/Cart.jsx",
          lineNumber: 302,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 299,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 298,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 282,
    columnNumber: 5
  }, this);
}
function UpdateDiscountForm({ discountCodes, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    ee,
    {
      route: "/cart",
      action: ee.ACTIONS.DiscountCodesUpdate,
      inputs: {
        discountCodes: discountCodes || []
      },
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/Cart.jsx",
      lineNumber: 316,
      columnNumber: 5
    },
    this
  );
}
function CartLineUpdateButton({ children, lines }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    ee,
    {
      route: "/cart",
      action: ee.ACTIONS.LinesUpdate,
      inputs: { lines },
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/Cart.jsx",
      lineNumber: 330,
      columnNumber: 5
    },
    this
  );
}

export {
  CartMain
};
//# sourceMappingURL=/build/_shared/chunk-4ZTI6YZJ.js.map
