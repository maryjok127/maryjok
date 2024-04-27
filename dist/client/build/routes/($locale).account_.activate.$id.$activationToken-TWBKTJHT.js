import {
  Form,
  require_jsx_dev_runtime,
  useActionData
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).account_.activate.$id.$activationToken.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Activate Account" }];
};
function Activate() {
  const action = useActionData();
  const error = action?.error ?? null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-activate", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Activate Account." }, void 0, false, {
      fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Create your password to activate your account." }, void 0, false, {
      fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, false, {
          fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            id: "password",
            name: "password",
            type: "password",
            autoComplete: "current-password",
            placeholder: "Password",
            "aria-label": "Password",
            minLength: 8,
            required: true,
            autoFocus: true
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
            lineNumber: 88,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "passwordConfirm", children: "Re-enter password" }, void 0, false, {
          fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
          lineNumber: 100,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
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
            fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
            lineNumber: 101,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: error }, void 0, false, {
        fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
        lineNumber: 115,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
        lineNumber: 114,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
        lineNumber: 113,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
        lineNumber: 119,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          className: "bg-primary text-contrast rounded py-2 px-4 focus:shadow-outline block w-full",
          type: "submit",
          children: "Save"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
          lineNumber: 121,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account_.activate.$id.$activationToken.jsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
}
export {
  Activate as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).account_.activate.$id.$activationToken-TWBKTJHT.js.map
