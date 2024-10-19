import React from 'react';
// import Header from './Components/Header';  // Your Navbar component
import Slider from './Components/Slider';  // The new Slider component
import About from './Components/About';

// import Time from './Components/Time';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap css
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Fontawesome Icon




function App() {
  return (
    <div>
      {/* Header components */}
      {/* <Header /> */}

      {/* Slider Components */}
      <Slider />

      {/* About Componenets */}
      <About />

      {/* Salat Time */}
      {/* <Time /> */}

      
    </div>
  );
}

export default App;
 