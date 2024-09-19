import {
  ProductsCorousel_default
} from "/build/_shared/chunk-H7TBV3YY.js";
import {
  CartMain
} from "/build/_shared/chunk-HC5OFXAF.js";
import "/build/_shared/chunk-XBL5C6DB.js";
import "/build/_shared/chunk-NNH77UO3.js";
import "/build/_shared/chunk-D3AIAV2V.js";
import "/build/_shared/chunk-VY5OJHMS.js";
import {
  Await,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData,
  useMatches
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).cart.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: `Hydrogen | Cart` }];
};
function Cart() {
  const { recommendedProducts } = useLoaderData();
  const [root] = useMatches();
  const cart = root.data?.cart;
  console.log("hydrogen cart ::", cart.lines);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cart px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Cart" }, void 0, false, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Loading cart ..." }, void 0, false, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 98,
      columnNumber: 27
    }, this), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { errorElement: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "An error occurred" }, void 0, false, {
        fileName: "app/routes/($locale).cart.jsx",
        lineNumber: 99,
        columnNumber: 30
      }, this), resolve: cart, children: (cart2) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartMain, { layout: "page", cart: cart2 }, void 0, false, {
          fileName: "app/routes/($locale).cart.jsx",
          lineNumber: 101,
          columnNumber: 20
        }, this);
      } }, void 0, false, {
        fileName: "app/routes/($locale).cart.jsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        RecommendedProducts,
        {
          products: recommendedProducts.nodes[0].products,
          title: "Recommended Products"
        },
        recommendedProducts.nodes[0].id,
        false,
        {
          fileName: "app/routes/($locale).cart.jsx",
          lineNumber: 104,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).cart.jsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}
function RecommendedProducts({ products, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center font-semibold my-[15px]", children: [
      title,
      " "
    ] }, void 0, true, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
        fileName: "app/routes/($locale).cart.jsx",
        lineNumber: 119,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: products, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductsCorousel_default, { products }, void 0, false, {
        fileName: "app/routes/($locale).cart.jsx",
        lineNumber: 122,
        columnNumber: 14
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).cart.jsx",
        lineNumber: 120,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).cart.jsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).cart.jsx",
        lineNumber: 125,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).cart.jsx",
      lineNumber: 118,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).cart.jsx",
    lineNumber: 116,
    columnNumber: 5
  }, this);
}
export {
  Cart as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).cart-OWOOYCFV.js.map
