import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              MEET
              <br />
              <span>KHURANA</span>
            </h1>
          </div>
<div className="landing-info">
            <h3>Backend Developer &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Python</div>
              <div className="landing-h2-2">Node.js</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Flask</div>
              <div className="landing-h2-info-1">C++</div>
            </h2>
            <h2>
              <div className="landing-h2-info">MongoDB</div>
              <div className="landing-h2-info-1">Docker</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
