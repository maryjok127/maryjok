import "/build/_shared/chunk-DSH2LC4E.js";
import "/build/_shared/chunk-BGS7F2B5.js";
import {
  PredictiveSearchForm,
  PredictiveSearchResults
} from "/build/_shared/chunk-X7MQYMRI.js";
import {
  CartMain
} from "/build/_shared/chunk-2KXI7LON.js";
import "/build/_shared/chunk-5O7KSPRK.js";
import {
  o
} from "/build/_shared/chunk-DGST5VAI.js";
import "/build/_shared/chunk-6I5S762C.js";
import "/build/_shared/chunk-AQMJZ442.js";
import "/build/_shared/chunk-NNH77UO3.js";
import {
  require_react_responsive
} from "/build/_shared/chunk-D3AIAV2V.js";
import {
  require_react as require_react2
} from "/build/_shared/chunk-3G62A2VJ.js";
import "/build/_shared/chunk-BSZVYZCA.js";
import {
  require_react_dom
} from "/build/_shared/chunk-FM7TTYIF.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-VY5OJHMS.js";
import {
  Await,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData,
  useMatches,
  useRouteError
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// public/favicon.svg
var favicon_default = "/build/_assets/favicon-IN6DMKSS.svg";

// app/styles/reset.css
var reset_default = "/build/_assets/reset-FEGHSTUV.css";

// app/styles/app.css
var app_default = "/build/_assets/app-DNXCCHOB.css";

// app/components/Layout.jsx
var import_react8 = __toESM(require_react());

// app/components/Aside.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Aside({ children, heading, id = "aside" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-modal": true, className: "overlay", id, role: "dialog", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "close-outside",
        onClick: () => {
          history.go(-1);
          window.location.hash = "";
        }
      },
      void 0,
      false,
      {
        fileName: "app/components/Aside.jsx",
        lineNumber: 15,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold", children: heading }, void 0, false, {
          fileName: "app/components/Aside.jsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseAside, {}, void 0, false, {
          fileName: "app/components/Aside.jsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Aside.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children }, void 0, false, {
        fileName: "app/components/Aside.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Aside.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Aside.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
function CloseAside() {
  return (
    /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "close", href: "", onChange: () => history.go(-1), children: "\xD7" }, void 0, false, {
      fileName: "app/components/Aside.jsx",
      lineNumber: 36,
      columnNumber: 5
    }, this)
  );
}

// app/components/Footer.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
function Footer({ menu }) {
  function getPath(url_path) {
    let url = new URL(url_path);
    let path = url.pathname;
    return path;
  }
  const viewLinksArr = ["Lips", "Face", "Eyes"];
  const navigateTo = (url_path) => {
    let url = getPath(url_path);
    window.location.href = url;
  };
  const goToCollection = (url) => {
    window.location.href = `/collections/${url}`;
  };
  const goToPage = (url) => {
    window.location.href = url;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "m-4 p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-section  text-xl font-semibold border-y-4 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-3 md:grid-cols-3 gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "cursor-pointer", onClick: () => goToPage("/"), children: "Stores" }, void 0, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 32,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "cursor-pointer", onClick: () => goToPage("/pages/terms-conditions"), children: "Terms & Conditions" }, void 0, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 33,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "cursor-pointer", onClick: () => goToPage("/pages/refund-policy"), children: "Return & Refund Policy" }, void 0, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 34,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "cursor-pointer", onClick: () => goToPage("/pages/shipping-delivery"), children: "Shipping & Delivery" }, void 0, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 35,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "cursor-pointer", onClick: () => goToPage("/pages/privacy-policy"), children: "Privacy Policy" }, void 0, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 36,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "cursor-pointer", onClick: () => goToPage("/pages/terms-conditions"), children: "FAQs" }, void 0, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 37,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "cursor-pointer", onClick: () => goToPage("/pages/about-us"), children: "About Us" }, void 0, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 38,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 31,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 30,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "py-6 footer-contact m-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "sm:flex gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "sm:w-[75%] w-[100%] grid grid-cols-4 gap-4 border-b-mobile footer_shop_brand", children: [
          menu.items.length && menu.items.map((cat, indexx) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: cat.items.length && viewLinksArr.indexOf(cat.title) >= 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer_link_title", children: cat.title }, void 0, false, {
                fileName: "app/components/Footer.jsx",
                lineNumber: 50,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: cat.items.map((subMenu, index) => {
                return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "cursor-pointer list-none", onClick: () => navigateTo(subMenu.url), children: subMenu.title }, `sub_menu_${index}`, false, {
                  fileName: "app/components/Footer.jsx",
                  lineNumber: 53,
                  columnNumber: 34
                }, this);
              }) }, void 0, false, {
                fileName: "app/components/Footer.jsx",
                lineNumber: 51,
                columnNumber: 23
              }, this)
            ] }, `wrapper_sub_menu_${indexx}`, true, {
              fileName: "app/components/Footer.jsx",
              lineNumber: 49,
              columnNumber: 21
            }, this) : null }, void 0, false, {
              fileName: "app/components/Footer.jsx",
              lineNumber: 47,
              columnNumber: 21
            }, this);
          }),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer_link_title", children: "Shop by sub-brands" }, void 0, false, {
              fileName: "app/components/Footer.jsx",
              lineNumber: 67,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "cursor-pointer list-none", onClick: () => goToCollection("pro-studio-mjk"), children: " Pro Studio " }, void 0, false, {
              fileName: "app/components/Footer.jsx",
              lineNumber: 68,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "cursor-pointer list-none", onClick: () => goToCollection("way-2-slay-mjk"), children: " Way 2 Slay " }, void 0, false, {
              fileName: "app/components/Footer.jsx",
              lineNumber: 69,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "cursor-pointer list-none", onClick: () => goToCollection("rizz-roll-mjk"), children: " Rizz and Roll " }, void 0, false, {
              fileName: "app/components/Footer.jsx",
              lineNumber: 70,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Footer.jsx",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 43,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "sm:w-[25%] w-[100%] cursor-pointer grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "font-semibold text-xl mt-2 sm:mt-0", children: "GET IN TOUCH" }, void 0, false, {
            fileName: "app/components/Footer.jsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 font-semibold text-[#969696]", children: " info@maryjok.com " }, void 0, false, {
            fileName: "app/components/Footer.jsx",
            lineNumber: 81,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 font-semibold text-[#969696]", children: "Monday to Saturday: 10 Am to 7 Pm" }, void 0, false, {
            fileName: "app/components/Footer.jsx",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex mt-4 sm:gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "flex-none w-10 sm:w-14", href: "https://www.instagram.com/maryjokofficial/?hl=en", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/insta_icon.png" }, void 0, false, {
                fileName: "app/components/Footer.jsx",
                lineNumber: 86,
                columnNumber: 111
              }, this),
              " "
            ] }, void 0, true, {
              fileName: "app/components/Footer.jsx",
              lineNumber: 86,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "flex-none w-10 sm:w-14", href: "https://www.facebook.com/profile.php?id=100064798900233&is_tour_dismissed", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/facebook_icon.png" }, void 0, false, {
                fileName: "app/components/Footer.jsx",
                lineNumber: 87,
                columnNumber: 136
              }, this),
              " "
            ] }, void 0, true, {
              fileName: "app/components/Footer.jsx",
              lineNumber: 87,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "flex-none w-10 sm:w-14", href: "https://www.youtube.com/channel/UCPI8xp_XDecCmYh90hCxH3Q", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/youtube_icon.png" }, void 0, false, {
                fileName: "app/components/Footer.jsx",
                lineNumber: 88,
                columnNumber: 119
              }, this),
              " "
            ] }, void 0, true, {
              fileName: "app/components/Footer.jsx",
              lineNumber: 88,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Footer.jsx",
            lineNumber: 85,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 75,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 42,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "footer_txt sm:border-0 text-center", children: " \xA9 2024 Maryjo K Cult Makeup | PP Consumer Pvt Ltd. All Rights Reserved " }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 93,
          columnNumber: 49
        }, this),
        " "
      ] }, void 0, true, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 93,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 41,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 29,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/components/Header.jsx
var import_react3 = __toESM(require_react());

// node_modules/tw-elements-react/dist/js/tw-elements-react.es.min.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
function re(t) {
  var r2, e, a = "";
  if (typeof t == "string" || typeof t == "number")
    a += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (r2 = 0; r2 < t.length; r2++)
        t[r2] && (e = re(t[r2])) && (a && (a += " "), a += e);
    else
      for (r2 in t)
        t[r2] && (a && (a += " "), a += r2);
  return a;
}
function C() {
  for (var t, r2, e = 0, a = ""; e < arguments.length; )
    (t = arguments[e++]) && (r2 = re(t)) && (a && (a += " "), a += r2);
  return a;
}
var le = ({ theme: t, style: r2 }) => {
  const [e, a] = (0, import_react.useState)(false), c = C(
    t.rippleWave,
    e ? t.rippleWaveActive : t.rippleWaveInactive
  );
  return (0, import_react.useEffect)(() => {
    a(true);
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: r2, className: c });
};
var ce = {
  ripple: "relative inline-block align-bottom",
  rippleOverflow: "absolute left-0 top-0 overflow-hidden w-full h-full pointer-events-none",
  rippleWave: "block rounded-[50%] pointer-events-none absolute touch-none transition-[transform,_opacity] ease-[cubic-bezier(0,0,0.15,1),_cubic-bezier(0,0,0.15,1)] z-[999] scale-0",
  rippleWaveActive: "scale-100 opacity-0",
  rippleWaveInactive: "scale-0 opacity-50",
  unbound: "overflow-visible"
};
var de = (...t) => {
  const r2 = import_react.default.useRef();
  return import_react.default.useEffect(() => {
    t.forEach((e) => {
      e && (typeof e == "function" ? e(r2.current) : e.current = r2.current);
    });
  }, [t]), r2;
};
var De = import_react.default.forwardRef(
  ({
    className: t,
    rippleTag: r2 = "div",
    rippleCentered: e,
    rippleDuration: a = 500,
    rippleUnbound: c,
    rippleRadius: l = 0,
    rippleColor: i = "dark",
    rippleColorDark: d = "",
    children: u,
    onMouseDown: n,
    theme: m,
    ...S
  }, v) => {
    const y = (0, import_react.useRef)(null), s = de(v, y), p = { ...ce, ...m }, g = "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%", L = [0, 0, 0], k = [
      { name: "primary", gradientColor: "#3B71CA" },
      { name: "secondary", gradientColor: "#9FA6B2" },
      { name: "success", gradientColor: "#14A44D" },
      { name: "danger", gradientColor: "#DC4C64" },
      { name: "warning", gradientColor: "#E4A11B" },
      { name: "info", gradientColor: "#54B4D3" },
      { name: "light", gradientColor: "#fbfbfb" },
      { name: "dark", gradientColor: "#262626" }
    ], [_, z] = (0, import_react.useState)([]), [R, P] = (0, import_react.useState)([]), M = C(p.ripple, t), I = C(
      c ? p.unbound : p.rippleOverflow,
      R
    ), X = () => {
      let b = i || "rgb(0,0,0)";
      (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) && (b = d || i || "rgb(0,0,0)");
      const x = k.find(
        (f) => f.name === (b == null ? void 0 : b.toLowerCase())
      ), N = x ? q(x.gradientColor).join(",") : q(b).join(",");
      return `radial-gradient(circle, ${g.split("{{color}}").join(`${N}`)})`;
    }, q = (b) => {
      const x = (f) => (f.length < 7 && (f = `#${f[1]}${f[1]}${f[2]}${f[2]}${f[3]}${f[3]}`), [
        parseInt(f.substr(1, 2), 16),
        parseInt(f.substr(3, 2), 16),
        parseInt(f.substr(5, 2), 16)
      ]), N = (f) => {
        const T = document.body.appendChild(
          document.createElement("fictum")
        ), W = "rgb(1, 2, 3)";
        return T.style.color = W, T.style.color !== W || (T.style.color = f, T.style.color === W || T.style.color === "") ? L : (f = getComputedStyle(T).color, document.body.removeChild(T), f);
      }, $ = (f) => (f = f.match(/[.\d]+/g).map((T) => +Number(T)), f.length = 3, f);
      return b.toLowerCase() === "transparent" ? L : b[0] === "#" ? x(b) : (b.indexOf("rgb") === -1 && (b = N(b)), b.indexOf("rgb") === 0 ? $(b) : L);
    }, F = (b) => {
      const { offsetX: x, offsetY: N, height: $, width: f } = b, T = N <= $ / 2, W = x <= f / 2, B = (Q, ne) => Math.sqrt(Q ** 2 + ne ** 2), U = N === $ / 2 && x === f / 2, j = {
        first: T === true && W === false,
        second: T === true && W === true,
        third: T === false && W === true,
        fourth: T === false && W === false
      }, Y = {
        topLeft: B(x, N),
        topRight: B(f - x, N),
        bottomLeft: B(x, $ - N),
        bottomRight: B(f - x, $ - N)
      };
      let w = 0;
      return U || j.fourth ? w = Y.topLeft : j.third ? w = Y.topRight : j.second ? w = Y.bottomRight : j.first && (w = Y.bottomLeft), w * 2;
    }, o2 = () => !u || !import_react.default.isValidElement(u) || Array.isArray(u) ? [] : u.props.className.split(" ").filter((x) => x.includes("rounded")), K = (b) => {
      var w;
      const x = (w = s.current) == null ? void 0 : w.getBoundingClientRect(), N = b.clientX - x.left, $ = b.clientY - x.top, f = x.height, T = x.width, W = {
        offsetX: e ? f / 2 : N,
        offsetY: e ? T / 2 : $,
        height: f,
        width: T
      }, B = {
        delay: a && a * 0.5,
        duration: a && a - a * 0.5
      }, U = F(W), j = l || U / 2, Y = {
        left: e ? `${T / 2 - j}px` : `${N - j}px`,
        top: e ? `${f / 2 - j}px` : `${$ - j}px`,
        height: l ? `${l * 2}px` : `${U}px`,
        width: l ? `${l * 2}px` : `${U}px`,
        transitionDelay: `0s, ${B.delay}ms`,
        transitionDuration: `${a}ms, ${B.duration}ms`
      };
      return P(o2()), { ...Y, backgroundImage: `${X()}` };
    }, G = (b) => {
      const x = K(b), N = _.concat(x);
      z(N), n && n(b);
    };
    return (0, import_react.useEffect)(() => {
      const b = setTimeout(() => {
        _.length > 0 && z(_.splice(1, _.length - 1));
      }, a);
      return () => {
        clearTimeout(b);
      };
    }, [a, _]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      r2,
      {
        className: M,
        onMouseDown: (b) => G(b),
        ref: s,
        ...S,
        children: [
          u,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: I, children: _.map((b, x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(le, { theme: p, style: b }, x)) })
        ]
      }
    );
  }
);
var ee = (0, import_react.createContext)({
  isOpenModal: false,
  setTransitionDuration: null,
  scrollable: false
});
var he = {
  wrapper: "min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600",
  scrollable: "max-h-full"
};
var Pe = import_react.default.forwardRef(
  ({ className: t, children: r2, theme: e, tag: a = "div", ...c }, l) => {
    const i = { ...he, ...e }, { scrollable: d } = (0, import_react.useContext)(ee), u = C(
      i.wrapper,
      d && i.scrollable,
      t
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a, { className: u, ...c, ref: l, children: r2 });
  }
);
var ve = {
  wrapper: "flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
};
var Oe = import_react.default.forwardRef(
  ({ className: t, children: r2, theme: e, tag: a = "div", ...c }, l) => {
    const i = { ...ve, ...e }, d = C(i.wrapper, t);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a, { className: d, ...c, ref: l, children: r2 });
  }
);
var xe = {
  scrollable: "overflow-y-auto",
  wrapper: "relative flex-auto p-4"
};
var We = import_react.default.forwardRef(
  ({ className: t, children: r2, theme: e, tag: a = "div", ...c }, l) => {
    const i = { ...xe, ...e }, { scrollable: d } = (0, import_react.useContext)(ee), u = C(
      i.wrapper,
      d && i.scrollable,
      t
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a, { className: u, ...c, ref: l, children: r2 });
  }
);
var Te = {
  wrapper: "flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
};
var Be = import_react.default.forwardRef(
  ({ className: t, children: r2, theme: e, tag: a = "div", ...c }, l) => {
    const i = { ...Te, ...e }, d = C(i.wrapper, t);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a, { className: d, ...c, ref: l, children: r2 });
  }
);
var ye = {
  wrapper: "relative",
  input: "peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none placeholder:opacity-0 disabled:bg-neutral-100 read-only:bg-neutral-100 dark:disabled:bg-neutral-700 dark:read-only:bg-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary",
  activeInput: "placeholder:opacity-100",
  label: "pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate text-neutral-500 transition-all duration-200 ease-out peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary",
  activeLabel: "scale-[0.8]",
  notch: "group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none",
  notchLeading: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem]",
  activeNotchLeading: "border-r-0",
  focusedNotchLeading: "border-r-0",
  notchLeadingDefault: "border-neutral-300 dark:border-neutral-600",
  focusedNotchLeadingDefault: "shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] border-primary dark:border-primary",
  notchLeadingWhite: "border-neutral-200",
  focusedNotchLeadingWhite: "shadow-[-1px_0_0_#ffffff,_0_1px_0_0_#ffffff,_0_-1px_0_0_#ffffff] border-white",
  notchMiddle: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0",
  activeNotchMiddle: "border-x-0 border-t border-solid border-t-transparent dark:border-t-transparent",
  focusedNotchMiddle: "border-x-0 border-t border-solid border-t-transparent dark:border-t-transparent",
  notchMiddleDefault: "border-neutral-300 dark:border-neutral-600",
  focusedNotchMiddleDefault: "shadow-[0_1px_0_0_#3b71ca] border-primary dark:border-primary",
  notchMiddleWhite: "border-neutral-200",
  focusedNotchMiddleWhite: "shadow-[0_1px_0_0_#ffffff] border-white",
  notchTrailing: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem]",
  activeNotchTrailing: "border-l-0",
  focusedNotchTrailing: "border-l-0",
  notchTrailingDefault: "border-neutral-300 dark:border-neutral-600",
  focusedNotchTrailingDefault: "shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] border-primary dark:border-primary",
  notchTrailingWhite: "border-neutral-200",
  focusedNotchTrailingWhite: "shadow-[1px_0_0_#ffffff,_0_-1px_0_0_#ffffff,_0_1px_0_0_#ffffff] border-white",
  counter: "text-right leading-[1.6]",
  inputSizeLg: "px-3 py-[0.32rem] leading-[2.15]",
  inputSizeBase: "px-3 py-[0.32rem] leading-[1.6]",
  inputSizeSm: "px-3 py-[0.33rem] text-xs leading-[1.5]",
  labelSizeLg: "pt-[0.36rem] leading-[2.15] peer-focus:-translate-y-[1.15rem]",
  activeLabelSizeLg: "-translate-y-[1.15rem]",
  labelSizeBase: "pt-[0.30rem] leading-[1.6] peer-focus:-translate-y-[0.9rem]",
  activeLabelSizeBase: "-translate-y-[0.9rem]",
  labelSizeSm: "pt-[0.36rem] text-xs leading-[1.5] peer-focus:-translate-y-[0.75rem]",
  activeLabelSizeSm: "-translate-y-[0.75rem]"
};
var $e = import_react.default.forwardRef(
  ({
    className: t,
    size: r2 = "base",
    value: e,
    defaultValue: a,
    id: c,
    wrapperTag: l = "div",
    label: i,
    onChange: d,
    children: u,
    labelRef: n,
    type: m,
    onBlur: S,
    readonly: v = false,
    theme: y,
    formWhite: s = false,
    counter: p = false,
    maxLength: g,
    ...L
  }, k) => {
    var j, Y;
    const [_, z] = (0, import_react.useState)(e || a), [R, P] = (0, import_react.useState)(0), [M, I] = (0, import_react.useState)(false), [X, q] = (0, import_react.useState)(false), F = (0, import_react.useRef)(null);
    (0, import_react.useImperativeHandle)(k, () => F.current);
    const o2 = { ...ye, ...y }, K = (0, import_react.useRef)(null), G = n || K, b = C(
      o2.input,
      M && o2.activeInput,
      r2 === "lg" ? o2.inputSizeLg : r2 === "base" ? o2.inputSizeBase : r2 === "sm" ? o2.inputSizeSm : o2.inputSizeBase,
      t
    ), x = C(
      o2.label,
      M && o2.activeLabel,
      M && (r2 === "lg" ? o2.activeLabelSizeLg : r2 === "base" ? o2.activeLabelSizeBase : r2 === "sm" ? o2.activeLabelSizeSm : o2.activeLabelSizeBase),
      r2 === "lg" ? o2.labelSizeLg : r2 === "base" ? o2.labelSizeBase : r2 === "sm" ? o2.labelSizeSm : o2.labelSizeBase
    ), N = C(
      o2.notchLeading,
      s ? o2.notchLeadingWhite : o2.notchLeadingDefault,
      M && o2.activeNotchLeading,
      X && o2.focusedNotchLeading,
      X && (s ? o2.focusedNotchLeadingWhite : o2.focusedNotchLeadingDefault)
    ), $ = C(
      o2.notchMiddle,
      s ? o2.notchMiddleWhite : o2.notchMiddleDefault,
      M && o2.activeNotchMiddle,
      X && o2.focusedNotchMiddle,
      X && (s ? o2.focusedNotchMiddleWhite : o2.focusedNotchMiddleDefault)
    ), f = C(
      o2.notchTrailing,
      s ? o2.notchTrailingWhite : o2.notchTrailingDefault,
      M && o2.activeNotchTrailing,
      X && o2.focusedNotchTrailing,
      X && (s ? o2.focusedNotchTrailingWhite : o2.focusedNotchTrailingDefault)
    );
    (0, import_react.useEffect)(() => {
      if (!F.current)
        return;
      const { value: w } = F.current;
      w != "" ? I(true) : I(false);
    }, [(j = F.current) == null ? void 0 : j.value]), (0, import_react.useEffect)(() => {
      e !== void 0 && (e != "" ? I(true) : I(false));
    }, [e]), (0, import_react.useEffect)(() => {
      a !== void 0 && (a != "" ? I(true) : I(false));
    }, [a]);
    const T = (0, import_react.useCallback)(() => {
      var w;
      (w = G.current) != null && w.clientWidth && P(G.current.clientWidth * 0.8 + 8);
    }, [G]);
    (0, import_react.useEffect)(() => {
      T();
    }, [(Y = G.current) == null ? void 0 : Y.clientWidth, T]);
    const W = (w) => {
      p ? B(w) : z(w.target.value), d == null || d(w);
    }, B = (w) => {
      const Q = w.target.value;
      g === void 0 || g <= 0 || Q.length <= g && z(Q);
    }, U = (0, import_react.useCallback)(
      (w) => {
        F.current && (_ !== void 0 && _ != "" || e !== void 0 && e != "" || F.current.value != "" ? I(true) : I(false), S && S(w));
      },
      [_, e, S]
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(l, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(l, { className: o2.wrapper, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "input",
          {
            type: m,
            readOnly: v,
            className: b,
            onBlur: (w) => {
              U(w), q(false);
            },
            onChange: W,
            onFocus: () => {
              q(true);
            },
            value: e,
            defaultValue: a,
            id: c,
            ref: F,
            maxLength: g,
            ...L
          }
        ),
        i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { className: x, htmlFor: c, ref: G, children: i }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: o2.notch, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: N }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              className: $,
              style: { width: R }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: f })
        ] }),
        u
      ] }),
      p && g !== void 0 && g > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: o2.counter, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
        (_ == null ? void 0 : _.toString().length) || 0,
        " / ",
        g
      ] }) })
    ] });
  }
);
var ke = {
  defaultTabs: "mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0",
  verticalTabs: "mr-4 flex list-none flex-col flex-wrap pl-0",
  pillsTabs: "mb-5 flex list-none flex-col flex-wrap pl-0 md:flex-row"
};
var ae = import_react.default.createContext({});
var Ae = import_react.default.forwardRef(
  ({
    className: t,
    children: r2,
    theme: e,
    fill: a = false,
    justify: c = false,
    vertical: l = false,
    pills: i = false,
    ...d
  }, u) => {
    const n = {
      ...ke,
      ...e
    }, m = C(
      i ? l ? n.verticalTabs : n.pillsTabs : l ? n.verticalTabs : n.defaultTabs,
      t
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ae.Provider,
      {
        value: {
          fill: a,
          justify: c,
          vertical: l,
          pills: i
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { className: m, ref: u, ...d, children: r2 })
      }
    );
  }
);
var we = {
  fillTabsItem: "flex-auto text-center",
  justifyTabsItem: "flex-grow basis-0 text-center",
  verticalTabsItem: "flex-grow text-center",
  disabledTabsItem: "disabled pointer-events-none",
  tabsLink: "mt-2 block cursor-pointer border-x-0 border-b-2 border-t-0 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight hover:isolate hover:border-x-0 hover:bg-neutral-100 dark:hover:bg-transparent focus:isolate",
  pillsLink: "mt-2 block cursor-pointer rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 dark:bg-neutral-700 dark:text-white md:mr-4",
  inactiveTabsLink: "border-transparent text-neutral-500 focus:border-transparent dark:text-neutral-400",
  inactivePillsLink: "bg-neutral-100 dark:bg-neutral-700 dark:text-white md:mr-4",
  disabledTabsLink: "!text-neutral-400 dark:!text-neutral-600",
  disabledPillsLink: "!bg-neutral-200 !text-neutral-400 dark:!text-neutral-500 dark:!bg-neutral-600",
  activePrimaryPillsLink: "!bg-primary-100 !text-primary-700 dark:text-primary-700 ",
  activeSecondaryPillsLink: "!bg-secondary-200 !text-secondary-900 dark:text-secondary-900",
  activeSuccessPillsLink: "!bg-success-100 !text-success-700 dark:text-success-700",
  activeDangerPillsLink: "!bg-danger-100 !text-danger-700 dark:text-danger-700",
  activeWarningPillsLink: "!bg-warning-100 !text-warning-800 dark:text-warning-800",
  activeInfoPillsLink: "!bg-info-100 !text-info-800 dark:text-info-800",
  activeLightPillsLink: "!bg-neutral-50 !text-neutral-600 dark:text-neutral-600",
  activeDarkPillsLink: "!bg-neutral-800 !text-neutral-50 dark:!bg-neutral-900 dark:text-neutral-50",
  activePrimaryTabsLink: "text-primary border-primary dark:border-primary-400 dark:text-primary-400",
  activeSecondaryTabsLink: "text-secondary border-secondary dark:text-secondary",
  activeSuccessTabsLink: "border-success text-success dark:text-success",
  activeDangerTabsLink: "border-danger text-danger dark:text-danger",
  activeWarningTabsLink: "border-warning text-warning dark:text-warning",
  activeInfoTabsLink: "border-info text-info dark:text-info",
  activeLightTabsLink: "border-neutral-50 text-neutral-50 dark:text-neutral-50",
  activeDarkTabsLink: "border-neutral-800 text-neutral-800 dark:border-neutral-600 dark:text-neutral-600"
};
var ze = import_react.default.forwardRef(
  ({
    className: t,
    wrapperClass: r2,
    active: e = false,
    disabled: a = false,
    color: c = "primary",
    children: l,
    theme: i,
    tag: d = "a",
    ...u
  }, n) => {
    const { fill: m, justify: S, vertical: v, pills: y } = (0, import_react.useContext)(ae), s = {
      ...we,
      ...i
    }, p = C(
      m && s.fillTabsItem,
      S && s.justifyTabsItem,
      v && s.verticalTabsItem,
      a && s.disabledTabsItem,
      r2
    ), g = {
      primary: {
        tabs: s.activePrimaryTabsLink,
        pills: s.activePrimaryPillsLink
      },
      secondary: {
        tabs: s.activeSecondaryTabsLink,
        pills: s.activeSecondaryPillsLink
      },
      success: {
        tabs: s.activeSuccessTabsLink,
        pills: s.activeSuccessPillsLink
      },
      danger: {
        tabs: s.activeDangerTabsLink,
        pills: s.activeDangerPillsLink
      },
      warning: {
        tabs: s.activeWarningTabsLink,
        pills: s.activeWarningPillsLink
      },
      info: {
        tabs: s.activeInfoTabsLink,
        pills: s.activeInfoPillsLink
      },
      light: {
        tabs: s.activeLightTabsLink,
        pills: s.activeLightPillsLink
      },
      dark: {
        tabs: s.activeDarkTabsLink,
        pills: s.activeDarkPillsLink
      }
    }, L = C(
      y ? s.pillsLink : s.tabsLink,
      a ? y ? s.disabledPillsLink : s.disabledTabsLink : "",
      y && !a ? e ? g[c].pills : s.inactivePillsLink : e ? g[c].tabs : s.inactiveTabsLink,
      t
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { className: p, role: "presentation", ref: n, ...u, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d, { className: L, ref: n, role: "tab", ...u, children: l }) });
  }
);
var Le = {
  tabsContent: "my-2"
};
var Fe = import_react.default.forwardRef(
  ({ className: t, tag: r2 = "div", children: e, theme: a, ...c }, l) => {
    const i = {
      ...Le,
      ...a
    }, d = C(i.tabsContent, t);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r2, { className: d, ref: l, ...c, children: e });
  }
);
var _e = {
  tabsPane: "transition-opacity duration-150 ease-linear",
  isShown: "block",
  isHidden: "hidden",
  activeTabsPane: "opacity-100",
  inactiveTabsPane: "opacity-0"
};
var Re = (...t) => {
  const r2 = import_react.default.useRef();
  return import_react.default.useEffect(() => {
    t.forEach((e) => {
      e && (typeof e == "function" ? e(r2.current) : e.current = r2.current);
    });
  }, [t]), r2;
};
var je = import_react.default.forwardRef(
  ({
    className: t,
    tag: r2 = "div",
    show: e = false,
    theme: a,
    onShow: c,
    onShown: l,
    onHide: i,
    onHidden: d,
    children: u,
    ...n
  }, m) => {
    const [S, v] = (0, import_react.useState)(false), y = (0, import_react.useRef)(null), s = Re(m, y), p = (0, import_react.useRef)(0), g = {
      ..._e,
      ...a
    }, L = C(
      g.tabsPane,
      e ? g.isShown : g.isHidden,
      S ? g.activeTabsPane : g.inactiveTabsPane,
      t
    );
    return (0, import_react.useEffect)(() => {
      if (y.current) {
        const { transitionDuration: k } = window.getComputedStyle(
          y.current
        ), _ = Number(k.replace("s", "")) * 1e3;
        p.current = _;
      }
    }, []), (0, import_react.useEffect)(() => {
      let k;
      return e ? (c == null || c(), k = setTimeout(() => {
        v(true), l == null || l();
      }, 100)) : (i == null || i(), v(false), k = setTimeout(() => {
        d == null || d();
      }, p.current)), () => {
        clearTimeout(k);
      };
    }, [e]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r2, { className: L, role: "tabpanel", ref: s, ...n, children: u });
  }
);

// app/components/Header.jsx
var import_react4 = __toESM(require_react());
var import_react_responsive = __toESM(require_react_responsive());
var import_react5 = __toESM(require_react2());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Header({ header, isLoggedIn, cart }) {
  const { shop, menu } = header;
  const isLargeScreen = (0, import_react_responsive.useMediaQuery)({ minWidth: 1024 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "header border-b border-gray-200 sm:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full grid grid-rows-2 items-center sm:grid-rows-1 grid-flow-col gap-0 sm:gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "m-auto sm:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative flex w-full justify-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "logo flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { className: "flex items-center", prefetch: "intent", to: "/", style: activeLinkStyle, end: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "w-[16rem] sm:mb-0 h-[20px] sm:h-[100%] mst_mobile_img", src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/New_MJK_Logo_png.png?v=1714388036" }, void 0, false, {
          fileName: "app/components/Header.jsx",
          lineNumber: 35,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Header.jsx",
          lineNumber: 34,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Header.jsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "rounded w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PredictiveSearchForm, { children: ({ fetchResults, inputRef }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: " ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { backgroundColor: "#000" }, className: "relative flex w-full items-center justify-end", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "input",
              {
                type: "search",
                className: "search relative w-48 sm:h-[50px] h-[40px] sm:w-[320px] md:w-[400px] lg:w-[470px] m-0 py-[10px] px-[15px] block rounded-bl-lg rounded-tl-lg border bg-transparent bg-clip-padding  text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white text-white focus:outline-none  placeholder:text-white dark:focus:border-primary mst-card",
                "aria-label": "Search",
                "aria-describedby": "button-addon3",
                name: "q",
                onChange: fetchResults,
                onFocus: fetchResults,
                placeholder: "Mary Jo K",
                ref: inputRef
              },
              void 0,
              false,
              {
                fileName: "app/components/Header.jsx",
                lineNumber: 43,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "absolute right-2 h-[25px] w-[25px]", src: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/search_icon_91210688-67e5-46ef-bdb0-5552bfc77b0b.png?v=1713174297", alt: "search" }, void 0, false, {
              fileName: "app/components/Header.jsx",
              lineNumber: 54,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(De, {}, void 0, false, {
              fileName: "app/components/Header.jsx",
              lineNumber: 55,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Header.jsx",
            lineNumber: 42,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/components/Header.jsx",
            lineNumber: 41,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/Header.jsx",
            lineNumber: 39,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PredictiveSearchResults, {}, void 0, false, {
            fileName: "app/components/Header.jsx",
            lineNumber: 68,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Header.jsx",
          lineNumber: 38,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.jsx",
        lineNumber: 32,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "sm:flex gap-2 items-center sm:block hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { prefetch: "intent", to: "/account", style: activeLinkStyle, children: isLoggedIn ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, {}, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 78,
        columnNumber: 14
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inline-flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "w-6 h-6",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "path",
              {
                fillRule: "evenodd",
                d: "M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
                clipRule: "evenodd"
              },
              void 0,
              false,
              {
                fileName: "app/components/Header.jsx",
                lineNumber: 87,
                columnNumber: 19
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "app/components/Header.jsx",
            lineNumber: 81,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "login_span font-semibold mt-[-3px] ", children: "Login/Register" }, void 0, false, {
          fileName: "app/components/Header.jsx",
          lineNumber: 93,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.jsx",
        lineNumber: 80,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 76,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HeaderCtas, { isLoggedIn, cart }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.jsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HeaderMenu, { menu, viewport: "desktop" }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 101,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function HeaderMenu({ menu, viewport }) {
  const [root] = useMatches();
  const publicStoreDomain = root?.data?.publicStoreDomain;
  const className = `header-menu-${viewport} z-10`;
  function closeAside(event) {
    if (viewport === "mobile") {
      event.preventDefault();
      window.location.href = event.currentTarget.href;
    }
  }
  function getPath(url_path) {
    let url = new URL(url_path);
    let path = url.pathname;
    return path;
  }
  function goToCollection(url_path) {
    let url = getPath(url_path);
    window.location.href = url;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className, role: "navigation", children: [
    viewport === "mobile" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      NavLink,
      {
        end: true,
        onClick: closeAside,
        prefetch: "intent",
        style: activeLinkStyle,
        to: "/"
      },
      void 0,
      false,
      {
        fileName: "app/components/Header.jsx",
        lineNumber: 132,
        columnNumber: 9
      },
      this
    ),
    menu.items.map((item, index) => {
      if (!item.url)
        return null;
      const url = item.url.includes("myshopify.com") || item.url.includes(publicStoreDomain) ? new URL(item.url).pathname : item.url;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative inline-block text-left group", children: [
        viewport === "mobile" ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "px-4 py-2 text-gray-800 focus:outline-none", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { onClick: () => goToCollection(item.url), children: item.title }, void 0, false, {
            fileName: "app/components/Header.jsx",
            lineNumber: 153,
            columnNumber: 17
          }, this),
          viewport === "mobile" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: item.items.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { style: { display: "inline" }, height: "24", viewBox: "0 0 48 48", width: "24", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M14 20l10 10 10-10z" }, void 0, false, {
              fileName: "app/components/Header.jsx",
              lineNumber: 157,
              columnNumber: 160
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M0 0h48v48h-48z", fill: "none" }, void 0, false, {
              fileName: "app/components/Header.jsx",
              lineNumber: 157,
              columnNumber: 191
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Header.jsx",
            lineNumber: 157,
            columnNumber: 50
          }, this) }, void 0, false, {
            fileName: "app/components/Header.jsx",
            lineNumber: 157,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Header.jsx",
          lineNumber: 151,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => goToCollection(item.url), className: "px-4 py-2 text-gray-800 focus:outline-none", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { onClick: () => goToCollection(item.url), children: [
            " ",
            item.title,
            " "
          ] }, void 0, true, {
            fileName: "app/components/Header.jsx",
            lineNumber: 163,
            columnNumber: 18
          }, this),
          viewport === "mobile" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { style: { display: "inline" }, height: "24", viewBox: "0 0 48 48", width: "24", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M14 20l10 10 10-10z" }, void 0, false, {
              fileName: "app/components/Header.jsx",
              lineNumber: 165,
              columnNumber: 131
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M0 0h48v48h-48z", fill: "none" }, void 0, false, {
              fileName: "app/components/Header.jsx",
              lineNumber: 165,
              columnNumber: 162
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Header.jsx",
            lineNumber: 165,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Header.jsx",
          lineNumber: 162,
          columnNumber: 15
        }, this),
        item.items.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute left-16 z-20 sm:left-0 sm:z-20 md:left-0 hidden w-48 bg-white border border-gray-300 divide-y divide-gray-200 rounded-lg shadow-lg group-hover:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "py-1 group-hover:block", children: item.items.map((it) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "a",
          {
            href: getPath(it.url),
            className: "menu block px-4 py-2 text-gray-800 hover:bg-gray-100 group-hover:block hover:opacity-100",
            children: it.title
          },
          void 0,
          false,
          {
            fileName: "app/components/Header.jsx",
            lineNumber: 175,
            columnNumber: 21
          },
          this
        )) }, void 0, false, {
          fileName: "app/components/Header.jsx",
          lineNumber: 173,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Header.jsx",
          lineNumber: 172,
          columnNumber: 15
        }, this)
      ] }, `header_${index}`, true, {
        fileName: "app/components/Header.jsx",
        lineNumber: 149,
        columnNumber: 11
      }, this);
    })
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 130,
    columnNumber: 5
  }, this);
}
function HeaderCtas({ isLoggedIn, cart }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "header-ctas", role: "navigation", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { prefetch: "intent", to: "/account", style: activeLinkStyle, children: isLoggedIn ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "#d0715f",
        className: "w-6 h-6 block",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "path",
          {
            fillRule: "evenodd",
            d: "M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
            clipRule: "evenodd"
          },
          void 0,
          false,
          {
            fileName: "app/components/Header.jsx",
            lineNumber: 204,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/Header.jsx",
        lineNumber: 198,
        columnNumber: 11
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "#d0715f",
        className: "w-6 h-6 sm:hidden block",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "path",
          {
            fillRule: "evenodd",
            d: "M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
            clipRule: "evenodd"
          },
          void 0,
          false,
          {
            fileName: "app/components/Header.jsx",
            lineNumber: 217,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/Header.jsx",
        lineNumber: 211,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 196,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SearchToggle, {}, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 225,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartToggle, { cart }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 226,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HeaderMenuMobileToggle, {}, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 227,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 194,
    columnNumber: 5
  }, this);
}
function HeaderMenuMobileToggle() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "header-menu-mobile-toggle text-[#d0715f]", href: "#mobile-menu-aside", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "\u2630" }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 235,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 234,
    columnNumber: 5
  }, this);
}
function SearchToggle() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#search-aside", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "#d0715f",
      className: "w-6 h-6",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        },
        void 0,
        false,
        {
          fileName: "app/components/Header.jsx",
          lineNumber: 251,
          columnNumber: 9
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/components/Header.jsx",
      lineNumber: 243,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 242,
    columnNumber: 5
  }, this);
}
function CartBadge({ count }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#cart-aside", className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "#d0715f",
        className: "w-6 h-6",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          },
          void 0,
          false,
          {
            fileName: "app/components/Header.jsx",
            lineNumber: 274,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/Header.jsx",
        lineNumber: 266,
        columnNumber: 7
      },
      this
    ),
    count > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "absolute cart_counter top-[-5px] right-[-10px]", children: count }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 280,
      columnNumber: 22
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.jsx",
    lineNumber: 265,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 264,
    columnNumber: 5
  }, this);
}
function CartToggle({ cart }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartBadge, { count: 0 }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 291,
    columnNumber: 25
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Await, { resolve: cart, children: (cart2) => {
    if (!cart2)
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartBadge, { count: 0 }, void 0, false, {
        fileName: "app/components/Header.jsx",
        lineNumber: 294,
        columnNumber: 29
      }, this);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartBadge, { count: cart2.totalQuantity || 0 }, void 0, false, {
      fileName: "app/components/Header.jsx",
      lineNumber: 295,
      columnNumber: 18
    }, this);
  } }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 292,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header.jsx",
    lineNumber: 291,
    columnNumber: 5
  }, this);
}
function activeLinkStyle({ isActive, isPending }) {
  return {
    fontWeight: isActive ? "bold" : "",
    color: isPending ? "grey" : "#d0715f"
  };
}

// app/components/AnnouncemnetBar.jsx
var import_react6 = __toESM(require_react());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var AnnouncementBar = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "div",
    {
      className: "text-center",
      style: { backgroundColor: "#010101", color: "#fff", padding: "8px 5px 5px" },
      children: "Choose Your Makeup Cult Now !"
    },
    void 0,
    false,
    {
      fileName: "app/components/AnnouncemnetBar.jsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
};
var AnnouncemnetBar_default = AnnouncementBar;

// app/components/Layout.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function Layout({ cart, children = null, footer, header, isLoggedIn }) {
  const images = [
    "https://cdn.shopify.com/s/files/1/0810/9863/7603/files/6995513d5b84551a7c89579bda02b56d.jpg?v=1693061468",
    "https://cdn.shopify.com/s/files/1/0810/9863/7603/files/6995513d5b84551a7c89579bda02b56d.jpg?v=1693061468",
    "https://cdn.shopify.com/s/files/1/0810/9863/7603/files/6995513d5b84551a7c89579bda02b56d.jpg?v=1693061468"
    // Add more image URLs
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AnnouncemnetBar_default, {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 31,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CartAside, { cart }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SearchAside, {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MobileMenuAside, { menu: header.menu }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Header, { header, cart, isLoggedIn }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { children }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react8.Suspense, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Await, { resolve: footer, children: (footer2) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Footer, { menu: header.menu }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 39,
      columnNumber: 24
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
function CartAside({ cart }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Aside, { id: "cart-aside", heading: "CART", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react8.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Loading cart ..." }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 49,
    columnNumber: 27
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Await, { resolve: cart, children: (cart2) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CartMain, { cart: cart2, layout: "aside" }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 52,
      columnNumber: 20
    }, this);
  } }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 50,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}
function SearchAside() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Aside, { id: "search-aside", heading: "SEARCH", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "predictive-search", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 64,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PredictiveSearchForm, { children: ({ fetchResults, inputRef }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "input",
        {
          name: "q",
          onChange: fetchResults,
          onFocus: fetchResults,
          placeholder: "Search",
          ref: inputRef,
          type: "search"
        },
        void 0,
        false,
        {
          fileName: "app/components/Layout.jsx",
          lineNumber: 68,
          columnNumber: 15
        },
        this
      ),
      "\xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "submit", children: "Search from Custom" }, void 0, false, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 77,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 67,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PredictiveSearchResults, {}, void 0, false, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 81,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 63,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}
function MobileMenuAside({ menu }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Aside, { id: "mobile-menu-aside", heading: "MENU", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HeaderMenu, { menu, viewport: "mobile" }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 90,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-42Y6545G.css";

// app/root.jsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function links() {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: reset_default },
    { rel: "stylesheet", href: app_default },
    {
      rel: "preconnect",
      href: "https://cdn.shopify.com"
    },
    {
      rel: "preconnect",
      href: "https://shop.app"
    },
    { rel: "icon", type: "image/svg+xml", href: favicon_default }
  ];
}
function App() {
  const data = useLoaderData();
  const image = ["https://cdn.shopify.com/s/files/1/0599/7894/0607/products/Artboard2_7746b5e7-35c9-4fc8-bcd9-9d98e80a5abb.jpg", "https://cdn.shopify.com/s/files/1/0599/7894/0607/products/Artboard4_7e4b511f-1796-49a7-89de-7ba7d18d3544.jpg", "https://cdn.shopify.com/s/files/1/0599/7894/0607/products/Artboard2_7746b5e7-35c9-4fc8-bcd9-9d98e80a5abb.jpg?v=1681735611"];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { name: "oke:subscriber_id", content: "866361a1-6116-4d14-abc8-0565f32d51cb" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("title", { children: "Mary Jo K" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { rel: "icon", type: "image/x-icon", href: "/favicon.png" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "link",
        {
          rel: "stylesheet",
          type: "text/css",
          charset: "UTF-8",
          href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        },
        void 0,
        false,
        {
          fileName: "app/root.jsx",
          lineNumber: 98,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "link",
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        },
        void 0,
        false,
        {
          fileName: "app/root.jsx",
          lineNumber: 104,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 109,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 110,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        o,
        {
          okendoProviderData: data.okendoProviderData
        },
        void 0,
        false,
        {
          fileName: "app/root.jsx",
          lineNumber: 113,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Layout, { ...data, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 117,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 122,
        columnNumber: 3
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 91,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  const error = useRouteError();
  const [root] = useMatches();
  let errorMessage = "Unknown error";
  let errorStatus = 500;
  if (isRouteErrorResponse(error)) {
    errorMessage = error?.data?.message ?? error.data;
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 149,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 150,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 151,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 152,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 148,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Layout, { ...root.data, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "route-error", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Oopss" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 157,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: errorStatus }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 158,
          columnNumber: 13
        }, this),
        errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("fieldset", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("pre", { children: errorMessage }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 161,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 160,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 156,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 155,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 166,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 167,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 154,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 147,
    columnNumber: 5
  }, this);
}
var MENU_FRAGMENT = `#graphql
  fragment Menu on Menu {
    id
    items {
      id
      title
      url
      items{
        title
        url
      }
    }
  }
`;
var HEADER_QUERY = `#graphql
  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }
  query Header(
    $country: CountryCode
    $headerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    shop {
      ...Shop
    }
    menu(handle: $headerMenuHandle) {
      ...Menu
    }
  }
  ${MENU_FRAGMENT}
`;
var FOOTER_QUERY = `#graphql
  query Footer(
    $country: CountryCode
    $footerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    menu(handle: $footerMenuHandle) {
      ...Menu
    }
  }
  ${MENU_FRAGMENT}
`;
export {
  ErrorBoundary,
  App as default,
  links
};
/*! Bundled license information:

tw-elements-react/dist/js/tw-elements-react.es.min.js:
  (*!
  * Tailwind Elements React 1.0.0-alpha1
  * 
  * Tailwind Elements React is an open-source UI kit of advanced components for TailwindCSS.
  * Copyright © 2023 MDBootstrap.com
  * 
  * Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
  * In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
  * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
  * 
  *)
*/
//# sourceMappingURL=/build/root-VTWEMRUS.js.map
