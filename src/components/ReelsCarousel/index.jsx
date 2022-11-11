import React from "react";
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
          <SwiperSlide
            key={item.id}
            id={`slide-number-${item.id}`}
            style={{ position: "relative" }}
          >
            <VideoSlideContainer
              item={item}
              changeOpenLogin={changeOpenLogin}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReelsCarousel;
