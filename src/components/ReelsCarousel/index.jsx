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

const ReelsCarousel = (props) => {
  const { isDesktop } = useWidthDetect();
  const { changeOpenLogin, openInSlideX } = props;

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
            <div className="video-time-line"></div>
            <div className="reels-header-wrapper">
              <div className="reels-person-wrapper">
                <img className="person-photo" src={item.avatar} alt="Avatar" />
                <span className="person-name">{item.name}</span>
              </div>
            </div>
            <div className="reels-video-wrapper">
              {isDesktop ? (
                <RCvideoDesk url={item.video} id={item.id} />
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
            <div className="reels-videos-velong">
              <img src={VelongLogo} alt="VelongLogo" className="velongLogo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReelsCarousel;
