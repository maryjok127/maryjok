import {
  or
} from "/build/_shared/chunk-HVSKXXZX.js";
import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).blogs._index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: `Hydrogen | Logs` }];
};
function Blogs() {
  const { blogs } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blogs", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Blogs" }, void 0, false, {
      fileName: "app/routes/($locale).blogs._index.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blogs-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(or, { connection: blogs, children: ({ nodes, isLoading, PreviousLink, NextLink }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviousLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2191 Load previous" }, void 0, false, {
          fileName: "app/routes/($locale).blogs._index.jsx",
          lineNumber: 35,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).blogs._index.jsx",
          lineNumber: 34,
          columnNumber: 17
        }, this),
        nodes.map((blog) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Link,
            {
              className: "blog",
              prefetch: "intent",
              to: `/blogs/${blog.handle}`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: blog.title }, void 0, false, {
                fileName: "app/routes/($locale).blogs._index.jsx",
                lineNumber: 45,
                columnNumber: 23
              }, this)
            },
            blog.handle,
            false,
            {
              fileName: "app/routes/($locale).blogs._index.jsx",
              lineNumber: 39,
              columnNumber: 21
            },
            this
          );
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Load more \u2193" }, void 0, false, {
          fileName: "app/routes/($locale).blogs._index.jsx",
          lineNumber: 50,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).blogs._index.jsx",
          lineNumber: 49,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).blogs._index.jsx",
        lineNumber: 33,
        columnNumber: 15
      }, this);
    } }, void 0, false, {
      fileName: "app/routes/($locale).blogs._index.jsx",
      lineNumber: 30,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).blogs._index.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).blogs._index.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
export {
  Blogs as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).blogs._index-B3ASSAY3.js.map
