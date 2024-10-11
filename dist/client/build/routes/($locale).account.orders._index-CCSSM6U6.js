import "/build/_shared/chunk-7M6P6K7X.js";
import {
  require_react
} from "/build/_shared/chunk-TJVOAHQX.js";
import "/build/_shared/chunk-23LHJDLZ.js";
import "/build/_shared/chunk-ZPBXTGWZ.js";
import "/build/_shared/chunk-BSZVYZCA.js";
import "/build/_shared/chunk-FM7TTYIF.js";
import "/build/_shared/chunk-VY5OJHMS.js";
import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).account.orders._index.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Orders" }];
};
function Orders() {
  const { customer } = useLoaderData();
  const { orders, numberOfOrders } = customer;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full w-full p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
      "Orders ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: [
        "(",
        numberOfOrders,
        ")"
      ] }, void 0, true, {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 69,
        columnNumber: 16
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    orders.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrdersTable, { orders }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 72,
      columnNumber: 30
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyOrders, {}, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 72,
      columnNumber: 64
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}
function OrdersTable({ orders }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderItem, { orders }, void 0, false, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 104,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}
function EmptyOrders() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "You haven't placed any orders yet." }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/collections", children: "Start Shopping \u2192" }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 115,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 114,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 111,
    columnNumber: 5
  }, this);
}
function OrderItem({ orders }) {
  const TABLE_HEAD = ["Product", "Amount", "Date", "Status"];
  const TABLE_ROWS = [
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png",
      name: "Spotify",
      amount: "$2,500",
      date: "Wed 3:00pm",
      status: "paid",
      account: "visa",
      accountNumber: "1234",
      expiry: "06/2026"
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png",
      name: "Amazon",
      amount: "$5,000",
      date: "Wed 1:00pm",
      status: "paid",
      account: "master-card",
      accountNumber: "1234",
      expiry: "06/2026"
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png",
      name: "Pinterest",
      amount: "$3,400",
      date: "Mon 7:40pm",
      status: "pending",
      account: "master-card",
      accountNumber: "1234",
      expiry: "06/2026"
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png",
      name: "Google",
      amount: "$1,000",
      date: "Wed 5:00pm",
      status: "paid",
      account: "visa",
      accountNumber: "1234",
      expiry: "06/2026"
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png",
      name: "netflix",
      amount: "$14,000",
      date: "Wed 3:30am",
      status: "cancelled",
      account: "visa",
      accountNumber: "1234",
      expiry: "06/2026"
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Card, { className: "h-[90] overflow-y-auto w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CardBody, { className: "px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full table-auto text-left", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: TABLE_HEAD.map((head) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "th",
      {
        className: "border-y border-blue-gray-100 bg-blue-gray-50/50 p-4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          import_react2.Typography,
          {
            variant: "small",
            color: "blue-gray",
            className: "font-normal leading-none opacity-70",
            children: head
          },
          void 0,
          false,
          {
            fileName: "app/routes/($locale).account.orders._index.jsx",
            lineNumber: 188,
            columnNumber: 21
          },
          this
        )
      },
      head,
      false,
      {
        fileName: "app/routes/($locale).account.orders._index.jsx",
        lineNumber: 184,
        columnNumber: 19
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 182,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 181,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: orders.nodes.map(
      (order, index) => {
        const isLast = index === TABLE_ROWS.length - 1;
        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: classes, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              import_react2.Avatar,
              {
                src: order.lineItems.nodes[0].variant.image.url,
                alt: order.lineItems.nodes[0].title,
                size: "md",
                className: "border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).account.orders._index.jsx",
                lineNumber: 214,
                columnNumber: 27
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              import_react2.Typography,
              {
                variant: "small",
                color: "blue-gray",
                className: "font-bold",
                children: order.lineItems.nodes[0].title
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).account.orders._index.jsx",
                lineNumber: 220,
                columnNumber: 27
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/($locale).account.orders._index.jsx",
            lineNumber: 213,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/($locale).account.orders._index.jsx",
            lineNumber: 212,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: classes, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            import_react2.Typography,
            {
              variant: "small",
              color: "blue-gray",
              className: "font-normal",
              children: order.currentTotalPrice.amount
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).account.orders._index.jsx",
              lineNumber: 230,
              columnNumber: 25
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/($locale).account.orders._index.jsx",
            lineNumber: 229,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: classes, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            import_react2.Typography,
            {
              variant: "small",
              color: "blue-gray",
              className: "font-normal",
              children: order.processedAt
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).account.orders._index.jsx",
              lineNumber: 239,
              columnNumber: 25
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/($locale).account.orders._index.jsx",
            lineNumber: 238,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: classes, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-max", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            import_react2.Chip,
            {
              size: "sm",
              variant: "ghost",
              value: order.financialStatus,
              color: order.financialStatus === "paid" ? "green" : order.financialStatus === "pending" ? "amber" : "red"
            },
            void 0,
            false,
            {
              fileName: "app/routes/($locale).account.orders._index.jsx",
              lineNumber: 249,
              columnNumber: 27
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/($locale).account.orders._index.jsx",
            lineNumber: 248,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/($locale).account.orders._index.jsx",
            lineNumber: 247,
            columnNumber: 23
          }, this)
        ] }, order.lineItems.nodes[0].title, true, {
          fileName: "app/routes/($locale).account.orders._index.jsx",
          lineNumber: 211,
          columnNumber: 21
        }, this);
      }
    ) }, void 0, false, {
      fileName: "app/routes/($locale).account.orders._index.jsx",
      lineNumber: 199,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 180,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 179,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/($locale).account.orders._index.jsx",
    lineNumber: 178,
    columnNumber: 7
  }, this);
}
var ORDER_ITEM_FRAGMENT = `#graphql
  fragment OrderItem on Order {
    currentTotalPrice {
      amount
      currencyCode
    }
    financialStatus
    fulfillmentStatus
    id
    lineItems(first: 10) {
      nodes {
        title
        variant {
          image {
            url
            altText
            height
            width
          }
        }
      }
    }
    orderNumber
    customerUrl
    statusUrl
    processedAt
  }
`;
var CUSTOMER_FRAGMENT = `#graphql
  fragment CustomerOrders on Customer {
    numberOfOrders
    orders(
      sortKey: PROCESSED_AT,
      reverse: true,
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...OrderItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        hasNextPage
        endCursor
      }
    }
  }
  ${ORDER_ITEM_FRAGMENT}
`;
var CUSTOMER_ORDERS_QUERY = `#graphql
  ${CUSTOMER_FRAGMENT}
  query CustomerOrders(
    $country: CountryCode
    $customerAccessToken: String!
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      ...CustomerOrders
    }
  }
`;
export {
  Orders as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).account.orders._index-CCSSM6U6.js.map
