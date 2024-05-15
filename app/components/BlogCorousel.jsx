
import {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import Slider from "react-slick";

const MobileProductCorousel = ({products,title, settings}) => {
  const [startIndex, setStartIndex] = useState(0);

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-1">
      <div className="relative">
        <h1 className="text-center lg:text-[28px] my-4 text-[20px]">
         {title}
        </h1>
        <Slider {...settings}>
          {products.nodes.map((product,index) => (
            <div key={`blog_${index}`} className="px-2 bg-white">
              <a href={`/blogs/${product.handle}`}>
              <img
                src={`${product.articles.edges[0].node.image.url}`} // Make sure to put your images in the 'public/images/' directory
                alt={product.title}
                className="mst-card lg:w-full lg:h-auto lg:px-5 sm:mx-3 w-[320px]"
              />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const DesktopCorousel = ({products ,title ,settings}) => {
  const [startIndex, setStartIndex] = useState(0);
  const productsToShow = products.nodes.slice(startIndex, startIndex + 3);
  //console.log(productsToShow)
  const isMobile = useMediaQuery({maxWidth: 640});

  const nextProducts = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % products.length);
  };
  settings.infinite = false;
  const prevProducts = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? products.length - (products.length % 3) : prevIndex - 1,
    );
  };

  return (
    <div>
      <div className="w-full max-w-screen-2xl mx-auto px-1">
        <div className="relative">
          <h1 className="text-center">{title}</h1>
          <Slider {...settings}>
            {products.nodes.map((product,index) => (
                <div key={`blog_${index}`} className="px-2 bg-white">
                  <a href={`/blogs/${product.handle}`}>
                  <img
                    src={`${product.articles.edges[0].node.image.url}`} // Make sure to put your images in the 'public/images/' directory
                    alt={product.title}
                    className="mst-card lg:w-full lg:h-auto"
                  />
                  </a>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const BlogCorousel = ({collections , title, isSmall}) => {
  let totalLen = collections.nodes.length;
  const settings = {
  centerMode: isSmall ? true : false,
  dots: totalLen > 3 ? true : false,
  infinite: false,
  speed: 500,
  initialSlide: isSmall ? 1 : 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
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
  }
  //console.log('is Tablet: '+isLargeScreen);

  return (
    <div>
      {isSmall ? (
        <MobileProductCorousel products={collections} settings={settings} title={title}></MobileProductCorousel>
      )
      :
      (
        <DesktopCorousel products={collections} settings={settings} title={title}></DesktopCorousel>
      )
      }
    </div>
  );
};

export default BlogCorousel;
