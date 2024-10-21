import React, { useState } from 'react';
import './VideoGallery.css';

const VideoGallery = () => {
  // Array of YouTube video IDs
  const [videos] = useState([
    'dQw4w9WgXcQ', // Example video IDs from YouTube
    'eYq7WapuDLU',
    'J---aiyznGQ',
    'hY7m5jjJ9mM',
    'tAGnKpE4NCI',
    '9bZkp7q19f0',
    'JGwWNGJdvx8',
    '3JZ_D3ELwOQ',
  ]);

  // Display only 6 videos initially
  const [visibleVideos, setVisibleVideos] = useState(6);

  // Function to handle 'View More'
  const handleViewMore = () => {
    setVisibleVideos((prevVisibleVideos) => Math.min(prevVisibleVideos + 3, videos.length)); // Show 3 more on each click
  };

  return (
    <div className="video-gallery-container">
      {/* Add Title */}
      <h2 className="video-gallery-title">Video Gallery</h2>
      <div className="title-underline">
          <span></span>
       </div>
      
      <div className="video-gallery-grid">
        {videos.slice(0, visibleVideos).map((videoId, index) => (
          <div key={index} className="video-gallery-item">
            <iframe
              width="100%"
              height="auto"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* Always display View More button */}
      <button
        className="view-more-btn"
        onClick={handleViewMore}
        disabled={visibleVideos >= videos.length} // Disable the button if all videos are shown
      >
        {visibleVideos >= videos.length ? 'No More Videos' : 'View More'}
      </button>
    </div>
  );
};

export default VideoGallery;
