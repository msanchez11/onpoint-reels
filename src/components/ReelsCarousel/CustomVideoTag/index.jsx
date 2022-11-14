import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import useWidthDetect from "../../../hooks/useWidthDetect";
import Mute from "../../../assets/muted.png";
import Unmute from "../../../assets/unmuted.svg";
import "./styles.css";
import { useSwiper } from "swiper/react";

const CustomVideoTag = (props) => {
  const {
    url,
    id,
    videoDuration,
    isPlaying,
    togglePlayingVideoProgressBar,
    isMuted,
    setIsMuted,
  } = props;
  const videoRef = useRef(null);
  const { isDesktop } = useWidthDetect();
  const toggleMute = () => setIsMuted(!isMuted);
  const swiper = useSwiper();

  const goNextSlide = () => {
    swiper.slideNext();
  };

  const playOrPauseVideo = () => {
    if (isPlaying) {
      togglePlayingVideoProgressBar(videoDuration, id);
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
      videoRef.current.currentTime = 0;
      togglePlayingVideoProgressBar(videoDuration, id);
    }
  };

  useEffect(playOrPauseVideo, [
    isPlaying,
    togglePlayingVideoProgressBar,
    videoDuration,
    id,
  ]);

  return (
    <>
      {isMuted ? (
        <img
          src={Mute}
          alt="UnmuteVideo"
          onClick={toggleMute}
          className="mute-unmute-icon"
        />
      ) : (
        <img
          src={Unmute}
          alt="MuteVideo"
          onClick={toggleMute}
          className="mute-unmute-icon"
        />
      )}

      {isDesktop ? (
        <video
          ref={videoRef}
          id={`desktop-video-${id}`}
          className="modal-reels-video-desktop"
          playsInline={true}
          muted={isMuted}
          onEnded={goNextSlide}
          src={url}
          type="video/mp4"
        />
      ) : (
        <video
          className="modal-reels-video-mobile"
          ref={videoRef}
          id={`mobile-video-${id}`}
          playsInline={true}
          onEnded={goNextSlide}
          muted={isMuted}
          src={url}
          type="video/mp4"
        />
      )}
    </>
  );
};

export default CustomVideoTag;
