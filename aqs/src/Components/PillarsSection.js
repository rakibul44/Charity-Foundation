import React from "react";
import './PillarsSection.css';
import './IconCard.js';
// import quran from '../images/quran';

const PillarsSection = () => {
  return (
    <div className="pillars-section">
      {/* Left side - Quote Section */}
      <div className="left-section">
        <div className="quote-container">
        {/* <div className="quote-icon">“</div> */}
          <p className="quote-text"> <b className="quote-icon">"</b>
            The saying fruitful were let for him all fruitful morning. Second
            may waters set was were there upon his he winged won’t itself there
            very first under seasons.
          </p>
          <p className="quote-author">Muhammad Al-Bukhari</p>
          <p className="quote-details">(d. 256 AH/870 AD)</p>
        </div>
      </div>

      {/* Right side - Pillars of Islam Section */}
      <div className="right-section">
        <h2 className="section-title">The Pillars of Islam</h2>
        <p className="section-description">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <div className="pillars">
          <div className="pillar-item">
            <div className="pillar-icon">📖</div> {/* Placeholder for icon */}
            <h3 className="pillar-title">Shahadah</h3>
            <p className="pillar-subtitle">Faith</p>
          </div>
          <div className="pillar-item">
            <div className="pillar-icon">🕌</div>
            <h3 className="pillar-title">Salah</h3>
            <p className="pillar-subtitle">Prayer</p>
          </div>
          <div className="pillar-item">
            <div className="pillar-icon">🌙</div>
            <h3 className="pillar-title">Sawm</h3>
            <p className="pillar-subtitle">Fasting</p>
          </div>
          <div className="pillar-item">
            <div className="pillar-icon">💰</div>
            <h3 className="pillar-title">Zakat</h3>
            <p className="pillar-subtitle">Almsgiving</p>
          </div>
          <div className="pillar-item">
            <div className="pillar-icon">🕋</div>
            <h3 className="pillar-title">Hajj</h3>
            <p className="pillar-subtitle">Pilgrimage</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PillarsSection;
