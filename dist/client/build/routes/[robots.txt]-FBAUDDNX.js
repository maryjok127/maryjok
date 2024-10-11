import "/build/_shared/chunk-HVSKXXZX.js";
import {
  isRouteErrorResponse,
  require_jsx_dev_runtime,
  useRouteError
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/[robots.txt].jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Oops" }, void 0, false, {
        fileName: "app/routes/[robots.txt].jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Status: ",
        error.status
      ] }, void 0, true, {
        fileName: "app/routes/[robots.txt].jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: error.data.message }, void 0, false, {
        fileName: "app/routes/[robots.txt].jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/[robots.txt].jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this);
  }
  let errorMessage = "Unknown error";
  if (error instanceof Error) {
    errorMessage = error.message;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Uh oh ..." }, void 0, false, {
      fileName: "app/routes/[robots.txt].jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Something went wrong." }, void 0, false, {
      fileName: "app/routes/[robots.txt].jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { children: errorMessage }, void 0, false, {
      fileName: "app/routes/[robots.txt].jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/[robots.txt].jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
export {
  ErrorBoundary
};
//# sourceMappingURL=/build/routes/[robots.txt]-FBAUDDNX.js.map
