import React from 'react';
import logo from '../images/logo.png';
import mosque from '../images/mosque.jpg';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Logo & Description */}
        <div className="footer-left">
          <img src={ logo } alt="Logo" className="footer-logo" />
          <p className="footer-description">
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. 
            Aenean sollicitudin, lorem quis bibendum auctor.
          </p>
          <ul className="footer-contact">
            <li><i className="fas fa-map-marker-alt"></i> 209, Building - Avenue-02, United States</li>
            <li><i className="fas fa-envelope"></i> info@salat.com</li>
            <li><i className="fas fa-phone"></i> +1 315 - 000 - 6565</li>
          </ul>
        </div>

        {/* Middle Section: Latest News */}
        <div className="footer-news">
          <h3>Latest News</h3>
          <div className="news-item">
            <img src={ mosque } alt="News 1" />
            <div className="news-details">
              <p>ISLAMIC CENTER YOUTH PARTICIPATE</p>
              <span><i className="fas fa-calendar-alt"></i> 22 Aug, 2021</span>
            </div>
          </div>
          <div className="news-item">
            <img src={mosque} alt="News 2" />
            <div className="news-details">
              <p>ISLAMIC CENTER YOUTH PARTICIPATE</p>
              <span><i className="fas fa-calendar-alt"></i> 22 Aug, 2021</span>
            </div>
          </div>
          <div className="news-item">
            <img src={mosque} alt="News 3" />
            <div className="news-details">
              <p>ISLAMIC CENTER YOUTH PARTICIPATE</p>
              <span><i className="fas fa-calendar-alt"></i> 22 Aug, 2021</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024. All rights reserved. Azmain QS Fundation</p>
        <div className="footer-social">
        <button aria-label="Facebook" onClick={() => window.location.href = 'https://facebook.com'}>
         <i className="fab fa-facebook-f"></i>
        </button>
         <button aria-label="Twitter" onClick={() => window.location.href = 'https://twitter.com'}>
         <i className="fab fa-twitter"></i>
        </button>
         <button aria-label="Google Plus" onClick={() => window.location.href = 'https://google.com'}>
          <i className="fab fa-google-plus-g"></i>
        </button>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
