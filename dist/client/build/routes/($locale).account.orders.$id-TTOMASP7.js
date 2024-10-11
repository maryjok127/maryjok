import {
  Image,
  Money
} from "/build/_shared/chunk-OHHF25P7.js";
import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).account.orders.$id.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return [{ title: `Order ${data?.order?.name}` }];
};
function OrderRoute() {
  const { order, lineItems, discountValue, discountPercentage } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-order", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
      "Order ",
      order.name
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Placed on ",
      new Date(order.processedAt).toDateString()
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", children: "Product" }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 62,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", children: "Price" }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 63,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", children: "Quantity" }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 64,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", children: "Total" }, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 65,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 61,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: lineItems.map((lineItem, lineItemIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderLineRow, { lineItem }, lineItemIndex, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 71,
            columnNumber: 15
          }, this)
        )) }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tfoot", { children: [
          (discountValue && discountValue.amount || discountPercentage) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", colSpan: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Discounts" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 79,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 78,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Discounts" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 82,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 81,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: discountPercentage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "-",
              discountPercentage,
              "% OFF"
            ] }, void 0, true, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 86,
              columnNumber: 21
            }, this) : discountValue && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: discountValue }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 88,
              columnNumber: 38
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 84,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", colSpan: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subtotal" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 95,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 94,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subtotal" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 98,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 97,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: order.subtotalPriceV2 }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 101,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 100,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 93,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", colSpan: 3, children: "Tax" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 105,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Tax" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 109,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 108,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: order.totalTaxV2 }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 112,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 111,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 104,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", colSpan: 3, children: "Total" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 116,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Total" }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 120,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 119,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: order.totalPriceV2 }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 123,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).account.orders.$id.jsx",
              lineNumber: 122,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 115,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.orders.$id.jsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Shipping Address" }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 129,
          columnNumber: 11
        }, this),
        order?.shippingAddress ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("address", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            order.shippingAddress.firstName && order.shippingAddress.firstName + " ",
            order.shippingAddress.lastName
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 132,
            columnNumber: 15
          }, this),
          order?.shippingAddress?.formatted ? order.shippingAddress.formatted.map((line) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: line }, line, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 139,
            columnNumber: 19
          }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
            fileName: "app/routes/($locale).account.orders.$id.jsx",
            lineNumber: 142,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 131,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No shipping address defined" }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 146,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Status" }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 148,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: order.fulfillmentStatus }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 150,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 149,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.orders.$id.jsx",
        lineNumber: 128,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 154,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { target: "_blank", href: order.statusUrl, rel: "noreferrer", children: "View Order Status \u2192" }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 156,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 155,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.orders.$id.jsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
function OrderLineRow({ lineItem }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${lineItem.variant.product.handle}`, children: lineItem?.variant?.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { data: lineItem.variant.image, width: 96, height: 96 }, void 0, false, {
        fileName: "app/routes/($locale).account.orders.$id.jsx",
        lineNumber: 172,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account.orders.$id.jsx",
        lineNumber: 171,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account.orders.$id.jsx",
        lineNumber: 169,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: lineItem.title }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 177,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: lineItem.variant.title }, void 0, false, {
          fileName: "app/routes/($locale).account.orders.$id.jsx",
          lineNumber: 178,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.orders.$id.jsx",
        lineNumber: 176,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 168,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 167,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: lineItem.variant.price }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 183,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 182,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: lineItem.quantity }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 185,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: lineItem.discountedTotalPrice }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 187,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders.$id.jsx",
      lineNumber: 186,
      columnNumber: 7
    }, this)
  ] }, lineItem.variant.id, true, {
    fileName: "app/routes/($locale).account.orders.$id.jsx",
    lineNumber: 166,
    columnNumber: 5
  }, this);
}
export {
  OrderRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).account.orders.$id-TTOMASP7.js.map
