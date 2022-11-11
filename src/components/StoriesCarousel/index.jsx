// import Swiper core and required modules
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import data from "../../db/database.json";
import breakpointConfig from "../../configs/storiesSwiperConfig.json";
import "./styles.css";

const StoriesCarousel = (props) => {
  const { changeOpenLogin, changeOpenReels, setGoToSlide } = props;
  const openModalInCorrectSlide = (id) => {
    setGoToSlide(id - 1);
    changeOpenReels();
  };

  return (
    <div className="all-stories-wrapper">
      <div className="stories-header">
        <span>CREATORS BUZZ</span>
        <span className="see-all" onClick={changeOpenLogin}>
          SEE ALL
        </span>
      </div>
      <Swiper
        className="stories-carrousel"
        modules={[Navigation]}
        breakpoints={breakpointConfig}
        navigation
      >
        {data.people.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="stories-person-wrapper"
              onClick={() => openModalInCorrectSlide(item.id)}
            >
              <div className="stories-photo-container">
                <img
                  className="stories-person-photo"
                  src={item.avatar}
                  alt={item.name}
                />
              </div>
              <span className="stories-person-name">{item.name}</span>
              <span className="stories-person-area">{item.area}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StoriesCarousel;
