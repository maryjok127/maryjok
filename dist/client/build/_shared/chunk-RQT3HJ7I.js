import{a as ue}from"/build/_shared/chunk-G7BGYXZV.js";import{b as se}from"/build/_shared/chunk-G5WX4PPA.js";var ce=se((K,ne)=>{(function(X,H){typeof K=="object"&&typeof ne=="object"?ne.exports=H(ue()):typeof define=="function"&&define.amd?define(["react"],H):typeof K=="object"?K.MediaQuery=H(ue()):X.MediaQuery=H(X.React)})(K,ae=>(()=>{var X={"./node_modules/css-mediaquery/index.js":(g,t)=>{"use strict";t.match=i,t.parse=u;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,h=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,m=/^(?:(min|max)-)?(.+)/,p=/(em|rem|px|cm|mm|in|pt|pc)?$/,r=/(dpi|dpcm|dppx)?$/;function i(y,l){return u(y).some(function(v){var A=v.inverse,O=v.type==="all"||l.type===v.type;if(O&&A||!(O||A))return!1;var D=v.expressions.every(function(a){var T=a.feature,C=a.modifier,w=a.value,b=l[T];if(!b)return!1;switch(T){case"orientation":case"scan":return b.toLowerCase()===w.toLowerCase();case"width":case"height":case"device-width":case"device-height":w=c(w),b=c(b);break;case"resolution":w=o(w),b=o(b);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":w=d(w),b=d(b);break;case"grid":case"color":case"color-index":case"monochrome":w=parseInt(w,10)||1,b=parseInt(b,10)||0;break}switch(C){case"min":return b>=w;case"max":return b<=w;default:return b===w}});return D&&!A||!D&&A})}function u(y){return y.split(",").map(function(l){l=l.trim();var v=l.match(n),A=v[1],O=v[2],D=v[3]||"",a={};return a.inverse=!!A&&A.toLowerCase()==="not",a.type=O?O.toLowerCase():"all",D=D.match(/\([^\)]+\)/g)||[],a.expressions=D.map(function(T){var C=T.match(h),w=C[1].toLowerCase().match(m);return{modifier:w[1],feature:w[2],value:C[2]}}),a})}function d(y){var l=Number(y),v;return l||(v=y.match(/^(\d+)\s*\/\s*(\d+)$/),l=v[1]/v[2]),l}function o(y){var l=parseFloat(y),v=String(y).match(r)[1];switch(v){case"dpcm":return l/2.54;case"dppx":return l*96;default:return l}}function c(y){var l=parseFloat(y),v=String(y).match(p)[1];switch(v){case"em":return l*16;case"rem":return l*16;case"cm":return l*96/2.54;case"mm":return l*96/2.54/10;case"in":return l*96;case"pt":return l*72;case"pc":return l*72/12;default:return l}}},"./node_modules/hyphenate-style-name/index.js":(g,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var h=/[A-Z]/g,m=/^ms-/,p={};function r(d){return"-"+d.toLowerCase()}function i(d){if(p.hasOwnProperty(d))return p[d];var o=d.replace(h,r);return p[d]=m.test(o)?"-"+o:o}let u=i},"./node_modules/matchmediaquery/index.js":(g,t,n)=>{"use strict";var h=n("./node_modules/css-mediaquery/index.js").match,m=typeof window<"u"?window.matchMedia:null;function p(i,u,d){var o=this;if(m&&!d){var c=m.call(window,i);this.matches=c.matches,this.media=c.media,c.addListener(v)}else this.matches=h(i,u),this.media=i;this.addListener=y,this.removeListener=l,this.dispose=A;function y(O){c&&c.addListener(O)}function l(O){c&&c.removeListener(O)}function v(O){o.matches=O.matches,o.media=O.media}function A(){c&&c.removeListener(v)}}function r(i,u,d){return new p(i,u,d)}g.exports=r},"./node_modules/object-assign/index.js":g=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;function m(r){if(r==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function p(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de",Object.getOwnPropertyNames(r)[0]==="5")return!1;for(var i={},u=0;u<10;u++)i["_"+String.fromCharCode(u)]=u;var d=Object.getOwnPropertyNames(i).map(function(c){return i[c]});if(d.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(c){o[c]=c}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}g.exports=p()?Object.assign:function(r,i){for(var u,d=m(r),o,c=1;c<arguments.length;c++){u=Object(arguments[c]);for(var y in u)n.call(u,y)&&(d[y]=u[y]);if(t){o=t(u);for(var l=0;l<o.length;l++)h.call(u,o[l])&&(d[o[l]]=u[o[l]])}}return d}},"./node_modules/prop-types/checkPropTypes.js":(g,t,n)=>{"use strict";var h=function(){},m=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),p={},r=n("./node_modules/prop-types/lib/has.js");h=function(u){var d="Warning: "+u;typeof console<"u"&&console.error(d);try{throw new Error(d)}catch{}};function i(u,d,o,c,y){for(var l in u)if(r(u,l)){var v;try{if(typeof u[l]!="function"){var A=Error((c||"React class")+": "+o+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof u[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw A.name="Invariant Violation",A}v=u[l](d,l,c,o,null,m)}catch(D){v=D}if(v&&!(v instanceof Error)&&h((c||"React class")+": type specification of "+o+" `"+l+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof v+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),v instanceof Error&&!(v.message in p)){p[v.message]=!0;var O=y?y():"";h("Failed "+o+" type: "+v.message+(O??""))}}}i.resetWarningCache=function(){p={}},g.exports=i},"./node_modules/prop-types/factoryWithTypeCheckers.js":(g,t,n)=>{"use strict";var h=n("./node_modules/react-is/index.js"),m=n("./node_modules/object-assign/index.js"),p=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),r=n("./node_modules/prop-types/lib/has.js"),i=n("./node_modules/prop-types/checkPropTypes.js"),u=function(){};u=function(o){var c="Warning: "+o;typeof console<"u"&&console.error(c);try{throw new Error(c)}catch{}};function d(){return null}g.exports=function(o,c){var y=typeof Symbol=="function"&&Symbol.iterator,l="@@iterator";function v(e){var f=e&&(y&&e[y]||e[l]);if(typeof f=="function")return f}var A="<<anonymous>>",O={array:C("array"),bigint:C("bigint"),bool:C("boolean"),func:C("function"),number:C("number"),object:C("object"),string:C("string"),symbol:C("symbol"),any:w(),arrayOf:b,element:Q(),elementType:Y(),instanceOf:k,node:V(),objectOf:B,oneOf:Z,oneOfType:q,shape:N,exact:ee};function D(e,f){return e===f?e!==0||1/e===1/f:e!==e&&f!==f}function a(e,f){this.message=e,this.data=f&&typeof f=="object"?f:{},this.stack=""}a.prototype=Error.prototype;function T(e){var f={},x=0;function P(R,E,j,S,I,M,s){if(S=S||A,M=M||j,s!==p){if(c){var L=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw L.name="Invariant Violation",L}else if(typeof console<"u"){var U=S+":"+j;!f[U]&&x<3&&(u("You are manually calling a React.PropTypes validation function for the `"+M+"` prop on `"+S+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),f[U]=!0,x++)}}return E[j]==null?R?E[j]===null?new a("The "+I+" `"+M+"` is marked as required "+("in `"+S+"`, but its value is `null`.")):new a("The "+I+" `"+M+"` is marked as required in "+("`"+S+"`, but its value is `undefined`.")):null:e(E,j,S,I,M)}var _=P.bind(null,!1);return _.isRequired=P.bind(null,!0),_}function C(e){function f(x,P,_,R,E,j){var S=x[P],I=$(S);if(I!==e){var M=W(S);return new a("Invalid "+R+" `"+E+"` of type "+("`"+M+"` supplied to `"+_+"`, expected ")+("`"+e+"`."),{expectedType:e})}return null}return T(f)}function w(){return T(d)}function b(e){function f(x,P,_,R,E){if(typeof e!="function")return new a("Property `"+E+"` of component `"+_+"` has invalid PropType notation inside arrayOf.");var j=x[P];if(!Array.isArray(j)){var S=$(j);return new a("Invalid "+R+" `"+E+"` of type "+("`"+S+"` supplied to `"+_+"`, expected an array."))}for(var I=0;I<j.length;I++){var M=e(j,I,_,R,E+"["+I+"]",p);if(M instanceof Error)return M}return null}return T(f)}function Q(){function e(f,x,P,_,R){var E=f[x];if(!o(E)){var j=$(E);return new a("Invalid "+_+" `"+R+"` of type "+("`"+j+"` supplied to `"+P+"`, expected a single ReactElement."))}return null}return T(e)}function Y(){function e(f,x,P,_,R){var E=f[x];if(!h.isValidElementType(E)){var j=$(E);return new a("Invalid "+_+" `"+R+"` of type "+("`"+j+"` supplied to `"+P+"`, expected a single ReactElement type."))}return null}return T(e)}function k(e){function f(x,P,_,R,E){if(!(x[P]instanceof e)){var j=e.name||A,S=G(x[P]);return new a("Invalid "+R+" `"+E+"` of type "+("`"+S+"` supplied to `"+_+"`, expected ")+("instance of `"+j+"`."))}return null}return T(f)}function Z(e){if(!Array.isArray(e))return arguments.length>1?u("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):u("Invalid argument supplied to oneOf, expected an array."),d;function f(x,P,_,R,E){for(var j=x[P],S=0;S<e.length;S++)if(D(j,e[S]))return null;var I=JSON.stringify(e,function(s,L){var U=W(L);return U==="symbol"?String(L):L});return new a("Invalid "+R+" `"+E+"` of value `"+String(j)+"` "+("supplied to `"+_+"`, expected one of "+I+"."))}return T(f)}function B(e){function f(x,P,_,R,E){if(typeof e!="function")return new a("Property `"+E+"` of component `"+_+"` has invalid PropType notation inside objectOf.");var j=x[P],S=$(j);if(S!=="object")return new a("Invalid "+R+" `"+E+"` of type "+("`"+S+"` supplied to `"+_+"`, expected an object."));for(var I in j)if(r(j,I)){var M=e(j,I,_,R,E+"."+I,p);if(M instanceof Error)return M}return null}return T(f)}function q(e){if(!Array.isArray(e))return u("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var f=0;f<e.length;f++){var x=e[f];if(typeof x!="function")return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+re(x)+" at index "+f+"."),d}function P(_,R,E,j,S){for(var I=[],M=0;M<e.length;M++){var s=e[M],L=s(_,R,E,j,S,p);if(L==null)return null;L.data&&r(L.data,"expectedType")&&I.push(L.data.expectedType)}var U=I.length>0?", expected one of type ["+I.join(", ")+"]":"";return new a("Invalid "+j+" `"+S+"` supplied to "+("`"+E+"`"+U+"."))}return T(P)}function V(){function e(f,x,P,_,R){return F(f[x])?null:new a("Invalid "+_+" `"+R+"` supplied to "+("`"+P+"`, expected a ReactNode."))}return T(e)}function J(e,f,x,P,_){return new a((e||"React class")+": "+f+" type `"+x+"."+P+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+_+"`.")}function N(e){function f(x,P,_,R,E){var j=x[P],S=$(j);if(S!=="object")return new a("Invalid "+R+" `"+E+"` of type `"+S+"` "+("supplied to `"+_+"`, expected `object`."));for(var I in e){var M=e[I];if(typeof M!="function")return J(_,R,E,I,W(M));var s=M(j,I,_,R,E+"."+I,p);if(s)return s}return null}return T(f)}function ee(e){function f(x,P,_,R,E){var j=x[P],S=$(j);if(S!=="object")return new a("Invalid "+R+" `"+E+"` of type `"+S+"` "+("supplied to `"+_+"`, expected `object`."));var I=m({},x[P],e);for(var M in I){var s=e[M];if(r(e,M)&&typeof s!="function")return J(_,R,E,M,W(s));if(!s)return new a("Invalid "+R+" `"+E+"` key `"+M+"` supplied to `"+_+"`.\nBad object: "+JSON.stringify(x[P],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(e),null,"  "));var L=s(j,M,_,R,E+"."+M,p);if(L)return L}return null}return T(f)}function F(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(F);if(e===null||o(e))return!0;var f=v(e);if(f){var x=f.call(e),P;if(f!==e.entries){for(;!(P=x.next()).done;)if(!F(P.value))return!1}else for(;!(P=x.next()).done;){var _=P.value;if(_&&!F(_[1]))return!1}}else return!1;return!0;default:return!1}}function te(e,f){return e==="symbol"?!0:f?f["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&f instanceof Symbol:!1}function $(e){var f=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":te(f,e)?"symbol":f}function W(e){if(typeof e>"u"||e===null)return""+e;var f=$(e);if(f==="object"){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return f}function re(e){var f=W(e);switch(f){case"array":case"object":return"an "+f;case"boolean":case"date":case"regexp":return"a "+f;default:return f}}function G(e){return!e.constructor||!e.constructor.name?A:e.constructor.name}return O.checkPropTypes=i,O.resetWarningCache=i.resetWarningCache,O.PropTypes=O,O}},"./node_modules/prop-types/index.js":(g,t,n)=>{var h=n("./node_modules/react-is/index.js"),m=!0;g.exports=n("./node_modules/prop-types/factoryWithTypeCheckers.js")(h.isElement,m)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":g=>{"use strict";var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";g.exports=t},"./node_modules/prop-types/lib/has.js":g=>{g.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(g,t)=>{"use strict";(function(){"use strict";var n=typeof Symbol=="function"&&Symbol.for,h=n?Symbol.for("react.element"):60103,m=n?Symbol.for("react.portal"):60106,p=n?Symbol.for("react.fragment"):60107,r=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,d=n?Symbol.for("react.context"):60110,o=n?Symbol.for("react.async_mode"):60111,c=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,l=n?Symbol.for("react.suspense"):60113,v=n?Symbol.for("react.suspense_list"):60120,A=n?Symbol.for("react.memo"):60115,O=n?Symbol.for("react.lazy"):60116,D=n?Symbol.for("react.block"):60121,a=n?Symbol.for("react.fundamental"):60117,T=n?Symbol.for("react.responder"):60118,C=n?Symbol.for("react.scope"):60119;function w(s){return typeof s=="string"||typeof s=="function"||s===p||s===c||s===i||s===r||s===l||s===v||typeof s=="object"&&s!==null&&(s.$$typeof===O||s.$$typeof===A||s.$$typeof===u||s.$$typeof===d||s.$$typeof===y||s.$$typeof===a||s.$$typeof===T||s.$$typeof===C||s.$$typeof===D)}function b(s){if(typeof s=="object"&&s!==null){var L=s.$$typeof;switch(L){case h:var U=s.type;switch(U){case o:case c:case p:case i:case r:case l:return U;default:var ie=U&&U.$$typeof;switch(ie){case d:case y:case O:case A:case u:return ie;default:return L}}case m:return L}}}var Q=o,Y=c,k=d,Z=u,B=h,q=y,V=p,J=O,N=A,ee=m,F=i,te=r,$=l,W=!1;function re(s){return W||(W=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),G(s)||b(s)===o}function G(s){return b(s)===c}function e(s){return b(s)===d}function f(s){return b(s)===u}function x(s){return typeof s=="object"&&s!==null&&s.$$typeof===h}function P(s){return b(s)===y}function _(s){return b(s)===p}function R(s){return b(s)===O}function E(s){return b(s)===A}function j(s){return b(s)===m}function S(s){return b(s)===i}function I(s){return b(s)===r}function M(s){return b(s)===l}t.AsyncMode=Q,t.ConcurrentMode=Y,t.ContextConsumer=k,t.ContextProvider=Z,t.Element=B,t.ForwardRef=q,t.Fragment=V,t.Lazy=J,t.Memo=N,t.Portal=ee,t.Profiler=F,t.StrictMode=te,t.Suspense=$,t.isAsyncMode=re,t.isConcurrentMode=G,t.isContextConsumer=e,t.isContextProvider=f,t.isElement=x,t.isForwardRef=P,t.isFragment=_,t.isLazy=R,t.isMemo=E,t.isPortal=j,t.isProfiler=S,t.isStrictMode=I,t.isSuspense=M,t.isValidElementType=w,t.typeOf=b})()},"./node_modules/react-is/index.js":(g,t,n)=>{"use strict";g.exports=n("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(g,t,n)=>{"use strict";n.r(t),n.d(t,{shallowEqualArrays:()=>m,shallowEqualObjects:()=>h});function h(p,r){if(p===r)return!0;if(!p||!r)return!1;var i=Object.keys(p),u=Object.keys(r),d=i.length;if(u.length!==d)return!1;for(var o=0;o<d;o++){var c=i[o];if(p[c]!==r[c]||!Object.prototype.hasOwnProperty.call(r,c))return!1}return!0}function m(p,r){if(p===r)return!0;if(!p||!r)return!1;var i=p.length;if(r.length!==i)return!1;for(var u=0;u<i;u++)if(p[u]!==r[u])return!1;return!0}},"./src/Component.ts":function(g,t,n){"use strict";var h=this&&this.__rest||function(i,u){var d={};for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&u.indexOf(o)<0&&(d[o]=i[o]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,o=Object.getOwnPropertySymbols(i);c<o.length;c++)u.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(i,o[c])&&(d[o[c]]=i[o[c]]);return d},m=this&&this.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(t,"__esModule",{value:!0});var p=m(n("./src/useMediaQuery.ts")),r=function(i){var u=i.children,d=i.device,o=i.onChange,c=h(i,["children","device","onChange"]),y=(0,p.default)(c,d,o);return typeof u=="function"?u(y):y?u:null};t.default=r},"./src/Context.ts":(g,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var h=n("react"),m=(0,h.createContext)(void 0);t.default=m},"./src/index.ts":function(g,t,n){"use strict";var h=this&&this.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var m=h(n("./src/useMediaQuery.ts"));t.useMediaQuery=m.default;var p=h(n("./src/Component.ts"));t.default=p.default;var r=h(n("./src/toQuery.ts"));t.toQuery=r.default;var i=h(n("./src/Context.ts"));t.Context=i.default},"./src/mediaQuery.ts":function(g,t,n){"use strict";var h=this&&this.__assign||function(){return h=Object.assign||function(v){for(var A,O=1,D=arguments.length;O<D;O++){A=arguments[O];for(var a in A)Object.prototype.hasOwnProperty.call(A,a)&&(v[a]=A[a])}return v},h.apply(this,arguments)},m=this&&this.__rest||function(v,A){var O={};for(var D in v)Object.prototype.hasOwnProperty.call(v,D)&&A.indexOf(D)<0&&(O[D]=v[D]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,D=Object.getOwnPropertySymbols(v);a<D.length;a++)A.indexOf(D[a])<0&&Object.prototype.propertyIsEnumerable.call(v,D[a])&&(O[D[a]]=v[D[a]]);return O},p=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(t,"__esModule",{value:!0});var r=p(n("./node_modules/prop-types/index.js")),i=r.default.oneOfType([r.default.string,r.default.number]),u={all:r.default.bool,grid:r.default.bool,aural:r.default.bool,braille:r.default.bool,handheld:r.default.bool,print:r.default.bool,projection:r.default.bool,screen:r.default.bool,tty:r.default.bool,tv:r.default.bool,embossed:r.default.bool},d={orientation:r.default.oneOf(["portrait","landscape"]),scan:r.default.oneOf(["progressive","interlace"]),aspectRatio:r.default.string,deviceAspectRatio:r.default.string,height:i,deviceHeight:i,width:i,deviceWidth:i,color:r.default.bool,colorIndex:r.default.bool,monochrome:r.default.bool,resolution:i,type:Object.keys(u)},o=d.type,c=m(d,["type"]),y=h({minAspectRatio:r.default.string,maxAspectRatio:r.default.string,minDeviceAspectRatio:r.default.string,maxDeviceAspectRatio:r.default.string,minHeight:i,maxHeight:i,minDeviceHeight:i,maxDeviceHeight:i,minWidth:i,maxWidth:i,minDeviceWidth:i,maxDeviceWidth:i,minColor:r.default.number,maxColor:r.default.number,minColorIndex:r.default.number,maxColorIndex:r.default.number,minMonochrome:r.default.number,maxMonochrome:r.default.number,minResolution:i,maxResolution:i},c),l=h(h({},u),y);t.default={all:l,types:u,matchers:d,features:y}},"./src/toQuery.ts":function(g,t,n){"use strict";var h=this&&this.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(t,"__esModule",{value:!0});var m=h(n("./node_modules/hyphenate-style-name/index.js")),p=h(n("./src/mediaQuery.ts")),r=function(o){return"not ".concat(o)},i=function(o,c){var y=(0,m.default)(o);return typeof c=="number"&&(c="".concat(c,"px")),c===!0?y:c===!1?r(y):"(".concat(y,": ").concat(c,")")},u=function(o){return o.join(" and ")},d=function(o){var c=[];return Object.keys(p.default.all).forEach(function(y){var l=o[y];l!=null&&c.push(i(y,l))}),u(c)};t.default=d},"./src/useMediaQuery.ts":function(g,t,n){"use strict";var h=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(t,"__esModule",{value:!0});var m=n("react"),p=h(n("./node_modules/matchmediaquery/index.js")),r=h(n("./node_modules/hyphenate-style-name/index.js")),i=n("./node_modules/shallow-equal/dist/index.esm.js"),u=h(n("./src/toQuery.ts")),d=h(n("./src/Context.ts")),o=function(a){return a.query||(0,u.default)(a)},c=function(a){if(a){var T=Object.keys(a);return T.reduce(function(C,w){return C[(0,r.default)(w)]=a[w],C},{})}},y=function(){var a=(0,m.useRef)(!1);return(0,m.useEffect)(function(){a.current=!0},[]),a.current},l=function(a){var T=(0,m.useContext)(d.default),C=function(){return c(a)||c(T)},w=(0,m.useState)(C),b=w[0],Q=w[1];return(0,m.useEffect)(function(){var Y=C();(0,i.shallowEqualObjects)(b,Y)||Q(Y)},[a,T]),b},v=function(a){var T=function(){return o(a)},C=(0,m.useState)(T),w=C[0],b=C[1];return(0,m.useEffect)(function(){var Q=T();w!==Q&&b(Q)},[a]),w},A=function(a,T){var C=function(){return(0,p.default)(a,T||{},!!T)},w=(0,m.useState)(C),b=w[0],Q=w[1],Y=y();return(0,m.useEffect)(function(){if(Y){var k=C();return Q(k),function(){k&&k.dispose()}}},[a,T]),b},O=function(a){var T=(0,m.useState)(a.matches),C=T[0],w=T[1];return(0,m.useEffect)(function(){var b=function(Q){w(Q.matches)};return a.addListener(b),w(a.matches),function(){a.removeListener(b)}},[a]),C},D=function(a,T,C){var w=l(T),b=v(a);if(!b)throw new Error("Invalid or missing MediaQuery!");var Q=A(b,w),Y=O(Q),k=y();return(0,m.useEffect)(function(){k&&C&&C(Y)},[Y]),(0,m.useEffect)(function(){return function(){Q&&Q.dispose()}},[]),Y};t.default=D},react:g=>{"use strict";g.exports=ae}},H={};function z(g){var t=H[g];if(t!==void 0)return t.exports;var n=H[g]={exports:{}};return X[g].call(n.exports,n,n.exports,z),n.exports}z.d=(g,t)=>{for(var n in t)z.o(t,n)&&!z.o(g,n)&&Object.defineProperty(g,n,{enumerable:!0,get:t[n]})},z.o=(g,t)=>Object.prototype.hasOwnProperty.call(g,t),z.r=g=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})};var oe=z("./src/index.ts");return oe})())});export{ce as a};
/*! Bundled license information:

react-responsive/dist/react-responsive.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/