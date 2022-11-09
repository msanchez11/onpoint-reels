import React, { useState } from "react";
import Mute from "../../../assets/muted.png";
import Unmute from "../../../assets/unmuted.svg";
import "./styles.css";

const RCvideoDesk = ({ url, id }) => {
  const [isMuted, setIsMuted] = useState(false);
  const toggleMute = () => setIsMuted(!isMuted);
  const [isPlaying, setIsPlaying] = useState(false);
  //const playVideo = (e) => e.target.play();
  //const pauseVideo = (e) => e.target.pause();

  const playPauseVideo = () => {
    if (!isPlaying) {
      document
        .getElementsByClassName("swiper-slide-active")[2]
        .getElementsByClassName("reels-video-wrapper")[0]
        .getElementsByTagName("video")[0]
        .play();
      setIsPlaying(true);
    } else {
      document
        .getElementsByClassName("swiper-slide-active")[2]
        .getElementsByClassName("reels-video-wrapper")[0]
        .getElementsByTagName("video")[0]
        .pause();
      setIsPlaying(false);
    }
  };

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
      <video
        id={`desktop-video-${id}`}
        className="modal-reels-video-desktop"
        playsInline={true}
        muted={isMuted}
        src={url}
        onClick={playPauseVideo}
        type="video/mp4"
      />
    </>
  );
};

export default RCvideoDesk;
