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
  const { lookbook_id, context } = useLoaderData();
  const [p_id, setId] = (0, import_react2.useState)();
  (0, import_react2.useEffect)(() => {
    setId(lookbook_id);
  }, []);
  const mutationCart = `{ cartCreate(
      input: {
          lines: [
            {
              quantity: 1
              merchandiseId: "gid://shopify/ProductVariant/1"
            }
          ]
        }
      )
    }`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { class: "mst-slider" }, void 0, false, {
      fileName: "app/routes/($locale).lookbook.$id.jsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "data-context": JSON.stringify(context), id: "sg-app", class: "mst-gallery-root" }, void 0, false, {
      fileName: "app/routes/($locale).lookbook.$id.jsx",
      lineNumber: 44,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).lookbook.$id.jsx",
    lineNumber: 42,
    columnNumber: 7
  }, this);
}
export {
  LookBook as default
};
//# sourceMappingURL=/build/routes/($locale).lookbook.$id-QQB6YD5L.js.map
