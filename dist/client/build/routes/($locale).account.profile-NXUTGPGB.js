import {
  Form,
  require_jsx_dev_runtime,
  require_react,
  useActionData,
  useNavigation,
  useOutletContext
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).account.profile.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Profile" }];
};
function AccountProfile() {
  const account = useOutletContext();
  const { state } = useNavigation();
  const action = useActionData();
  const customer = action?.customer ?? account?.customer;
  const [activeTab, setActiveTab] = (0, import_react.useState)("profile");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data:", profileData);
    console.log("Password Data:", passwordData);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-full justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "w-full justify-center items-center", method: "PUT", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 text-sm font-bold mb-2", htmlFor: "firstName", children: "First name" }, void 0, false, {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 125,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: "shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
            id: "firstName",
            name: "firstName",
            type: "text",
            autoComplete: "given-name",
            placeholder: "First name",
            "aria-label": "First name",
            defaultValue: customer.firstName ?? "",
            minLength: 2
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account.profile.jsx",
            lineNumber: 126,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 text-sm font-bold mb-2", htmlFor: "lastName", children: "Last name" }, void 0, false, {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 138,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: "shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
            id: "lastName",
            name: "lastName",
            type: "text",
            autoComplete: "family-name",
            placeholder: "Last name",
            "aria-label": "Last name",
            defaultValue: customer.lastName ?? "",
            minLength: 2
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account.profile.jsx",
            lineNumber: 139,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 137,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 text-sm font-bold mb-2", htmlFor: "phone", children: "Mobile" }, void 0, false, {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 151,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: "shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
            id: "phone",
            name: "phone",
            type: "tel",
            autoComplete: "tel",
            placeholder: "Mobile",
            "aria-label": "Mobile",
            defaultValue: customer.phone ?? ""
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account.profile.jsx",
            lineNumber: 152,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 150,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 text-sm font-bold mb-2", htmlFor: "email", children: "Email address" }, void 0, false, {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 163,
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
            required: true,
            placeholder: "Email address",
            "aria-label": "Email address",
            defaultValue: customer.email ?? ""
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account.profile.jsx",
            lineNumber: 164,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 162,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 text-sm font-bold mb-2", htmlFor: "currentPassword", children: "Current password" }, void 0, false, {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 176,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: "shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
            id: "currentPassword",
            name: "currentPassword",
            type: "password",
            autoComplete: "current-password",
            placeholder: "Current password",
            "aria-label": "Current password",
            minLength: 8
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account.profile.jsx",
            lineNumber: 177,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 175,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 text-sm font-bold mb-2", htmlFor: "newPassword", children: "New password" }, void 0, false, {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 188,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: "shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
            id: "newPassword",
            name: "newPassword",
            type: "password",
            placeholder: "New password",
            "aria-label": "New password",
            minLength: 8
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account.profile.jsx",
            lineNumber: 189,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 187,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: "Passwords must be at least 8 characters." }, void 0, false, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 198,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.profile.jsx",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
          type: "submit",
          disabled: state !== "idle",
          children: state !== "idle" ? "Updating" : "Update"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($locale).account.profile.jsx",
          lineNumber: 201,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800", href: "/account/recover", children: "Forgot Password?" }, void 0, false, {
        fileName: "app/routes/($locale).account.profile.jsx",
        lineNumber: 205,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.profile.jsx",
      lineNumber: 200,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.profile.jsx",
    lineNumber: 122,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account.profile.jsx",
    lineNumber: 121,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account.profile.jsx",
    lineNumber: 120,
    columnNumber: 5
  }, this);
}
export {
  AccountProfile as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).account.profile-NXUTGPGB.js.map
