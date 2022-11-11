import React, { useState, useEffect } from "react";
import CustomVideoTag from "../CustomVideoTag";
import Likes from "../../../assets/likes.svg";
import Comments from "../../../assets/comment.svg";
import Share from "../../../assets/share.svg";
import VelongLogo from "../../../assets/velong_logo.svg";
import "../styles-mobile.css";
import "../styles.css";
import { useSwiperSlide } from "swiper/react";
import CommSlideContainer from "../CommSlideContainer";

const VideoSlideContainer = ({ item, changeOpenLogin }) => {
  const mySwiperSlide = useSwiperSlide();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCommercial, setShowCommercial] = useState(true);

  useEffect(() => {
    setIsPlaying(mySwiperSlide.isActive);
  }, [mySwiperSlide.isActive]);

  const togglePlayingVideoProgressBar = (duration, videoNumber) => {
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
  const stopVideoAndOpenLoginModal = () => {
    setIsPlaying(false);
    changeOpenLogin();
  };

  //const toggleShowCommercial = () => {
  //setIsPlaying(false);
  //Mostrar publicidad en el isActive
  //setShowCommercial(true);
  //Asignar class Animation a la barra de Adv
  //En 10seg setShowCommercial(false), setIsPlaying(true)
  //};
  // TODO:
  // IF 3slide visto, showCommercial TRUE & stopVideo & addProgressBarClassADV & set10seg to displaynone adv
  // IF 6slide visto, openModalLogin

  return (
    <>
      <CommSlideContainer
        showCommercial={showCommercial}
        setShowCommercial={setShowCommercial}
      />
      <div className="progress-bar">
        <div id={`progress-video-${item.id}`} className="" />
      </div>
      <div className="reels-header-wrapper">
        <div
          className="reels-person-wrapper"
          onClick={stopVideoAndOpenLoginModal}
        >
          <img className="person-photo" src={item.avatar} alt="Avatar" />
          <span className="person-name">{item.name}</span>
        </div>
      </div>
      <div className="reels-video-wrapper">
        <CustomVideoTag
          videoDuration={item.videoDuration}
          isPlaying={isPlaying}
          togglePlayingVideoProgressBar={togglePlayingVideoProgressBar}
          url={item.video}
          id={item.id}
          setIsPlaying={setIsPlaying}
        />
      </div>
      <div className="reels-video-data" onClick={stopVideoAndOpenLoginModal}>
        <div className="data-likes">
          <img src={Likes} alt="Likes" />
          {item.likes}
        </div>
        <div className="data-comments" onClick={stopVideoAndOpenLoginModal}>
          <img src={Comments} alt="Comments" />
          {item.comments}
        </div>
        <div className="data-share" onClick={stopVideoAndOpenLoginModal}>
          <img src={Share} alt="Share" />
          Share
        </div>
      </div>
      <div className="reels-video-velong">
        <img src={VelongLogo} alt="VelongLogo" className="velongLogo" />
      </div>
    </>
  );
};

export default VideoSlideContainer;
