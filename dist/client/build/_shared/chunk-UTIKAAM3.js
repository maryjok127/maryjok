import {
  MdChevronLeft,
  MdChevronRight
} from "/build/_shared/chunk-AQMJZ442.js";
import {
  require_react_responsive
} from "/build/_shared/chunk-D3AIAV2V.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-CFXHHO4K.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ImageCarousel.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ImageCarousel = ({ images, isSmall }) => {
  const [currentImageIndex, setCurrentImageIndex] = (0, import_react.useState)(0);
  var mobImgHeight = { height: "inherit" };
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };
  const goToCollection = (index) => {
    switch (index) {
      case 0:
        {
          window.location.href = "/collections/cult-makeup";
        }
        break;
      case 1:
        {
          window.location.href = "/collections/way-2-slay-mjk";
        }
        break;
      case 2:
        {
          window.location.href = "/collections/rizz-roll-mjk";
        }
        break;
      default: {
        window.location.href = "/collections/pro-studio-mjk";
      }
    }
  };
  if (isSmall)
    mobImgHeight = { height: "inherit" };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white",
        onClick: () => setCurrentImageIndex(
          (currentImageIndex - 1 + images.length) % images.length
        ),
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
            lineNumber: 39,
            columnNumber: 7
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ImageCarousel.jsx",
        lineNumber: 31,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        onClick: () => goToCollection(currentImageIndex),
        className: `lg:w-full md:w-full cursor-pointer sm:w-full object-cover ${isSmall ? "rounded-2xl" : ""} w-[100%]`,
        src: images[currentImageIndex]
      },
      void 0,
      false,
      {
        fileName: "app/components/ImageCarousel.jsx",
        lineNumber: 44,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white",
        onClick: () => setCurrentImageIndex((currentImageIndex + 1) % images.length),
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
            lineNumber: 55,
            columnNumber: 7
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ImageCarousel.jsx",
        lineNumber: 49,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/ImageCarousel.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
};
var ImageCarousel_default = ImageCarousel;

// app/components/YouTubeVideo.jsx
var import_react2 = __toESM(require_react());
var import_react_responsive = __toESM(require_react_responsive());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var MobileVideo = ({ playVideo, src, isPlay, embedUrl }) => {
  console.log("MobileVideo:", isPlay);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full h-full mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative rounded-lg cursor-pointer", onClick: () => playVideo(), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "relative rounded-2xl", src, alt: "Youtube Video" }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "absolute top-[50%] left-[50%]", src: "/youtube_icon.png" }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    isPlay && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-4/5 mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative rounded-2xl p-10 cursor-pointer", onClick: () => playVideo(), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "rounded-2xl relative", src, alt: "Youtube Video" }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "absolute top-[50%] left-[50%]", src: "/youtube_icon.png" }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    isPlay && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
  const isLargeScreen = (0, import_react_responsive.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive.useMediaQuery)({ maxWidth: 640 });
  const [play, setPlay] = (0, import_react2.useState)(false);
  const playVideo = () => {
    setPlay(!play);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    isLargeScreen && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DesktopVideo, { embedUrl, playVideo, isPlay: play, src }, void 0, false, {
      fileName: "app/components/YouTubeVideo.jsx",
      lineNumber: 64,
      columnNumber: 25
    }, this),
    isSmall && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MobileVideo, { embedUrl, playVideo, isPlay: play, src }, void 0, false, {
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
  YouTubeVideo_default
};
//# sourceMappingURL=/build/_shared/chunk-UTIKAAM3.js.map
