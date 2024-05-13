import {
  require_lib
} from "/build/_shared/chunk-XO3LOQFD.js";
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
        url: "/collections/cult-makeup",
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_1.jpg?v=1713342696"
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_3.jpg?v=1713342905",
        url: "/collections/way-2-slay-mjk"
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_2.jpg?v=1713342905",
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
        url: "/collections/cult-makeup",
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/desktop_banner_1.jpg?v=1713342696"
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Hero_Banners_2.jpg?v=1713353171",
        url: "/collections/way-2-slay-mjk"
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/mobile_Hero_Banners_4.jpg?v=1713353171",
        url: "/collections/rizz-roll-mjk"
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/pro_studio_mobile_banner_3_700_x_470.jpg?v=1714388254",
        url: "collections/pro-studio-mjk"
      }
    ];
  }
  function PrevArrow(props) {
    const { onClick } = props;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "absolute top-1/2 transform -translate-y-1/2  bg-opacity-75 rounded-full p-2 ml-4 hover:bg-opacity-100 text-white",
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
    nextArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrevArrow, {}, void 0, false, {
      fileName: "app/components/ImageCarousel.jsx",
      lineNumber: 85,
      columnNumber: 16
    }, this),
    prevArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextArrow, {}, void 0, false, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_slick.default, { ...settings, children: imageSrc.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "img",
    {
      onClick: () => goToCollection(item.url),
      className: `lg:w-full md:w-full cursor-pointer sm:w-full object-cover ${isSmall ? "rounded-2xl" : ""} w-[100%]`,
      src: item.img
    },
    void 0,
    false,
    {
      fileName: "app/components/ImageCarousel.jsx",
      lineNumber: 135,
      columnNumber: 15
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/ImageCarousel.jsx",
    lineNumber: 134,
    columnNumber: 13
  }, this)) }, void 0, false, {
    fileName: "app/components/ImageCarousel.jsx",
    lineNumber: 131,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ImageCarousel.jsx",
    lineNumber: 130,
    columnNumber: 5
  }, this);
};
var ImageCarousel_default = ImageCarousel;

// app/components/YouTubeVideo.jsx
var import_react2 = __toESM(require_react());
var import_react_responsive2 = __toESM(require_react_responsive());
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
  const isLargeScreen = (0, import_react_responsive2.useMediaQuery)({ minWidth: 1024 });
  const isSmall = (0, import_react_responsive2.useMediaQuery)({ maxWidth: 640 });
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
//# sourceMappingURL=/build/_shared/chunk-L57CSXKI.js.map
