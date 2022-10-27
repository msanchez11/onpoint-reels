import ReactModal from "react-modal";
import closeIcon from "../../assets/close.svg";
import stylesCfg from "../../utils/modalLoginCfg.json";
import LoginIncentive from "./LoginIncentive";
import "./styles.css";

const ModalLogin = (props) => {
  const { isOpen, changeOpenLogin } = props;
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
        <img src={closeIcon} alt="X" onClick={changeOpenLogin} />
      </div>
      <LoginIncentive />
    </ReactModal>
  );
};

export default ModalLogin;
