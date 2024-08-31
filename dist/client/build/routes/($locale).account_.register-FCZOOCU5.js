import {
  Form,
  require_jsx_dev_runtime,
  useActionData
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).account_.register.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Register() {
  const data = useActionData();
  const error = data?.error || null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:w-2/3  sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/LoginSideImg-Photoroom_1_2.png?v=1709296234",
        alt: "Login Background",
        className: "w-full h-full object-cover"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).account_.register.jsx",
        lineNumber: 157,
        columnNumber: 7
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale).account_.register.jsx",
      lineNumber: 156,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full justify-center items-center flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "w-full justify-center items-center login_wrapper", method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 text-sm font-bold mb-2", for: "username", children: "Email" }, void 0, false, {
            fileName: "app/routes/($locale).account_.register.jsx",
            lineNumber: 167,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              className: "shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
              id: "email",
              name: "email",
              type: "email",
              autoComplete: "email",
              placeholder: "Email address",
              "aria-label": "Email address",
              required: true
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).account_.register.jsx",
              lineNumber: 170,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account_.register.jsx",
          lineNumber: 166,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 text-sm font-bold mb-2", for: "password", children: "Password" }, void 0, false, {
            fileName: "app/routes/($locale).account_.register.jsx",
            lineNumber: 180,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              className: "shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
              id: "password",
              name: "password",
              type: "password",
              autoComplete: "current-password",
              placeholder: "Password",
              "aria-label": "Password",
              minLength: 8,
              required: true
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).account_.register.jsx",
              lineNumber: 183,
              columnNumber: 11
            },
            this
          ),
          error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs italic", children: error }, void 0, false, {
            fileName: "app/routes/($locale).account_.register.jsx",
            lineNumber: 193,
            columnNumber: 15
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/($locale).account_.register.jsx",
            lineNumber: 195,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "passwordConfirm", children: "Re-enter password" }, void 0, false, {
            fileName: "app/routes/($locale).account_.register.jsx",
            lineNumber: 197,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              className: "shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
              id: "passwordConfirm",
              name: "passwordConfirm",
              type: "password",
              autoComplete: "current-password",
              placeholder: "Re-enter password",
              "aria-label": "Re-enter password",
              minLength: 8,
              required: true
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).account_.register.jsx",
              lineNumber: 198,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account_.register.jsx",
          lineNumber: 179,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", type: "submit", children: "Register" }, void 0, false, {
            fileName: "app/routes/($locale).account_.register.jsx",
            lineNumber: 210,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800", href: "/account/recover", children: "Forgot Password?" }, void 0, false, {
            fileName: "app/routes/($locale).account_.register.jsx",
            lineNumber: 213,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account_.register.jsx",
          lineNumber: 209,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "py-4 text-blue-500", href: "/account/login", children: " Login " }, void 0, false, {
          fileName: "app/routes/($locale).account_.register.jsx",
          lineNumber: 217,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account_.register.jsx",
        lineNumber: 165,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account_.register.jsx",
        lineNumber: 164,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-gray-500 text-xs", children: "\xA92023. All rights reserved." }, void 0, false, {
        fileName: "app/routes/($locale).account_.register.jsx",
        lineNumber: 220,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account_.register.jsx",
      lineNumber: 163,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account_.register.jsx",
    lineNumber: 155,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account_.register.jsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
}
export {
  Register as default
};
//# sourceMappingURL=/build/routes/($locale).account_.register-FCZOOCU5.js.map
