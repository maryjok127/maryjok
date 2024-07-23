import {
  require_react
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@okendo/shopify-hydrogen/dist/esm/index.js
var import_react = __toESM(require_react());
var o = ({ nonce: e2 = "", okendoProviderData: n2, productUrlFormatter: r }) => {
  if (!n2)
    return null;
  const { reviewsHeaderConfig: o2, cssVariables: i2, customCss: s2, initScriptContents: a2, preRenderStyleTags: d2, starSymbols: c2 } = n2, l2 = "function" == typeof r ? r.toString() : "string" == typeof r ? r : `(product) =>
					product && product.productHandle
						? "/products/" + product.productHandle + "/" + (product.variantId ? '?variantId=' + product.variantId : '')
						: undefined`, p2 = (i2 ?? "").replace('<style id="oke-css-vars">', "").replace("</style>", ""), u = s2 ? s2.replace('<style id="oke-reviews-custom-css">', "").replace("</style>", "") : "";
  return import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement("script", { nonce: e2, id: "oke-reviews-settings", type: "application/json", dangerouslySetInnerHTML: { __html: JSON.stringify(o2) } }), import_react.default.createElement("style", { nonce: e2, id: "oke-css-vars", dangerouslySetInnerHTML: { __html: p2 } }), u && import_react.default.createElement("style", { nonce: e2, id: "oke-reviews-custom-css", dangerouslySetInnerHTML: { __html: u } }), a2 && import_react.default.createElement("script", { nonce: e2, dangerouslySetInnerHTML: { __html: a2 } }), import_react.default.createElement("script", { nonce: e2, type: "text/javascript", dangerouslySetInnerHTML: { __html: `window.okeProductUrlFormatter = ${l2.toString()}` } }), d2 && import_react.default.createElement("div", { dangerouslySetInnerHTML: { __html: d2 } }), c2 && import_react.default.createElement("div", { dangerouslySetInnerHTML: { __html: c2 } }));
};
var i = ({ dataAttributes: r, metafieldContent: o2 = "" }) => {
  const i2 = (0, import_react.useRef)(null), s2 = () => {
    i2.current && window.okeWidgetApi.initWidget(i2.current);
  };
  return (0, import_react.useEffect)(() => (window.okeWidgetApi && i2.current ? s2() : document.addEventListener("oke-script-loaded", s2), () => {
    document.removeEventListener("oke-script-loaded", s2);
  }), [r]), import_react.default.createElement("div", { ref: i2, key: JSON.stringify(r), ...r, dangerouslySetInnerHTML: o2 ? { __html: o2 } : void 0 });
};
var s = /^[0-9]*$/;
function a(t2) {
  if (t2)
    return `shopify-${s.test(t2) ? t2 : t2.split("/").slice(-1)[0]}`;
}
var d = ({ productId: e2, okendoReviewsSnippet: n2 }) => {
  const r = { "data-oke-widget": "", "data-oke-reviews-product-id": a(e2) };
  return import_react.default.createElement(i, { dataAttributes: r, metafieldContent: n2?.value });
};
var c = ({ productId: e2, okendoStarRatingSnippet: n2 }) => {
  const r = { "data-oke-star-rating": "", "data-oke-reviews-product-id": a(e2) };
  return import_react.default.createElement(i, { dataAttributes: r, metafieldContent: n2?.value });
};
var l = '#graphql\n	fragment OkendoStarRatingSnippet on Product {\n		okendoStarRatingSnippet: metafield(\n			namespace: "okendo"\n			key: "StarRatingSnippet"\n		) {\n			value\n		}\n	}\n';
var p = '#graphql\n	fragment OkendoReviewsSnippet on Product {\n		okendoReviewsSnippet: metafield(\n			namespace: "okendo"\n			key: "ReviewsWidgetSnippet"\n		) {\n			value\n		}\n	}\n';

export {
  o,
  d,
  c,
  l,
  p
};
//# sourceMappingURL=/build/_shared/chunk-DGST5VAI.js.map
