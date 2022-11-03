import logoFace from "../../../assets/facebook-logo.png";
import logoGoogle from "../../../assets/google-logo.png";
import "./styles.css";

const LoginIncentive = (props) => {
  const { toggleComingSoon } = props;
  return (
    <div className="incentive-wrapper">
      <h2>Continue watching?</h2>

      <div className="btns-container">
        <button className="sign-in-google" onClick={toggleComingSoon}>
          <img src={logoGoogle} alt="Google" />
          Sign in with Google
        </button>
        <button className="sign-in-facebook" onClick={toggleComingSoon}>
          <img src={logoFace} alt="Facebook" />
          Sign in with Facebook
        </button>
        <div className="sign-in-separator">
          <div className="separator-line"></div>
          <span>or</span>
          <div className="separator-line"></div>
        </div>
        <button className="log-in" onClick={toggleComingSoon}>
          Log in
        </button>
      </div>

      <div className="sign-container">
        <p>Don't have an account?</p>
        <span onClick={toggleComingSoon}>Sign up</span>
      </div>
    </div>
  );
};

export default LoginIncentive;
