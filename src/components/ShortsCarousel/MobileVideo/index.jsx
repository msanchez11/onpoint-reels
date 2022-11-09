import React from "react";

const MobileVideo = ({ url }) => {
  return (
    <>
      <video
        className="boomerang-video"
        autoPlay
        muted
        playsInline
        loop
        src={url}
        type="video/mp4"
      />
    </>
  );
};

export default MobileVideo;
