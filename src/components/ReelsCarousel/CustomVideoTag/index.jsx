import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Mute from "../../../assets/muted.png";
import Unmute from "../../../assets/unmuted.svg";
import useWidthDetect from "../../../hooks/useWidthDetect";
import "./styles.css";

const CustomVideoTag = ({
  url,
  id,
  videoDuration,
  isPlaying,
  togglePlayingVideoProgressBar,
}) => {
  const videoRef = useRef(null);
  const { isDesktop } = useWidthDetect();
  const [isMuted, setIsMuted] = useState(false);
  const toggleMute = () => setIsMuted(!isMuted);

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
          src={url}
          type="video/mp4"
        />
      ) : (
        <video
          className="modal-reels-video-mobile"
          ref={videoRef}
          id={`mobile-video-${id}`}
          playsInline={true}
          muted={isMuted}
          src={url}
          type="video/mp4"
        />
      )}
    </>
  );
};

export default CustomVideoTag;
