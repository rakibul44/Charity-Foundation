import React, { useState, useEffect } from 'react';
import './PrayerTimings.css';
import s1 from '../images/s1.jpg';

const PrayerTimings = () => {
  const [country, setCountry] = useState('Select Country');
  const [location, setLocation] = useState('Select Location');
  const [timings, setTimings] = useState({});
  const [error, setError] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [timeZone, setTimeZone] = useState('UTC'); // Track time zone

  // Function to fetch live prayer times based on country and location
  const fetchPrayerTimings = async (newCountry, newLocation) => {
    if (newCountry !== 'Select Country' && newLocation !== 'Select Location') {
      const apiUrl = `https://api.aladhan.com/v1/timingsByCity?city=${newLocation}&country=${newCountry}&method=2`;
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.code === 200) {
          setTimings(data.data.timings);
          setCountry(newCountry);
          setLocation(newLocation);
          setError('');

          // Fetch time zone from the response
          const timeZoneApiUrl = `https://api.aladhan.com/v1/timingsByCity?city=${newLocation}&country=${newCountry}`;
          const timeZoneResponse = await fetch(timeZoneApiUrl);
          const timeZoneData = await timeZoneResponse.json();

          if (timeZoneData.code === 200) {
            const timeZoneOffset = timeZoneData.data.meta.timezone;
            setTimeZone(timeZoneOffset); // Set the time zone
          } else {
            setError('Failed to load time zone.');
          }
        } else {
          setError('Failed to load prayer times.');
        }
      } catch (err) {
        setError('Failed to fetch data.');
      }
    }
  };

  // Update live clock with AM/PM based on selected location's time zone
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Convert the time to the selected time zone
      const formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: timeZone,
      }).format(now);

      setCurrentTime(formattedTime);
    };

    const intervalId = setInterval(updateTime, 1000); // Update every second

    // Initial call to set the time immediately on mount
    updateTime();

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [timeZone]); // Trigger the effect whenever the time zone changes

  useEffect(() => {
    // Set default prayer timings when the component mounts
    fetchPrayerTimings('Bangladesh', 'Dhaka');
  }, []);

  return (
    <div className="prayer-container">
      <div className="title-container">
        <h2 className='title'>Select Country & City For</h2>
        <h1 className='title-2'>Prayer Timings</h1>
        <div className="title-underline">
          <span></span>
        </div>
      </div>

      <div className="selectors">
        <select onChange={(e) => fetchPrayerTimings(e.target.value, location)} value={country}>
          <option value="Select Country">Select Country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Pakistan">Pakistan</option>
          <option value="USA">USA</option>
        </select>
        <select onChange={(e) => fetchPrayerTimings(country, e.target.value)} value={location}>
          <option value="Select Location">Select Location</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Karachi">Karachi</option>
          <option value="New York">New York</option>
        </select>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="content-section">
        <div className="prayer-image">
          <img src={s1} alt="Men Praying" />
          <div className="image-overlay">
            <p className="live-clock">{currentTime}</p> {/* Live clock displayed here with time zone support */}
          </div>
        </div>

        <div className="timing-table">
          <div className="timing-header">
            <span>Name of Salat</span>
            <span>Azan Time</span>
            <span>Prayer Time</span>
          </div>
          {timings && Object.keys(timings).length > 0 ? (
            <>
              <div className="timing-row">
                <span>Fajr</span>
                <span>{timings.Fajr}</span>
                <span>{timings.Fajr}</span>
              </div>
              <div className="timing-row">
                <span>Sunrise</span>
                <span>{timings.Sunrise}</span>
                <span>{timings.Sunrise}</span>
              </div>
              <div className="timing-row">
                <span>Dhuhr</span>
                <span>{timings.Dhuhr}</span>
                <span>{timings.Dhuhr}</span>
              </div>
              <div className="timing-row">
                <span>Asr</span>
                <span>{timings.Asr}</span>
                <span>{timings.Asr}</span>
              </div>
              <div className="timing-row">
                <span>Maghrib</span>
                <span>{timings.Maghrib}</span>
                <span>{timings.Maghrib}</span>
              </div>
              <div className="timing-row">
                <span>Isha</span>
                <span>{timings.Isha}</span>
                <span>{timings.Isha}</span>
              </div>
            </>
          ) : (
            <p>Loading prayer timings...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrayerTimings;
