import React from 'react';
import './About.css'; // Import the CSS for styling

const About = () => {
  return (
    <div className='about'>
    <div className="about-container">
      <div className="about-text">
        <h2>About Us</h2>
        <div className="title-underline">
          <span></span>
        </div>
        <p>
          Welcome to our company! We strive to provide the best services to our
          clients and ensure they have the best experience possible. Our team
          is dedicated to excellence and always goes the extra mile to meet our
          customers' needs. Thank you for being a part of our journey.
        </p>
      </div>
      <div className="about-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/example-video-id"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default About;
