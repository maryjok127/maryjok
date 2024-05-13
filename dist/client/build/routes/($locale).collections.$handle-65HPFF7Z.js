import {
  c,
  l
} from "/build/_shared/chunk-DGST5VAI.js";
import {
  MdChevronLeft,
  MdChevronRight
} from "/build/_shared/chunk-AQMJZ442.js";
import "/build/_shared/chunk-NNH77UO3.js";
import {
  require_react_responsive
} from "/build/_shared/chunk-D3AIAV2V.js";
import {
  XMarkIcon_default
} from "/build/_shared/chunk-ZPBXTGWZ.js";
import {
  require_react_dom
} from "/build/_shared/chunk-FM7TTYIF.js";
import {
  ee
} from "/build/_shared/chunk-VY5OJHMS.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/($locale).collections.$handle.jsx
var import_react35 = __toESM(require_react());
var import_react_responsive2 = __toESM(require_react_responsive());
var import_react37 = __toESM(require_react());

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t17, e4, n6) => e4 in t17 ? i(t17, e4, { enumerable: true, configurable: true, writable: true, value: n6 }) : t17[e4] = n6;
var r = (t17, e4, n6) => (d(t17, typeof e4 != "symbol" ? e4 + "" : e4, n6), n6);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e4) {
    this.current !== e4 && (this.handoffState = "pending", this.currentId = 0, this.current = e4);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l2 = (e4, f10) => {
  s.isServer ? (0, import_react.useEffect)(e4, f10) : (0, import_react.useLayoutEffect)(e4, f10);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react2 = __toESM(require_react(), 1);
function s2(e4) {
  let r8 = (0, import_react2.useRef)(e4);
  return l2(() => {
    r8.current = e4;
  }, [e4]), r8;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t3(e4) {
  typeof queueMicrotask == "function" ? queueMicrotask(e4) : Promise.resolve().then(e4).catch((o10) => setTimeout(() => {
    throw o10;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n6 = [], r8 = { addEventListener(e4, t17, s14, a12) {
    return e4.addEventListener(t17, s14, a12), r8.add(() => e4.removeEventListener(t17, s14, a12));
  }, requestAnimationFrame(...e4) {
    let t17 = requestAnimationFrame(...e4);
    return r8.add(() => cancelAnimationFrame(t17));
  }, nextFrame(...e4) {
    return r8.requestAnimationFrame(() => r8.requestAnimationFrame(...e4));
  }, setTimeout(...e4) {
    let t17 = setTimeout(...e4);
    return r8.add(() => clearTimeout(t17));
  }, microTask(...e4) {
    let t17 = { current: true };
    return t3(() => {
      t17.current && e4[0]();
    }), r8.add(() => {
      t17.current = false;
    });
  }, style(e4, t17, s14) {
    let a12 = e4.style.getPropertyValue(t17);
    return Object.assign(e4.style, { [t17]: s14 }), this.add(() => {
      Object.assign(e4.style, { [t17]: a12 });
    });
  }, group(e4) {
    let t17 = o2();
    return e4(t17), this.add(() => t17.dispose());
  }, add(e4) {
    return n6.push(e4), () => {
      let t17 = n6.indexOf(e4);
      if (t17 >= 0)
        for (let s14 of n6.splice(t17, 1))
          s14();
    };
  }, dispose() {
    for (let e4 of n6.splice(0))
      e4();
  } };
  return r8;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e4] = (0, import_react3.useState)(o2);
  return (0, import_react3.useEffect)(() => () => e4.dispose(), [e4]), e4;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react4 = __toESM(require_react(), 1);
var o4 = function(t17) {
  let e4 = s2(t17);
  return import_react4.default.useCallback((...r8) => e4.current(...r8), [e4]);
};

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t4 = __toESM(require_react(), 1);
function s4() {
  let r8 = typeof document == "undefined";
  return "useSyncExternalStore" in t4 ? ((o10) => o10.useSyncExternalStore)(t4)(() => () => {
  }, () => false, () => !r8) : false;
}
function l3() {
  let r8 = s4(), [e4, n6] = t4.useState(s.isHandoffComplete);
  return e4 && s.isHandoffComplete === false && n6(false), t4.useEffect(() => {
    e4 !== true && n6(true);
  }, [e4]), t4.useEffect(() => s.handoff(), []), r8 ? false : e4;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var o5;
var I = (o5 = import_react5.default.useId) != null ? o5 : function() {
  let n6 = l3(), [e4, u9] = import_react5.default.useState(n6 ? () => s.nextId() : null);
  return l2(() => {
    e4 === null && u9(s.nextId());
  }, [e4]), e4 != null ? "" + e4 : void 0;
};

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react8 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/match.js
function u(r8, n6, ...a12) {
  if (r8 in n6) {
    let e4 = n6[r8];
    return typeof e4 == "function" ? e4(...a12) : e4;
  }
  let t17 = new Error(`Tried to handle "${r8}" but there is no handler defined. Only defined handlers are: ${Object.keys(n6).map((e4) => `"${e4}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t17, u), t17;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function e(r8) {
  return s.isServer ? null : r8 instanceof Node ? r8.ownerDocument : r8 != null && r8.hasOwnProperty("current") && r8.current instanceof Node ? r8.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c3 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e4) => `${e4}:not([tabindex='-1'])`).join(",");
var M = ((n6) => (n6[n6.First = 1] = "First", n6[n6.Previous = 2] = "Previous", n6[n6.Next = 4] = "Next", n6[n6.Last = 8] = "Last", n6[n6.WrapAround = 16] = "WrapAround", n6[n6.NoScroll = 32] = "NoScroll", n6))(M || {});
var N = ((o10) => (o10[o10.Error = 0] = "Error", o10[o10.Overflow = 1] = "Overflow", o10[o10.Success = 2] = "Success", o10[o10.Underflow = 3] = "Underflow", o10))(N || {});
var F = ((t17) => (t17[t17.Previous = -1] = "Previous", t17[t17.Next = 1] = "Next", t17))(F || {});
function f(e4 = document.body) {
  return e4 == null ? [] : Array.from(e4.querySelectorAll(c3)).sort((r8, t17) => Math.sign((r8.tabIndex || Number.MAX_SAFE_INTEGER) - (t17.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T = ((t17) => (t17[t17.Strict = 0] = "Strict", t17[t17.Loose = 1] = "Loose", t17))(T || {});
function h(e4, r8 = 0) {
  var t17;
  return e4 === ((t17 = e(e4)) == null ? void 0 : t17.body) ? false : u(r8, { [0]() {
    return e4.matches(c3);
  }, [1]() {
    let l12 = e4;
    for (; l12 !== null; ) {
      if (l12.matches(c3))
        return true;
      l12 = l12.parentElement;
    }
    return false;
  } });
}
function D(e4) {
  let r8 = e(e4);
  o2().nextFrame(() => {
    r8 && !h(r8.activeElement, 0) && y(e4);
  });
}
var w = ((t17) => (t17[t17.Keyboard = 0] = "Keyboard", t17[t17.Mouse = 1] = "Mouse", t17))(w || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e4) => {
  e4.metaKey || e4.altKey || e4.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e4) => {
  e4.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e4.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y(e4) {
  e4 == null || e4.focus({ preventScroll: true });
}
var S = ["textarea", "input"].join(",");
function H(e4) {
  var r8, t17;
  return (t17 = (r8 = e4 == null ? void 0 : e4.matches) == null ? void 0 : r8.call(e4, S)) != null ? t17 : false;
}
function I2(e4, r8 = (t17) => t17) {
  return e4.slice().sort((t17, l12) => {
    let o10 = r8(t17), i6 = r8(l12);
    if (o10 === null || i6 === null)
      return 0;
    let n6 = o10.compareDocumentPosition(i6);
    return n6 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n6 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _(e4, r8) {
  return O(f(), r8, { relativeTo: e4 });
}
function O(e4, r8, { sorted: t17 = true, relativeTo: l12 = null, skipElements: o10 = [] } = {}) {
  let i6 = Array.isArray(e4) ? e4.length > 0 ? e4[0].ownerDocument : document : e4.ownerDocument, n6 = Array.isArray(e4) ? t17 ? I2(e4) : e4 : f(e4);
  o10.length > 0 && n6.length > 1 && (n6 = n6.filter((s14) => !o10.includes(s14))), l12 = l12 != null ? l12 : i6.activeElement;
  let E8 = (() => {
    if (r8 & 5)
      return 1;
    if (r8 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x5 = (() => {
    if (r8 & 1)
      return 0;
    if (r8 & 2)
      return Math.max(0, n6.indexOf(l12)) - 1;
    if (r8 & 4)
      return Math.max(0, n6.indexOf(l12)) + 1;
    if (r8 & 8)
      return n6.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p6 = r8 & 32 ? { preventScroll: true } : {}, d11 = 0, a12 = n6.length, u9;
  do {
    if (d11 >= a12 || d11 + a12 <= 0)
      return 0;
    let s14 = x5 + d11;
    if (r8 & 16)
      s14 = (s14 + a12) % a12;
    else {
      if (s14 < 0)
        return 3;
      if (s14 >= a12)
        return 1;
    }
    u9 = n6[s14], u9 == null || u9.focus(p6), d11 += E8;
  } while (u9 !== i6.activeElement);
  return r8 & 6 && H(u9) && u9.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react6 = __toESM(require_react(), 1);
function d2(e4, r8, n6) {
  let o10 = s2(r8);
  (0, import_react6.useEffect)(() => {
    function t17(u9) {
      o10.current(u9);
    }
    return document.addEventListener(e4, t17, n6), () => document.removeEventListener(e4, t17, n6);
  }, [e4, n6]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react7 = __toESM(require_react(), 1);
function s5(e4, r8, n6) {
  let o10 = s2(r8);
  (0, import_react7.useEffect)(() => {
    function t17(i6) {
      o10.current(i6);
    }
    return window.addEventListener(e4, t17, n6), () => window.removeEventListener(e4, t17, n6);
  }, [e4, n6]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function h2(s14, m10, a12 = true) {
  let i6 = (0, import_react8.useRef)(false);
  (0, import_react8.useEffect)(() => {
    requestAnimationFrame(() => {
      i6.current = a12;
    });
  }, [a12]);
  function c13(e4, r8) {
    if (!i6.current || e4.defaultPrevented)
      return;
    let t17 = r8(e4);
    if (t17 === null || !t17.getRootNode().contains(t17) || !t17.isConnected)
      return;
    let E8 = function u9(n6) {
      return typeof n6 == "function" ? u9(n6()) : Array.isArray(n6) || n6 instanceof Set ? n6 : [n6];
    }(s14);
    for (let u9 of E8) {
      if (u9 === null)
        continue;
      let n6 = u9 instanceof HTMLElement ? u9 : u9.current;
      if (n6 != null && n6.contains(t17) || e4.composed && e4.composedPath().includes(n6))
        return;
    }
    return !h(t17, T.Loose) && t17.tabIndex !== -1 && e4.preventDefault(), m10(e4, t17);
  }
  let o10 = (0, import_react8.useRef)(null);
  d2("pointerdown", (e4) => {
    var r8, t17;
    i6.current && (o10.current = ((t17 = (r8 = e4.composedPath) == null ? void 0 : r8.call(e4)) == null ? void 0 : t17[0]) || e4.target);
  }, true), d2("mousedown", (e4) => {
    var r8, t17;
    i6.current && (o10.current = ((t17 = (r8 = e4.composedPath) == null ? void 0 : r8.call(e4)) == null ? void 0 : t17[0]) || e4.target);
  }, true), d2("click", (e4) => {
    o10.current && (c13(e4, () => o10.current), o10.current = null);
  }, true), d2("touchend", (e4) => c13(e4, () => e4.target instanceof HTMLElement ? e4.target : null), true), s5("blur", (e4) => c13(e4, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react9 = __toESM(require_react(), 1);
function i2(t17) {
  var n6;
  if (t17.type)
    return t17.type;
  let e4 = (n6 = t17.as) != null ? n6 : "button";
  if (typeof e4 == "string" && e4.toLowerCase() === "button")
    return "button";
}
function s6(t17, e4) {
  let [n6, u9] = (0, import_react9.useState)(() => i2(t17));
  return l2(() => {
    u9(i2(t17));
  }, [t17.type, t17.as]), l2(() => {
    n6 || e4.current && e4.current instanceof HTMLButtonElement && !e4.current.hasAttribute("type") && u9("button");
  }, [n6, e4]), n6;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react10 = __toESM(require_react(), 1);
var u2 = Symbol();
function T2(t17, n6 = true) {
  return Object.assign(t17, { [u2]: n6 });
}
function y2(...t17) {
  let n6 = (0, import_react10.useRef)(t17);
  (0, import_react10.useEffect)(() => {
    n6.current = t17;
  }, [t17]);
  let c13 = o4((e4) => {
    for (let o10 of n6.current)
      o10 != null && (typeof o10 == "function" ? o10(e4) : o10.current = e4);
  });
  return t17.every((e4) => e4 == null || (e4 == null ? void 0 : e4[u2])) ? void 0 : c13;
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react11 = __toESM(require_react(), 1);
function F2({ container: e4, accept: t17, walk: r8, enabled: c13 = true }) {
  let o10 = (0, import_react11.useRef)(t17), l12 = (0, import_react11.useRef)(r8);
  (0, import_react11.useEffect)(() => {
    o10.current = t17, l12.current = r8;
  }, [t17, r8]), l2(() => {
    if (!e4 || !c13)
      return;
    let n6 = e(e4);
    if (!n6)
      return;
    let f10 = o10.current, p6 = l12.current, d11 = Object.assign((i6) => f10(i6), { acceptNode: f10 }), u9 = n6.createTreeWalker(e4, NodeFilter.SHOW_ELEMENT, d11, false);
    for (; u9.nextNode(); )
      p6(u9.currentNode);
  }, [e4, c13, o10, l12]);
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function f3(r8) {
  throw new Error("Unexpected object: " + r8);
}
var a2 = ((e4) => (e4[e4.First = 0] = "First", e4[e4.Previous = 1] = "Previous", e4[e4.Next = 2] = "Next", e4[e4.Last = 3] = "Last", e4[e4.Specific = 4] = "Specific", e4[e4.Nothing = 5] = "Nothing", e4))(a2 || {});
function x(r8, n6) {
  let t17 = n6.resolveItems();
  if (t17.length <= 0)
    return null;
  let l12 = n6.resolveActiveIndex(), s14 = l12 != null ? l12 : -1, d11 = (() => {
    switch (r8.focus) {
      case 0:
        return t17.findIndex((e4) => !n6.resolveDisabled(e4));
      case 1: {
        let e4 = t17.slice().reverse().findIndex((i6, c13, u9) => s14 !== -1 && u9.length - c13 - 1 >= s14 ? false : !n6.resolveDisabled(i6));
        return e4 === -1 ? e4 : t17.length - 1 - e4;
      }
      case 2:
        return t17.findIndex((e4, i6) => i6 <= s14 ? false : !n6.resolveDisabled(e4));
      case 3: {
        let e4 = t17.slice().reverse().findIndex((i6) => !n6.resolveDisabled(i6));
        return e4 === -1 ? e4 : t17.length - 1 - e4;
      }
      case 4:
        return t17.findIndex((e4) => n6.resolveId(e4) === r8.id);
      case 5:
        return null;
      default:
        f3(r8);
    }
  })();
  return d11 === -1 ? l12 : d11;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react12 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function t6(...r8) {
  return Array.from(new Set(r8.flatMap((n6) => typeof n6 == "string" ? n6.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var S2 = ((a12) => (a12[a12.None = 0] = "None", a12[a12.RenderStrategy = 1] = "RenderStrategy", a12[a12.Static = 2] = "Static", a12))(S2 || {});
var j = ((e4) => (e4[e4.Unmount = 0] = "Unmount", e4[e4.Hidden = 1] = "Hidden", e4))(j || {});
function X({ ourProps: r8, theirProps: t17, slot: e4, defaultTag: a12, features: s14, visible: n6 = true, name: f10 }) {
  let o10 = N2(t17, r8);
  if (n6)
    return c4(o10, e4, a12, f10);
  let u9 = s14 != null ? s14 : 0;
  if (u9 & 2) {
    let { static: l12 = false, ...p6 } = o10;
    if (l12)
      return c4(p6, e4, a12, f10);
  }
  if (u9 & 1) {
    let { unmount: l12 = true, ...p6 } = o10;
    return u(l12 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c4({ ...p6, hidden: true, style: { display: "none" } }, e4, a12, f10);
    } });
  }
  return c4(o10, e4, a12, f10);
}
function c4(r8, t17 = {}, e4, a12) {
  let { as: s14 = e4, children: n6, refName: f10 = "ref", ...o10 } = g(r8, ["unmount", "static"]), u9 = r8.ref !== void 0 ? { [f10]: r8.ref } : {}, l12 = typeof n6 == "function" ? n6(t17) : n6;
  "className" in o10 && o10.className && typeof o10.className == "function" && (o10.className = o10.className(t17));
  let p6 = {};
  if (t17) {
    let i6 = false, m10 = [];
    for (let [y6, d11] of Object.entries(t17))
      typeof d11 == "boolean" && (i6 = true), d11 === true && m10.push(y6);
    i6 && (p6["data-headlessui-state"] = m10.join(" "));
  }
  if (s14 === import_react12.Fragment && Object.keys(R(o10)).length > 0) {
    if (!(0, import_react12.isValidElement)(l12) || Array.isArray(l12) && l12.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a12} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o10).map((d11) => `  - ${d11}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d11) => `  - ${d11}`).join(`
`)].join(`
`));
    let i6 = l12.props, m10 = typeof (i6 == null ? void 0 : i6.className) == "function" ? (...d11) => t6(i6 == null ? void 0 : i6.className(...d11), o10.className) : t6(i6 == null ? void 0 : i6.className, o10.className), y6 = m10 ? { className: m10 } : {};
    return (0, import_react12.cloneElement)(l12, Object.assign({}, N2(l12.props, R(g(o10, ["ref"]))), p6, u9, w2(l12.ref, u9.ref), y6));
  }
  return (0, import_react12.createElement)(s14, Object.assign({}, g(o10, ["ref"]), s14 !== import_react12.Fragment && u9, s14 !== import_react12.Fragment && p6), l12);
}
function w2(...r8) {
  return { ref: r8.every((t17) => t17 == null) ? void 0 : (t17) => {
    for (let e4 of r8)
      e4 != null && (typeof e4 == "function" ? e4(t17) : e4.current = t17);
  } };
}
function N2(...r8) {
  var a12;
  if (r8.length === 0)
    return {};
  if (r8.length === 1)
    return r8[0];
  let t17 = {}, e4 = {};
  for (let s14 of r8)
    for (let n6 in s14)
      n6.startsWith("on") && typeof s14[n6] == "function" ? ((a12 = e4[n6]) != null || (e4[n6] = []), e4[n6].push(s14[n6])) : t17[n6] = s14[n6];
  if (t17.disabled || t17["aria-disabled"])
    return Object.assign(t17, Object.fromEntries(Object.keys(e4).map((s14) => [s14, void 0])));
  for (let s14 in e4)
    Object.assign(t17, { [s14](n6, ...f10) {
      let o10 = e4[s14];
      for (let u9 of o10) {
        if ((n6 instanceof Event || (n6 == null ? void 0 : n6.nativeEvent) instanceof Event) && n6.defaultPrevented)
          return;
        u9(n6, ...f10);
      }
    } });
  return t17;
}
function D2(r8) {
  var t17;
  return Object.assign((0, import_react12.forwardRef)(r8), { displayName: (t17 = r8.displayName) != null ? t17 : r8.name });
}
function R(r8) {
  let t17 = Object.assign({}, r8);
  for (let e4 in t17)
    t17[e4] === void 0 && delete t17[e4];
  return t17;
}
function g(r8, t17 = []) {
  let e4 = Object.assign({}, r8);
  for (let a12 of t17)
    a12 in e4 && delete e4[a12];
  return e4;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r2(n6) {
  let e4 = n6.parentElement, l12 = null;
  for (; e4 && !(e4 instanceof HTMLFieldSetElement); )
    e4 instanceof HTMLLegendElement && (l12 = e4), e4 = e4.parentElement;
  let t17 = (e4 == null ? void 0 : e4.getAttribute("disabled")) === "";
  return t17 && i4(l12) ? false : t17;
}
function i4(n6) {
  if (!n6)
    return false;
  let e4 = n6.previousElementSibling;
  for (; e4 !== null; ) {
    if (e4 instanceof HTMLLegendElement)
      return false;
    e4 = e4.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a3 = "div";
var p2 = ((e4) => (e4[e4.None = 1] = "None", e4[e4.Focusable = 2] = "Focusable", e4[e4.Hidden = 4] = "Hidden", e4))(p2 || {});
function s7(t17, o10) {
  let { features: n6 = 1, ...e4 } = t17, d11 = { ref: o10, "aria-hidden": (n6 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n6 & 4) === 4 && (n6 & 2) !== 2 && { display: "none" } } };
  return X({ ourProps: d11, theirProps: e4, slot: {}, defaultTag: a3, name: "Hidden" });
}
var c5 = D2(s7);

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react13 = __toESM(require_react(), 1);
var n = (0, import_react13.createContext)(null);
n.displayName = "OpenClosedContext";
var d5 = ((e4) => (e4[e4.Open = 1] = "Open", e4[e4.Closed = 2] = "Closed", e4[e4.Closing = 4] = "Closing", e4[e4.Opening = 8] = "Opening", e4))(d5 || {});
function C() {
  return (0, import_react13.useContext)(n);
}
function c6({ value: o10, children: r8 }) {
  return import_react13.default.createElement(n.Provider, { value: o10 }, r8);
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o7 = ((r8) => (r8.Space = " ", r8.Enter = "Enter", r8.Escape = "Escape", r8.Backspace = "Backspace", r8.Delete = "Delete", r8.ArrowLeft = "ArrowLeft", r8.ArrowUp = "ArrowUp", r8.ArrowRight = "ArrowRight", r8.ArrowDown = "ArrowDown", r8.Home = "Home", r8.End = "End", r8.PageUp = "PageUp", r8.PageDown = "PageDown", r8.Tab = "Tab", r8))(o7 || {});

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react14 = __toESM(require_react(), 1);
function m3(u9, t17) {
  let e4 = (0, import_react14.useRef)([]), r8 = o4(u9);
  (0, import_react14.useEffect)(() => {
    let o10 = [...e4.current];
    for (let [n6, a12] of t17.entries())
      if (e4.current[n6] !== a12) {
        let l12 = r8(t17, o10);
        return e4.current = t17, l12;
      }
  }, [r8, ...t17]);
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react15 = __toESM(require_react(), 1);
function t8(e4) {
  return [e4.screenX, e4.screenY];
}
function u3() {
  let e4 = (0, import_react15.useRef)([-1, -1]);
  return { wasMoved(r8) {
    let n6 = t8(r8);
    return e4.current[0] === n6[0] && e4.current[1] === n6[1] ? false : (e4.current = n6, true);
  }, update(r8) {
    e4.current = t8(r8);
  } };
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t9() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react16 = __toESM(require_react(), 1);
function n2(...e4) {
  return (0, import_react16.useMemo)(() => e(...e4), [...e4]);
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react27 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react21 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react17 = __toESM(require_react(), 1);
var s9 = ((r8) => (r8[r8.Forwards = 0] = "Forwards", r8[r8.Backwards = 1] = "Backwards", r8))(s9 || {});
function n3() {
  let e4 = (0, import_react17.useRef)(0);
  return s5("keydown", (o10) => {
    o10.key === "Tab" && (e4.current = o10.shiftKey ? 1 : 0);
  }, true), e4;
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react18 = __toESM(require_react(), 1);
function f5() {
  let e4 = (0, import_react18.useRef)(false);
  return l2(() => (e4.current = true, () => {
    e4.current = false;
  }), []), e4;
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react19 = __toESM(require_react(), 1);
function E3(n6, e4, a12, t17) {
  let i6 = s2(a12);
  (0, import_react19.useEffect)(() => {
    n6 = n6 != null ? n6 : window;
    function r8(o10) {
      i6.current(o10);
    }
    return n6.addEventListener(e4, r8, t17), () => n6.removeEventListener(e4, r8, t17);
  }, [n6, e4, t17]);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t12(n6) {
  function e4() {
    document.readyState !== "loading" && (n6(), document.removeEventListener("DOMContentLoaded", e4));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e4), e4());
}

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react20 = __toESM(require_react(), 1);
function c7(t17) {
  let r8 = o4(t17), e4 = (0, import_react20.useRef)(false);
  (0, import_react20.useEffect)(() => (e4.current = false, () => {
    e4.current = true, t3(() => {
      e4.current && r8();
    });
  }), [r8]);
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P(t17) {
  if (!t17)
    return /* @__PURE__ */ new Set();
  if (typeof t17 == "function")
    return new Set(t17());
  let r8 = /* @__PURE__ */ new Set();
  for (let e4 of t17.current)
    e4.current instanceof HTMLElement && r8.add(e4.current);
  return r8;
}
var J = "div";
var h4 = ((n6) => (n6[n6.None = 1] = "None", n6[n6.InitialFocus = 2] = "InitialFocus", n6[n6.TabLock = 4] = "TabLock", n6[n6.FocusLock = 8] = "FocusLock", n6[n6.RestoreFocus = 16] = "RestoreFocus", n6[n6.All = 30] = "All", n6))(h4 || {});
function X2(t17, r8) {
  let e4 = (0, import_react21.useRef)(null), o10 = y2(e4, r8), { initialFocus: u9, containers: i6, features: n6 = 30, ...l12 } = t17;
  l3() || (n6 = 1);
  let m10 = n2(e4);
  Y({ ownerDocument: m10 }, Boolean(n6 & 16));
  let c13 = Z({ ownerDocument: m10, container: e4, initialFocus: u9 }, Boolean(n6 & 2));
  $({ ownerDocument: m10, container: e4, containers: i6, previousActiveElement: c13 }, Boolean(n6 & 8));
  let v4 = n3(), y6 = o4((s14) => {
    let T7 = e4.current;
    if (!T7)
      return;
    ((B2) => B2())(() => {
      u(v4.current, { [s9.Forwards]: () => {
        O(T7, M.First, { skipElements: [s14.relatedTarget] });
      }, [s9.Backwards]: () => {
        O(T7, M.Last, { skipElements: [s14.relatedTarget] });
      } });
    });
  }), _3 = p(), b6 = (0, import_react21.useRef)(false), j5 = { ref: o10, onKeyDown(s14) {
    s14.key == "Tab" && (b6.current = true, _3.requestAnimationFrame(() => {
      b6.current = false;
    }));
  }, onBlur(s14) {
    let T7 = P(i6);
    e4.current instanceof HTMLElement && T7.add(e4.current);
    let d11 = s14.relatedTarget;
    d11 instanceof HTMLElement && d11.dataset.headlessuiFocusGuard !== "true" && (S3(T7, d11) || (b6.current ? O(e4.current, u(v4.current, { [s9.Forwards]: () => M.Next, [s9.Backwards]: () => M.Previous }) | M.WrapAround, { relativeTo: s14.target }) : s14.target instanceof HTMLElement && y(s14.target)));
  } };
  return import_react21.default.createElement(import_react21.default.Fragment, null, Boolean(n6 & 4) && import_react21.default.createElement(c5, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y6, features: p2.Focusable }), X({ ourProps: j5, theirProps: l12, defaultTag: J, name: "FocusTrap" }), Boolean(n6 & 4) && import_react21.default.createElement(c5, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y6, features: p2.Focusable }));
}
var z = D2(X2);
var ge = Object.assign(z, { features: h4 });
var a4 = [];
t12(() => {
  function t17(r8) {
    r8.target instanceof HTMLElement && r8.target !== document.body && a4[0] !== r8.target && (a4.unshift(r8.target), a4 = a4.filter((e4) => e4 != null && e4.isConnected), a4.splice(10));
  }
  window.addEventListener("click", t17, { capture: true }), window.addEventListener("mousedown", t17, { capture: true }), window.addEventListener("focus", t17, { capture: true }), document.body.addEventListener("click", t17, { capture: true }), document.body.addEventListener("mousedown", t17, { capture: true }), document.body.addEventListener("focus", t17, { capture: true });
});
function Q(t17 = true) {
  let r8 = (0, import_react21.useRef)(a4.slice());
  return m3(([e4], [o10]) => {
    o10 === true && e4 === false && t3(() => {
      r8.current.splice(0);
    }), o10 === false && e4 === true && (r8.current = a4.slice());
  }, [t17, a4, r8]), o4(() => {
    var e4;
    return (e4 = r8.current.find((o10) => o10 != null && o10.isConnected)) != null ? e4 : null;
  });
}
function Y({ ownerDocument: t17 }, r8) {
  let e4 = Q(r8);
  m3(() => {
    r8 || (t17 == null ? void 0 : t17.activeElement) === (t17 == null ? void 0 : t17.body) && y(e4());
  }, [r8]), c7(() => {
    r8 && y(e4());
  });
}
function Z({ ownerDocument: t17, container: r8, initialFocus: e4 }, o10) {
  let u9 = (0, import_react21.useRef)(null), i6 = f5();
  return m3(() => {
    if (!o10)
      return;
    let n6 = r8.current;
    n6 && t3(() => {
      if (!i6.current)
        return;
      let l12 = t17 == null ? void 0 : t17.activeElement;
      if (e4 != null && e4.current) {
        if ((e4 == null ? void 0 : e4.current) === l12) {
          u9.current = l12;
          return;
        }
      } else if (n6.contains(l12)) {
        u9.current = l12;
        return;
      }
      e4 != null && e4.current ? y(e4.current) : O(n6, M.First) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), u9.current = t17 == null ? void 0 : t17.activeElement;
    });
  }, [o10]), u9;
}
function $({ ownerDocument: t17, container: r8, containers: e4, previousActiveElement: o10 }, u9) {
  let i6 = f5();
  E3(t17 == null ? void 0 : t17.defaultView, "focus", (n6) => {
    if (!u9 || !i6.current)
      return;
    let l12 = P(e4);
    r8.current instanceof HTMLElement && l12.add(r8.current);
    let m10 = o10.current;
    if (!m10)
      return;
    let c13 = n6.target;
    c13 && c13 instanceof HTMLElement ? S3(l12, c13) ? (o10.current = c13, y(c13)) : (n6.preventDefault(), n6.stopPropagation(), y(m10)) : y(o10.current);
  }, true);
}
function S3(t17, r8) {
  for (let e4 of t17)
    if (e4.contains(r8))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react23 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react22 = __toESM(require_react(), 1);
var e2 = (0, import_react22.createContext)(false);
function l6() {
  return (0, import_react22.useContext)(e2);
}
function P2(o10) {
  return import_react22.default.createElement(e2.Provider, { value: o10.force }, o10.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function F3(p6) {
  let l12 = l6(), n6 = (0, import_react23.useContext)(v), e4 = n2(p6), [a12, o10] = (0, import_react23.useState)(() => {
    if (!l12 && n6 !== null || s.isServer)
      return null;
    let t17 = e4 == null ? void 0 : e4.getElementById("headlessui-portal-root");
    if (t17)
      return t17;
    if (e4 === null)
      return null;
    let r8 = e4.createElement("div");
    return r8.setAttribute("id", "headlessui-portal-root"), e4.body.appendChild(r8);
  });
  return (0, import_react23.useEffect)(() => {
    a12 !== null && (e4 != null && e4.body.contains(a12) || e4 == null || e4.body.appendChild(a12));
  }, [a12, e4]), (0, import_react23.useEffect)(() => {
    l12 || n6 !== null && o10(n6.current);
  }, [n6, o10, l12]), a12;
}
var U = import_react23.Fragment;
function N3(p6, l12) {
  let n6 = p6, e4 = (0, import_react23.useRef)(null), a12 = y2(T2((u9) => {
    e4.current = u9;
  }), l12), o10 = n2(e4), t17 = F3(e4), [r8] = (0, import_react23.useState)(() => {
    var u9;
    return s.isServer ? null : (u9 = o10 == null ? void 0 : o10.createElement("div")) != null ? u9 : null;
  }), i6 = (0, import_react23.useContext)(f6), C4 = l3();
  return l2(() => {
    !t17 || !r8 || t17.contains(r8) || (r8.setAttribute("data-headlessui-portal", ""), t17.appendChild(r8));
  }, [t17, r8]), l2(() => {
    if (r8 && i6)
      return i6.register(r8);
  }, [i6, r8]), c7(() => {
    var u9;
    !t17 || !r8 || (r8 instanceof Node && t17.contains(r8) && t17.removeChild(r8), t17.childNodes.length <= 0 && ((u9 = t17.parentElement) == null || u9.removeChild(t17)));
  }), C4 ? !t17 || !r8 ? null : (0, import_react_dom.createPortal)(X({ ourProps: { ref: a12 }, theirProps: n6, defaultTag: U, name: "Portal" }), r8) : null;
}
var S4 = import_react23.Fragment;
var v = (0, import_react23.createContext)(null);
function j2(p6, l12) {
  let { target: n6, ...e4 } = p6, o10 = { ref: y2(l12) };
  return import_react23.default.createElement(v.Provider, { value: n6 }, X({ ourProps: o10, theirProps: e4, defaultTag: S4, name: "Popover.Group" }));
}
var f6 = (0, import_react23.createContext)(null);
function ae() {
  let p6 = (0, import_react23.useContext)(f6), l12 = (0, import_react23.useRef)([]), n6 = o4((o10) => (l12.current.push(o10), p6 && p6.register(o10), () => e4(o10))), e4 = o4((o10) => {
    let t17 = l12.current.indexOf(o10);
    t17 !== -1 && l12.current.splice(t17, 1), p6 && p6.unregister(o10);
  }), a12 = (0, import_react23.useMemo)(() => ({ register: n6, unregister: e4, portals: l12 }), [n6, e4, l12]);
  return [l12, (0, import_react23.useMemo)(() => function({ children: t17 }) {
    return import_react23.default.createElement(f6.Provider, { value: a12 }, t17);
  }, [a12])];
}
var D3 = D2(N3);
var I3 = D2(j2);
var pe = Object.assign(D3, { Group: I3 });

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react24 = __toESM(require_react(), 1);
var d8 = (0, import_react24.createContext)(null);
function f7() {
  let r8 = (0, import_react24.useContext)(d8);
  if (r8 === null) {
    let t17 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t17, f7), t17;
  }
  return r8;
}
function M2() {
  let [r8, t17] = (0, import_react24.useState)([]);
  return [r8.length > 0 ? r8.join(" ") : void 0, (0, import_react24.useMemo)(() => function(e4) {
    let i6 = o4((s14) => (t17((o10) => [...o10, s14]), () => t17((o10) => {
      let p6 = o10.slice(), c13 = p6.indexOf(s14);
      return c13 !== -1 && p6.splice(c13, 1), p6;
    }))), n6 = (0, import_react24.useMemo)(() => ({ register: i6, slot: e4.slot, name: e4.name, props: e4.props }), [i6, e4.slot, e4.name, e4.props]);
    return import_react24.default.createElement(d8.Provider, { value: n6 }, e4.children);
  }, [t17])];
}
var S5 = "p";
function h5(r8, t17) {
  let a12 = I(), { id: e4 = `headlessui-description-${a12}`, ...i6 } = r8, n6 = f7(), s14 = y2(t17);
  l2(() => n6.register(e4), [e4, n6.register]);
  let o10 = { ref: s14, ...n6.props, id: e4 };
  return X({ ourProps: o10, theirProps: i6, slot: n6.slot || {}, defaultTag: S5, name: n6.name || "Description" });
}
var y3 = D2(h5);
var b2 = Object.assign(y3, {});

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react25 = __toESM(require_react(), 1);
var a5 = (0, import_react25.createContext)(() => {
});
a5.displayName = "StackContext";
var s11 = ((e4) => (e4[e4.Add = 0] = "Add", e4[e4.Remove = 1] = "Remove", e4))(s11 || {});
function x3() {
  return (0, import_react25.useContext)(a5);
}
function M3({ children: i6, onUpdate: r8, type: e4, element: n6, enabled: u9 }) {
  let l12 = x3(), o10 = o4((...t17) => {
    r8 == null || r8(...t17), l12(...t17);
  });
  return l2(() => {
    let t17 = u9 === void 0 || u9 === true;
    return t17 && o10(0, e4, n6), () => {
      t17 && o10(1, e4, n6);
    };
  }, [o10, e4, n6, u9]), import_react25.default.createElement(a5.Provider, { value: o10 }, i6);
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l8 = __toESM(require_react(), 1);
function i5(e4, t17) {
  return e4 === t17 && (e4 !== 0 || 1 / e4 === 1 / t17) || e4 !== e4 && t17 !== t17;
}
var d10 = typeof Object.is == "function" ? Object.is : i5;
var { useState: u6, useEffect: h6, useLayoutEffect: f8, useDebugValue: p4 } = l8;
function y4(e4, t17, c13) {
  const a12 = t17(), [{ inst: n6 }, o10] = u6({ inst: { value: a12, getSnapshot: t17 } });
  return f8(() => {
    n6.value = a12, n6.getSnapshot = t17, r5(n6) && o10({ inst: n6 });
  }, [e4, a12, t17]), h6(() => (r5(n6) && o10({ inst: n6 }), e4(() => {
    r5(n6) && o10({ inst: n6 });
  })), [e4]), p4(a12), a12;
}
function r5(e4) {
  const t17 = e4.getSnapshot, c13 = e4.value;
  try {
    const a12 = t17();
    return !d10(c13, a12);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t14(r8, e4, n6) {
  return e4();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r6 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s12 = !r6;
var c10 = s12 ? t14 : y4;
var a6 = "useSyncExternalStore" in e3 ? ((n6) => n6.useSyncExternalStore)(e3) : c10;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S6(t17) {
  return a6(t17.subscribe, t17.getSnapshot, t17.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a7(o10, r8) {
  let t17 = o10(), n6 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t17;
  }, subscribe(e4) {
    return n6.add(e4), () => n6.delete(e4);
  }, dispatch(e4, ...s14) {
    let i6 = r8[e4].call(t17, ...s14);
    i6 && (t17 = i6, n6.forEach((c13) => c13()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c11() {
  let o10;
  return { before({ doc: e4 }) {
    var l12;
    let n6 = e4.documentElement;
    o10 = ((l12 = e4.defaultView) != null ? l12 : window).innerWidth - n6.clientWidth;
  }, after({ doc: e4, d: n6 }) {
    let t17 = e4.documentElement, l12 = t17.clientWidth - t17.offsetWidth, r8 = o10 - l12;
    n6.style(t17, "paddingRight", `${r8}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function T6() {
  if (!t9())
    return {};
  let l12;
  return { before() {
    l12 = window.pageYOffset;
  }, after({ doc: o10, d: t17, meta: s14 }) {
    function i6(n6) {
      return s14.containers.flatMap((e4) => e4()).some((e4) => e4.contains(n6));
    }
    t17.microTask(() => {
      if (window.getComputedStyle(o10.documentElement).scrollBehavior !== "auto") {
        let e4 = o2();
        e4.style(o10.documentElement, "scroll-behavior", "auto"), t17.add(() => t17.microTask(() => e4.dispose()));
      }
      t17.style(o10.body, "marginTop", `-${l12}px`), window.scrollTo(0, 0);
      let n6 = null;
      t17.addEventListener(o10, "click", (e4) => {
        if (e4.target instanceof HTMLElement)
          try {
            let r8 = e4.target.closest("a");
            if (!r8)
              return;
            let { hash: c13 } = new URL(r8.href), a12 = o10.querySelector(c13);
            a12 && !i6(a12) && (n6 = a12);
          } catch {
          }
      }, true), t17.addEventListener(o10, "touchmove", (e4) => {
        e4.target instanceof HTMLElement && !i6(e4.target) && e4.preventDefault();
      }, { passive: false }), t17.add(() => {
        window.scrollTo(0, window.pageYOffset + l12), n6 && n6.isConnected && (n6.scrollIntoView({ block: "nearest" }), n6 = null);
      });
    });
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l9() {
  return { before({ doc: e4, d: o10 }) {
    o10.style(e4.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m7(e4) {
  let n6 = {};
  for (let t17 of e4)
    Object.assign(n6, t17(n6));
  return n6;
}
var a8 = a7(() => /* @__PURE__ */ new Map(), { PUSH(e4, n6) {
  var o10;
  let t17 = (o10 = this.get(e4)) != null ? o10 : { doc: e4, count: 0, d: o2(), meta: /* @__PURE__ */ new Set() };
  return t17.count++, t17.meta.add(n6), this.set(e4, t17), this;
}, POP(e4, n6) {
  let t17 = this.get(e4);
  return t17 && (t17.count--, t17.meta.delete(n6)), this;
}, SCROLL_PREVENT({ doc: e4, d: n6, meta: t17 }) {
  let o10 = { doc: e4, d: n6, meta: m7(t17) }, c13 = [T6(), c11(), l9()];
  c13.forEach(({ before: r8 }) => r8 == null ? void 0 : r8(o10)), c13.forEach(({ after: r8 }) => r8 == null ? void 0 : r8(o10));
}, SCROLL_ALLOW({ d: e4 }) {
  e4.dispose();
}, TEARDOWN({ doc: e4 }) {
  this.delete(e4);
} });
a8.subscribe(() => {
  let e4 = a8.getSnapshot(), n6 = /* @__PURE__ */ new Map();
  for (let [t17] of e4)
    n6.set(t17, t17.documentElement.style.overflow);
  for (let t17 of e4.values()) {
    let o10 = n6.get(t17.doc) === "hidden", c13 = t17.count !== 0;
    (c13 && !o10 || !c13 && o10) && a8.dispatch(t17.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t17), t17.count === 0 && a8.dispatch("TEARDOWN", t17);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p5(e4, r8, n6) {
  let f10 = S6(a8), o10 = e4 ? f10.get(e4) : void 0, i6 = o10 ? o10.count > 0 : false;
  return l2(() => {
    if (!(!e4 || !r8))
      return a8.dispatch("PUSH", e4, n6), () => a8.dispatch("POP", e4, n6);
  }, [r8, e4]), i6;
}

// node_modules/@headlessui/react/dist/hooks/use-inert.js
var u7 = /* @__PURE__ */ new Map();
var t15 = /* @__PURE__ */ new Map();
function h7(r8, l12 = true) {
  l2(() => {
    var o10;
    if (!l12)
      return;
    let e4 = typeof r8 == "function" ? r8() : r8.current;
    if (!e4)
      return;
    function a12() {
      var d11;
      if (!e4)
        return;
      let i6 = (d11 = t15.get(e4)) != null ? d11 : 1;
      if (i6 === 1 ? t15.delete(e4) : t15.set(e4, i6 - 1), i6 !== 1)
        return;
      let n6 = u7.get(e4);
      n6 && (n6["aria-hidden"] === null ? e4.removeAttribute("aria-hidden") : e4.setAttribute("aria-hidden", n6["aria-hidden"]), e4.inert = n6.inert, u7.delete(e4));
    }
    let f10 = (o10 = t15.get(e4)) != null ? o10 : 0;
    return t15.set(e4, f10 + 1), f10 !== 0 || (u7.set(e4, { "aria-hidden": e4.getAttribute("aria-hidden"), inert: e4.inert }), e4.setAttribute("aria-hidden", "true"), e4.inert = true), a12;
  }, [r8, l12]);
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react26 = __toESM(require_react(), 1);
function j3({ defaultContainers: t17 = [], portals: r8, mainTreeNodeRef: u9 } = {}) {
  var c13;
  let o10 = (0, import_react26.useRef)((c13 = u9 == null ? void 0 : u9.current) != null ? c13 : null), l12 = n2(o10), f10 = o4(() => {
    var i6;
    let n6 = [];
    for (let e4 of t17)
      e4 !== null && (e4 instanceof HTMLElement ? n6.push(e4) : "current" in e4 && e4.current instanceof HTMLElement && n6.push(e4.current));
    if (r8 != null && r8.current)
      for (let e4 of r8.current)
        n6.push(e4);
    for (let e4 of (i6 = l12 == null ? void 0 : l12.querySelectorAll("html > *, body > *")) != null ? i6 : [])
      e4 !== document.body && e4 !== document.head && e4 instanceof HTMLElement && e4.id !== "headlessui-portal-root" && (e4.contains(o10.current) || n6.some((T7) => e4.contains(T7)) || n6.push(e4));
    return n6;
  });
  return { resolveContainers: f10, contains: o4((n6) => f10().some((i6) => i6.contains(n6))), mainTreeNodeRef: o10, MainTreeNode: (0, import_react26.useMemo)(() => function() {
    return u9 != null ? null : import_react26.default.createElement(c5, { features: p2.Hidden, ref: o10 });
  }, [o10, u9]) };
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var _e = ((o10) => (o10[o10.Open = 0] = "Open", o10[o10.Closed = 1] = "Closed", o10))(_e || {});
var Ie = ((e4) => (e4[e4.SetTitleId = 0] = "SetTitleId", e4))(Ie || {});
var Me = { [0](t17, e4) {
  return t17.titleId === e4.id ? t17 : { ...t17, titleId: e4.id };
} };
var I4 = (0, import_react27.createContext)(null);
I4.displayName = "DialogContext";
function b3(t17) {
  let e4 = (0, import_react27.useContext)(I4);
  if (e4 === null) {
    let o10 = new Error(`<${t17} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o10, b3), o10;
  }
  return e4;
}
function we(t17, e4, o10 = () => [document.body]) {
  p5(t17, e4, (i6) => {
    var n6;
    return { containers: [...(n6 = i6.containers) != null ? n6 : [], o10] };
  });
}
function Be(t17, e4) {
  return u(e4.type, Me, t17, e4);
}
var He = "div";
var Ge = S2.RenderStrategy | S2.Static;
function Ne(t17, e4) {
  var X4;
  let o10 = I(), { id: i6 = `headlessui-dialog-${o10}`, open: n6, onClose: l12, initialFocus: s14, __demoMode: g6 = false, ...T7 } = t17, [m10, h9] = (0, import_react27.useState)(0), a12 = C();
  n6 === void 0 && a12 !== null && (n6 = (a12 & d5.Open) === d5.Open);
  let D5 = (0, import_react27.useRef)(null), Q3 = y2(D5, e4), f10 = n2(D5), N6 = t17.hasOwnProperty("open") || a12 !== null, U4 = t17.hasOwnProperty("onClose");
  if (!N6 && !U4)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!N6)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!U4)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n6 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n6}`);
  if (typeof l12 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l12}`);
  let p6 = n6 ? 0 : 1, [S9, Z4] = (0, import_react27.useReducer)(Be, { titleId: null, descriptionId: null, panelRef: (0, import_react27.createRef)() }), P4 = o4(() => l12(false)), W2 = o4((r8) => Z4({ type: 0, id: r8 })), L2 = l3() ? g6 ? false : p6 === 0 : false, F6 = m10 > 1, Y4 = (0, import_react27.useContext)(I4) !== null, [ee3, te2] = ae(), { resolveContainers: M7, mainTreeNodeRef: k2, MainTreeNode: oe3 } = j3({ portals: ee3, defaultContainers: [(X4 = S9.panelRef.current) != null ? X4 : D5.current] }), re2 = F6 ? "parent" : "leaf", $4 = a12 !== null ? (a12 & d5.Closing) === d5.Closing : false, ne2 = (() => Y4 || $4 ? false : L2)(), le3 = (0, import_react27.useCallback)(() => {
    var r8, c13;
    return (c13 = Array.from((r8 = f10 == null ? void 0 : f10.querySelectorAll("body > *")) != null ? r8 : []).find((d11) => d11.id === "headlessui-portal-root" ? false : d11.contains(k2.current) && d11 instanceof HTMLElement)) != null ? c13 : null;
  }, [k2]);
  h7(le3, ne2);
  let ae3 = (() => F6 ? true : L2)(), ie2 = (0, import_react27.useCallback)(() => {
    var r8, c13;
    return (c13 = Array.from((r8 = f10 == null ? void 0 : f10.querySelectorAll("[data-headlessui-portal]")) != null ? r8 : []).find((d11) => d11.contains(k2.current) && d11 instanceof HTMLElement)) != null ? c13 : null;
  }, [k2]);
  h7(ie2, ae3);
  let se3 = (() => !(!L2 || F6))();
  h2(M7, P4, se3);
  let pe2 = (() => !(F6 || p6 !== 0))();
  E3(f10 == null ? void 0 : f10.defaultView, "keydown", (r8) => {
    pe2 && (r8.defaultPrevented || r8.key === o7.Escape && (r8.preventDefault(), r8.stopPropagation(), P4()));
  });
  let de2 = (() => !($4 || p6 !== 0 || Y4))();
  we(f10, de2, M7), (0, import_react27.useEffect)(() => {
    if (p6 !== 0 || !D5.current)
      return;
    let r8 = new ResizeObserver((c13) => {
      for (let d11 of c13) {
        let x5 = d11.target.getBoundingClientRect();
        x5.x === 0 && x5.y === 0 && x5.width === 0 && x5.height === 0 && P4();
      }
    });
    return r8.observe(D5.current), () => r8.disconnect();
  }, [p6, D5, P4]);
  let [ue2, fe2] = M2(), ge3 = (0, import_react27.useMemo)(() => [{ dialogState: p6, close: P4, setTitleId: W2 }, S9], [p6, S9, P4, W2]), J3 = (0, import_react27.useMemo)(() => ({ open: p6 === 0 }), [p6]), Te2 = { ref: Q3, id: i6, role: "dialog", "aria-modal": p6 === 0 ? true : void 0, "aria-labelledby": S9.titleId, "aria-describedby": ue2 };
  return import_react27.default.createElement(M3, { type: "Dialog", enabled: p6 === 0, element: D5, onUpdate: o4((r8, c13) => {
    c13 === "Dialog" && u(r8, { [s11.Add]: () => h9((d11) => d11 + 1), [s11.Remove]: () => h9((d11) => d11 - 1) });
  }) }, import_react27.default.createElement(P2, { force: true }, import_react27.default.createElement(pe, null, import_react27.default.createElement(I4.Provider, { value: ge3 }, import_react27.default.createElement(pe.Group, { target: D5 }, import_react27.default.createElement(P2, { force: false }, import_react27.default.createElement(fe2, { slot: J3, name: "Dialog.Description" }, import_react27.default.createElement(ge, { initialFocus: s14, containers: M7, features: L2 ? u(re2, { parent: ge.features.RestoreFocus, leaf: ge.features.All & ~ge.features.FocusLock }) : ge.features.None }, import_react27.default.createElement(te2, null, X({ ourProps: Te2, theirProps: T7, slot: J3, defaultTag: He, features: Ge, visible: p6 === 0, name: "Dialog" }))))))))), import_react27.default.createElement(oe3, null));
}
var Ue = "div";
function We(t17, e4) {
  let o10 = I(), { id: i6 = `headlessui-dialog-overlay-${o10}`, ...n6 } = t17, [{ dialogState: l12, close: s14 }] = b3("Dialog.Overlay"), g6 = y2(e4), T7 = o4((a12) => {
    if (a12.target === a12.currentTarget) {
      if (r2(a12.currentTarget))
        return a12.preventDefault();
      a12.preventDefault(), a12.stopPropagation(), s14();
    }
  }), m10 = (0, import_react27.useMemo)(() => ({ open: l12 === 0 }), [l12]);
  return X({ ourProps: { ref: g6, id: i6, "aria-hidden": true, onClick: T7 }, theirProps: n6, slot: m10, defaultTag: Ue, name: "Dialog.Overlay" });
}
var Ye = "div";
function $e(t17, e4) {
  let o10 = I(), { id: i6 = `headlessui-dialog-backdrop-${o10}`, ...n6 } = t17, [{ dialogState: l12 }, s14] = b3("Dialog.Backdrop"), g6 = y2(e4);
  (0, import_react27.useEffect)(() => {
    if (s14.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s14.panelRef]);
  let T7 = (0, import_react27.useMemo)(() => ({ open: l12 === 0 }), [l12]);
  return import_react27.default.createElement(P2, { force: true }, import_react27.default.createElement(pe, null, X({ ourProps: { ref: g6, id: i6, "aria-hidden": true }, theirProps: n6, slot: T7, defaultTag: Ye, name: "Dialog.Backdrop" })));
}
var Je = "div";
function Xe(t17, e4) {
  let o10 = I(), { id: i6 = `headlessui-dialog-panel-${o10}`, ...n6 } = t17, [{ dialogState: l12 }, s14] = b3("Dialog.Panel"), g6 = y2(e4, s14.panelRef), T7 = (0, import_react27.useMemo)(() => ({ open: l12 === 0 }), [l12]), m10 = o4((a12) => {
    a12.stopPropagation();
  });
  return X({ ourProps: { ref: g6, id: i6, onClick: m10 }, theirProps: n6, slot: T7, defaultTag: Je, name: "Dialog.Panel" });
}
var je = "h2";
function Ke(t17, e4) {
  let o10 = I(), { id: i6 = `headlessui-dialog-title-${o10}`, ...n6 } = t17, [{ dialogState: l12, setTitleId: s14 }] = b3("Dialog.Title"), g6 = y2(e4);
  (0, import_react27.useEffect)(() => (s14(i6), () => s14(null)), [i6, s14]);
  let T7 = (0, import_react27.useMemo)(() => ({ open: l12 === 0 }), [l12]);
  return X({ ourProps: { ref: g6, id: i6 }, theirProps: n6, slot: T7, defaultTag: je, name: "Dialog.Title" });
}
var Ve = D2(Ne);
var qe = D2($e);
var ze = D2(Xe);
var Qe = D2(We);
var Ze = D2(Ke);
var _t = Object.assign(Ve, { Backdrop: qe, Panel: ze, Overlay: Qe, Title: Ze, Description: b2 });

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react29 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react28 = __toESM(require_react(), 1);
var t16;
var a10 = (t16 = import_react28.default.startTransition) != null ? t16 : function(i6) {
  i6();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var q = ((o10) => (o10[o10.Open = 0] = "Open", o10[o10.Closed = 1] = "Closed", o10))(q || {});
var z2 = ((t17) => (t17[t17.ToggleDisclosure = 0] = "ToggleDisclosure", t17[t17.CloseDisclosure = 1] = "CloseDisclosure", t17[t17.SetButtonId = 2] = "SetButtonId", t17[t17.SetPanelId = 3] = "SetPanelId", t17[t17.LinkPanel = 4] = "LinkPanel", t17[t17.UnlinkPanel = 5] = "UnlinkPanel", t17))(z2 || {});
var Q2 = { [0]: (e4) => ({ ...e4, disclosureState: u(e4.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e4) => e4.disclosureState === 1 ? e4 : { ...e4, disclosureState: 1 }, [4](e4) {
  return e4.linkedPanel === true ? e4 : { ...e4, linkedPanel: true };
}, [5](e4) {
  return e4.linkedPanel === false ? e4 : { ...e4, linkedPanel: false };
}, [2](e4, n6) {
  return e4.buttonId === n6.buttonId ? e4 : { ...e4, buttonId: n6.buttonId };
}, [3](e4, n6) {
  return e4.panelId === n6.panelId ? e4 : { ...e4, panelId: n6.panelId };
} };
var k = (0, import_react29.createContext)(null);
k.displayName = "DisclosureContext";
function M4(e4) {
  let n6 = (0, import_react29.useContext)(k);
  if (n6 === null) {
    let o10 = new Error(`<${e4} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o10, M4), o10;
  }
  return n6;
}
var v2 = (0, import_react29.createContext)(null);
v2.displayName = "DisclosureAPIContext";
function w4(e4) {
  let n6 = (0, import_react29.useContext)(v2);
  if (n6 === null) {
    let o10 = new Error(`<${e4} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o10, w4), o10;
  }
  return n6;
}
var H3 = (0, import_react29.createContext)(null);
H3.displayName = "DisclosurePanelContext";
function V() {
  return (0, import_react29.useContext)(H3);
}
function Y2(e4, n6) {
  return u(n6.type, Q2, e4, n6);
}
var Z2 = import_react29.Fragment;
function ee2(e4, n6) {
  let { defaultOpen: o10 = false, ...u9 } = e4, T7 = (0, import_react29.useRef)(null), l12 = y2(n6, T2((a12) => {
    T7.current = a12;
  }, e4.as === void 0 || e4.as === import_react29.Fragment)), t17 = (0, import_react29.useRef)(null), f10 = (0, import_react29.useRef)(null), s14 = (0, import_react29.useReducer)(Y2, { disclosureState: o10 ? 0 : 1, linkedPanel: false, buttonRef: f10, panelRef: t17, buttonId: null, panelId: null }), [{ disclosureState: i6, buttonId: c13 }, D5] = s14, d11 = o4((a12) => {
    D5({ type: 1 });
    let r8 = e(T7);
    if (!r8 || !c13)
      return;
    let p6 = (() => a12 ? a12 instanceof HTMLElement ? a12 : a12.current instanceof HTMLElement ? a12.current : r8.getElementById(c13) : r8.getElementById(c13))();
    p6 == null || p6.focus();
  }), P4 = (0, import_react29.useMemo)(() => ({ close: d11 }), [d11]), b6 = (0, import_react29.useMemo)(() => ({ open: i6 === 0, close: d11 }), [i6, d11]), y6 = { ref: l12 };
  return import_react29.default.createElement(k.Provider, { value: s14 }, import_react29.default.createElement(v2.Provider, { value: P4 }, import_react29.default.createElement(c6, { value: u(i6, { [0]: d5.Open, [1]: d5.Closed }) }, X({ ourProps: y6, theirProps: u9, slot: b6, defaultTag: Z2, name: "Disclosure" }))));
}
var te = "button";
function ne(e4, n6) {
  let o10 = I(), { id: u9 = `headlessui-disclosure-button-${o10}`, ...T7 } = e4, [l12, t17] = M4("Disclosure.Button"), f10 = V(), s14 = f10 === null ? false : f10 === l12.panelId, i6 = (0, import_react29.useRef)(null), c13 = y2(i6, n6, s14 ? null : l12.buttonRef);
  (0, import_react29.useEffect)(() => {
    if (!s14)
      return t17({ type: 2, buttonId: u9 }), () => {
        t17({ type: 2, buttonId: null });
      };
  }, [u9, t17, s14]);
  let D5 = o4((r8) => {
    var p6;
    if (s14) {
      if (l12.disclosureState === 1)
        return;
      switch (r8.key) {
        case o7.Space:
        case o7.Enter:
          r8.preventDefault(), r8.stopPropagation(), t17({ type: 0 }), (p6 = l12.buttonRef.current) == null || p6.focus();
          break;
      }
    } else
      switch (r8.key) {
        case o7.Space:
        case o7.Enter:
          r8.preventDefault(), r8.stopPropagation(), t17({ type: 0 });
          break;
      }
  }), d11 = o4((r8) => {
    switch (r8.key) {
      case o7.Space:
        r8.preventDefault();
        break;
    }
  }), P4 = o4((r8) => {
    var p6;
    r2(r8.currentTarget) || e4.disabled || (s14 ? (t17({ type: 0 }), (p6 = l12.buttonRef.current) == null || p6.focus()) : t17({ type: 0 }));
  }), b6 = (0, import_react29.useMemo)(() => ({ open: l12.disclosureState === 0 }), [l12]), y6 = s6(e4, i6), a12 = s14 ? { ref: c13, type: y6, onKeyDown: D5, onClick: P4 } : { ref: c13, id: u9, type: y6, "aria-expanded": l12.disclosureState === 0, "aria-controls": l12.linkedPanel ? l12.panelId : void 0, onKeyDown: D5, onKeyUp: d11, onClick: P4 };
  return X({ ourProps: a12, theirProps: T7, slot: b6, defaultTag: te, name: "Disclosure.Button" });
}
var le = "div";
var oe = S2.RenderStrategy | S2.Static;
function re(e4, n6) {
  let o10 = I(), { id: u9 = `headlessui-disclosure-panel-${o10}`, ...T7 } = e4, [l12, t17] = M4("Disclosure.Panel"), { close: f10 } = w4("Disclosure.Panel"), s14 = y2(n6, l12.panelRef, (P4) => {
    a10(() => t17({ type: P4 ? 4 : 5 }));
  });
  (0, import_react29.useEffect)(() => (t17({ type: 3, panelId: u9 }), () => {
    t17({ type: 3, panelId: null });
  }), [u9, t17]);
  let i6 = C(), c13 = (() => i6 !== null ? (i6 & d5.Open) === d5.Open : l12.disclosureState === 0)(), D5 = (0, import_react29.useMemo)(() => ({ open: l12.disclosureState === 0, close: f10 }), [l12, f10]), d11 = { ref: s14, id: u9 };
  return import_react29.default.createElement(H3.Provider, { value: l12.panelId }, X({ ourProps: d11, theirProps: T7, slot: D5, defaultTag: le, features: oe, visible: c13, name: "Disclosure.Panel" }));
}
var se = D2(ee2);
var ue = D2(ne);
var ie = D2(re);
var ve = Object.assign(se, { Button: ue, Panel: ie });

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react30 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a11 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o9(e4) {
  var r8, i6;
  let n6 = (r8 = e4.innerText) != null ? r8 : "", t17 = e4.cloneNode(true);
  if (!(t17 instanceof HTMLElement))
    return n6;
  let u9 = false;
  for (let f10 of t17.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f10.remove(), u9 = true;
  let l12 = u9 ? (i6 = t17.innerText) != null ? i6 : "" : n6;
  return a11.test(l12) && (l12 = l12.replace(a11, "")), l12;
}
function g4(e4) {
  let n6 = e4.getAttribute("aria-label");
  if (typeof n6 == "string")
    return n6.trim();
  let t17 = e4.getAttribute("aria-labelledby");
  if (t17) {
    let u9 = t17.split(" ").map((l12) => {
      let r8 = document.getElementById(l12);
      if (r8) {
        let i6 = r8.getAttribute("aria-label");
        return typeof i6 == "string" ? i6.trim() : o9(r8).trim();
      }
      return null;
    }).filter(Boolean);
    if (u9.length > 0)
      return u9.join(", ");
  }
  return o9(e4).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function b4(c13) {
  let t17 = (0, import_react30.useRef)(""), r8 = (0, import_react30.useRef)("");
  return o4(() => {
    let e4 = c13.current;
    if (!e4)
      return "";
    let u9 = e4.innerText;
    if (t17.current === u9)
      return r8.current;
    let n6 = g4(e4).trim().toLowerCase();
    return t17.current = u9, r8.current = n6, n6;
  });
}

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react31 = __toESM(require_react(), 1);
var me2 = ((r8) => (r8[r8.Open = 0] = "Open", r8[r8.Closed = 1] = "Closed", r8))(me2 || {});
var de = ((r8) => (r8[r8.Pointer = 0] = "Pointer", r8[r8.Other = 1] = "Other", r8))(de || {});
var fe = ((a12) => (a12[a12.OpenMenu = 0] = "OpenMenu", a12[a12.CloseMenu = 1] = "CloseMenu", a12[a12.GoToItem = 2] = "GoToItem", a12[a12.Search = 3] = "Search", a12[a12.ClearSearch = 4] = "ClearSearch", a12[a12.RegisterItem = 5] = "RegisterItem", a12[a12.UnregisterItem = 6] = "UnregisterItem", a12))(fe || {});
function w5(e4, u9 = (r8) => r8) {
  let r8 = e4.activeItemIndex !== null ? e4.items[e4.activeItemIndex] : null, i6 = I2(u9(e4.items.slice()), (t17) => t17.dataRef.current.domRef.current), s14 = r8 ? i6.indexOf(r8) : null;
  return s14 === -1 && (s14 = null), { items: i6, activeItemIndex: s14 };
}
var Te = { [1](e4) {
  return e4.menuState === 1 ? e4 : { ...e4, activeItemIndex: null, menuState: 1 };
}, [0](e4) {
  return e4.menuState === 0 ? e4 : { ...e4, __demoMode: false, menuState: 0 };
}, [2]: (e4, u9) => {
  var s14;
  let r8 = w5(e4), i6 = x(u9, { resolveItems: () => r8.items, resolveActiveIndex: () => r8.activeItemIndex, resolveId: (t17) => t17.id, resolveDisabled: (t17) => t17.dataRef.current.disabled });
  return { ...e4, ...r8, searchQuery: "", activeItemIndex: i6, activationTrigger: (s14 = u9.trigger) != null ? s14 : 1 };
}, [3]: (e4, u9) => {
  let i6 = e4.searchQuery !== "" ? 0 : 1, s14 = e4.searchQuery + u9.value.toLowerCase(), o10 = (e4.activeItemIndex !== null ? e4.items.slice(e4.activeItemIndex + i6).concat(e4.items.slice(0, e4.activeItemIndex + i6)) : e4.items).find((l12) => {
    var m10;
    return ((m10 = l12.dataRef.current.textValue) == null ? void 0 : m10.startsWith(s14)) && !l12.dataRef.current.disabled;
  }), a12 = o10 ? e4.items.indexOf(o10) : -1;
  return a12 === -1 || a12 === e4.activeItemIndex ? { ...e4, searchQuery: s14 } : { ...e4, searchQuery: s14, activeItemIndex: a12, activationTrigger: 1 };
}, [4](e4) {
  return e4.searchQuery === "" ? e4 : { ...e4, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e4, u9) => {
  let r8 = w5(e4, (i6) => [...i6, { id: u9.id, dataRef: u9.dataRef }]);
  return { ...e4, ...r8 };
}, [6]: (e4, u9) => {
  let r8 = w5(e4, (i6) => {
    let s14 = i6.findIndex((t17) => t17.id === u9.id);
    return s14 !== -1 && i6.splice(s14, 1), i6;
  });
  return { ...e4, ...r8, activationTrigger: 1 };
} };
var U2 = (0, import_react31.createContext)(null);
U2.displayName = "MenuContext";
function O2(e4) {
  let u9 = (0, import_react31.useContext)(U2);
  if (u9 === null) {
    let r8 = new Error(`<${e4} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r8, O2), r8;
  }
  return u9;
}
function ye2(e4, u9) {
  return u(u9.type, Te, e4, u9);
}
var Ie2 = import_react31.Fragment;
function Me2(e4, u9) {
  let { __demoMode: r8 = false, ...i6 } = e4, s14 = (0, import_react31.useReducer)(ye2, { __demoMode: r8, menuState: r8 ? 0 : 1, buttonRef: (0, import_react31.createRef)(), itemsRef: (0, import_react31.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: t17, itemsRef: o10, buttonRef: a12 }, l12] = s14, m10 = y2(u9);
  h2([a12, o10], (g6, R3) => {
    var p6;
    l12({ type: 1 }), h(R3, T.Loose) || (g6.preventDefault(), (p6 = a12.current) == null || p6.focus());
  }, t17 === 0);
  let I6 = o4(() => {
    l12({ type: 1 });
  }), A = (0, import_react31.useMemo)(() => ({ open: t17 === 0, close: I6 }), [t17, I6]), f10 = { ref: m10 };
  return import_react31.default.createElement(U2.Provider, { value: s14 }, import_react31.default.createElement(c6, { value: u(t17, { [0]: d5.Open, [1]: d5.Closed }) }, X({ ourProps: f10, theirProps: i6, slot: A, defaultTag: Ie2, name: "Menu" })));
}
var ge2 = "button";
function Re(e4, u9) {
  var R3;
  let r8 = I(), { id: i6 = `headlessui-menu-button-${r8}`, ...s14 } = e4, [t17, o10] = O2("Menu.Button"), a12 = y2(t17.buttonRef, u9), l12 = p(), m10 = o4((p6) => {
    switch (p6.key) {
      case o7.Space:
      case o7.Enter:
      case o7.ArrowDown:
        p6.preventDefault(), p6.stopPropagation(), o10({ type: 0 }), l12.nextFrame(() => o10({ type: 2, focus: a2.First }));
        break;
      case o7.ArrowUp:
        p6.preventDefault(), p6.stopPropagation(), o10({ type: 0 }), l12.nextFrame(() => o10({ type: 2, focus: a2.Last }));
        break;
    }
  }), I6 = o4((p6) => {
    switch (p6.key) {
      case o7.Space:
        p6.preventDefault();
        break;
    }
  }), A = o4((p6) => {
    if (r2(p6.currentTarget))
      return p6.preventDefault();
    e4.disabled || (t17.menuState === 0 ? (o10({ type: 1 }), l12.nextFrame(() => {
      var M7;
      return (M7 = t17.buttonRef.current) == null ? void 0 : M7.focus({ preventScroll: true });
    })) : (p6.preventDefault(), o10({ type: 0 })));
  }), f10 = (0, import_react31.useMemo)(() => ({ open: t17.menuState === 0 }), [t17]), g6 = { ref: a12, id: i6, type: s6(e4, t17.buttonRef), "aria-haspopup": "menu", "aria-controls": (R3 = t17.itemsRef.current) == null ? void 0 : R3.id, "aria-expanded": t17.menuState === 0, onKeyDown: m10, onKeyUp: I6, onClick: A };
  return X({ ourProps: g6, theirProps: s14, slot: f10, defaultTag: ge2, name: "Menu.Button" });
}
var Ae = "div";
var be = S2.RenderStrategy | S2.Static;
function Ee(e4, u9) {
  var M7, b6;
  let r8 = I(), { id: i6 = `headlessui-menu-items-${r8}`, ...s14 } = e4, [t17, o10] = O2("Menu.Items"), a12 = y2(t17.itemsRef, u9), l12 = n2(t17.itemsRef), m10 = p(), I6 = C(), A = (() => I6 !== null ? (I6 & d5.Open) === d5.Open : t17.menuState === 0)();
  (0, import_react31.useEffect)(() => {
    let n6 = t17.itemsRef.current;
    n6 && t17.menuState === 0 && n6 !== (l12 == null ? void 0 : l12.activeElement) && n6.focus({ preventScroll: true });
  }, [t17.menuState, t17.itemsRef, l12]), F2({ container: t17.itemsRef.current, enabled: t17.menuState === 0, accept(n6) {
    return n6.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n6.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n6) {
    n6.setAttribute("role", "none");
  } });
  let f10 = o4((n6) => {
    var E8, P4;
    switch (m10.dispose(), n6.key) {
      case o7.Space:
        if (t17.searchQuery !== "")
          return n6.preventDefault(), n6.stopPropagation(), o10({ type: 3, value: n6.key });
      case o7.Enter:
        if (n6.preventDefault(), n6.stopPropagation(), o10({ type: 1 }), t17.activeItemIndex !== null) {
          let { dataRef: S9 } = t17.items[t17.activeItemIndex];
          (P4 = (E8 = S9.current) == null ? void 0 : E8.domRef.current) == null || P4.click();
        }
        D(t17.buttonRef.current);
        break;
      case o7.ArrowDown:
        return n6.preventDefault(), n6.stopPropagation(), o10({ type: 2, focus: a2.Next });
      case o7.ArrowUp:
        return n6.preventDefault(), n6.stopPropagation(), o10({ type: 2, focus: a2.Previous });
      case o7.Home:
      case o7.PageUp:
        return n6.preventDefault(), n6.stopPropagation(), o10({ type: 2, focus: a2.First });
      case o7.End:
      case o7.PageDown:
        return n6.preventDefault(), n6.stopPropagation(), o10({ type: 2, focus: a2.Last });
      case o7.Escape:
        n6.preventDefault(), n6.stopPropagation(), o10({ type: 1 }), o2().nextFrame(() => {
          var S9;
          return (S9 = t17.buttonRef.current) == null ? void 0 : S9.focus({ preventScroll: true });
        });
        break;
      case o7.Tab:
        n6.preventDefault(), n6.stopPropagation(), o10({ type: 1 }), o2().nextFrame(() => {
          _(t17.buttonRef.current, n6.shiftKey ? M.Previous : M.Next);
        });
        break;
      default:
        n6.key.length === 1 && (o10({ type: 3, value: n6.key }), m10.setTimeout(() => o10({ type: 4 }), 350));
        break;
    }
  }), g6 = o4((n6) => {
    switch (n6.key) {
      case o7.Space:
        n6.preventDefault();
        break;
    }
  }), R3 = (0, import_react31.useMemo)(() => ({ open: t17.menuState === 0 }), [t17]), p6 = { "aria-activedescendant": t17.activeItemIndex === null || (M7 = t17.items[t17.activeItemIndex]) == null ? void 0 : M7.id, "aria-labelledby": (b6 = t17.buttonRef.current) == null ? void 0 : b6.id, id: i6, onKeyDown: f10, onKeyUp: g6, role: "menu", tabIndex: 0, ref: a12 };
  return X({ ourProps: p6, theirProps: s14, slot: R3, defaultTag: Ae, features: be, visible: A, name: "Menu.Items" });
}
var Se = import_react31.Fragment;
function Pe2(e4, u9) {
  let r8 = I(), { id: i6 = `headlessui-menu-item-${r8}`, disabled: s14 = false, ...t17 } = e4, [o10, a12] = O2("Menu.Item"), l12 = o10.activeItemIndex !== null ? o10.items[o10.activeItemIndex].id === i6 : false, m10 = (0, import_react31.useRef)(null), I6 = y2(u9, m10);
  l2(() => {
    if (o10.__demoMode || o10.menuState !== 0 || !l12 || o10.activationTrigger === 0)
      return;
    let T7 = o2();
    return T7.requestAnimationFrame(() => {
      var v4, B2;
      (B2 = (v4 = m10.current) == null ? void 0 : v4.scrollIntoView) == null || B2.call(v4, { block: "nearest" });
    }), T7.dispose;
  }, [o10.__demoMode, m10, l12, o10.menuState, o10.activationTrigger, o10.activeItemIndex]);
  let A = b4(m10), f10 = (0, import_react31.useRef)({ disabled: s14, domRef: m10, get textValue() {
    return A();
  } });
  l2(() => {
    f10.current.disabled = s14;
  }, [f10, s14]), l2(() => (a12({ type: 5, id: i6, dataRef: f10 }), () => a12({ type: 6, id: i6 })), [f10, i6]);
  let g6 = o4(() => {
    a12({ type: 1 });
  }), R3 = o4((T7) => {
    if (s14)
      return T7.preventDefault();
    a12({ type: 1 }), D(o10.buttonRef.current);
  }), p6 = o4(() => {
    if (s14)
      return a12({ type: 2, focus: a2.Nothing });
    a12({ type: 2, focus: a2.Specific, id: i6 });
  }), M7 = u3(), b6 = o4((T7) => M7.update(T7)), n6 = o4((T7) => {
    M7.wasMoved(T7) && (s14 || l12 || a12({ type: 2, focus: a2.Specific, id: i6, trigger: 0 }));
  }), E8 = o4((T7) => {
    M7.wasMoved(T7) && (s14 || l12 && a12({ type: 2, focus: a2.Nothing }));
  }), P4 = (0, import_react31.useMemo)(() => ({ active: l12, disabled: s14, close: g6 }), [l12, s14, g6]);
  return X({ ourProps: { id: i6, ref: I6, role: "menuitem", tabIndex: s14 === true ? void 0 : -1, "aria-disabled": s14 === true ? true : void 0, disabled: void 0, onClick: R3, onFocus: p6, onPointerEnter: b6, onMouseEnter: b6, onPointerMove: n6, onMouseMove: n6, onPointerLeave: E8, onMouseLeave: E8 }, theirProps: t17, slot: P4, defaultTag: Se, name: "Menu.Item" });
}
var ve2 = D2(Me2);
var xe = D2(Re);
var he = D2(Ee);
var De2 = D2(Pe2);
var it = Object.assign(ve2, { Button: xe, Items: he, Item: De2 });

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react32 = __toESM(require_react(), 1);
function c12(a12 = 0) {
  let [l12, r8] = (0, import_react32.useState)(a12), t17 = f5(), o10 = (0, import_react32.useCallback)((e4) => {
    t17.current && r8((u9) => u9 | e4);
  }, [l12, t17]), m10 = (0, import_react32.useCallback)((e4) => Boolean(l12 & e4), [l12]), s14 = (0, import_react32.useCallback)((e4) => {
    t17.current && r8((u9) => u9 & ~e4);
  }, [r8, t17]), g6 = (0, import_react32.useCallback)((e4) => {
    t17.current && r8((u9) => u9 ^ e4);
  }, [r8]);
  return { flags: l12, addFlag: o10, hasFlag: m10, removeFlag: s14, toggleFlag: g6 };
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react33 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l11(r8) {
  let e4 = { called: false };
  return (...t17) => {
    if (!e4.called)
      return e4.called = true, r8(...t17);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function g5(t17, ...e4) {
  t17 && e4.length > 0 && t17.classList.add(...e4);
}
function v3(t17, ...e4) {
  t17 && e4.length > 0 && t17.classList.remove(...e4);
}
function b5(t17, e4) {
  let n6 = o2();
  if (!t17)
    return n6.dispose;
  let { transitionDuration: m10, transitionDelay: a12 } = getComputedStyle(t17), [u9, p6] = [m10, a12].map((l12) => {
    let [r8 = 0] = l12.split(",").filter(Boolean).map((i6) => i6.includes("ms") ? parseFloat(i6) : parseFloat(i6) * 1e3).sort((i6, T7) => T7 - i6);
    return r8;
  }), o10 = u9 + p6;
  if (o10 !== 0) {
    n6.group((r8) => {
      r8.setTimeout(() => {
        e4(), r8.dispose();
      }, o10), r8.addEventListener(t17, "transitionrun", (i6) => {
        i6.target === i6.currentTarget && r8.dispose();
      });
    });
    let l12 = n6.addEventListener(t17, "transitionend", (r8) => {
      r8.target === r8.currentTarget && (e4(), l12());
    });
  } else
    e4();
  return n6.add(() => e4()), n6.dispose;
}
function M5(t17, e4, n6, m10) {
  let a12 = n6 ? "enter" : "leave", u9 = o2(), p6 = m10 !== void 0 ? l11(m10) : () => {
  };
  a12 === "enter" && (t17.removeAttribute("hidden"), t17.style.display = "");
  let o10 = u(a12, { enter: () => e4.enter, leave: () => e4.leave }), l12 = u(a12, { enter: () => e4.enterTo, leave: () => e4.leaveTo }), r8 = u(a12, { enter: () => e4.enterFrom, leave: () => e4.leaveFrom });
  return v3(t17, ...e4.base, ...e4.enter, ...e4.enterTo, ...e4.enterFrom, ...e4.leave, ...e4.leaveFrom, ...e4.leaveTo, ...e4.entered), g5(t17, ...e4.base, ...o10, ...r8), u9.nextFrame(() => {
    v3(t17, ...e4.base, ...o10, ...r8), g5(t17, ...e4.base, ...o10, ...l12), b5(t17, () => (v3(t17, ...e4.base, ...o10), g5(t17, ...e4.base, ...e4.entered), p6()));
  }), u9.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function E7({ immediate: t17, container: s14, direction: n6, classes: u9, onStart: a12, onStop: c13 }) {
  let l12 = f5(), d11 = p(), e4 = s2(n6);
  l2(() => {
    t17 && (e4.current = "enter");
  }, [t17]), l2(() => {
    let r8 = o2();
    d11.add(r8.dispose);
    let i6 = s14.current;
    if (i6 && e4.current !== "idle" && l12.current)
      return r8.dispose(), a12.current(e4.current), r8.add(M5(i6, u9.current, e4.current === "enter", () => {
        r8.dispose(), c13.current(e4.current);
      })), r8.dispose;
  }, [n6]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function S8(t17 = "") {
  return t17.split(" ").filter((n6) => n6.trim().length > 1);
}
var _2 = (0, import_react33.createContext)(null);
_2.displayName = "TransitionContext";
var be2 = ((r8) => (r8.Visible = "visible", r8.Hidden = "hidden", r8))(be2 || {});
function Se2() {
  let t17 = (0, import_react33.useContext)(_2);
  if (t17 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t17;
}
function Ne2() {
  let t17 = (0, import_react33.useContext)(M6);
  if (t17 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t17;
}
var M6 = (0, import_react33.createContext)(null);
M6.displayName = "NestingContext";
function U3(t17) {
  return "children" in t17 ? U3(t17.children) : t17.current.filter(({ el: n6 }) => n6.current !== null).filter(({ state: n6 }) => n6 === "visible").length > 0;
}
function oe2(t17, n6) {
  let r8 = s2(t17), s14 = (0, import_react33.useRef)([]), y6 = f5(), D5 = p(), c13 = o4((i6, e4 = j.Hidden) => {
    let a12 = s14.current.findIndex(({ el: o10 }) => o10 === i6);
    a12 !== -1 && (u(e4, { [j.Unmount]() {
      s14.current.splice(a12, 1);
    }, [j.Hidden]() {
      s14.current[a12].state = "hidden";
    } }), D5.microTask(() => {
      var o10;
      !U3(s14) && y6.current && ((o10 = r8.current) == null || o10.call(r8));
    }));
  }), x5 = o4((i6) => {
    let e4 = s14.current.find(({ el: a12 }) => a12 === i6);
    return e4 ? e4.state !== "visible" && (e4.state = "visible") : s14.current.push({ el: i6, state: "visible" }), () => c13(i6, j.Unmount);
  }), p6 = (0, import_react33.useRef)([]), h9 = (0, import_react33.useRef)(Promise.resolve()), u9 = (0, import_react33.useRef)({ enter: [], leave: [], idle: [] }), v4 = o4((i6, e4, a12) => {
    p6.current.splice(0), n6 && (n6.chains.current[e4] = n6.chains.current[e4].filter(([o10]) => o10 !== i6)), n6 == null || n6.chains.current[e4].push([i6, new Promise((o10) => {
      p6.current.push(o10);
    })]), n6 == null || n6.chains.current[e4].push([i6, new Promise((o10) => {
      Promise.all(u9.current[e4].map(([f10, P4]) => P4)).then(() => o10());
    })]), e4 === "enter" ? h9.current = h9.current.then(() => n6 == null ? void 0 : n6.wait.current).then(() => a12(e4)) : a12(e4);
  }), d11 = o4((i6, e4, a12) => {
    Promise.all(u9.current[e4].splice(0).map(([o10, f10]) => f10)).then(() => {
      var o10;
      (o10 = p6.current.shift()) == null || o10();
    }).then(() => a12(e4));
  });
  return (0, import_react33.useMemo)(() => ({ children: s14, register: x5, unregister: c13, onStart: v4, onStop: d11, wait: h9, chains: u9 }), [x5, c13, s14, v4, d11, u9, h9]);
}
function xe2() {
}
var Pe3 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function se2(t17) {
  var r8;
  let n6 = {};
  for (let s14 of Pe3)
    n6[s14] = (r8 = t17[s14]) != null ? r8 : xe2;
  return n6;
}
function Re2(t17) {
  let n6 = (0, import_react33.useRef)(se2(t17));
  return (0, import_react33.useEffect)(() => {
    n6.current = se2(t17);
  }, [t17]), n6;
}
var ye3 = "div";
var ae2 = S2.RenderStrategy;
function De3(t17, n6) {
  var K3, Q3;
  let { beforeEnter: r8, afterEnter: s14, beforeLeave: y6, afterLeave: D5, enter: c13, enterFrom: x5, enterTo: p6, entered: h9, leave: u9, leaveFrom: v4, leaveTo: d11, ...i6 } = t17, e4 = (0, import_react33.useRef)(null), a12 = y2(e4, n6), o10 = (K3 = i6.unmount) == null || K3 ? j.Unmount : j.Hidden, { show: f10, appear: P4, initial: T7 } = Se2(), [l12, j5] = (0, import_react33.useState)(f10 ? "visible" : "hidden"), q3 = Ne2(), { register: O3, unregister: V2 } = q3;
  (0, import_react33.useEffect)(() => O3(e4), [O3, e4]), (0, import_react33.useEffect)(() => {
    if (o10 === j.Hidden && e4.current) {
      if (f10 && l12 !== "visible") {
        j5("visible");
        return;
      }
      return u(l12, { ["hidden"]: () => V2(e4), ["visible"]: () => O3(e4) });
    }
  }, [l12, e4, O3, V2, f10, o10]);
  let k2 = s2({ base: S8(i6.className), enter: S8(c13), enterFrom: S8(x5), enterTo: S8(p6), entered: S8(h9), leave: S8(u9), leaveFrom: S8(v4), leaveTo: S8(d11) }), w6 = Re2({ beforeEnter: r8, afterEnter: s14, beforeLeave: y6, afterLeave: D5 }), G2 = l3();
  (0, import_react33.useEffect)(() => {
    if (G2 && l12 === "visible" && e4.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e4, l12, G2]);
  let ue2 = T7 && !P4, z4 = P4 && f10 && T7, Te2 = (() => !G2 || ue2 ? "idle" : f10 ? "enter" : "leave")(), H5 = c12(0), de2 = o4((g6) => u(g6, { enter: () => {
    H5.addFlag(d5.Opening), w6.current.beforeEnter();
  }, leave: () => {
    H5.addFlag(d5.Closing), w6.current.beforeLeave();
  }, idle: () => {
  } })), fe2 = o4((g6) => u(g6, { enter: () => {
    H5.removeFlag(d5.Opening), w6.current.afterEnter();
  }, leave: () => {
    H5.removeFlag(d5.Closing), w6.current.afterLeave();
  }, idle: () => {
  } })), A = oe2(() => {
    j5("hidden"), V2(e4);
  }, q3);
  E7({ immediate: z4, container: e4, classes: k2, direction: Te2, onStart: s2((g6) => {
    A.onStart(e4, g6, de2);
  }), onStop: s2((g6) => {
    A.onStop(e4, g6, fe2), g6 === "leave" && !U3(A) && (j5("hidden"), V2(e4));
  }) });
  let R3 = i6, me3 = { ref: a12 };
  return z4 ? R3 = { ...R3, className: t6(i6.className, ...k2.current.enter, ...k2.current.enterFrom) } : (R3.className = t6(i6.className, (Q3 = e4.current) == null ? void 0 : Q3.className), R3.className === "" && delete R3.className), import_react33.default.createElement(M6.Provider, { value: A }, import_react33.default.createElement(c6, { value: u(l12, { ["visible"]: d5.Open, ["hidden"]: d5.Closed }) | H5.flags }, X({ ourProps: me3, theirProps: R3, defaultTag: ye3, features: ae2, visible: l12 === "visible", name: "Transition.Child" })));
}
function He2(t17, n6) {
  let { show: r8, appear: s14 = false, unmount: y6 = true, ...D5 } = t17, c13 = (0, import_react33.useRef)(null), x5 = y2(c13, n6);
  l3();
  let p6 = C();
  if (r8 === void 0 && p6 !== null && (r8 = (p6 & d5.Open) === d5.Open), ![true, false].includes(r8))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [h9, u9] = (0, import_react33.useState)(r8 ? "visible" : "hidden"), v4 = oe2(() => {
    u9("hidden");
  }), [d11, i6] = (0, import_react33.useState)(true), e4 = (0, import_react33.useRef)([r8]);
  l2(() => {
    d11 !== false && e4.current[e4.current.length - 1] !== r8 && (e4.current.push(r8), i6(false));
  }, [e4, r8]);
  let a12 = (0, import_react33.useMemo)(() => ({ show: r8, appear: s14, initial: d11 }), [r8, s14, d11]);
  (0, import_react33.useEffect)(() => {
    if (r8)
      u9("visible");
    else if (!U3(v4))
      u9("hidden");
    else {
      let T7 = c13.current;
      if (!T7)
        return;
      let l12 = T7.getBoundingClientRect();
      l12.x === 0 && l12.y === 0 && l12.width === 0 && l12.height === 0 && u9("hidden");
    }
  }, [r8, v4]);
  let o10 = { unmount: y6 }, f10 = o4(() => {
    var T7;
    d11 && i6(false), (T7 = t17.beforeEnter) == null || T7.call(t17);
  }), P4 = o4(() => {
    var T7;
    d11 && i6(false), (T7 = t17.beforeLeave) == null || T7.call(t17);
  });
  return import_react33.default.createElement(M6.Provider, { value: v4 }, import_react33.default.createElement(_2.Provider, { value: a12 }, X({ ourProps: { ...o10, as: import_react33.Fragment, children: import_react33.default.createElement(le2, { ref: x5, ...o10, ...D5, beforeEnter: f10, beforeLeave: P4 }) }, theirProps: {}, defaultTag: import_react33.Fragment, features: ae2, visible: h9 === "visible", name: "Transition" })));
}
function Fe(t17, n6) {
  let r8 = (0, import_react33.useContext)(_2) !== null, s14 = C() !== null;
  return import_react33.default.createElement(import_react33.default.Fragment, null, !r8 && s14 ? import_react33.default.createElement(W, { ref: n6, ...t17 }) : import_react33.default.createElement(le2, { ref: n6, ...t17 }));
}
var W = D2(He2);
var le2 = D2(De3);
var Le = D2(Fe);
var tt = Object.assign(W, { Child: Le, Root: W });

// node_modules/@heroicons/react/20/solid/esm/ChevronDownIcon.js
var React = __toESM(require_react(), 1);
function ChevronDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
    clipRule: "evenodd"
  }));
}
var ForwardRef = React.forwardRef(ChevronDownIcon);
var ChevronDownIcon_default = ForwardRef;

// node_modules/@heroicons/react/20/solid/esm/FunnelIcon.js
var React2 = __toESM(require_react(), 1);
function FunnelIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React2.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React2.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React2.createElement("path", {
    fillRule: "evenodd",
    d: "M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z",
    clipRule: "evenodd"
  }));
}
var ForwardRef2 = React2.forwardRef(FunnelIcon);
var FunnelIcon_default = ForwardRef2;

// node_modules/@heroicons/react/20/solid/esm/MinusIcon.js
var React3 = __toESM(require_react(), 1);
function MinusIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React3.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React3.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React3.createElement("path", {
    fillRule: "evenodd",
    d: "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z",
    clipRule: "evenodd"
  }));
}
var ForwardRef3 = React3.forwardRef(MinusIcon);
var MinusIcon_default = ForwardRef3;

// node_modules/@heroicons/react/20/solid/esm/PlusIcon.js
var React4 = __toESM(require_react(), 1);
function PlusIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React4.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React4.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React4.createElement("path", {
    d: "M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
  }));
}
var ForwardRef4 = React4.forwardRef(PlusIcon);
var PlusIcon_default = ForwardRef4;

// node_modules/@heroicons/react/20/solid/esm/Squares2X2Icon.js
var React5 = __toESM(require_react(), 1);
function Squares2X2Icon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React5.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React5.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React5.createElement("path", {
    fillRule: "evenodd",
    d: "M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z",
    clipRule: "evenodd"
  }));
}
var ForwardRef5 = React5.forwardRef(Squares2X2Icon);
var Squares2X2Icon_default = ForwardRef5;

// app/components/CollectionCarousel.jsx
var import_react34 = __toESM(require_react());
var import_react_responsive = __toESM(require_react_responsive());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CollectionCarousel = ({ collection, handle, sortArr, all_collections }) => {
  const noImg = "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/No-image-found.jpg?v=1708942129";
  let collectionsToShow = [];
  const [startIndex, setStartIndex] = (0, import_react34.useState)(0);
  const isLargeScreen = (0, import_react_responsive.useMediaQuery)({ minWidth: 1024 });
  const eIndex = isLargeScreen ? len < 4 ? len : 4 : 2;
  const [endIndex, setEndIndex] = (0, import_react34.useState)(eIndex);
  var len = sortArr?.length;
  if (sortArr != null || sortArr != void 0) {
    collectionsToShow = sortArr.slice(startIndex, endIndex);
  }
  console.log("Meta :;", collectionsToShow[0]?.node?.metafields);
  const nextCollections = () => {
    setStartIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
    setEndIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
  };
  const prevCollections = () => {
    setStartIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
    setEndIndex((prevIndex) => len == endIndex ? prevIndex - 1 : prevIndex + 1);
  };
  console.log("collectionsToShow::", startIndex, endIndex);
  function getPath(url_path) {
    let url = new URL(url_path);
    let path = url.pathname;
    return path;
  }
  function goToCollection(url_path) {
    let url = `/collections/${url_path}`;
    console.log(url);
    window.location.href = url;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "recommended_section w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex grid-row-1 grid-cols-2 gap-4", children: collectionsToShow.map((coll, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full cursor", onClick: () => goToCollection(coll[0]?.node?.handle), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white mst-card rounded-lg shadow-lg p-2 w-32 h-40 sm:w-40", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          src: coll[0]?.node?.metafields[1]?.value || noImg,
          className: "w-full h-auto coll_cor_img rounded-full"
        },
        void 0,
        false,
        {
          fileName: "app/components/CollectionCarousel.jsx",
          lineNumber: 58,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-sm font-semibold mt-2 text-center", children: coll[0]?.node?.title }, void 0, false, {
        fileName: "app/components/CollectionCarousel.jsx",
        lineNumber: 62,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/CollectionCarousel.jsx",
      lineNumber: 56,
      columnNumber: 17
    }, this) }, `coll_corousel_${index}`, false, {
      fileName: "app/components/CollectionCarousel.jsx",
      lineNumber: 55,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/components/CollectionCarousel.jsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    sortArr?.length > eIndex && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          className: "absolute lg:left-[-150px] top-1/2 transform -translate-y-1/2 lg:bg-[#faebd7] bg-white bg-opacity-75 rounded-full p-2 ml-4 hover:bg-opacity-100 mst-arrow",
          onClick: () => prevCollections(),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            MdChevronLeft,
            {
              className: "opacity-50 cursor-pointer hover:opacity-100",
              size: 30
            },
            void 0,
            false,
            {
              fileName: "app/components/CollectionCarousel.jsx",
              lineNumber: 76,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/CollectionCarousel.jsx",
          lineNumber: 72,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          className: "absolute lg:right-[-150px] right-0 top-1/2 transform -translate-y-1/2 lg:bg-[#faebd7] bg-white bg-opacity-75 rounded-full p-2 mr-4 hover:bg-opacity-100 mst-arrow",
          onClick: () => nextCollections(),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            MdChevronRight,
            {
              className: "opacity-50 cursor-pointer hover:opacity-100",
              size: 30
            },
            void 0,
            false,
            {
              fileName: "app/components/CollectionCarousel.jsx",
              lineNumber: 85,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/CollectionCarousel.jsx",
          lineNumber: 81,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/CollectionCarousel.jsx",
      lineNumber: 71,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CollectionCarousel.jsx",
    lineNumber: 52,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/CollectionCarousel.jsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
};
var CollectionCarousel_default = CollectionCarousel;

// app/routes/($locale).collections.$handle.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var sortOptions = [
  { name: "Most Popular", href: "#", value: "", current: true },
  // {name: 'Best Rating', href: '#', value:'', current: false},
  { name: "Newest", href: "#", value: "created_asc", current: false },
  { name: "Price: Low to High", value: "lh", href: "#", current: false },
  { name: "Price: High to Low", value: "hl", href: "#", current: false }
];
var subCategories = [
  { name: "Way 2 Slay", href: "/collections/way-2-slay-mjk" },
  { name: "Rizz & Roll", href: "/collections/rizz-roll-mjk" },
  { name: "Pro Studio", href: "/collections/pro-studio-mjk" }
];
var filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false }
    ]
  },
  {
    id: "price",
    name: "Price",
    options: [
      { value: "299", label: "\u20B90 - \u20B9299" },
      { value: "499", label: "\u20B9300 - \u20B9499" },
      { value: "899", label: "\u20B9500 - \u20B9899" },
      { value: "900", label: "\u20B9900+" }
    ]
  }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var meta = ({ data }) => {
  return [{ title: `Hydrogen | ${data.collection.title} Collection` }];
};
function Collection() {
  var collectionArray = [];
  const { collection, header, handle, collections } = useLoaderData();
  const { menu } = header;
  let subMenu = menu.items;
  var sortArr = subMenu.filter((item) => item.title.toLowerCase() === handle);
  collectionArray = sortArr.length ? sortArr[0]?.items : [];
  const sortColl = collectionArray.map((coll) => collections.edges.filter((item) => item.node.title === coll.title));
  console.log("sortColl::", sortColl);
  const [mobileFiltersOpen, setMobileFiltersOpen] = (0, import_react35.useState)(false);
  var productsToShow1 = [];
  const lines = [];
  const [startIndex, setStartIndex] = (0, import_react35.useState)(0);
  const [productsToShow, setProductToShow] = (0, import_react35.useState)([]);
  const [productsToShowDump, setProductToShowDump] = (0, import_react35.useState)([]);
  const [imgUrl, setImgUrl] = (0, import_react35.useState)("");
  const isLargeScreen = (0, import_react_responsive2.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive2.useMediaQuery)({ maxWidth: 640 });
  const [readMore, setMore] = (0, import_react35.useState)(false);
  const endIndex = isLargeScreen ? 4 : 2;
  (0, import_react35.useEffect)(() => {
    if (collection.products != null || collection.products != void 0) {
      productsToShow1 = collection.products.nodes;
      setProductToShow(productsToShow1);
      setProductToShowDump(productsToShow1);
    }
  }, []);
  collection.products.nodes.map((product) => {
    product.variants.nodes.map((line) => {
      lines.push({
        merchandiseId: line.id,
        quantity: 1
      });
    });
  });
  const sortCollectionProducts = (sort_by) => {
    var data = collection.products.nodes;
    console.log("sortCollectionProducts::", data);
    switch (sort_by) {
      case "lh":
        sortArray(data, "ascending");
        break;
      case "hl":
        sortArray(data, "descending");
        break;
      case "created_asc":
        sortByDate(data, "ascending");
        break;
      case "created_desc":
        sortByDate(data, "descending");
        break;
      default:
        setProductToShow(data);
    }
  };
  const sortArray = (data, sortOrder = "ascending") => {
    console.log("sortArray::", data);
    const sortedData = [...data].sort((a12, b6) => {
      var nodeA = a12, nodeB = b6;
      if (sortOrder === "ascending") {
        return parseFloat(nodeA.priceRange.maxVariantPrice.amount) - parseFloat(nodeB.priceRange.maxVariantPrice.amount);
      } else {
        return parseFloat(nodeB.priceRange.maxVariantPrice.amount) - parseFloat(nodeA.priceRange.maxVariantPrice.amount);
      }
    });
    setProductToShow(sortedData);
  };
  const sortByDate = (data, sortOrder = "ascending") => {
    console.log("sortByDate::", data);
    const sortedData = [...data].sort((a12, b6) => {
      var nodeA = a12, nodeB = b6;
      if (sortOrder === "ascending") {
        return new Date(nodeA.publishedAt).getTime() - new Date(nodeB.publishedAt).getTime();
      } else {
        return new Date(nodeB.publishedAt).getTime() - new Date(nodeA.publishedAt).getTime();
      }
    });
    setProductToShow(sortedData);
  };
  const filterData = (e4) => {
    var price = parseInt(e4.target.value);
    console.log("filter::", e4.target.checked);
    var isChecked = e4.target.checked;
    var filterData2 = productsToShow;
    if (isChecked) {
      let filter = filterData2.filter((item) => item.priceRange.maxVariantPrice.amount > price);
      console.log("filter::", filter);
      setProductToShow(filter);
    } else {
      setProductToShow(productsToShowDump);
    }
  };
  function getPath(url_path) {
    let url = new URL(url_path);
    let path = url.pathname;
    return path;
  }
  const goToProduct = (url_path) => {
    window.location.href = url_path;
  };
  (0, import_react35.useEffect)(() => {
    var img = "";
    if (isSmall) {
      img = collection?.metafields[0] ? collection?.metafields[0].value : collection?.image?.url;
    } else {
      img = collection?.image?.url;
    }
    setImgUrl(img);
  }, [collection]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        src: imgUrl,
        style: { objectFit: "cover", width: "100%" }
      },
      collection.handle,
      false,
      {
        fileName: "app/routes/($locale).collections.$handle.jsx",
        lineNumber: 223,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/($locale).collections.$handle.jsx",
      lineNumber: 222,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white mx-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(tt.Root, { show: mobileFiltersOpen, as: import_react37.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        _t,
        {
          as: "div",
          className: "relative z-40 lg:hidden",
          onClose: setMobileFiltersOpen,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              tt.Child,
              {
                as: import_react37.Fragment,
                enter: "transition-opacity ease-linear duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "transition-opacity ease-linear duration-300",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 bg-black bg-opacity-25" }, void 0, false, {
                  fileName: "app/routes/($locale).collections.$handle.jsx",
                  lineNumber: 247,
                  columnNumber: 17
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).collections.$handle.jsx",
                lineNumber: 238,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 z-40 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              tt.Child,
              {
                as: import_react37.Fragment,
                enter: "transition ease-in-out duration-300 transform",
                enterFrom: "translate-x-full",
                enterTo: "translate-x-0",
                leave: "transition ease-in-out duration-300 transform",
                leaveFrom: "translate-x-0",
                leaveTo: "translate-x-full",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(_t.Panel, { className: "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between px-4", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900", children: "Filters" }, void 0, false, {
                      fileName: "app/routes/($locale).collections.$handle.jsx",
                      lineNumber: 262,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      "button",
                      {
                        type: "button",
                        className: "-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",
                        onClick: () => setMobileFiltersOpen(false),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Close menu" }, void 0, false, {
                            fileName: "app/routes/($locale).collections.$handle.jsx",
                            lineNumber: 270,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                            fileName: "app/routes/($locale).collections.$handle.jsx",
                            lineNumber: 271,
                            columnNumber: 25
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/routes/($locale).collections.$handle.jsx",
                        lineNumber: 265,
                        columnNumber: 23
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "app/routes/($locale).collections.$handle.jsx",
                    lineNumber: 261,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "mt-4 border-t border-gray-200", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "sr-only", children: "Categories" }, void 0, false, {
                      fileName: "app/routes/($locale).collections.$handle.jsx",
                      lineNumber: 277,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      "ul",
                      {
                        role: "list",
                        className: "px-2 py-3 font-medium text-gray-900",
                        children: subCategories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: category.href, className: "block px-2 py-3", children: category.name }, void 0, false, {
                          fileName: "app/routes/($locale).collections.$handle.jsx",
                          lineNumber: 284,
                          columnNumber: 29
                        }, this) }, category.name, false, {
                          fileName: "app/routes/($locale).collections.$handle.jsx",
                          lineNumber: 283,
                          columnNumber: 27
                        }, this))
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/($locale).collections.$handle.jsx",
                        lineNumber: 278,
                        columnNumber: 23
                      },
                      this
                    ),
                    filters.map((section) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      ve,
                      {
                        as: "div",
                        className: "border-t border-gray-200 px-4 py-6",
                        children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "-mx-2 -my-3 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ve.Button, { className: "flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400", children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-medium text-gray-900", children: section.name }, void 0, false, {
                              fileName: "app/routes/($locale).collections.$handle.jsx",
                              lineNumber: 302,
                              columnNumber: 35
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-6 flex items-center", children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                              MinusIcon_default,
                              {
                                className: "h-5 w-5",
                                "aria-hidden": "true"
                              },
                              void 0,
                              false,
                              {
                                fileName: "app/routes/($locale).collections.$handle.jsx",
                                lineNumber: 307,
                                columnNumber: 39
                              },
                              this
                            ) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                              PlusIcon_default,
                              {
                                className: "h-5 w-5",
                                "aria-hidden": "true"
                              },
                              void 0,
                              false,
                              {
                                fileName: "app/routes/($locale).collections.$handle.jsx",
                                lineNumber: 312,
                                columnNumber: 39
                              },
                              this
                            ) }, void 0, false, {
                              fileName: "app/routes/($locale).collections.$handle.jsx",
                              lineNumber: 305,
                              columnNumber: 35
                            }, this)
                          ] }, void 0, true, {
                            fileName: "app/routes/($locale).collections.$handle.jsx",
                            lineNumber: 301,
                            columnNumber: 33
                          }, this) }, void 0, false, {
                            fileName: "app/routes/($locale).collections.$handle.jsx",
                            lineNumber: 300,
                            columnNumber: 31
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ve.Panel, { className: "pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-6", children: section.options.map((option, optionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                            "div",
                            {
                              className: "flex items-center",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                                  "input",
                                  {
                                    id: `filter-mobile-${section.id}-${optionIdx}`,
                                    name: `${section.id}[]`,
                                    defaultValue: option.value,
                                    onChange: (e4) => filterData(e4),
                                    type: "checkbox",
                                    defaultChecked: option.checked,
                                    className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "app/routes/($locale).collections.$handle.jsx",
                                    lineNumber: 327,
                                    columnNumber: 39
                                  },
                                  this
                                ),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                                  "label",
                                  {
                                    htmlFor: `filter-mobile-${section.id}-${optionIdx}`,
                                    className: "ml-3 min-w-0 flex-1 text-gray-500",
                                    children: option.label
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "app/routes/($locale).collections.$handle.jsx",
                                    lineNumber: 336,
                                    columnNumber: 39
                                  },
                                  this
                                )
                              ]
                            },
                            option.value,
                            true,
                            {
                              fileName: "app/routes/($locale).collections.$handle.jsx",
                              lineNumber: 323,
                              columnNumber: 37
                            },
                            this
                          )) }, void 0, false, {
                            fileName: "app/routes/($locale).collections.$handle.jsx",
                            lineNumber: 321,
                            columnNumber: 33
                          }, this) }, void 0, false, {
                            fileName: "app/routes/($locale).collections.$handle.jsx",
                            lineNumber: 320,
                            columnNumber: 31
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/routes/($locale).collections.$handle.jsx",
                          lineNumber: 298,
                          columnNumber: 29
                        }, this)
                      },
                      section.id,
                      false,
                      {
                        fileName: "app/routes/($locale).collections.$handle.jsx",
                        lineNumber: 292,
                        columnNumber: 25
                      },
                      this
                    ))
                  ] }, void 0, true, {
                    fileName: "app/routes/($locale).collections.$handle.jsx",
                    lineNumber: 276,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/($locale).collections.$handle.jsx",
                  lineNumber: 260,
                  columnNumber: 19
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/routes/($locale).collections.$handle.jsx",
                lineNumber: 251,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/($locale).collections.$handle.jsx",
              lineNumber: 250,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/($locale).collections.$handle.jsx",
          lineNumber: 233,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/($locale).collections.$handle.jsx",
        lineNumber: 232,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "collectionContent sm:mt-4 overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex gap-4", children: sortArr.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CollectionCarousel_default, { collections: collection, handle, sortArr: sortColl }, void 0, false, {
        fileName: "app/routes/($locale).collections.$handle.jsx",
        lineNumber: 360,
        columnNumber: 14
      }, this) : null }, void 0, false, {
        fileName: "app/routes/($locale).collections.$handle.jsx",
        lineNumber: 358,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/($locale).collections.$handle.jsx",
        lineNumber: 357,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "mx-auto max-w-8xl px-0 sm:px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-1 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "mst-color", to: "/", children: "Home" }, void 0, false, {
            fileName: "app/routes/($locale).collections.$handle.jsx",
            lineNumber: 368,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/next.png", alt: "next", width: 20, height: 20 }, void 0, false, {
            fileName: "app/routes/($locale).collections.$handle.jsx",
            lineNumber: 369,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/collections", className: "font-semibold mst-color", children: "Collection" }, void 0, false, {
            fileName: "app/routes/($locale).collections.$handle.jsx",
            lineNumber: 370,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).collections.$handle.jsx",
          lineNumber: 367,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-baseline justify-between border-b mst-border pb-6 m-0 relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-4xl font-bold tracking-tight text-gray-900 sm:block hidden my-[15px] mst-color", children: collection.title }, void 0, false, {
            fileName: "app/routes/($locale).collections.$handle.jsx",
            lineNumber: 373,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center sm:mr-10", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(it, { as: "div", className: "relative inline-block text-left", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(it.Button, { className: "group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 mst-color", children: [
                "Sort",
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  ChevronDownIcon_default,
                  {
                    className: "-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500 mst-color",
                    "aria-hidden": "true"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/($locale).collections.$handle.jsx",
                    lineNumber: 382,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/($locale).collections.$handle.jsx",
                lineNumber: 380,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/($locale).collections.$handle.jsx",
                lineNumber: 379,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                tt,
                {
                  as: import_react37.Fragment,
                  enter: "transition ease-out duration-100",
                  enterFrom: "transform opacity-0 scale-95",
                  enterTo: "transform opacity-100 scale-100",
                  leave: "transition ease-in duration-75",
                  leaveFrom: "transform opacity-100 scale-100",
                  leaveTo: "transform opacity-0 scale-95",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(it.Items, { className: "absolute left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "py-1", children: sortOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "a",
                    {
                      onClick: () => sortCollectionProducts(option.value),
                      className: classNames(
                        option.current ? "font-medium text-gray-900" : "text-gray-500",
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm"
                      ),
                      children: option.name
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/($locale).collections.$handle.jsx",
                      lineNumber: 403,
                      columnNumber: 31
                    },
                    this
                  ) }, option.name, false, {
                    fileName: "app/routes/($locale).collections.$handle.jsx",
                    lineNumber: 401,
                    columnNumber: 27
                  }, this)) }, void 0, false, {
                    fileName: "app/routes/($locale).collections.$handle.jsx",
                    lineNumber: 399,
                    columnNumber: 23
                  }, this) }, void 0, false, {
                    fileName: "app/routes/($locale).collections.$handle.jsx",
                    lineNumber: 398,
                    columnNumber: 21
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/routes/($locale).collections.$handle.jsx",
                  lineNumber: 389,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/($locale).collections.$handle.jsx",
              lineNumber: 378,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                type: "button",
                className: "second-filter -m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "View grid" }, void 0, false, {
                    fileName: "app/routes/($locale).collections.$handle.jsx",
                    lineNumber: 427,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Squares2X2Icon_default, { className: "h-5 w-5 mst-color", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/($locale).collections.$handle.jsx",
                    lineNumber: 428,
                    columnNumber: 19
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/($locale).collections.$handle.jsx",
                lineNumber: 423,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                type: "button",
                className: "right-filter -m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden",
                onClick: () => setMobileFiltersOpen(true),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Filters" }, void 0, false, {
                    fileName: "app/routes/($locale).collections.$handle.jsx",
                    lineNumber: 435,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FunnelIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/($locale).collections.$handle.jsx",
                    lineNumber: 436,
                    columnNumber: 19
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/($locale).collections.$handle.jsx",
                lineNumber: 430,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/($locale).collections.$handle.jsx",
            lineNumber: 377,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).collections.$handle.jsx",
          lineNumber: 372,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { "aria-labelledby": "products-heading", className: "pb-12 pt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "products-heading", className: "sr-only", children: "Products" }, void 0, false, {
            fileName: "app/routes/($locale).collections.$handle.jsx",
            lineNumber: 442,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "shadow-md px-4 py-2 sm:mst-card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "hidden lg:block lg:sticky lg:top-[120px]", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "sr-only", children: "Categories" }, void 0, false, {
                fileName: "app/routes/($locale).collections.$handle.jsx",
                lineNumber: 451,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "ul",
                {
                  role: "list",
                  className: "space-y-4 border-gray-200 pb-6 text-sm font-medium text-gray-900",
                  children: subCategories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "li",
                    {
                      className: "border-b border-[#ece6e6] pb-2",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                        "a",
                        {
                          href: category.href,
                          className: "font-bold text-[18px]",
                          children: category.name
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/($locale).collections.$handle.jsx",
                          lineNumber: 461,
                          columnNumber: 27
                        },
                        this
                      )
                    },
                    category.name,
                    false,
                    {
                      fileName: "app/routes/($locale).collections.$handle.jsx",
                      lineNumber: 457,
                      columnNumber: 25
                    },
                    this
                  ))
                },
                void 0,
                false,
                {
                  fileName: "app/routes/($locale).collections.$handle.jsx",
                  lineNumber: 452,
                  columnNumber: 21
                },
                this
              ),
              filters.map((section) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                ve,
                {
                  as: "div",
                  className: "border-b border-gray-200 py-2",
                  children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "-my-3 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ve.Button, { className: "flex w-full items-center justify-between bg-white py-3 text-[18px] text-black font-bold", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "", children: section.name }, void 0, false, {
                        fileName: "app/routes/($locale).collections.$handle.jsx",
                        lineNumber: 481,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-6 flex items-center", children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                        MinusIcon_default,
                        {
                          className: "h-5 w-5",
                          "aria-hidden": "true"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/($locale).collections.$handle.jsx",
                          lineNumber: 484,
                          columnNumber: 37
                        },
                        this
                      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                        PlusIcon_default,
                        {
                          className: "h-5 w-5",
                          "aria-hidden": "true"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/($locale).collections.$handle.jsx",
                          lineNumber: 489,
                          columnNumber: 37
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/routes/($locale).collections.$handle.jsx",
                        lineNumber: 482,
                        columnNumber: 33
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/($locale).collections.$handle.jsx",
                      lineNumber: 480,
                      columnNumber: 31
                    }, this) }, void 0, false, {
                      fileName: "app/routes/($locale).collections.$handle.jsx",
                      lineNumber: 479,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ve.Panel, { className: "pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-4", children: section.options.map((option, optionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      "div",
                      {
                        className: "flex items-center",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                            "input",
                            {
                              id: `filter-${section.id}-${optionIdx}`,
                              name: `${section.id}[]`,
                              defaultValue: option.value,
                              onChange: (e4) => filterData(e4),
                              type: "checkbox",
                              defaultChecked: option.checked,
                              className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/($locale).collections.$handle.jsx",
                              lineNumber: 504,
                              columnNumber: 37
                            },
                            this
                          ),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                            "label",
                            {
                              htmlFor: `filter-${section.id}-${optionIdx}`,
                              className: "ml-3 text-sm text-gray-600",
                              children: option.label
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/($locale).collections.$handle.jsx",
                              lineNumber: 513,
                              columnNumber: 37
                            },
                            this
                          )
                        ]
                      },
                      option.value,
                      true,
                      {
                        fileName: "app/routes/($locale).collections.$handle.jsx",
                        lineNumber: 500,
                        columnNumber: 35
                      },
                      this
                    )) }, void 0, false, {
                      fileName: "app/routes/($locale).collections.$handle.jsx",
                      lineNumber: 498,
                      columnNumber: 31
                    }, this) }, void 0, false, {
                      fileName: "app/routes/($locale).collections.$handle.jsx",
                      lineNumber: 497,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/($locale).collections.$handle.jsx",
                    lineNumber: 478,
                    columnNumber: 27
                  }, this)
                },
                section.id,
                false,
                {
                  fileName: "app/routes/($locale).collections.$handle.jsx",
                  lineNumber: 472,
                  columnNumber: 23
                },
                this
              ))
            ] }, void 0, true, {
              fileName: "app/routes/($locale).collections.$handle.jsx",
              lineNumber: 450,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).collections.$handle.jsx",
              lineNumber: 449,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full max-w-screen-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "cursor grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4", children: productsToShow.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "cursor mst-card-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                className: "bg-white rounded-lg shadow-lg p-2 px-2 sm:px-4",
                style: {
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { onClick: () => goToProduct(`/products/${product.handle}`), children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      "img",
                      {
                        src: product.images.edges[0]?.node?.url,
                        alt: product.title,
                        className: "w-full h-auto"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/($locale).collections.$handle.jsx",
                        lineNumber: 545,
                        columnNumber: 29
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "product_info", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "sm:text-lg text-[17px] font-semibold mt-2 text-center", children: product.title }, void 0, false, {
                        fileName: "app/routes/($locale).collections.$handle.jsx",
                        lineNumber: 551,
                        columnNumber: 31
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-center sm:text-[26px] text-[21px] font-bold m-auto w-full", children: [
                        "\u20B9",
                        Math.trunc(product.priceRange.maxVariantPrice.amount),
                        " \xA0"
                      ] }, void 0, true, {
                        fileName: "app/routes/($locale).collections.$handle.jsx",
                        lineNumber: 555,
                        columnNumber: 33
                      }, this) }, void 0, false, {
                        fileName: "app/routes/($locale).collections.$handle.jsx",
                        lineNumber: 554,
                        columnNumber: 31
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/($locale).collections.$handle.jsx",
                      lineNumber: 550,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      c,
                      {
                        productId: product.id,
                        okendoStarRatingSnippet: product.OkendoStarRatingSnippet
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/($locale).collections.$handle.jsx",
                        lineNumber: 561,
                        columnNumber: 29
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/routes/($locale).collections.$handle.jsx",
                      lineNumber: 560,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/($locale).collections.$handle.jsx",
                    lineNumber: 544,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-1 py-1 flex items-center sm:flex-row gap-3 justify-center w-[100%]", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-[25%] flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 32 33",
                        xmlSpace: "preserve",
                        className: "home-like h-[30px] w-[30px] sm:w-[43px] sm:h-[43px]",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                            "path",
                            {
                              d: "M9 .5h14c4.7 0 8.5 3.8 8.5 8.5v14c0 4.7-3.8 8.5-8.5 8.5H9C4.3 31.5.5 27.7.5 23V9C.5 4.3 4.3.5 9 .5z",
                              fill: "rgb(255, 255, 255)",
                              stroke: "rgb(0, 0, 0)"
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/($locale).collections.$handle.jsx",
                              lineNumber: 577,
                              columnNumber: 35
                            },
                            this
                          ),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                            "path",
                            {
                              d: "M22.3 11.8c.4.4.7.9.9 1.4.2.5.3 1.1.3 1.6 0 .6-.1 1.1-.3 1.6-.2.5-.5 1-.9 1.4l-5.6 5.6s-.1 0-.1.1h-.2s-.1 0-.1-.1l-5.6-5.6C10 17 9.5 16 9.5 14.9c0-1.1.3-2.1 1-2.9.7-.8 1.7-1.3 2.7-1.5 1.1-.1 2.1.2 3 .8l.3.2.3-.2c.8-.6 1.8-.9 2.8-.8 1.1.1 2 .5 2.7 1.3z",
                              fill: "none",
                              stroke: "rgb(0, 0, 0)"
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/($locale).collections.$handle.jsx",
                              lineNumber: 582,
                              columnNumber: 35
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/routes/($locale).collections.$handle.jsx",
                        lineNumber: 569,
                        columnNumber: 33
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/routes/($locale).collections.$handle.jsx",
                      lineNumber: 568,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-[75%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      ee,
                      {
                        route: "/cart",
                        inputs: { lines: lines[index] },
                        action: ee.ACTIONS.LinesAdd,
                        className: "flex-grow",
                        children: (fetcher) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                          "button",
                          {
                            className: "w-[100%] h-11 bg-black hover:bg-blue-700 text-white font-bold py-1 rounded-lg inline-block home-product",
                            type: "submit",
                            onClick: () => {
                              window.location.href = window.location.href + "#cart-aside";
                            },
                            children: "Add To Cart"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/($locale).collections.$handle.jsx",
                            lineNumber: 598,
                            columnNumber: 37
                          },
                          this
                        ) }, void 0, false, {
                          fileName: "app/routes/($locale).collections.$handle.jsx",
                          lineNumber: 597,
                          columnNumber: 35
                        }, this)
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/($locale).collections.$handle.jsx",
                        lineNumber: 590,
                        columnNumber: 31
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/routes/($locale).collections.$handle.jsx",
                      lineNumber: 589,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/($locale).collections.$handle.jsx",
                    lineNumber: 567,
                    columnNumber: 29
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/($locale).collections.$handle.jsx",
                lineNumber: 537,
                columnNumber: 27
              },
              this
            ) }, product.id, false, {
              fileName: "app/routes/($locale).collections.$handle.jsx",
              lineNumber: 536,
              columnNumber: 25
            }, this)) }, void 0, false, {
              fileName: "app/routes/($locale).collections.$handle.jsx",
              lineNumber: 534,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).collections.$handle.jsx",
              lineNumber: 533,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/($locale).collections.$handle.jsx",
              lineNumber: 532,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/($locale).collections.$handle.jsx",
            lineNumber: 446,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).collections.$handle.jsx",
          lineNumber: 441,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "collection_desc", children: [
          !readMore ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { dangerouslySetInnerHTML: { __html: collection?.descriptionHtml.slice(0, 200) }, className: "my-4" }, void 0, false, {
            fileName: "app/routes/($locale).collections.$handle.jsx",
            lineNumber: 623,
            columnNumber: 15
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { dangerouslySetInnerHTML: { __html: collection?.descriptionHtml }, className: "my-4" }, void 0, false, {
            fileName: "app/routes/($locale).collections.$handle.jsx",
            lineNumber: 625,
            columnNumber: 15
          }, this),
          !readMore && collection?.descriptionHtml && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: () => setMore(true), className: "bg-black text-white font-bold py-1 px-2", children: " Read More " }, void 0, false, {
            fileName: "app/routes/($locale).collections.$handle.jsx",
            lineNumber: 627,
            columnNumber: 60
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/($locale).collections.$handle.jsx",
          lineNumber: 621,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/($locale).collections.$handle.jsx",
        lineNumber: 366,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/($locale).collections.$handle.jsx",
      lineNumber: 230,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/($locale).collections.$handle.jsx",
      lineNumber: 229,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/($locale).collections.$handle.jsx",
    lineNumber: 221,
    columnNumber: 5
  }, this);
}
var PRODUCT_ITEM_FRAGMENT = `#graphql
  ${l}
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    handle
    productType
    tags
    publishedAt
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
    images(first:10){
      edges{
        node{
          url
        }
      }
    }
    metafields(identifiers: [{namespace: "custom", key: "what_to_expect"},{namespace: "custom", key: "key_ingredients"}, {namespace: "custom", key: "how_to_use1"},{namespace: "custom", key: "who_can_use"},{namespace: "custom", key: "why_we"} ]){
      key
      value
    }
    variants(first: 1) {
      nodes {
        id
        selectedOptions {
          name
          value
        }
        metafields(identifiers: [{namespace: "custom", key: "isdefault"} ]){
          key
          value
        }
      }
    }
    ...OkendoStarRatingSnippet
  }
`;
var COLLECTION_QUERY = `#graphql
  ${PRODUCT_ITEM_FRAGMENT}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      descriptionHtml
      image{
        url
      }
      metafields(identifiers: [{namespace: "custom", key: "mobile_banner"}]){
        value
      }
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          hasNextPage
          endCursor
        }
      }
    }
  }
`;
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
export {
  Collection as default,
  meta
};
//# sourceMappingURL=/build/routes/($locale).collections.$handle-65HPFF7Z.js.map
