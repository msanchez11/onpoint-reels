//import data from "../../db/database.json";
import ReactModal from "react-modal";
import ShortsCarousel from "../ShortsCarousel";
import closeIcon from "../../assets/close.svg";
import stylesCfg from "../../configs/modalStylesConfig.json";
import "./styles.css";

const ReelsModal = (props) => {
  const { isOpen, changeOpenValue } = props;
  return (
    <div className="modal-wrapper">
      <ReactModal
        style={stylesCfg}
        isOpen={isOpen}
        id={"moda-reels"}
        overlayClassName={"ReactModal__Overlay"}
        className={"ReactModal__Content"}
        parentSelector={() => document.querySelector("#stories-app")}
        ariaHideApp={false}
        shouldFocusAfterRender={true}
        shouldReturnFocusAfterClose={false}
      >
        <div className="close-container">
          <img src={closeIcon} alt="X" onClick={changeOpenValue} />
        </div>
        <ShortsCarousel />
      </ReactModal>
    </div>
  );
};

export default ReelsModal;
