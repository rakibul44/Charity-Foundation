import React from 'react';
// import Header from './Components/Header';  // Your Navbar component
import Slider from './Components/Slider';  // The new Slider component
import About from './Components/About';
import Pcard from './Components/Pcard';
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

      {/* Five pillars of Islam */}
      <Pcard />
    </div>
  );
}

export default App;
