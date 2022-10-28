import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import data from "../../db/database.json";
import breakpointConfig from "../../configs/reelsSwiperConfig.json";
import MobileVideo from "../ShortsVideos/MobileVideo";
import "./styles.css";

const ReelsCarousel = (props) => {
  const { changeOpenReels, changeOpenLogin } = props;

  return (
    <div className="reels-main-wrapper">
      <div className="reels-header">
        <span>SUGGESTED CREATORS FOR YOU</span>
        <span className="see-all" onClick={changeOpenLogin}>
          SEE ALL
        </span>
      </div>
      <Swiper
        className="reels-carrousel"
        modules={[Navigation, Scrollbar]}
        breakpoints={breakpointConfig}
        navigation
        centeredSlides={true}
        initialSlide={1}
      >
        {data.people.map((item) => (
          <SwiperSlide key={item.id} onClick={changeOpenReels}>
            <div className="reels-video-wrapper">
              <MobileVideo url={item.video} />
              <div className="reels-person-wrapper">
                <img
                  className="person-photo"
                  src={item.avatar}
                  alt={item.name}
                />
                <span className="person-name">{item.name}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReelsCarousel;
