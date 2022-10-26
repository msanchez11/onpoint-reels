import ReactModal from "react-modal";
import closeIcon from "../../assets/close.svg";
import stylesCfg from "../../utils/modalFutureFeat.json";
import "./styles.css";

const DialogFutureFeature = (props) => {
  const { openDialog, toggleOpenDialog } = props;
  return (
    <ReactModal
      style={stylesCfg}
      isOpen={openDialog}
      id={"dialog-coming-soon"}
      overlayClassName={"dialog-cooming-soon-overlay"}
      className={"dialog-cooming-soon-content"}
      parentSelector={() => document.querySelector("#stories-app")}
      ariaHideApp={false}
    >
      <div className="close-container">
        <img src={closeIcon} alt="X" onClick={toggleOpenDialog} />
      </div>
      <div className="coming-soon">
        <img src={closeIcon} alt="X" onClick={toggleOpenDialog} />
        <h2>Coming soon!</h2>
        <p>We are working on a new way to discover and experience content. </p>
      </div>
      <div className="last-div"></div>
    </ReactModal>
  );
};

export default DialogFutureFeature;
