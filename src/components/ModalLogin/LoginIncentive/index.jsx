import { useState } from "react";
import logoFace from "../../../assets/facebook-logo.png";
import logoGoogle from "../../../assets/google-logo.png";
import DialogFutureFeature from "../../DialogFutureFeature";
import "./styles.css";

const LoginIncentive = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const toggleDialogValue = () => setIsDialogOpen(!isDialogOpen);

  return (
    <div className="incentive-wrapper">
      <h2>Continue watching?</h2>

      <div className="btns-container">
        <button className="sign-in-google" onClick={toggleDialogValue}>
          <img src={logoGoogle} alt="Google" />
          Sign in with Google
        </button>
        <button className="sign-in-facebook" onClick={toggleDialogValue}>
          <img src={logoFace} alt="Facebook" />
          Sign in with Facebook
        </button>
        <div className="sign-in-separator">
          <div className="separator-line"></div>
          <span>or</span>
          <div className="separator-line"></div>
        </div>
        <button className="log-in" onClick={toggleDialogValue}>
          Log in
        </button>
      </div>

      <div className="sign-container">
        <p>Don't have an account?</p>
        <span onClick={toggleDialogValue}>Sign up</span>
      </div>
      <DialogFutureFeature
        openDialog={isDialogOpen}
        toggleOpenDialog={toggleDialogValue}
      />
    </div>
  );
};

export default LoginIncentive;
