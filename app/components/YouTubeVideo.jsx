import React,{useState} from 'react';
import {useMediaQuery} from 'react-responsive';

const MobileVideo = ({playVideo,src,isPlay,embedUrl}) => {
  console.log("MobileVideo:",isPlay)
  return (
    <div className="w-full h-full mx-auto">
      <div className="relative rounded-lg cursor-pointer" onClick={()=> playVideo() } >
        <img className='relative rounded-2xl' src={src} alt="Youtube Video"></img>
        <img className='absolute top-[50%] left-[50%]' src="/youtube_icon.png" />
        { isPlay &&
        <iframe
          title="YouTube Video"
          className="absolute top-0 left-0 w-full h-full rounded-2xl"
          src={embedUrl}
          allowFullScreen
          autoPlay="1"
          mute="1"
          allow="autoplay"
        ></iframe>
        }
      </div>
    </div>
  );
};

const DesktopVideo = ({playVideo,src, isPlay, embedUrl}) => {
  return (
    <div className="w-4/5 mx-auto">
      <div className="relative rounded-2xl p-10 cursor-pointer" onClick={()=> playVideo() }>
        <img className="rounded-2xl relative" src={src} alt="Youtube Video"></img>
        <img className='absolute top-[50%] left-[50%]' src="/youtube_icon.png" />
        { isPlay &&
        <iframe
          title="YouTube Video"
          className="absolute top-0 left-0 w-full h-full rounded-2xl"
          src={embedUrl}
          allowFullScreen
          autoPlay="1"
          mute="1"
          allow="autoplay"
        ></iframe>
        }
      </div>
    </div>
  );
};

const YouTubeVideo = () => {
  //const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const embedUrl = `https://www.youtube.com/embed/WKKai8jures?si=RwowF2iZZmbeL8H3?&autoplay=1`;
  const src = "https://cdn.shopify.com/s/files/1/0809/4253/0882/files/youtube_thumbnail.jpg?v=1713503453" 
  const isLargeScreen = useMediaQuery({minWidth: 1024});
  const isSmall = useMediaQuery({maxWidth: 640});
  const [play , setPlay] = useState(false) 
  
  const playVideo =()=>{
    // window.open(embedUrl,"_blank");
    setPlay(!play)
  }

  return (
    <div>
      {isLargeScreen && <DesktopVideo embedUrl={embedUrl} playVideo={playVideo} isPlay={play} src={src}></DesktopVideo>}
      {isSmall && <MobileVideo embedUrl={embedUrl} playVideo={playVideo} isPlay={play} src={src}></MobileVideo>}
    </div>
  );
};

export default YouTubeVideo;
