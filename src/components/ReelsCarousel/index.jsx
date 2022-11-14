import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
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
    openModalLogin,
    mustPlayVideo,
    setMustPlayVideo,
  } = props;
  const [showingComercial, setShowingComercial] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const slideChanged = (prop) => {
    videoIdSet.add(prop);
    if (videoIdSet.size === 4) {
      setShowingComercial(true);
    }
    if (videoIdSet.size === 7) {
      // PAUSAR VIDEO ANTES DE ABRIR EL MODAL setIsPlaying(false);
      setMustPlayVideo(true);
      changeOpenLogin();
    }
  };

  return (
    <div className="reels-main-wrapper">
      <Swiper
        className="reels-carrousel"
        //direction="vertical" IMPOSIBLE
        modules={[Navigation]}
        breakpoints={breakpointConfig}
        navigation
        centeredSlides={true}
        initialSlide={openInSlideX}
        onReachEnd={changeOpenLogin}
        onSwiper={(swiper) => videoIdSet.add(swiper.realIndex)}
        onSlideChange={(swiper) => slideChanged(swiper.realIndex)}
      >
        {data.people.map((item) => (
          <SwiperSlide
            key={item.id}
            id={`reel-slide-${item.id}`}
            style={{ position: "relative" }}
          >
            <VideoSlideContainer
              item={item}
              openModalLogin={openModalLogin}
              changeOpenLogin={changeOpenLogin}
              showingComercial={showingComercial}
              setShowingComercial={setShowingComercial}
              isMuted={isMuted}
              setIsMuted={setIsMuted}
              mustPlayVideo={mustPlayVideo}
              setMustPlayVideo={setMustPlayVideo}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReelsCarousel;
