import React, { useState } from "react";
import Mute from "../../../assets/muted.png";
import Unmute from "../../../assets/unmuted.svg";
import "./styles.css";

const RCvideoDesk = ({
  url,
  id,
  videoDuration,
  isPlaying,
  togglePlayingVideo,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const toggleMute = () => setIsMuted(!isMuted);

  const playOrPauseVideo = () => {
    if (isPlaying) {
      togglePlayingVideo(videoDuration, id);
      document
        .getElementsByClassName("swiper-slide-active")[2]
        .getElementsByClassName("reels-video-wrapper")[0]
        .getElementsByTagName("video")[0]
        .play();
    } else {
      document
        .getElementsByClassName("swiper-slide-active")[2]
        .getElementsByClassName("reels-video-wrapper")[0]
        .getElementsByTagName("video")[0]
        .pause();
      togglePlayingVideo(videoDuration, id);
    }
  };

  // const playPauseVideo = () => {
  //   if (!isPlaying) {
  //     document
  //       .getElementsByClassName("swiper-slide-active")[2]
  //       .getElementsByClassName("reels-video-wrapper")[0]
  //       .getElementsByTagName("video")[0]
  //       .play();
  //     setIsPlaying(true);
  //   } else {
  //     document
  //       .getElementsByClassName("swiper-slide-active")[2]
  //       .getElementsByClassName("reels-video-wrapper")[0]
  //       .getElementsByTagName("video")[0]
  //       .pause();
  //     setIsPlaying(false);
  //   }
  // };

  return (
    <>
      {isMuted ? (
        <img
          src={Mute}
          alt="UnmuteVideo"
          onClick={toggleMute}
          className="mute-unmute-icon-desk"
        />
      ) : (
        <img
          src={Unmute}
          alt="MuteVideo"
          onClick={toggleMute}
          className="mute-unmute-icon-desk"
        />
      )}
      <video
        id={`desktop-video-${id}`}
        className="modal-reels-video-desktop"
        playsInline={true}
        muted={isMuted}
        src={url}
        //autoPlay={CHECK IF VIDEO ID = CURRENT SLIDE ID = true sino false}
        // onClick={playPauseVideo}
        onClick={playOrPauseVideo}
        type="video/mp4"
      />
    </>
  );
};

export default RCvideoDesk;
