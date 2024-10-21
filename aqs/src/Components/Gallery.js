import React, { useState } from 'react';
import s1 from '../images/s1.jpg';  // Correct import
import './Gallery.css';

const Gallery = () => {
  // Array of image URLs (add as many as you like)
  const [images] = useState([
    s1,  // Reference the imported image
    s1,
    s1,
    s1,
    s1,
    s1,
    s1,
    s1,
    s1
  ]);

  // Display only 8 initially
  const [visibleImages, setVisibleImages] = useState(8);

  // Function to handle 'View More'
  const handleViewMore = () => {
    setVisibleImages((prevVisibleImages) => Math.min(prevVisibleImages + 4, images.length)); // Show 4 more on each click
  };

  return (
    <div className="gallery-container">
      {/* Add Title */}
      <h2 className="gallery-title">Gallery Section</h2>
      <div className="title-underline">
          <span></span>
      </div>
      
      <div className="gallery-grid">
        {images.slice(0, visibleImages).map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Always display View More button */}
      <button
        className="view-more-btn"
        onClick={handleViewMore}
        disabled={visibleImages >= images.length} // Disable the button if all images are shown
      >
        {visibleImages >= images.length ? 'No More Images' : 'View More'}
      </button>
    </div>
  );
};

export default Gallery;
