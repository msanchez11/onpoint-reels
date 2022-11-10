import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import data from "../../db/database.json";
import breakpointConfig from "../../configs/reelsSwiperConfig.json";
import RCvideoDesk from "./RCvideoDesk";
import RCvideoMob from "./RCvideoMob";
import Likes from "../../assets/likes.svg";
import Comments from "../../assets/comment.svg";
import Share from "../../assets/share.svg";
import VelongLogo from "../../assets/velong_logo.svg";
import useWidthDetect from "../../hooks/useWidthDetect";
import "./styles.css";
import "./styles-mobile.css";
import { useState } from "react";

const ReelsCarousel = (props) => {
  const { isDesktop } = useWidthDetect();
  const { changeOpenLogin, openInSlideX } = props;
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayingVideo = (duration, videoNumber) => {
    setIsPlaying(!isPlaying);
    console.log("Duration: ", duration);
    console.log("videoNumber: ", videoNumber);
    if (isPlaying) {
      document
        .querySelector(":root")
        .style.setProperty("--duration", `${duration}s`);
      document
        .getElementById(`progress-video-${videoNumber}`)
        .classList.add("progress");
    } else {
      document
        .getElementById(`progress-video-${videoNumber}`)
        .classList.remove("progress");
    }
  };

  return (
    <div className="reels-main-wrapper">
      <Swiper
        className="reels-carrousel"
        modules={[Navigation]}
        breakpoints={breakpointConfig}
        navigation
        centeredSlides={true}
        initialSlide={openInSlideX}
      >
        {data.people.map((item) => (
          <SwiperSlide key={item.id} id={`slide-number-${item.id}`}>
            <div className="progress-bar">
              <div id={`progress-video-${item.id}`} className="" />
            </div>
            <div className="reels-header-wrapper">
              <div className="reels-person-wrapper" onClick={changeOpenLogin}>
                <img className="person-photo" src={item.avatar} alt="Avatar" />
                <span className="person-name">{item.name}</span>
              </div>
            </div>
            <div className="reels-video-wrapper">
              {isDesktop ? (
                <RCvideoDesk
                  videoDuration={item.videoDuration}
                  isPlaying={isPlaying}
                  togglePlayingVideo={togglePlayingVideo}
                  url={item.video}
                  id={item.id}
                />
              ) : (
                <RCvideoMob url={item.video} id={item.id} />
              )}
            </div>
            <div className="reels-video-data" onClick={changeOpenLogin}>
              <div className="data-likes">
                <img src={Likes} alt="Likes" />
                {item.likes}
              </div>
              <div className="data-comments" onClick={changeOpenLogin}>
                <img src={Comments} alt="Comments" />
                {item.comments}
              </div>
              <div className="data-share" onClick={changeOpenLogin}>
                <img src={Share} alt="Share" />
                Share
              </div>
            </div>
            <div className="reels-video-velong">
              <img src={VelongLogo} alt="VelongLogo" className="velongLogo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReelsCarousel;
