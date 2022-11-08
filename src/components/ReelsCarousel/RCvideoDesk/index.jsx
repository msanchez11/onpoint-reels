import React from "react";

const RCvideoDesk = ({ url }) => {
  const playVideo = (e) => e.target.play();

  return (
    <>
      <video
        className="boomerang-video"
        onFocus={playVideo}
        src={url}
        type="video/mp4"
      />
    </>
  );
};

export default RCvideoDesk;
