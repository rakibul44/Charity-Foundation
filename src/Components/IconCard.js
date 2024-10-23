import React from 'react';
import './IconCard.css';

const IconCard = ({ imageSrc, title, backgroundColor, borderColor }) => {
  return (
    <div className="icon-card" style={{ backgroundColor: backgroundColor, borderColor: borderColor }}>
      <div className="icon-wrapper">
        <img src={imageSrc} alt={title} className="icon-image" />
      </div>
      <h3 className="icon-title">{title}</h3>
    </div>
  );
};

export default IconCard;
