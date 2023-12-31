import React, { useState } from "react";
import "./LoginPage.css";
import logo from "@assets/Netflix_logo.png";
import poster from "@assets/Netflix_poster.jpg";
import SignInScreen from "@views/SignInScreen/SignInScreen";

function LoginPage() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div
      className="loginScreen"
      style={{
        background: `url(${poster}) center no-repeat fixed`,
        backgroundSize: `cover`,
      }}
    >
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src={logo} alt="" />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
        <div className="loginScreen__gradient" />

        <div className="loginScreen__body">
          {signIn ? (
            <SignInScreen />
          ) : (
            <>
              <h1>Unlimited films, TV programs and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>

              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen__getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
