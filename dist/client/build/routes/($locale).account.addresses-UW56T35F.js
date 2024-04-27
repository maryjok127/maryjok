import {
  Form,
  require_jsx_dev_runtime,
  useActionData,
  useNavigation,
  useOutletContext
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).account.addresses.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Addresses" }];
};
function Addresses() {
  const { customer } = useOutletContext();
  const { defaultAddress, addresses } = customer;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-addresses", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Addresses" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 206,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 207,
      columnNumber: 7
    }, this),
    !addresses.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "You have no addresses saved." }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 209,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: "Create address" }, void 0, false, {
          fileName: "app/routes/($locale).account.addresses.jsx",
          lineNumber: 213,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NewAddressForm, {}, void 0, false, {
          fileName: "app/routes/($locale).account.addresses.jsx",
          lineNumber: 214,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 212,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 216,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 217,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 218,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        ExistingAddresses,
        {
          addresses,
          defaultAddress
        },
        void 0,
        false,
        {
          fileName: "app/routes/($locale).account.addresses.jsx",
          lineNumber: 219,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 211,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 205,
    columnNumber: 5
  }, this);
}
function NewAddressForm() {
  const newAddress = {
    address1: "",
    address2: "",
    city: "",
    company: "",
    country: "",
    firstName: "",
    id: "new",
    lastName: "",
    phone: "",
    province: "",
    zip: ""
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AddressForm, { address: newAddress, defaultAddress: null, children: ({ stateForMethod }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "button",
    {
      disabled: stateForMethod("POST") !== "idle",
      formMethod: "POST",
      type: "submit",
      children: stateForMethod("POST") !== "idle" ? "Creating" : "Create"
    },
    void 0,
    false,
    {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 248,
      columnNumber: 11
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 247,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 245,
    columnNumber: 5
  }, this);
}
function ExistingAddresses({ addresses, defaultAddress }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: "Existing addresses" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 264,
      columnNumber: 7
    }, this),
    addresses.nodes.map((address) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      AddressForm,
      {
        address,
        defaultAddress,
        children: ({ stateForMethod }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              disabled: stateForMethod("PUT") !== "idle",
              formMethod: "PUT",
              type: "submit",
              children: stateForMethod("PUT") !== "idle" ? "Saving" : "Save"
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).account.addresses.jsx",
              lineNumber: 273,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              disabled: stateForMethod("DELETE") !== "idle",
              formMethod: "DELETE",
              type: "submit",
              children: stateForMethod("DELETE") !== "idle" ? "Deleting" : "Delete"
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).account.addresses.jsx",
              lineNumber: 280,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/($locale).account.addresses.jsx",
          lineNumber: 272,
          columnNumber: 13
        }, this)
      },
      address.id,
      false,
      {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 266,
        columnNumber: 9
      },
      this
    ))
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 263,
    columnNumber: 5
  }, this);
}
function AddressForm({ address, defaultAddress, children }) {
  const { state, formMethod } = useNavigation();
  const action = useActionData();
  const error = action?.error?.[address.id];
  const isDefaultAddress = defaultAddress?.id === address.id;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: address.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "addressId", defaultValue: address.id }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 303,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "firstName", children: "First name*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 304,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        "aria-label": "First name",
        autoComplete: "given-name",
        defaultValue: address?.firstName ?? "",
        id: "firstName",
        name: "firstName",
        placeholder: "First name",
        required: true,
        type: "text"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 305,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "lastName", children: "Last name*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 315,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        "aria-label": "Last name",
        autoComplete: "family-name",
        defaultValue: address?.lastName ?? "",
        id: "lastName",
        name: "lastName",
        placeholder: "Last name",
        required: true,
        type: "text"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 316,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "company", children: "Company" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 326,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        "aria-label": "Company",
        autoComplete: "organization",
        defaultValue: address?.company ?? "",
        id: "company",
        name: "company",
        placeholder: "Company",
        type: "text"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 327,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "address1", children: "Address line*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 336,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        "aria-label": "Address line 1",
        autoComplete: "address-line1",
        defaultValue: address?.address1 ?? "",
        id: "address1",
        name: "address1",
        placeholder: "Address line 1*",
        required: true,
        type: "text"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 337,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "address2", children: "Address line 2" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 347,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        "aria-label": "Address line 2",
        autoComplete: "address-line2",
        defaultValue: address?.address2 ?? "",
        id: "address2",
        name: "address2",
        placeholder: "Address line 2",
        type: "text"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 348,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "city", children: "City*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 357,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        "aria-label": "City",
        autoComplete: "address-level2",
        defaultValue: address?.city ?? "",
        id: "city",
        name: "city",
        placeholder: "City",
        required: true,
        type: "text"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 358,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "province", children: "State / Province*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 368,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        "aria-label": "State",
        autoComplete: "address-level1",
        defaultValue: address?.province ?? "",
        id: "province",
        name: "province",
        placeholder: "State / Province",
        required: true,
        type: "text"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 369,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "zip", children: "Zip / Postal Code*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 379,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        "aria-label": "Zip",
        autoComplete: "postal-code",
        defaultValue: address?.zip ?? "",
        id: "zip",
        name: "zip",
        placeholder: "Zip / Postal Code",
        required: true,
        type: "text"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 380,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "country", children: "Country*" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 390,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        "aria-label": "Country",
        autoComplete: "country-name",
        defaultValue: address?.country ?? "",
        id: "country",
        name: "country",
        placeholder: "Country",
        required: true,
        type: "text"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 391,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "phone", children: "Phone" }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 401,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "input",
      {
        "aria-label": "Phone",
        autoComplete: "tel",
        defaultValue: address?.phone ?? "",
        id: "phone",
        name: "phone",
        placeholder: "+16135551111",
        pattern: "^\\+?[1-9]\\d{3,14}$",
        type: "tel"
      },
      void 0,
      false,
      {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 402,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          defaultChecked: isDefaultAddress,
          id: "defaultAddress",
          name: "defaultAddress",
          type: "checkbox"
        },
        void 0,
        false,
        {
          fileName: "app/routes/($locale).account.addresses.jsx",
          lineNumber: 413,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "defaultAddress", children: "Set as default address" }, void 0, false, {
        fileName: "app/routes/($locale).account.addresses.jsx",
        lineNumber: 419,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 412,
      columnNumber: 9
    }, this),
    error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: error }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 424,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 423,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 422,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.addresses.jsx",
      lineNumber: 428,
      columnNumber: 11
    }, this),
    children({
      stateForMethod: (method) => formMethod === method ? state : "idle"
    })
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 302,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account.addresses.jsx",
    lineNumber: 301,
    columnNumber: 5
  }, this);
}
export {
  Addresses as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).account.addresses-UW56T35F.js.map
