import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/bundle";
import VideoSlideContainer from "./VideoSlideContainer";
import data from "../../db/database.json";
import breakpointConfig from "../../configs/reelsSwiperConfig.json";
import "./styles.css";
import "./styles-mobile.css";

const ReelsCarousel = (props) => {
  const {
    changeOpenLogin,
    openInSlideX,
    videoIdSet,
    mustPlayVideo,
    setMustPlayVideo,
    changeOpenReels,
  } = props;
  const [showingComercial, setShowingComercial] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const slideChanged = (prop) => {
    setShowingComercial(false);
    videoIdSet.add(prop);
    if (videoIdSet.size === 7) {
      setMustPlayVideo(true);
      changeOpenLogin();
    }
    if (videoIdSet.size === 4) {
      videoIdSet.add(prop + 1);
      setShowingComercial(true);
    }
    if (videoIdSet.size === 0) {
      videoIdSet.add(prop);
    }
  };

  return (
    <div className="reels-main-wrapper">
      <Swiper
        className="reels-carrousel"
        modules={[Navigation]}
        breakpoints={breakpointConfig}
        navigation
        centeredSlides
        //loop
        initialSlide={openInSlideX}
        onSlideChange={(swiper) => slideChanged(swiper.realIndex)}
        onSwiper={(swiper) => slideChanged(swiper.realIndex)}
        simulateTouch={false}
      >
        {data.people.map((item) => (
          <SwiperSlide
            key={item.id}
            id={`reel-slide-${item.id}`}
            style={{ position: "relative" }}
          >
            <VideoSlideContainer
              item={item}
              changeOpenLogin={changeOpenLogin}
              showingComercial={showingComercial}
              setShowingComercial={setShowingComercial}
              isMuted={isMuted}
              setIsMuted={setIsMuted}
              mustPlayVideo={mustPlayVideo}
              setMustPlayVideo={setMustPlayVideo}
              changeOpenReels={changeOpenReels}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReelsCarousel;
