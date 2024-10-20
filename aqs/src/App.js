import React from 'react';
// import Header from './Components/Header';  // Your Navbar component
import Slider from './Components/Slider';  // The new Slider component
import About from './Components/About';
import PillarsSection from './Components/PillarsSection';
import DonorList from './Components/DonorList';
import Project from './Components/Project';
import PrayerTimings from './Components/PrayerTimings';
import Gallery from './Components/Gallery';
import VideoGallery from './Components/VideoGallery';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap css
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Fontawesome Icon







function App() {
  return (
    <div>

      {/* Slider Components */}
      <Slider />

      {/* About Components */}
      <About /> 

      {/* Salat Time */}
      <PrayerTimings />

      {/* CardSetion 5 pillars of Islam  */}
      <PillarsSection />

      {/* DonorList Section Components */}
      <DonorList /> 

      {/* Project Components */}
      <Project />



      {/* Gallery Components */}
      <Gallery />

      {/* VideoGallery Components */}
      <VideoGallery />

      {/* Footer components */}
      <Footer />
      
    </div>
  );
}

export default App;
 