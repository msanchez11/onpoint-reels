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

const VideoSlideContainer = (props) => {
  const {
    item,
    changeOpenLogin,
    //openModalLogin,
    showingComercial,
    setShowingComercial,
    isMuted,
    setIsMuted,
    mustPlayVideo,
    setMustPlayVideo,
  } = props;
  const mySwiperSlide = useSwiperSlide();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(mySwiperSlide.isActive);
  }, [mySwiperSlide.isActive]);

  const togglePlayingVideoProgressBar = (duration, videoNumber) => {
    if (isPlaying && !showingComercial) {
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
    setMustPlayVideo(true);
    //setIsPlaying(false);
    changeOpenLogin();
  };
  return (
    <>
      {showingComercial && (
        <CommSlideContainer setShowingComercial={setShowingComercial} />
      )}
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
          isPlaying={!mustPlayVideo && !showingComercial && isPlaying}
          setIsPlaying={setIsPlaying}
          togglePlayingVideoProgressBar={togglePlayingVideoProgressBar}
          url={item.video}
          id={item.id}
          isMuted={isMuted}
          setIsMuted={setIsMuted}
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
