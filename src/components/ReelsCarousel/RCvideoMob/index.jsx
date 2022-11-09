import React, { useState } from "react";
import Mute from "../../../assets/muted.png";
import Unmute from "../../../assets/unmuted.svg";
import "./styles.css";

const RCvideoMob = ({ url, id }) => {
  const [isMuted, setIsMuted] = useState(false);
  const toggleMute = () => setIsMuted(!isMuted);
  const playVideo = (e) => e.target.play();
  const pauseVideo = (e) => e.target.pause();

  return (
    <>
      {isMuted ? (
        <img
          src={Mute}
          alt="UnmuteVideo"
          onClick={toggleMute}
          className="mute-unmute-icon-mob"
        />
      ) : (
        <img
          src={Unmute}
          alt="MuteVideo"
          onClick={toggleMute}
          className="mute-unmute-icon-mob"
        />
      )}
      <video
        id={id}
        className="modal-reels-video-mobile"
        playsInline={true}
        muted={isMuted}
        src={url}
        type="video/mp4"
        onFocus={playVideo}
        onBlur={pauseVideo}
        onPlay={() => alert("Video " + url + "reproducido.")}
        onPause={() => alert("Video " + url + "Pausado.")}
      />
    </>
  );
};

export default RCvideoMob;
