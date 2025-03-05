import React from 'react';

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div>
            <i className="fa-brands fa-react"></i>
            <h2>Frontend Development</h2>
            <p>HTML, CSS, JavaScript, React.js</p>
            <a href="#">learn more</a>
          </div>
          <div>
            <i className="fa-solid fa-server"></i>
            <h2>Backend & APIs</h2>
            <p>Node.js, Express.js, MongoDB, SQL</p>
            <a href="#">learn more</a>
          </div>
          <div>
            <i className="fa-brands fa-docker"></i>
            <h2>DevOps</h2>
            <p>Docker, Kubernetes, Jenkins, Git, GitHub</p>
            <a href="#">learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 