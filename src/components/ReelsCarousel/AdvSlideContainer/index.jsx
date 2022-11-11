import React from "react";
import ContentImg from "../../../assets/adv/com_image.png";
import "./styles.css";

const AdvSlideContainer = (showCommercial) => {
  return (
    <>
      {showCommercial ? (
        <div className="adv-wrapper">
          <div className="adv-progress" />
          <div className="adv-head">
            <p>Advertistment </p>
            <span>0:10 s</span>
          </div>
          <img src={ContentImg} alt="Commercial." />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AdvSlideContainer;
