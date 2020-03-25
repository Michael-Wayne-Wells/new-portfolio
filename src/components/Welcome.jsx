import React from "react";
import "../fonts.css";

function Welcome() {
  return (
    <div className="welcome">
      <style jsx>{`
        .profileImg {
          width: 300px;
          height: auto;
        }
        Goo {
          position: absolute;
        }
        .welcome {
          margin: 0 auto;
          width: 400px;
        }
        .welcomeText {
          font-family: "Ubuntu Mono", monospace;
          font-size: 75px;
          z-index: 2;
        }
      `}</style>
      <h1 className="welcomeText">Welcome!</h1>
      <img
        className="profileImg"
        src="profile.png"
        alt="michael wells profile illustration"
      />
    </div>
  );
}

export default Welcome;
