import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Function to get the user's current location
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getSunTimes, showError);
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    };

    // Fetch sunrise and sunset times based on the user's location
    const getSunTimes = async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      
      try {
        const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&formatted=0`);
        const data = await response.json();
        const sunriseTime = new Date(data.results.sunrise).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const sunsetTime = new Date(data.results.sunset).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        setSunrise(sunriseTime);
        setSunset(sunsetTime);
      } catch (error) {
        setError('Failed to fetch sunrise and sunset times.');
      }
    };

    // Handle errors with geolocation
    const showError = (error) => {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          setError('User denied the request for Geolocation.');
          break;
        case error.POSITION_UNAVAILABLE:
          setError('Location information is unavailable.');
          break;
        case error.TIMEOUT:
          setError('The request to get user location timed out.');
          break;
        case error.UNKNOWN_ERROR:
          setError('An unknown error occurred.');
          break;
        default:
          setError('An error occurred.');
      }
    };

    getLocation();
  }, []);

  return (
    <header>
      {/* Sunrise/Sunset Info */}
      <div className="top-bar d-flex justify-content-center align-items-center">
        {error ? (
          <div className="text-danger">{error}</div>
        ) : (
          <>
            <div className="text-muted mr-3">Sunrise At: {sunrise || 'Loading...'}</div>
            <div className="text-muted mr-3">Sunset At: {sunset || 'Loading...'}</div>
          </>
        )}
        {/* <div className="ml-3 social-icons"> */}
          {/* Social Media Links */}
          {/* <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div> */}
      </div>

      {/* Main Navbar */}
      <Navbar bg="light" expand="lg" className="p-3">
        <Navbar.Brand href="#home" className="text-success">
          <img src={logo}  width="50" height="50" className="d-inline-block align-top" alt="AQS logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Charity" id="charity-dropdown">
              <NavDropdown.Item href="#urgent-donation">Urgent Donation</NavDropdown.Item>
              <NavDropdown.Item href="#campaign-details">Campaign Details</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pages">Pages</Nav.Link>
            <Nav.Link href="#courses">Courses</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Button variant="success" className="ml-3">
            Login
          </Button>
          <Button variant="success" className="ml-3">
            Register
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
