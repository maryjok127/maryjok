import {
  Image,
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

// app/routes/($locale).blogs.$blogHandle._index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return [{ title: `Hydrogen | ${data.blog.title} blog` }];
};
function Blog() {
  const { blog } = useLoaderData();
  const { articles } = blog;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: blog.title }, void 0, false, {
      fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(or, { connection: articles, children: ({ nodes, isLoading, PreviousLink, NextLink }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviousLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2191 Load previous" }, void 0, false, {
          fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
          lineNumber: 45,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
          lineNumber: 44,
          columnNumber: 17
        }, this),
        nodes.map((article, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            ArticleItem,
            {
              article,
              title: blog.title,
              loading: index < 2 ? "eager" : "lazy"
            },
            article.id,
            false,
            {
              fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
              lineNumber: 49,
              columnNumber: 21
            },
            this
          );
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Load more \u2193" }, void 0, false, {
          fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
          lineNumber: 58,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
          lineNumber: 57,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
        lineNumber: 43,
        columnNumber: 15
      }, this);
    } }, void 0, false, {
      fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
      lineNumber: 40,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
function ArticleItem({ article, loading }) {
  const publishedAt = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(article.publishedAt));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mst-card-md p-5 m-8 blog-article", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/blogs/${article.blog.handle}/${article.handle}`, children: [
    article.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-article-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Image,
      {
        alt: article.image.altText || article.title,
        aspectRatio: "3/2",
        data: article.image,
        loading,
        sizes: "(min-width: 768px) 50vw, 100vw"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
        lineNumber: 81,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
      lineNumber: 80,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: article.title }, void 0, false, {
      fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
      lineNumber: 90,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: publishedAt }, void 0, false, {
      fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
      lineNumber: 91,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
    lineNumber: 78,
    columnNumber: 7
  }, this) }, article.id, false, {
    fileName: "app/routes/($locale).blogs.$blogHandle._index.jsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
}
export {
  Blog as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).blogs.$blogHandle._index-XVM5O4NT.js.map
