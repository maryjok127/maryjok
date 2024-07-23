import {
  useVariantUrl
} from "/build/_shared/chunk-NNH77UO3.js";
import {
  Image,
  Money,
  ee
} from "/build/_shared/chunk-VY5OJHMS.js";
import {
  Link,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Cart.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CartMain({ layout, cart }) {
  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount = cart && Boolean(cart.discountCodes.filter((code) => code.applicable).length);
  const className = `cart-main ${withDiscount ? "with-discount" : ""}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartEmpty, { hidden: linesCount, layout }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartDetails, { cart, layout }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
function CartDetails({ layout, cart }) {
  const cartHasItems = !!cart && cart.totalQuantity > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cart-details", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLines, { lines: cart?.lines, layout }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    cartHasItems && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartSummary, { cost: cart.cost, layout, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartDiscounts, { discountCodes: cart.discountCodes }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartCheckoutActions, { checkoutUrl: cart.checkoutUrl }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function CartLines({ lines, layout }) {
  if (!lines)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-labelledby": "cart-lines", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: lines.nodes.map((line) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLineItem, { line, layout }, line.id, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 42,
    columnNumber: 11
  }, this)) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 40,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 39,
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
        lineNumber: 57,
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
            lineNumber: 79,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/components/Cart.jsx",
            lineNumber: 78,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/Cart.jsx",
          lineNumber: 68,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLinePrice, { line, as: "span" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 88,
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
          lineNumber: 97,
          columnNumber: 19
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 94,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 92,
        columnNumber: 15
      }, this) }, option.name, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 91,
        columnNumber: 13
      }, this)) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLineQuantity, { line }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 108,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, id, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}
function CartCheckoutActions({ checkoutUrl }) {
  if (!checkoutUrl)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: checkoutUrl, target: "_self", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "checkout bg-black text-white text-center p-[10px] rounded", children: "Continue to Checkout \u2192" }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 120,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 119,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 124,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 118,
    columnNumber: 5
  }, this);
}
function CartSummary({ cost, layout, children = null }) {
  const className = layout === "page" ? "cart-summary-page px-2" : "cart-summary-aside";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-labelledby": "cart-summary", className, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "cart-subtotal flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: "Subtotal : \xA0" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: cost?.subtotalAmount?.amount ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: cost?.subtotalAmount }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 140,
        columnNumber: 13
      }, this) : "-" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 138,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 136,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 134,
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
        lineNumber: 161,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 160,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/Cart.jsx",
      lineNumber: 154,
      columnNumber: 5
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 153,
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
                lineNumber: 189,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/Cart.jsx",
              lineNumber: 183,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/Cart.jsx",
          lineNumber: 180,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: quantity }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 192,
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
                lineNumber: 201,
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
      )
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 179,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 178,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLineRemoveButton, { lineIds: [lineId] }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 207,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 177,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 175,
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
    lineNumber: 227,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 226,
    columnNumber: 5
  }, this);
}
function CartEmpty({ hidden = false, layout = "aside" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", "data-hidden": hidden, hidden, children: !hidden && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col flex justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "empty_cart_img", alt: "empty_cart", src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/Cartdekstop.png?v=1709018650" }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 238,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 237,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: " Looks like you haven\u2019t added anything yet, let\u2019s get you started!" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 241,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 244,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          className: "w-[100%] h-11 bg-black text-white",
          onClick: () => {
            if (layout === "aside") {
              window.location.href = "/collections";
            }
          },
          children: "Continue shopping"
        },
        void 0,
        false,
        {
          fileName: "app/components/Cart.jsx",
          lineNumber: 245,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 240,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 236,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 234,
    columnNumber: 5
  }, this);
}
function CartDiscounts({ discountCodes }) {
  const codes = discountCodes?.filter((discount) => discount.applicable)?.map(({ code }) => code) || [];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { hidden: !codes.length, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: "Discount(s)" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 273,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdateDiscountForm, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cart-discount", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: codes?.join(", ") }, void 0, false, {
          fileName: "app/components/Cart.jsx",
          lineNumber: 276,
          columnNumber: 15
        }, this),
        "\xA0",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Remove" }, void 0, false, {
          fileName: "app/components/Cart.jsx",
          lineNumber: 278,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 275,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 274,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 272,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 271,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdateDiscountForm, { discountCodes: codes, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "discountCode", placeholder: "Discount code" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 287,
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
          lineNumber: 289,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 286,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 285,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 269,
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
      lineNumber: 303,
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
      lineNumber: 317,
      columnNumber: 5
    },
    this
  );
}

export {
  CartMain
};
//# sourceMappingURL=/build/_shared/chunk-OFG5V4MJ.js.map
