import ReactModal from "react-modal";
import closeIcon from "../../assets/close.svg";
import stylesCfg from "../../utils/modalReelsCfg.json";
import ReelsCarousel from "../ReelsCarousel";
import "./styles.css";

const ModalReels = (props) => {
  const { isOpen, changeOpenReels, changeOpenLogin } = props;
  return (
    <ReactModal
      style={stylesCfg}
      isOpen={isOpen}
      id={"modal-reels"}
      overlayClassName={"reels-modal-overlay"}
      className={"reels-modal-content"}
      parentSelector={() => document.querySelector("#stories-app")}
      ariaHideApp={false}
      shouldReturnFocusAfterClose={false}
      onRequestClose={changeOpenReels}
    >
      <div className="close-container">
        <img src={closeIcon} alt="X" onClick={changeOpenReels} />
      </div>
      <div className="carousel-container">
        <ReelsCarousel changeOpenLogin={changeOpenLogin} />
      </div>
    </ReactModal>
  );
};

export default ModalReels;
