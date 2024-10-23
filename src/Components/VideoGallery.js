import React, { useState } from 'react';
import './VideoGallery.css';

const VideoGallery = () => {
  // Array of YouTube video IDs
  const [videos] = useState([
    'JnX7Oc8LqD8?si=7f4ZzS3qH-JhXFs0', // Example video IDs from YouTube
    '3HnCS82X8qk?si=0nS5qO6qO8NO_l4h',
    'QpindsONQe0?si=D7dRT6Ekw2VcqFFa',
    'g00R9Eh-MD4?si=lnZUaeijGj5aG5y8',
    'v6d3yaiDjIY?si=s3cVl4BY9cKGMrXy',
    'c_27ruT6d0M?si=0j8y0FGeUAJdodp3',
    'QCB5c4lnLig?si=ZHVTi1_ZK2k_ySb_',
    'IWi_czFpFPE?si=4HSkHd4NCheR1u8Z',
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
