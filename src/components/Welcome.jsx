import React from "react";
import Goo from "./Goo";
function Welcome() {
  return (
    <div className="welcome">
      <Goo />
      <style jsx>{`
        .profileImg {
          width: 300px;
          height: auto;
          margin: 0 auto;
        }
      `}</style>
      <h1>Welcome!</h1>
      <img
        className="profileImg"
        src="profile.png"
        alt="michael wells profile illustration"
      />
    </div>
  );
}

export default Welcome;
