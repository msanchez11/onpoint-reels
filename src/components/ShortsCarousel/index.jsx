import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import data from "../../db/database.json";
import breakpointConfig from "../../configs/shortsSwiperConfig.json";
import DesktopVideo from "./DesktopVideo";
import MobileVideo from "./MobileVideo";
import useWidthDetect from "../../hooks/useWidthDetect";
import "./styles.css";

const ShortsCarousel = (props) => {
  const { changeOpenReels, changeOpenLogin, setGoToSlide } = props;
  const { isDesktop } = useWidthDetect();
  const openModalInCorrectSlide = (id) => {
    setGoToSlide(id - 1);
    console.log(id - 1);
    changeOpenReels();
  };

  return (
    <div className="shorts-main-wrapper">
      <div className="shorts-header">
        <span>SUGGESTED CREATORS FOR YOU</span>
        <span className="see-all" onClick={changeOpenLogin}>
          SEE ALL
        </span>
      </div>
      <Swiper
        className="shorts-carrousel"
        modules={[Navigation, Scrollbar]}
        breakpoints={breakpointConfig}
        navigation
      >
        {data.people.map((item) => (
          <SwiperSlide
            key={item.id}
            onClick={() => openModalInCorrectSlide(item.id)}
          >
            <div className="short-video-wrapper">
              {isDesktop ? (
                <DesktopVideo url={item.boomerang} />
              ) : (
                <MobileVideo url={item.boomerang} />
              )}
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
