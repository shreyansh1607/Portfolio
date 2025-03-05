import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../assets/logo1.png';
import headerImg from '../assets/header.png';

const Header = () => {
  const [activeSection, setActiveSection] = useState('header');
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['header', 'about', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      let currentSection = 'header'; // Default section

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;
          const elementBottom = elementTop + elementHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'header', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div id="header">
      <div className="container">
        <nav className="fixed-nav">
          <img src={logo} alt="logo" className="logo" />
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <AnchorLink
                  href={`#${item.id}`}
                  className={`${activeSection === item.id ? 'active' : ''} ${hoveredSection === item.id ? 'hover' : ''}`}
                  onMouseEnter={() => setHoveredSection(item.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                  offset={() => 60}
                >
                  {item.label}
                </AnchorLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-content">
          <div className="header-text">
            <p>FULL STACK DEVELOPER</p>
            <h1>
              Hi, I'm <span>Shreyansh</span>
              <br />Yadav From India
            </h1>
          </div>
          <div className="header-img">
            <img src={headerImg} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
