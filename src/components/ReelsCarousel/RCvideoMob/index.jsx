import React, { useState } from "react";
import "./styles.css";

const RCvideoMob = ({ url, isMuted }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const pauseOrPlay = (e) => {
    if (isPlaying) {
      setIsPlaying(false);
      e.target.pause();
    } else {
      setIsPlaying(true);
      e.target.play();
    }
  };

  return (
    <>
      <video
        className="modal-reels-video"
        onClick={pauseOrPlay}
        autoPlay
        muted={isMuted}
        loop
        src={url}
        type="video/mp4"
      />
    </>
  );
};

export default RCvideoMob;
