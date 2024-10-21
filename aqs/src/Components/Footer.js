import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Logo & Description */}
        <div className="footer-left">
          <img src="/path-to-your-logo/logo.png" alt="Logo" className="footer-logo" />
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
            <img src="/path-to-news-image/news1.jpg" alt="News 1" />
            <div className="news-details">
              <p>ISLAMIC CENTER YOUTH PARTICIPATE</p>
              <span><i className="fas fa-calendar-alt"></i> 22 Aug, 2021</span>
            </div>
          </div>
          <div className="news-item">
            <img src="/path-to-news-image/news2.jpg" alt="News 2" />
            <div className="news-details">
              <p>ISLAMIC CENTER YOUTH PARTICIPATE</p>
              <span><i className="fas fa-calendar-alt"></i> 22 Aug, 2021</span>
            </div>
          </div>
          <div className="news-item">
            <img src="/path-to-news-image/news3.jpg" alt="News 3" />
            <div className="news-details">
              <p>ISLAMIC CENTER YOUTH PARTICIPATE</p>
              <span><i className="fas fa-calendar-alt"></i> 22 Aug, 2021</span>
            </div>
          </div>
        </div>

        {/* Right Section: Newsletter */}
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Lorem ipsum dolor sit amet, tetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim.</p>
          <form className="newsletter-form">
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email here" required />
            <button type="submit"><i className="fas fa-paper-plane"></i></button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2021. All rights reserved. Salat by Themelooper</p>
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-google-plus-g"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
