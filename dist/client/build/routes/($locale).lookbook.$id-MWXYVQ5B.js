import {
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).lookbook.$id.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function LookBook() {
  const { lookbook_id, storefront } = useLoaderData();
  const [p_id, setId] = (0, import_react2.useState)();
  (0, import_react2.useEffect)(() => {
    setId(lookbook_id);
    document.addEventListener("stl.widgetHasBennLoaded", function() {
      document.querySelectorAll(".ctl-product-img-link.ctl-product-link.js-ctl-product-link").forEach(function(link) {
        var productId = link.closest(".stl__products_element.js-ctl-product-component").getAttribute("data-product-id");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = productId;
        link.parentNode.insertBefore(checkbox, link);
      });
      document.querySelectorAll(".js-action.shopthelook_add-to-cart").forEach(function(button) {
        button.addEventListener("click", async function(event) {
          event.preventDefault();
          console.log("OVERRIDE CART CALL STOREFRONT");
        });
      });
    });
  }, []);
  const mutationCart = `{ cartCreate(
      input: {
        lines: [
          {
            quantity: 1
            merchandiseId: "gid://shopify/ProductVariant/1"
          }
        ],
        attributes: {
          key: "cart_attribute",
          value: "This is a cart attribute"
        }
      }
    )
  }`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", { src: `https://shopify.shopthelook.app/shopthelook.js?shop=15f63f.myshopify.com&widget=1&mainProductId=${lookbook_id}` }, void 0, false, {
      fileName: "app/routes/($locale).lookbook.$id.jsx",
      lineNumber: 76,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", { src: "../lookbook.js" }, void 0, false, {
      fileName: "app/routes/($locale).lookbook.$id.jsx",
      lineNumber: 77,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { class: "ShopTheLook-section", "data-product-id": p_id }, void 0, false, {
      fileName: "app/routes/($locale).lookbook.$id.jsx",
      lineNumber: 78,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).lookbook.$id.jsx",
    lineNumber: 75,
    columnNumber: 7
  }, this);
}
export {
  LookBook as default
};
//# sourceMappingURL=/build/routes/($locale).lookbook.$id-MWXYVQ5B.js.map
