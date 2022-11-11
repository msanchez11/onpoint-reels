import React, { useState, useEffect } from "react";
import ContentImg from "../../../assets/adv/com_image.png";
import "./styles.css";

const CommSlideContainer = ({ setShowingComercial }) => {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    timeLeft > 0 && setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
  }, [timeLeft]);

  useEffect(() => {
    setTimeout(() => setShowingComercial(false), 10000);
  }, []);

  return (
    <div className="comm-wrapper">
      <div className="comm-progress-bar">
        <div className="comm-progress" />
      </div>
      <div className="comm-head">
        <p>Advertistment </p>
        <span>0:{timeLeft}s</span>
      </div>
      <img src={ContentImg} alt="Commercial." />
    </div>
  );
};

export default CommSlideContainer;
