import React from "react";

const DesktopVideo = ({ url }) => {
  const playVideo = (e) => e.target.play();
  const stopVideo = (e) => e.target.pause();

  return (
    <>
      <video
        className="boomerang-video"
        onMouseOver={playVideo}
        onMouseOut={stopVideo}
        muted
        loop
        src={url}
        type="video/mp4"
      ></video>
      ;
    </>
  );
};

export default DesktopVideo;
