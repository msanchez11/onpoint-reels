import React from "react";
import CustomVideoTag from "../CustomVideoTag";
import Likes from "../../../assets/likes.svg";
import Comments from "../../../assets/comment.svg";
import Share from "../../../assets/share.svg";
import VelongLogo from "../../../assets/velong_logo.svg";
import CloseLogo from "../../../assets/close.svg";
import Mute from "../../../assets/muted.png";
import Unmute from "../../../assets/unmuted.svg";
import "../styles-mobile.css";
import "../styles.css";

import CommSlideContainer from "../CommSlideContainer";

const VideoSlideContainer = (props) => {
  const toggleMute = () => setIsMuted(!isMuted);
  const {
    item,
    changeOpenLogin,
    showingComercial,
    setShowingComercial,
    isMuted,
    setIsMuted,
    mustPlayVideo,
    setMustPlayVideo,
    changeOpenReels,
  } = props;
  const stopVideoAndOpenLoginModal = () => {
    setMustPlayVideo(true);
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
        <CustomVideoTag
          videoDuration={item.videoDuration}
          mustPlay={!mustPlayVideo && !showingComercial}
          id={item.id}
          url={item.video}
          posterVid={item.cover}
          isMuted={isMuted}
          setIsMuted={setIsMuted}
          changeOpenLogin={changeOpenLogin}
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
        <img
          src={VelongLogo}
          alt="VelongLogo"
          className="velongLogo"
          onClick={stopVideoAndOpenLoginModal}
        />
        <img
          onClick={changeOpenReels}
          className="slide-close-icon"
          src={CloseLogo}
          alt="Close"
        />
      </div>
    </>
  );
};

export default VideoSlideContainer;
