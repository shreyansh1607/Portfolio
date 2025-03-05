import React from 'react';
import work1 from '../assets/work-1.png';
import work2 from '../assets/work-2.png';
import work3 from '../assets/work-3.png';

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <div className="sub-title">My Work</div>
        <div className="work-list">
          <div className="work">
            <img src={work1} alt="work1" />
            <div className="layer">
              <h3>AI Chef</h3>
              <p> A recipe generator using Mistral AI </p>
              <a href="#"><i className="fa-solid fa-up-right-from-square" style={{color: '#242424'}}></i></a>
            </div>
          </div>
          <div className="work">
            <img src={work2} alt="work2" />
            <div className="layer">
              <h3>PinShare</h3>
              <p>A map based marker sharing app</p>
              <a href="#"><i className="fa-solid fa-up-right-from-square" style={{color: '#242424'}}></i></a>
            </div>
          </div>
          <div className="work">
            <img src={work3} alt="work3" />
            <div className="layer">
              <h3>SocialSite</h3>
              <p>A social media website</p>
              <a href="#"><i className="fa-solid fa-up-right-from-square" style={{color: '#242424'}}></i></a>
            </div>
          </div>
        </div>
        <a href="#" className="btn">See More</a>
      </div>
    </div>
  );
};

export default Portfolio;
