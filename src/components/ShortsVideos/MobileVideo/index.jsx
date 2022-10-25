import React from "react";

const MobileVideo = ({ url }) => {
  return (
    <>
      <video
        className="boomerang-video"
        autoPlay
        muted
        loop
        src={url}
        type="video/mp4"
      ></video>
      ;
    </>
  );
};

export default MobileVideo;
