import React, { useState } from "react";
import userImage from "../assets/shreyansh3.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={userImage} alt="user" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              I am a B.Tech Computer Science Engineering student with a strong
              passion for software development, data analytics, and machine
              learning. I have hands-on experience with Python, Node.js,
              Express.js, and frontend technologies, and I am constantly
              exploring new tools and frameworks.
            </p>

            <div className="tab-titles">
              <p
                className={`tab-links ${
                  activeTab === "skills" ? "active-link" : ""
                }`}
                onClick={() => openTab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${
                  activeTab === "experience" ? "active-link" : ""
                }`}
                onClick={() => openTab("experience")}
              >
                Experience
              </p>
              <p
                className={`tab-links ${
                  activeTab === "education" ? "active-link" : ""
                }`}
                onClick={() => openTab("education")}
              >
                Education
              </p>
            </div>

            <div
              className={`tab-contents ${
                activeTab === "skills" ? "active-tab" : ""
              }`}
              id="skills"
            >
              <ul>
                <li>
                  <span>Web Development</span>
                  <br />
                  HTML, CSS, React.js, Node.js, Express.js
                </li>
                <li>
                  <span>Backend & APIs</span>
                  <br />
                  REST APIs, Authentication, CRUD Operations
                </li>
                <li>
                  <span>Databases</span>
                  <br />
                  MongoDB, SQL 
                </li>
                <li>
                  <span>Version Contro</span>
                  <br />
                  Git, GitHub
                </li>
              </ul>
            </div>

            <div
              className={`tab-contents ${
                activeTab === "experience" ? "active-tab" : ""
              }`}
              id="experience"
            >
              <ul>
                <li>
                  <span>No Formal Experience</span>
                  {/* <br />
                  UI/UX Design Training at ET Institute */}
                </li>
                {/* <li>
                  <span>2019 - 2021</span>
                  <br />
                  Team lead at StartApp LLC.
                </li>
                <li>
                  <span>2017 - 2019</span>
                  <br />
                  UI/UX Design Executive at Coin Digital Ltd.
                </li> */}
              </ul>
            </div>

            <div
              className={`tab-contents ${
                activeTab === "education" ? "active-tab" : ""
              }`}
              id="education"
            >
              <ul>
                <li>
                  <span>B.Tech Computer Science Engineering</span>
                  <br />
                  Ajay Kumar Garg Engineering College, Ghaziabad
                </li>
                {/* <li>
                  <span>Web Development</span>
                  <br />
                  Web App Development
                </li>
                <li>
                  <span>App Development</span>
                  <br />
                  Building Android/iOS Apps
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
