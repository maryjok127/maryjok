import Slider from "react-slick";

const Testimonials = ({page , isSmall})=>{
    const context = page.body.split('<p>split_code</p>');
    let totalLen = context.length;
    const settings = {
    centerMode: isSmall ? true : false,
    dots: totalLen > 3 ? true : false,
    infinite: false,
    speed: 500,
    initialSlide: isSmall ? 1 : 0,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    //console.log("Testimonials",context)
    return(
        <div className="wrapper w-full text-center mb-8">
        <h1> Testimonials </h1>
            <ul>
            <Slider {...settings}>
                { context.map((content,index)=>{
                return <li key={`testimonials_${index}`} className="flex gap-4 justify-center">
                    <div className="shadow-xl p-4 min-h-[280px] sm:min-h-[230px]"  dangerouslySetInnerHTML={{__html: content}}>
                    </div>
                </li>
                })
                }
            </Slider>
            </ul>
        </div>
    
    )
}

export default Testimonials;