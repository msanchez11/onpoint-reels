import ReactModal from "react-modal";
import closeIcon from "../../assets/close.svg";
import logoVelong from "../../assets/velong_logo.svg";
import stylesCfg from "../../utils/modalReelsCfg.json";
import ReelsCarousel from "../ReelsCarousel";
import "./styles.css";

const ModalReels = (props) => {
  const videoIdSet = new Set();
  const {
    isOpen,
    changeOpenReels,
    changeOpenLogin,
    openInSlideX,
    mustPlayVideo,
    setMustPlayVideo,
  } = props;

  const triggerModalLoginAndPauseVideo = () => {
    setMustPlayVideo(true);
    changeOpenLogin();
  };

  return (
    <ReactModal
      style={stylesCfg}
      isOpen={isOpen}
      id={"modal-reels"}
      overlayClassName={"reels-modal-overlay"}
      className={"reels-modal-content"}
      parentSelector={() => document.querySelector("#stories-app")}
      ariaHideApp={false}
      onRequestClose={changeOpenReels}
    >
      <div className="close-container">
        <img
          src={logoVelong}
          alt="Velong"
          className="logo-velong"
          onClick={triggerModalLoginAndPauseVideo}
        />
        <img
          src={closeIcon}
          alt="Close"
          onClick={changeOpenReels}
          className="x-icon"
        />
      </div>
      <div className="carousel-container">
        <ReelsCarousel
          changeOpenLogin={changeOpenLogin}
          openInSlideX={openInSlideX}
          videoIdSet={videoIdSet}
          mustPlayVideo={mustPlayVideo}
          setMustPlayVideo={setMustPlayVideo}
          changeOpenReels={changeOpenReels}
        />
      </div>
    </ReactModal>
  );
};

export default ModalReels;
