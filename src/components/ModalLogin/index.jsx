import { useState } from "react";
import ReactModal from "react-modal";
import velongLogo from "../../assets/velong_logo.svg";
import closeIcon from "../../assets/close.svg";
import rocket from "../../assets/rocket.png";
import stylesCfg from "../../utils/modalLoginCfg.json";
import DialogFutureFeature from "./DialogFutureFeature";
import LoginIncentive from "./LoginIncentive";
import "./styles.css";

const ModalLogin = (props) => {
  const { isOpen, changeOpenLogin } = props;
  const [showComingSoon, setShowComingSoon] = useState(false);
  const toggleComingSoon = () => setShowComingSoon(true);
  const onClose = () => {
    setShowComingSoon(false);
    changeOpenLogin();
  };

  return (
    <ReactModal
      style={stylesCfg}
      isOpen={isOpen}
      id={"modal-login"}
      overlayClassName={"login-modal-overlay"}
      className={"login-modal-content"}
      parentSelector={() => document.querySelector("#stories-app")}
      ariaHideApp={false}
    >
      <div className="close-container">
        <img src={velongLogo} alt="VelongLogo" className="velong-logo" />
        <img src={closeIcon} alt="X" className="x-logo" onClick={onClose} />
      </div>

      {!showComingSoon ? (
        <LoginIncentive toggleComingSoon={toggleComingSoon} />
      ) : (
        <DialogFutureFeature />
      )}

      {!showComingSoon ? (
        <div className="last-div-login" />
      ) : (
        <div className="last-div-coming-soon">
          <img src={rocket} alt="Rocket" className="rocket-img" />
        </div>
      )}
    </ReactModal>
  );
};

export default ModalLogin;
