import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {useMediaQuery} from 'react-responsive';
import Slider from "react-slick";


const CollectionCarousel = ({collection , handle , sortArr,all_collections}) => {
  const noImg = "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/No-image-found.jpg?v=1708942129"
  var filtered = sortArr.filter(col=> {
    return col.length != 0;
  });
  let collectionsToShow = filtered;
  var len = collectionsToShow?.length;
  console.log("collectionsToShow::",collectionsToShow.length)
  const isLargeScreen = useMediaQuery({minWidth: 1024});

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button 
        className="absolute top-1/2 z-10 transform -translate-y-1/2  bg-opacity-75 rounded-full p-2 ml-4 hover:bg-opacity-100 text-white"
        onClick={onClick}>
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100 mst-arrow"
          size={40}
        />
      </button>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-opacity-75 rounded-full p-2 mr-4 hover:bg-opacity-100 text-white"
          onClick={onClick}
        >
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100 mst-arrow"
            size={40}
          />
        </button>
    );
  }
  
  const settings = {
    dots: false,
    infinite:len < 4 ? false : true,
    slidesToShow: len < 4 ? len : len,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }
  console.log("settings::",settings)

  function goToCollection(url_path){
    let url = `/collections/${url_path}` //getPath(url_path);
    console.log(url)
    window.location.href = url
  }

  return (
    <div className="recommended_section w-full max-w-screen-xl mx-auto lg:px-52 sm:px-32 md:px-32">
  
      <Slider {...settings}>
          {collectionsToShow.map((coll, index) => (
            <>
            { coll.length ?
            <div key={`coll_corousel_${index}`} className="w-full cursor" onClick={()=> goToCollection(coll[0]?.node?.handle)}>
                <div className="bg-white mst-card rounded-lg shadow-lg mx-2 p-1 sm:p-2">
                  <img
                    src={coll[0]?.node?.metafields[1]?.value || noImg }// Make sure to put your images in the 'public/images/' directory
                    className="w-full h-auto coll_cor_img rounded-full"
                  />
                  <h2 className="text-sm font-semibold mt-2 text-center">
                    {coll[0]?.node?.title}
                  </h2>      
                </div>
            </div>
            :
            <></>
            } 
            </>
          ))}
         
        
        </Slider>
  
     
      {/* <div className="relative">
        <div className="flex grid-row-1 grid-cols-2 gap-4">
          {collectionsToShow.map((coll, index) => (
            <div key={`coll_corousel_${index}`} className="w-full cursor" onClick={()=> goToCollection(coll[0]?.node?.handle)}>
                <div className="bg-white mst-card rounded-lg shadow-lg p-2 w-32 h-40 sm:w-40">
                 
                    <img
                      src={coll[0]?.node?.metafields[1]?.value || noImg }// Make sure to put your images in the 'public/images/' directory
                      className="w-full h-auto coll_cor_img rounded-full"
                    />
                    <h2 className="text-sm font-semibold mt-2 text-center">
                      {coll[0]?.node?.title}
                    </h2>
                 
              </div>
            </div>
          ))}
        </div>
        { sortArr?.length > eIndex &&
        <>
        <button 
          className="absolute lg:left-[-150px] top-1/2 transform -translate-y-1/2 lg:bg-[#faebd7] bg-white bg-opacity-75 rounded-full p-2 ml-4 hover:bg-opacity-100 mst-arrow"
          onClick={() => prevCollections() }
        >
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            size={30}
          />
        </button>
        <button 
          className="absolute lg:right-[-150px] right-0 top-1/2 transform -translate-y-1/2 lg:bg-[#faebd7] bg-white bg-opacity-75 rounded-full p-2 mr-4 hover:bg-opacity-100 mst-arrow"
          onClick={() => nextCollections() }
        >
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            size={30}
          />
        </button>
        </>
      }
      </div> */}
    </div>
  );
};

export default CollectionCarousel;
