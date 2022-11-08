import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import data from "../../db/database.json";
import breakpointConfig from "../../configs/reelsSwiperConfig.json";
import RCvideoDesk from "./RCvideoDesk";
import RCvideoMob from "./RCvideoMob";
import Mute from "../../assets/muted.png";
import Unmute from "../../assets/unmuted.svg";
import useWidthDetect from "../../hooks/useWidthDetect";
import "./styles.css";

const ReelsCarousel = (props) => {
  const { isDesktop } = useWidthDetect();
  const { changeOpenLogin } = props;
  const [isMuted, setIsMuted] = useState(true);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <div className="reels-main-wrapper">
      <Swiper
        className="reels-carrousel"
        modules={[Navigation]}
        breakpoints={breakpointConfig}
        navigation
        centeredSlides={true}
      >
        {data.people.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="video-time-line"></div>
            <div className="reels-header-wrapper">
              <div className="reels-person-wrapper">
                <img className="person-photo" src={item.avatar} alt="Avatar" />
                <span className="person-name">{item.name}</span>
              </div>
              {isMuted ? (
                <img
                  src={Unmute}
                  alt="UnmuteVideo"
                  onClick={toggleMute}
                  className="mute-unmute-icon"
                />
              ) : (
                <img
                  src={Mute}
                  alt="MuteVideo"
                  onClick={toggleMute}
                  className="mute-unmute-icon"
                />
              )}
            </div>
            <div className="reels-video-wrapper">
              {isDesktop ? (
                <RCvideoDesk url={item.video} />
              ) : (
                <RCvideoMob url={item.video} isMuted={isMuted} />
              )}
            </div>
            <div className="reels-video-data" onClick={changeOpenLogin}>
              <div className="data-likes">
                <img src="" alt="Likes" />
                {item.likes}
              </div>
              <div className="data-comments" onClick={changeOpenLogin}>
                <img src="" alt="Comments" />
                {item.comments}
              </div>
              <div className="data-share" onClick={changeOpenLogin}>
                <img src="" alt="Share" />
                Share
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReelsCarousel;
