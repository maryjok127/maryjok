import {
  Form,
  require_jsx_dev_runtime,
  useActionData
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).account_.reset.$id.$resetToken.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Reset Password" }];
};
function Reset() {
  const action = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-reset", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Reset Password." }, void 0, false, {
      fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Enter a new password for your account." }, void 0, false, {
      fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, false, {
          fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            "aria-label": "Password",
            autoComplete: "current-password",
            autoFocus: true,
            id: "password",
            minLength: 8,
            name: "password",
            placeholder: "Password",
            required: true,
            type: "password"
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
            lineNumber: 69,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "passwordConfirm", children: "Re-enter password" }, void 0, false, {
          fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            "aria-label": "Re-enter password",
            autoComplete: "current-password",
            id: "passwordConfirm",
            minLength: 8,
            name: "passwordConfirm",
            placeholder: "Re-enter password",
            required: true,
            type: "password"
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
            lineNumber: 82,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      action?.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: action.error }, void 0, false, {
        fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
        lineNumber: 96,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
        lineNumber: 95,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
        lineNumber: 94,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
        lineNumber: 100,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Reset" }, void 0, false, {
        fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
        lineNumber: 102,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/account/login", children: "Back to login \u2192" }, void 0, false, {
      fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
      lineNumber: 106,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account_.reset.$id.$resetToken.jsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}
export {
  Reset as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).account_.reset.$id.$resetToken-QJ3G3N7V.js.map
