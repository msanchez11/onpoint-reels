import React from "react";

const DesktopVideo = ({ url, cover }) => {
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
        poster={cover}
        src={url}
        type="video/mp4"
      />
    </>
  );
};

export default DesktopVideo;
