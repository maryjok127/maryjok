import {
  require_lib
} from "/build/_shared/chunk-6I5S762C.js";
import {
  MdChevronLeft,
  MdChevronRight
} from "/build/_shared/chunk-AQMJZ442.js";
import {
  require_react_responsive
} from "/build/_shared/chunk-D3AIAV2V.js";
import {
  ee
} from "/build/_shared/chunk-VY5OJHMS.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/react-ga4/dist/gtag.js
var require_gtag = __commonJS({
  "node_modules/react-ga4/dist/gtag.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var gtag = function gtag2() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (typeof window !== "undefined") {
        var _window;
        if (typeof window.gtag === "undefined") {
          window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag3() {
            window.dataLayer.push(arguments);
          };
        }
        (_window = window).gtag.apply(_window, args);
      }
    };
    var _default = gtag;
    exports["default"] = _default;
  }
});

// node_modules/react-ga4/dist/format.js
var require_format = __commonJS({
  "node_modules/react-ga4/dist/format.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = format;
    var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
    function toTitleCase(string) {
      return string.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title) {
        if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" && (title.charAt(index + match.length) !== "-" || title.charAt(index - 1) === "-") && title.charAt(index - 1).search(/[^\s-]/) < 0) {
          return match.toLowerCase();
        }
        if (match.substr(1).search(/[A-Z]|\../) > -1) {
          return match;
        }
        return match.charAt(0).toUpperCase() + match.substr(1);
      });
    }
    function mightBeEmail(s) {
      return typeof s === "string" && s.indexOf("@") !== -1;
    }
    var redacted = "REDACTED (Potential Email Address)";
    function redactEmail(string) {
      if (mightBeEmail(string)) {
        console.warn("This arg looks like an email address, redacting.");
        return redacted;
      }
      return string;
    }
    function format() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var titleCase = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      var redactingEmail = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      var _str = s || "";
      if (titleCase) {
        _str = toTitleCase(s);
      }
      if (redactingEmail) {
        _str = redactEmail(_str);
      }
      return _str;
    }
  }
});

// node_modules/react-ga4/dist/ga4.js
var require_ga4 = __commonJS({
  "node_modules/react-ga4/dist/ga4.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = exports.GA4 = void 0;
    var _gtag = _interopRequireDefault(require_gtag());
    var _format = _interopRequireDefault(require_format());
    var _excluded = ["eventCategory", "eventAction", "eventLabel", "eventValue", "hitType"];
    var _excluded2 = ["title", "location"];
    var _excluded3 = ["page", "hitType"];
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
      if (null != _i) {
        var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
        try {
          if (_x = (_i = _i.call(arr)).next, 0 === i) {
            if (Object(_i) !== _i)
              return;
            _n = false;
          } else
            for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
              ;
        } catch (err) {
          _d = true, _e = err;
        } finally {
          try {
            if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r))
              return;
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return _typeof(key) === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (_typeof(input) !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var GA4 = /* @__PURE__ */ function() {
      function GA42() {
        var _this = this;
        _classCallCheck(this, GA42);
        _defineProperty(this, "reset", function() {
          _this.isInitialized = false;
          _this._testMode = false;
          _this._currentMeasurementId;
          _this._hasLoadedGA = false;
          _this._isQueuing = false;
          _this._queueGtag = [];
        });
        _defineProperty(this, "_gtag", function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          if (!_this._testMode) {
            if (_this._isQueuing) {
              _this._queueGtag.push(args);
            } else {
              _gtag["default"].apply(void 0, args);
            }
          } else {
            _this._queueGtag.push(args);
          }
        });
        _defineProperty(this, "_loadGA", function(GA_MEASUREMENT_ID, nonce) {
          var gtagUrl = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "https://www.googletagmanager.com/gtag/js";
          if (typeof window === "undefined" || typeof document === "undefined") {
            return;
          }
          if (!_this._hasLoadedGA) {
            var script = document.createElement("script");
            script.async = true;
            script.src = "".concat(gtagUrl, "?id=").concat(GA_MEASUREMENT_ID);
            if (nonce) {
              script.setAttribute("nonce", nonce);
            }
            document.body.appendChild(script);
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag() {
              window.dataLayer.push(arguments);
            };
            _this._hasLoadedGA = true;
          }
        });
        _defineProperty(this, "_toGtagOptions", function(gaOptions) {
          if (!gaOptions) {
            return;
          }
          var mapFields = {
            // Old https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#cookieUpdate
            // New https://developers.google.com/analytics/devguides/collection/gtagjs/cookies-user-id#cookie_update
            cookieUpdate: "cookie_update",
            cookieExpires: "cookie_expires",
            cookieDomain: "cookie_domain",
            cookieFlags: "cookie_flags",
            // must be in set method?
            userId: "user_id",
            clientId: "client_id",
            anonymizeIp: "anonymize_ip",
            // https://support.google.com/analytics/answer/2853546?hl=en#zippy=%2Cin-this-article
            contentGroup1: "content_group1",
            contentGroup2: "content_group2",
            contentGroup3: "content_group3",
            contentGroup4: "content_group4",
            contentGroup5: "content_group5",
            // https://support.google.com/analytics/answer/9050852?hl=en
            allowAdFeatures: "allow_google_signals",
            allowAdPersonalizationSignals: "allow_ad_personalization_signals",
            nonInteraction: "non_interaction",
            page: "page_path",
            hitCallback: "event_callback"
          };
          var gtagOptions = Object.entries(gaOptions).reduce(function(prev, _ref) {
            var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
            if (mapFields[key]) {
              prev[mapFields[key]] = value;
            } else {
              prev[key] = value;
            }
            return prev;
          }, {});
          return gtagOptions;
        });
        _defineProperty(this, "initialize", function(GA_MEASUREMENT_ID) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (!GA_MEASUREMENT_ID) {
            throw new Error("Require GA_MEASUREMENT_ID");
          }
          var initConfigs = typeof GA_MEASUREMENT_ID === "string" ? [{
            trackingId: GA_MEASUREMENT_ID
          }] : GA_MEASUREMENT_ID;
          _this._currentMeasurementId = initConfigs[0].trackingId;
          var gaOptions = options.gaOptions, gtagOptions = options.gtagOptions, nonce = options.nonce, _options$testMode = options.testMode, testMode = _options$testMode === void 0 ? false : _options$testMode, gtagUrl = options.gtagUrl;
          _this._testMode = testMode;
          if (!testMode) {
            _this._loadGA(_this._currentMeasurementId, nonce, gtagUrl);
          }
          if (!_this.isInitialized) {
            _this._gtag("js", /* @__PURE__ */ new Date());
            initConfigs.forEach(function(config) {
              var mergedGtagOptions = _objectSpread(_objectSpread(_objectSpread({}, _this._toGtagOptions(_objectSpread(_objectSpread({}, gaOptions), config.gaOptions))), gtagOptions), config.gtagOptions);
              if (Object.keys(mergedGtagOptions).length) {
                _this._gtag("config", config.trackingId, mergedGtagOptions);
              } else {
                _this._gtag("config", config.trackingId);
              }
            });
          }
          _this.isInitialized = true;
          if (!testMode) {
            var queues = _toConsumableArray(_this._queueGtag);
            _this._queueGtag = [];
            _this._isQueuing = false;
            while (queues.length) {
              var queue = queues.shift();
              _this._gtag.apply(_this, _toConsumableArray(queue));
              if (queue[0] === "get") {
                _this._isQueuing = true;
              }
            }
          }
        });
        _defineProperty(this, "set", function(fieldsObject) {
          if (!fieldsObject) {
            console.warn("`fieldsObject` is required in .set()");
            return;
          }
          if (_typeof(fieldsObject) !== "object") {
            console.warn("Expected `fieldsObject` arg to be an Object");
            return;
          }
          if (Object.keys(fieldsObject).length === 0) {
            console.warn("empty `fieldsObject` given to .set()");
          }
          _this._gaCommand("set", fieldsObject);
        });
        _defineProperty(this, "_gaCommandSendEvent", function(eventCategory, eventAction, eventLabel, eventValue, fieldsObject) {
          _this._gtag("event", eventAction, _objectSpread(_objectSpread({
            event_category: eventCategory,
            event_label: eventLabel,
            value: eventValue
          }, fieldsObject && {
            non_interaction: fieldsObject.nonInteraction
          }), _this._toGtagOptions(fieldsObject)));
        });
        _defineProperty(this, "_gaCommandSendEventParameters", function() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          if (typeof args[0] === "string") {
            _this._gaCommandSendEvent.apply(_this, _toConsumableArray(args.slice(1)));
          } else {
            var _args$ = args[0], eventCategory = _args$.eventCategory, eventAction = _args$.eventAction, eventLabel = _args$.eventLabel, eventValue = _args$.eventValue, hitType = _args$.hitType, rest = _objectWithoutProperties(_args$, _excluded);
            _this._gaCommandSendEvent(eventCategory, eventAction, eventLabel, eventValue, rest);
          }
        });
        _defineProperty(this, "_gaCommandSendTiming", function(timingCategory, timingVar, timingValue, timingLabel) {
          _this._gtag("event", "timing_complete", {
            name: timingVar,
            value: timingValue,
            event_category: timingCategory,
            event_label: timingLabel
          });
        });
        _defineProperty(this, "_gaCommandSendPageview", function(page, fieldsObject) {
          if (fieldsObject && Object.keys(fieldsObject).length) {
            var _this$_toGtagOptions = _this._toGtagOptions(fieldsObject), title = _this$_toGtagOptions.title, location = _this$_toGtagOptions.location, rest = _objectWithoutProperties(_this$_toGtagOptions, _excluded2);
            _this._gtag("event", "page_view", _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, page && {
              page_path: page
            }), title && {
              page_title: title
            }), location && {
              page_location: location
            }), rest));
          } else if (page) {
            _this._gtag("event", "page_view", {
              page_path: page
            });
          } else {
            _this._gtag("event", "page_view");
          }
        });
        _defineProperty(this, "_gaCommandSendPageviewParameters", function() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          if (typeof args[0] === "string") {
            _this._gaCommandSendPageview.apply(_this, _toConsumableArray(args.slice(1)));
          } else {
            var _args$2 = args[0], page = _args$2.page, hitType = _args$2.hitType, rest = _objectWithoutProperties(_args$2, _excluded3);
            _this._gaCommandSendPageview(page, rest);
          }
        });
        _defineProperty(this, "_gaCommandSend", function() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          var hitType = typeof args[0] === "string" ? args[0] : args[0].hitType;
          switch (hitType) {
            case "event":
              _this._gaCommandSendEventParameters.apply(_this, args);
              break;
            case "pageview":
              _this._gaCommandSendPageviewParameters.apply(_this, args);
              break;
            case "timing":
              _this._gaCommandSendTiming.apply(_this, _toConsumableArray(args.slice(1)));
              break;
            case "screenview":
            case "transaction":
            case "item":
            case "social":
            case "exception":
              console.warn("Unsupported send command: ".concat(hitType));
              break;
            default:
              console.warn("Send command doesn't exist: ".concat(hitType));
          }
        });
        _defineProperty(this, "_gaCommandSet", function() {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }
          if (typeof args[0] === "string") {
            args[0] = _defineProperty({}, args[0], args[1]);
          }
          _this._gtag("set", _this._toGtagOptions(args[0]));
        });
        _defineProperty(this, "_gaCommand", function(command) {
          for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
            args[_key6 - 1] = arguments[_key6];
          }
          switch (command) {
            case "send":
              _this._gaCommandSend.apply(_this, args);
              break;
            case "set":
              _this._gaCommandSet.apply(_this, args);
              break;
            default:
              console.warn("Command doesn't exist: ".concat(command));
          }
        });
        _defineProperty(this, "ga", function() {
          for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }
          if (typeof args[0] === "string") {
            _this._gaCommand.apply(_this, args);
          } else {
            var readyCallback = args[0];
            _this._gtag("get", _this._currentMeasurementId, "client_id", function(clientId) {
              _this._isQueuing = false;
              var queues = _this._queueGtag;
              readyCallback({
                get: function get(property) {
                  return property === "clientId" ? clientId : property === "trackingId" ? _this._currentMeasurementId : property === "apiVersion" ? "1" : void 0;
                }
              });
              while (queues.length) {
                var queue = queues.shift();
                _this._gtag.apply(_this, _toConsumableArray(queue));
              }
            });
            _this._isQueuing = true;
          }
          return _this.ga;
        });
        _defineProperty(this, "event", function(optionsOrName, params) {
          if (typeof optionsOrName === "string") {
            _this._gtag("event", optionsOrName, _this._toGtagOptions(params));
          } else {
            var action = optionsOrName.action, category = optionsOrName.category, label = optionsOrName.label, value = optionsOrName.value, nonInteraction = optionsOrName.nonInteraction, transport = optionsOrName.transport;
            if (!category || !action) {
              console.warn("args.category AND args.action are required in event()");
              return;
            }
            var fieldObject = {
              hitType: "event",
              eventCategory: (0, _format["default"])(category),
              eventAction: (0, _format["default"])(action)
            };
            if (label) {
              fieldObject.eventLabel = (0, _format["default"])(label);
            }
            if (typeof value !== "undefined") {
              if (typeof value !== "number") {
                console.warn("Expected `args.value` arg to be a Number.");
              } else {
                fieldObject.eventValue = value;
              }
            }
            if (typeof nonInteraction !== "undefined") {
              if (typeof nonInteraction !== "boolean") {
                console.warn("`args.nonInteraction` must be a boolean.");
              } else {
                fieldObject.nonInteraction = nonInteraction;
              }
            }
            if (typeof transport !== "undefined") {
              if (typeof transport !== "string") {
                console.warn("`args.transport` must be a string.");
              } else {
                if (["beacon", "xhr", "image"].indexOf(transport) === -1) {
                  console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`");
                }
                fieldObject.transport = transport;
              }
            }
            _this._gaCommand("send", fieldObject);
          }
        });
        _defineProperty(this, "send", function(fieldObject) {
          _this._gaCommand("send", fieldObject);
        });
        this.reset();
      }
      _createClass(GA42, [{
        key: "gtag",
        value: function gtag() {
          this._gtag.apply(this, arguments);
        }
      }]);
      return GA42;
    }();
    exports.GA4 = GA4;
    var _default = new GA4();
    exports["default"] = _default;
  }
});

// node_modules/react-ga4/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-ga4/dist/index.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = exports.ReactGAImplementation = void 0;
    var _ga = _interopRequireWildcard(require_ga4());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    var ReactGAImplementation = _ga.GA4;
    exports.ReactGAImplementation = ReactGAImplementation;
    var _default = _ga["default"];
    exports["default"] = _default;
  }
});

// app/components/ImageCarousel.jsx
var import_react = __toESM(require_react());
var import_react_responsive = __toESM(require_react_responsive());
var import_react_slick = __toESM(require_lib());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ImageCarousel = () => {
  const isSmall = (0, import_react_responsive.useMediaQuery)({ maxWidth: 640 });
  var imageSrc = [];
  const goToCollection = (url) => {
    window.location.href = url;
  };
  var imageSrc = [];
  if (!isSmall) {
    imageSrc = [
      {
        url: "/collections/cult-accessories",
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_1.jpg?v=1715767477"
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_3.jpg?v=1713342905",
        url: "/collections/way-2-slay-mjk"
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_2.jpg?v=1715944709",
        url: "/collections/rizz-roll-mjk"
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/pro_studio__banner_5_opt_2.jpg?v=1714388254",
        url: "collections/pro-studio-mjk"
      }
    ];
  } else {
    imageSrc = [
      {
        url: "/collections/cult-accessories",
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Hero_Banners_1.jpg?v=1715767503"
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Hero_Banners_2.jpg?v=1713353171",
        url: "/collections/way-2-slay-mjk"
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Hero_Banners_4.jpg?v=1715944487",
        url: "/collections/rizz-roll-mjk"
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/pro_studio_mobile_banner_3_700_x_470.jpg?v=1715944382",
        url: "collections/pro-studio-mjk"
      }
    ];
  }
  function PrevArrow(props) {
    const { onClick } = props;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute top-1/2 z-10 transform -translate-y-1/2  bg-opacity-75 rounded-full p-2 ml-4 hover:bg-opacity-100 text-white",
        onClick,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          MdChevronLeft,
          {
            className: "opacity-50 cursor-pointer hover:opacity-100 mst-arrow",
            size: 40
          },
          void 0,
          false,
          {
            fileName: "app/components/ImageCarousel.jsx",
            lineNumber: 54,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ImageCarousel.jsx",
        lineNumber: 51,
        columnNumber: 7
      },
      this
    );
  }
  function NextArrow(props) {
    const { onClick } = props;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute right-0 top-1/2 transform -translate-y-1/2 bg-opacity-75 rounded-full p-2 mr-4 hover:bg-opacity-100 text-white",
        onClick,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          MdChevronRight,
          {
            className: "opacity-50 cursor-pointer hover:opacity-100 mst-arrow",
            size: 40
          },
          void 0,
          false,
          {
            fileName: "app/components/ImageCarousel.jsx",
            lineNumber: 69,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ImageCarousel.jsx",
        lineNumber: 65,
        columnNumber: 7
      },
      this
    );
  }
  const settings = {
    infinite: true,
    speed: 500,
    initialSlide: isSmall ? 1 : 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextArrow, {}, void 0, false, {
      fileName: "app/components/ImageCarousel.jsx",
      lineNumber: 85,
      columnNumber: 16
    }, this),
    prevArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrevArrow, {}, void 0, false, {
      fileName: "app/components/ImageCarousel.jsx",
      lineNumber: 86,
      columnNumber: 16
    }, this),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_slick.default, { ...settings, children: imageSrc.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "img",
    {
      onClick: () => goToCollection(item.url),
      className: `lg:w-full md:w-full cursor-pointer sm:w-full object-cover ${isSmall ? "rounded-2xl" : ""} w-[100%]`,
      src: item.img
    },
    `img_crsll_${index}`,
    false,
    {
      fileName: "app/components/ImageCarousel.jsx",
      lineNumber: 122,
      columnNumber: 15
    },
    this
  )) }, void 0, false, {
    fileName: "app/components/ImageCarousel.jsx",
    lineNumber: 119,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ImageCarousel.jsx",
    lineNumber: 118,
    columnNumber: 5
  }, this);
};
var ImageCarousel_default = ImageCarousel;

// app/components/ProductCarousel.jsx
var import_react2 = __toESM(require_react());
var import_react_responsive2 = __toESM(require_react_responsive());
var import_react_slick2 = __toESM(require_lib());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var ProductCarousel = ({ products }) => {
  const noImg = "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/No-image-found.jpg?v=1708942129";
  let productsToShow = [];
  const lines = [];
  var len = products.edges.length;
  const isLargeScreen = (0, import_react_responsive2.useMediaQuery)({ minWidth: 1024 });
  const eIndex = isLargeScreen ? len < 4 ? len : 4 : 2;
  productsToShow = products;
  const calculatePer = (original_price, disc_price) => {
    let price = Math.trunc(original_price);
    let compareAtPrice = Math.trunc(disc_price);
    let per = (compareAtPrice - price) / price * 100;
    return Math.trunc(per);
  };
  products.edges.map((product) => {
    product.node.variants.edges.map((line) => {
      if (line.node.availableForSale) {
        lines.push([
          {
            merchandiseId: line.node.id,
            quantity: 1
          }
        ]);
      }
    });
  });
  const goToProduct = (url_path) => {
    window.location.href = url_path;
  };
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "button",
      {
        className: "absolute z-10 lg:left-[-90px] top-1/2 transform -translate-y-1/2  bg-white bg-opacity-75 rounded-full p-2 ml-4 hover:bg-opacity-100 z-4 text-white",
        onClick,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          MdChevronLeft,
          {
            className: "opacity-50 cursor-pointer hover:opacity-100 mst-arrow",
            size: 40
          },
          void 0,
          false,
          {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 52,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 49,
        columnNumber: 7
      },
      this
    );
  }
  function SampleNextArrow(props) {
    const { onClick } = props;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "button",
      {
        className: "absolute lg:right-[-90px] right-0 top-1/2 transform -translate-y-1/2  bg-white bg-opacity-75 rounded-full p-2 mr-4 hover:bg-opacity-100 text-white",
        onClick,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          MdChevronRight,
          {
            className: "opacity-50 cursor-pointer hover:opacity-100 mst-arrow",
            size: 40
          },
          void 0,
          false,
          {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 67,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 63,
        columnNumber: 7
      },
      this
    );
  }
  const settings = {
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: eIndex,
    slidesToScroll: 1,
    nextArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SampleNextArrow, {}, void 0, false, {
      fileName: "app/components/ProductCarousel.jsx",
      lineNumber: 81,
      columnNumber: 15
    }, this),
    prevArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SamplePrevArrow, {}, void 0, false, {
      fileName: "app/components/ProductCarousel.jsx",
      lineNumber: 82,
      columnNumber: 16
    }, this),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: eIndex,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: eIndex,
          slidesToScroll: eIndex,
          initialSlide: 1,
          dots: true
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "recommended_section w-full max-w-screen-xl mx-auto lg:px-24 sm:px-4 md:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_slick2.default, { ...settings, children: productsToShow.edges.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white mst-card rounded-lg shadow-lg mx-2 p-1 sm:p-2 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "cursor", onClick: () => goToProduct(`/products/${product.node.handle}`), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "img",
        {
          src: `${product.node.images.edges.length > 0 ? product.node.images.edges[0].node.url : noImg}`,
          alt: product.node.title,
          className: "w-full h-auto"
        },
        void 0,
        false,
        {
          fileName: "app/components/ProductCarousel.jsx",
          lineNumber: 120,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "product_info", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-lg font-semibold mt-2 text-center min-h-[50px] xs:min-h-[85px] sm:min-h-[50px]", children: product.node.title }, void 0, false, {
          fileName: "app/components/ProductCarousel.jsx",
          lineNumber: 126,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-row justify-center gap-1 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "font-bold m-auto flex  text-center text-sm xs:text-sm sm:text-xl", children: [
            "\u20B9",
            Math.trunc(product.node.priceRange.minVariantPrice.amount)
          ] }, void 0, true, {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 131,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 130,
            columnNumber: 25
          }, this),
          product.node.variants.edges[0].node.compareAtPrice?.amount && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-2 line-through opacity-50 text-sm xs:text-sm sm:text-xl", children: [
              "\u20B9",
              Math.trunc(product.node.variants.edges[0].node.compareAtPrice?.amount)
            ] }, void 0, true, {
              fileName: "app/components/ProductCarousel.jsx",
              lineNumber: 137,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("b", { className: "ml-2 text-red-500 text-sm xs:text-sm sm:text-xl", children: [
              " (",
              calculatePer(product.node.priceRange.minVariantPrice.amount, product.node.variants.edges[0].node.compareAtPrice?.amount),
              " % Off) "
            ] }, void 0, true, {
              fileName: "app/components/ProductCarousel.jsx",
              lineNumber: 140,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 136,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ProductCarousel.jsx",
          lineNumber: 129,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 125,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductCarousel.jsx",
      lineNumber: 119,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-1 py-1 flex items-center sm:flex-row gap-3 justify-center w-[100%]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-[25%] flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 33",
          xmlSpace: "preserve",
          className: "sm:w-[43px] w-[43px] like-home",
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
                fileName: "app/components/ProductCarousel.jsx",
                lineNumber: 155,
                columnNumber: 23
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
                fileName: "app/components/ProductCarousel.jsx",
                lineNumber: 160,
                columnNumber: 23
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/ProductCarousel.jsx",
          lineNumber: 149,
          columnNumber: 21
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 148,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { "d-line": index, className: "w-[75%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        ee,
        {
          route: "/cart",
          inputs: { lines: lines[index] },
          action: ee.ACTIONS.LinesAdd,
          className: "w-[83%] ",
          children: (fetcher) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "button",
            {
              disabled: !product.node.variants || !product.node.variants.edges[0].node.availableForSale,
              className: "w-[100%] h-11 bg-black hover:bg-blue-700 text-white font-bold py-1 rounded-lg inline-block home-product",
              type: "submit",
              onClick: () => {
                window.location.href = window.location.href + "#cart-aside";
              },
              children: product.node.variants && product.node.variants.edges[0].node.availableForSale ? "ADD TO CART" : "Sold out"
            },
            void 0,
            false,
            {
              fileName: "app/components/ProductCarousel.jsx",
              lineNumber: 177,
              columnNumber: 27
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/ProductCarousel.jsx",
            lineNumber: 176,
            columnNumber: 25
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/ProductCarousel.jsx",
          lineNumber: 169,
          columnNumber: 21
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/ProductCarousel.jsx",
        lineNumber: 168,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductCarousel.jsx",
      lineNumber: 147,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ProductCarousel.jsx",
    lineNumber: 118,
    columnNumber: 17
  }, this) }, `product_${product.node.id}`, false, {
    fileName: "app/components/ProductCarousel.jsx",
    lineNumber: 117,
    columnNumber: 13
  }, this)) }, void 0, false, {
    fileName: "app/components/ProductCarousel.jsx",
    lineNumber: 115,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/ProductCarousel.jsx",
    lineNumber: 114,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ProductCarousel.jsx",
    lineNumber: 113,
    columnNumber: 5
  }, this);
};
var ProductCarousel_default = ProductCarousel;

// app/components/YouTubeVideo.jsx
var import_react3 = __toESM(require_react());
var import_react_responsive3 = __toESM(require_react_responsive());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var MobileVideo = ({ playVideo, src, isPlay, embedUrl }) => {
  console.log("MobileVideo:", isPlay);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full h-full mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative rounded-lg cursor-pointer", onClick: () => playVideo(), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "relative rounded-2xl", src, alt: "Youtube Video" }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "absolute top-[50%] left-[50%]", src: "/youtube_icon.png" }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    isPlay && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "iframe",
      {
        title: "YouTube Video",
        className: "absolute top-0 left-0 w-full h-full rounded-2xl",
        src: embedUrl,
        allowFullScreen: true,
        autoPlay: "1",
        mute: "1",
        allow: "autoplay"
      },
      void 0,
      false,
      {
        fileName: "app/components/YouTubeVideo.jsx",
        lineNumber: 12,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/YouTubeVideo.jsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/YouTubeVideo.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
};
var DesktopVideo = ({ playVideo, src, isPlay, embedUrl }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-4/5 mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative rounded-2xl p-10 cursor-pointer", onClick: () => playVideo(), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "rounded-2xl relative", src, alt: "Youtube Video" }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "absolute top-[50%] left-[50%]", src: "/youtube_icon.png" }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    isPlay && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "iframe",
      {
        title: "YouTube Video",
        className: "absolute top-0 left-0 w-full h-full rounded-2xl",
        src: embedUrl,
        allowFullScreen: true,
        autoPlay: "1",
        mute: "1",
        allow: "autoplay"
      },
      void 0,
      false,
      {
        fileName: "app/components/YouTubeVideo.jsx",
        lineNumber: 34,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/YouTubeVideo.jsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/YouTubeVideo.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
};
var YouTubeVideo = () => {
  const embedUrl = `https://www.youtube.com/embed/WKKai8jures?si=RwowF2iZZmbeL8H3?&autoplay=1`;
  const src = "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/youtube_thumbnail.jpg?v=1713503453";
  const isLargeScreen = (0, import_react_responsive3.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive3.useMediaQuery)({ maxWidth: 640 });
  const [play, setPlay] = (0, import_react3.useState)(false);
  const playVideo = () => {
    setPlay(!play);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DesktopVideo, { embedUrl, playVideo, isPlay: play, src }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 64,
      columnNumber: 25
    }, this),
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MobileVideo, { embedUrl, playVideo, isPlay: play, src }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 65,
      columnNumber: 19
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/YouTubeVideo.jsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
};
var YouTubeVideo_default = YouTubeVideo;

export {
  ImageCarousel_default,
  ProductCarousel_default,
  YouTubeVideo_default,
  require_dist
};
//# sourceMappingURL=/build/_shared/chunk-2DKJRWXH.js.map
