import {
  Form,
  Link,
  require_jsx_dev_runtime,
  useActionData
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).account_.recover.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Recover() {
  const action = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:w-1/2  sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/LoginSideImg-Photoroom_1_2.png?v=1709296234",
        alt: "Login Background",
        className: "w-full h-full object-cover"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 105,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 103,
      columnNumber: 1
    }, this),
    action?.resetRequested ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Request Sent." }, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 113,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "If that email address is in our system, you will receive an email with instructions about how to reset your password in a few minutes." }, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 114,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 119,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/account/login", children: "Return to Login" }, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 120,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 112,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full justify-center items-center flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "w-full justify-center items-center login_wrapper", method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 text-sm font-bold mb-2", for: "username", children: "Email" }, void 0, false, {
            fileName: "app/routes/($locale).account_.recover.jsx",
            lineNumber: 127,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              className: "shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
              "aria-label": "Email address",
              autoComplete: "email",
              autoFocus: true,
              id: "email",
              name: "email",
              placeholder: "Email address",
              required: true,
              type: "email"
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).account_.recover.jsx",
              lineNumber: 130,
              columnNumber: 7
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account_.recover.jsx",
          lineNumber: 126,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", type: "submit", children: "Request Reset Link" }, void 0, false, {
            fileName: "app/routes/($locale).account_.recover.jsx",
            lineNumber: 142,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800", href: "/account/login", children: "Login" }, void 0, false, {
            fileName: "app/routes/($locale).account_.recover.jsx",
            lineNumber: 145,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account_.recover.jsx",
          lineNumber: 141,
          columnNumber: 5
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 125,
        columnNumber: 4
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 124,
        columnNumber: 3
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-gray-500 text-xs", children: "\xA92023. All rights reserved." }, void 0, false, {
        fileName: "app/routes/($locale).account_.recover.jsx",
        lineNumber: 152,
        columnNumber: 3
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account_.recover.jsx",
      lineNumber: 123,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account_.recover.jsx",
    lineNumber: 102,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account_.recover.jsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
export {
  Recover as default
};
//# sourceMappingURL=/build/routes/($locale).account_.recover-WPHFFVHS.js.map
