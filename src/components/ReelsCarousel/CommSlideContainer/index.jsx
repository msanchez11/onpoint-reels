import React, { useState, useEffect } from "react";
import ContentImg from "../../../assets/adv/com_image.png";
import "./styles.css";

const CommSlideContainer = ({ showCommercial, setShowCommercial }) => {
  const [timeLeft, setTimeLeft] = useState(10.9);

  useEffect(() => {
    timeLeft <= 0 && setShowCommercial(false);
    timeLeft > 0 && setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
  }, [timeLeft, setShowCommercial]);

  return (
    <>
      {showCommercial && (
        <div className="comm-wrapper">
          <div className="comm-progress-bar">
            <div className="comm-progress" />
          </div>
          <div className="comm-head">
            <p>Advertistment </p>
            <span>0:{Math.floor(timeLeft)}s</span>
          </div>
          <img src={ContentImg} alt="Commercial." />
        </div>
      )}
    </>
  );
};

export default CommSlideContainer;
