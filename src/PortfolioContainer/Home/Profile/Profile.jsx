import React from "react";
import Typical from "react-typical";
import './Profile.css'
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              Hello I'm <span className="highlighted-text">Yash</span>
            </span>
          </div>
          <div className="profile-details-role">
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Enthusiastic Learner",
                  2000,
                  "Full Stack Developer 😎",
                  2000,
                  "Problem Solver",
                  2000,
                  "MERN Stack developer",
                  2000,
                ]}
              ></Typical>
            </h1>
            <span className="profile-role-tagline">
            A problem solver ready to face competitive and challenging problems, looking forward to learn new technologies.
            </span>
          </div>
          <div className="profile-options">
            <a href="#connect" >
              <button className="btn primary-btn">Hire Me</button>
            </a>
            <a href="Resume.pdf" download="Yash Khatri.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
