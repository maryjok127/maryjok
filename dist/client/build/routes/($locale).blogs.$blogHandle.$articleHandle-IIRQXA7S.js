import {
  Image
} from "/build/_shared/chunk-VY5OJHMS.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).blogs.$blogHandle.$articleHandle.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return [{ title: `Hydrogen | ${data.article.title} article` }];
};
function Article() {
  const { article } = useLoaderData();
  const { title, image, contentHtml, author } = article;
  const publishedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(article.publishedAt));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "article mx-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: [
      title,
      " \xA0  ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: [
        " ",
        publishedDate,
        " "
      ] }, void 0, true, {
        fileName: "app/routes/($locale).blogs.$blogHandle.$articleHandle.jsx",
        lineNumber: 41,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).blogs.$blogHandle.$articleHandle.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { data: image, sizes: "90vw", loading: "eager" }, void 0, false, {
      fileName: "app/routes/($locale).blogs.$blogHandle.$articleHandle.jsx",
      lineNumber: 46,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        dangerouslySetInnerHTML: { __html: contentHtml },
        className: "article"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).blogs.$blogHandle.$articleHandle.jsx",
        lineNumber: 47,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/($locale).blogs.$blogHandle.$articleHandle.jsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
export {
  Article as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).blogs.$blogHandle.$articleHandle-IIRQXA7S.js.map
