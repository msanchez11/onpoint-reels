import "./styles.css";

const LoginIncentive = () => {
  return (
    <div className="incentive-wrapper">
      <h2>Continue watching?</h2>

      <div className="btns-container">
        <button className="sign-in-google">
          <img src="" alt="Google" />
          Sign in with Google
        </button>
        <button className="sign-in-facebook">
          <img src="" alt="Facebook" />
          Sign in with Facebook
        </button>
        <div className="sign-in-separator">
          <div className="separator-line"></div>
          <span>or</span>
          <div className="separator-line"></div>
        </div>
        <button className="log-in">Log in</button>
      </div>

      <div className="sign-container">
        <p>Don't have an account?</p>
        <span>Sign up</span>
      </div>
    </div>
  );
};

export default LoginIncentive;
