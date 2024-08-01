import{a as k}from"/build/_shared/chunk-G7BGYXZV.js";import{d as v}from"/build/_shared/chunk-G5WX4PPA.js";var e=v(k());var S=({nonce:t="",okendoProviderData:r,productUrlFormatter:n})=>{if(!r)return null;let{reviewsHeaderConfig:o,cssVariables:u,customCss:s,initScriptContents:i,preRenderStyleTags:a,starSymbols:d}=r,g=typeof n=="function"?n.toString():typeof n=="string"?n:`(product) =>
					product && product.productHandle
						? "/products/" + product.productHandle + "/" + (product.variantId ? '?variantId=' + product.variantId : '')
						: undefined`,m=(u??"").replace('<style id="oke-css-vars">',"").replace("</style>",""),c=s?s.replace('<style id="oke-reviews-custom-css">',"").replace("</style>",""):"";return e.default.createElement(e.default.Fragment,null,e.default.createElement("script",{nonce:t,id:"oke-reviews-settings",type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(o)}}),e.default.createElement("style",{nonce:t,id:"oke-css-vars",dangerouslySetInnerHTML:{__html:m}}),c&&e.default.createElement("style",{nonce:t,id:"oke-reviews-custom-css",dangerouslySetInnerHTML:{__html:c}}),i&&e.default.createElement("script",{nonce:t,dangerouslySetInnerHTML:{__html:i}}),e.default.createElement("script",{nonce:t,type:"text/javascript",dangerouslySetInnerHTML:{__html:`window.okeProductUrlFormatter = ${g.toString()}`}}),a&&e.default.createElement("div",{dangerouslySetInnerHTML:{__html:a}}),d&&e.default.createElement("div",{dangerouslySetInnerHTML:{__html:d}}))},l=({dataAttributes:t,metafieldContent:r=""})=>{let n=(0,e.useRef)(null),o=()=>{n.current&&window.okeWidgetApi.initWidget(n.current)};return(0,e.useEffect)(()=>(window.okeWidgetApi&&n.current?o():document.addEventListener("oke-script-loaded",o),()=>{document.removeEventListener("oke-script-loaded",o)}),[t]),e.default.createElement("div",{ref:n,key:JSON.stringify(t),...t,dangerouslySetInnerHTML:r?{__html:r}:void 0})},y=/^[0-9]*$/;function p(t){if(t)return`shopify-${y.test(t)?t:t.split("/").slice(-1)[0]}`}var w=({productId:t,okendoReviewsSnippet:r})=>{let n={"data-oke-widget":"","data-oke-reviews-product-id":p(t)};return e.default.createElement(l,{dataAttributes:n,metafieldContent:r?.value})},f=({productId:t,okendoStarRatingSnippet:r})=>{let n={"data-oke-star-rating":"","data-oke-reviews-product-id":p(t)};return e.default.createElement(l,{dataAttributes:n,metafieldContent:r?.value})},_=`#graphql
	fragment OkendoStarRatingSnippet on Product {
		okendoStarRatingSnippet: metafield(
			namespace: "okendo"
			key: "StarRatingSnippet"
		) {
			value
		}
	}
`,R=`#graphql
	fragment OkendoReviewsSnippet on Product {
		okendoReviewsSnippet: metafield(
			namespace: "okendo"
			key: "ReviewsWidgetSnippet"
		) {
			value
		}
	}
`;export{S as a,w as b,f as c,_ as d,R as e};
