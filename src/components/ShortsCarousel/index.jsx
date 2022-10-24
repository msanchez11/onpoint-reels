import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import data from "../../db/database.json";
import breakpointConfig from "../../configs/shortsSwiperConfig.json";
import "./styles.css";

const ShortsCarousel = (props) => {
  const { changeOpenValue } = props;
  const triggerLogin = () => {
    window.alert("⚠️INCENTIVO DE LOGIN ABIERTO⚠️");
  };

  return (
    <div className="shorts-main-wrapper">
      <div className="shorts-header">
        <span>SUGGESTED CREATORS FOR YOU</span>
        <span className="see-all" onClick={triggerLogin}>
          SEE ALL
        </span>
      </div>
      <Swiper
        className="shorts-carrousel"
        modules={[Navigation, Scrollbar]}
        breakpoints={breakpointConfig}
        breakpointsBase={"window"}
        navigation
      >
        {data.people.map((item) => (
          <SwiperSlide key={item.id} onClick={changeOpenValue}>
            <div className="short-video-wrapper">
              <video
                className="boomerang-video"
                autoPlay
                muted
                loop
                src={item.boomerang}
                type="video/mp4"
              ></video>
              <div className="short-person-wrapper">
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

export default ShortsCarousel;
