import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Slider.css';
import logo from '../images/logo.png';
import s1 from '../images/s1.jpg';
import s2 from '../images/s2.jpg';
import s3 from '../images/s3.jpg';

const sliderData = [
  {
    image: s1,
    title: 'Allah Helps Those Who Help Themselves',
    description: 'Muslim Community, Promoting A Comprehensive Islamic Way Of Life Based On The Holy Quran',
  },
  {
    image: s2,
    title: 'Another Inspiring Quote',
    description: 'Another piece of text to showcase the second slider item.',
  },
  {
    image: s3,
    title: 'Third Inspiring Quote',
    description: 'Third slide text to further enhance your message.',
  },
];

const Slider = () => {
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  const [locationError, setLocationError] = useState('');

  // Fetch sunrise and sunset timings based on location
  useEffect(() => {
    const fetchSunriseSunset = async (lat, lon) => {
      try {
        const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&formatted=0`);
        const data = await response.json();
        const sunriseTime = new Date(data.results.sunrise).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const sunsetTime = new Date(data.results.sunset).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setSunrise(sunriseTime);
        setSunset(sunsetTime);
      } catch (error) {
        console.error('Error fetching sunrise and sunset data:', error);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchSunriseSunset(latitude, longitude);
        },
        (error) => {
          setLocationError('Unable to fetch location');
          console.error('Error getting location:', error);
        }
      );
    } else {
      setLocationError('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className="slider-container">
      {/* Top Section with Logo, Sunrise/Sunset, and Menu */}
      <div className="slider-top-bar">
        {/* Logo on the left */}
        <div className="slider-logo">
          <img src={logo} width="50" height="auto" className="d-inline-block align-top" alt="AQS logo" />
        </div>

        {/* Sunrise and Sunset in the center */}
        <div className="slider-timings">
          {locationError ? (
            <div className="text-danger">{locationError}</div>
          ) : (
            <>
              <div className="timing-item">
                <FontAwesomeIcon icon={faSun} style={{ marginRight: '8px', color: '#FFA500' }} />
                <span>Sunrise: {sunrise || 'Loading...'}</span>
              </div>
              <div className="timing-item">
                <FontAwesomeIcon icon={faMoon} style={{ marginRight: '8px', color: '#1E90FF' }} />
                <span>Sunset: {sunset || 'Loading...'}</span>
              </div>
          
            </>
          )}
        </div>

        {/* Menu on the right */}
        <nav className="slider-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Carousel Section */}
      <div id="carouselExample" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {sliderData.map((_, index) => (
            <li
              key={index}
              data-target="#carouselExample"
              data-slide-to={index}
              className={index === 0 ? 'active' : ''}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {sliderData.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={slide.image}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{slide.title}</h5>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <a
          className="carousel-control-prev"
          href="#carouselExample"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExample"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Slider;
