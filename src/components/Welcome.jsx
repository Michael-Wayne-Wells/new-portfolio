import React from "react";
import Goo from "./Goo";
import "../fonts.css";

function Welcome() {
  return (
    <div className="welcome">
      <Goo />
      <style jsx>{`
        .profileImg {
          width: 300px;
          height: auto;
        }
        .welcome {
          width: 70%;
          margin-left: 15%;
          margin-right: 15%;
        }
        .welcomeText {
          font-family: "Ubuntu Mono", monospace;
          font-size: 75px;
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
