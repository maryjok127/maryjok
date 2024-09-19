import {
  require_react
} from "/build/_shared/chunk-KIL42EU4.js";
import "/build/_shared/chunk-FM7TTYIF.js";
import "/build/_shared/chunk-BSZVYZCA.js";
import {
  Form,
  require_jsx_dev_runtime,
  useActionData
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).account_.login.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Login" }];
};
function Login() {
  const data = useActionData();
  const error = data?.error || null;
  console.log(data);
  console.log(error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:w-2/3 sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/LoginSideImg-Photoroom_1_2.png?v=1709296234",
        alt: "Login Background",
        className: "w-full h-full object-cover"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).account_.login.jsx",
        lineNumber: 81,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale).account_.login.jsx",
      lineNumber: 80,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full justify-center items-center flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "w-full m-auto login_wrapper", method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 text-sm font-bold mb-2", for: "username", children: "Email" }, void 0, false, {
            fileName: "app/routes/($locale).account_.login.jsx",
            lineNumber: 92,
            columnNumber: 13
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
              fileName: "app/routes/($locale).account_.login.jsx",
              lineNumber: 95,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account_.login.jsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 text-sm font-bold mb-2", for: "password", children: "Password" }, void 0, false, {
            fileName: "app/routes/($locale).account_.login.jsx",
            lineNumber: 105,
            columnNumber: 13
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
              fileName: "app/routes/($locale).account_.login.jsx",
              lineNumber: 108,
              columnNumber: 13
            },
            this
          ),
          error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs italic", children: error }, void 0, false, {
            fileName: "app/routes/($locale).account_.login.jsx",
            lineNumber: 118,
            columnNumber: 17
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/($locale).account_.login.jsx",
            lineNumber: 120,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account_.login.jsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", type: "submit", children: "Sign In" }, void 0, false, {
            fileName: "app/routes/($locale).account_.login.jsx",
            lineNumber: 125,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800", href: "/account/recover", children: "Forgot Password?" }, void 0, false, {
            fileName: "app/routes/($locale).account_.login.jsx",
            lineNumber: 128,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account_.login.jsx",
          lineNumber: 124,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "py-4 text-blue-500", href: "/account/register", children: " Register " }, void 0, false, {
          fileName: "app/routes/($locale).account_.login.jsx",
          lineNumber: 132,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account_.login.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account_.login.jsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-gray-500 text-xs", children: "\xA92023. All rights reserved." }, void 0, false, {
        fileName: "app/routes/($locale).account_.login.jsx",
        lineNumber: 135,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account_.login.jsx",
      lineNumber: 88,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account_.login.jsx",
    lineNumber: 79,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account_.login.jsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
export {
  Login as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).account_.login-LY6LP4UY.js.map
