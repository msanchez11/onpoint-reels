import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { useSwiper, useSwiperSlide } from "swiper/react";

const CustomVideoTag = (props) => {
  const { url, id, posterVid, isMuted, mustPlay } = props;
  const mySwiper = useSwiper();
  const mySwiperSlide = useSwiperSlide();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(mySwiperSlide.isActive);
  }, [mySwiperSlide.isActive]);

  useEffect(() => {
    if (mustPlay && isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying, videoRef, mustPlay]);

  const handleOnTimeUpdate = (data, id) => {
    data.currentTime === data.duration && mySwiper.slideNext();

    data.currentTime === data.duration && id === 13 && mySwiper.slideTo(0);

    const percentViewed = Math.round((data.currentTime * 100) / data.duration);
    document
      .querySelector(":root")
      .style.setProperty("--paused-time", `${percentViewed}%`);
    document.getElementById(`progress-video-${id}`).classList.add("progress");
  };

  const playOrPauseVideo = () => {
    mySwiperSlide.isActive && setIsPlaying(!isPlaying);
    !mySwiperSlide.isActive && mySwiper.slideTo(id - 1);
  };

  return (
    <>
      <video
        className="modal-reels-video"
        //preload={inView ? 'auto' : 'none'}
        preload="none"
        poster={`assets/story${id}/${posterVid}.jpg`}
        ref={videoRef}
        onClick={playOrPauseVideo}
        onTimeUpdate={() => handleOnTimeUpdate(videoRef.current, id)}
        id={`desktop-video-${id}`}
        playsInline={true}
        muted={isMuted}
        src={url}
        type="video/mp4"
      />
    </>
  );
};

export default CustomVideoTag;
