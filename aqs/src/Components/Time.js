import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [currentLocation, setCurrentLocation] = useState({ latitude: null, longitude: null });
  const [nextPrayer, setNextPrayer] = useState('');
  const [countdown, setCountdown] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Get current date in both Hijri and Gregorian formats
    const getCurrentDate = async () => {
      const res = await axios.get('https://api.aladhan.com/v1/gToH?date=' + new Date().toISOString().split('T')[0]);
      setCurrentDate(res.data.data.hijri.date);
    };

    // Fetch user's location and prayer times
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }

    // Fetch prayer times
    const fetchPrayerTimes = async (lat, lon) => {
      try {
        const res = await axios.get(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=2`);
        setPrayerTimes(res.data.data.timings);
        calculateNextPrayer(res.data.data.timings);
      } catch (error) {
        console.error('Error fetching prayer times', error);
      }
    };

    if (currentLocation.latitude && currentLocation.longitude) {
      fetchPrayerTimes(currentLocation.latitude, currentLocation.longitude);
    }

    getCurrentDate();
  }, [currentLocation]);

  // Calculate the next prayer time and countdown
  const calculateNextPrayer = (times) => {
    const now = new Date();
    const prayerNames = ['Fajr', 'Zuhr', 'Asr', 'Maghrib', 'Isha'];
    let nextPrayerTime = null;
    let nextPrayerName = '';

    prayerNames.forEach((prayer) => {
      const prayerTime = new Date(now.toDateString() + ' ' + times[prayer]);
      if (prayerTime > now && (!nextPrayerTime || prayerTime < nextPrayerTime)) {
        nextPrayerTime = prayerTime;
        nextPrayerName = prayer;
      }
    });

    if (nextPrayerTime) {
      setNextPrayer(nextPrayerName);
      setCountdown(calculateCountdown(nextPrayerTime));
    }
  };

  // Update the countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (nextPrayer) {
        const now = new Date();
        const nextPrayerTime = new Date(now.toDateString() + ' ' + prayerTimes[nextPrayer]);
        setCountdown(calculateCountdown(nextPrayerTime));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [nextPrayer, prayerTimes]);

  // Helper function to calculate time remaining for the next prayer
  const calculateCountdown = (nextPrayerTime) => {
    const now = new Date();
    const timeDiff = nextPrayerTime - now;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    return `${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  };

  return (
    <div className="prayer-times-container">
      {/* Top Header Section */}
      <div className="header-section">
        <h1>Go to Allah Before It's Too Late</h1>
        <p>{currentDate} - {new Date().toLocaleDateString()} - London, UK</p>
      </div>

      {/* Prayer Times Section */}
      <div className="prayer-times">
        <div className="prayer-time">
          <div className="prayer-label">Fajr:</div>
          <div>{prayerTimes.Fajr || 'Loading...'}</div>
        </div>
        <div className="prayer-time">
          <div className="prayer-label">Zuhr:</div>
          <div>{prayerTimes.Zuhr || 'Loading...'}</div>
        </div>
        <div className="prayer-time">
          <div className="prayer-label">Asr:</div>
          <div>{prayerTimes.Asr || 'Loading...'}</div>
        </div>
        <div className="prayer-time">
          <div className="prayer-label">Maghrib:</div>
          <div>{prayerTimes.Maghrib || 'Loading...'}</div>
        </div>
        <div className="prayer-time">
          <div className="prayer-label">Isha:</div>
          <div>{prayerTimes.Isha || 'Loading...'}</div>
        </div>
        <div className="prayer-time">
          <div className="prayer-label">Jumah:</div>
          <div>{prayerTimes.Jumah || '2:00 PM'}</div> {/* Assuming Jumah is fixed */}
        </div>
      </div>

      {/* Countdown Section */}
      <div className="next-prayer-countdown">
        <h4>Next In: {countdown}</h4>
      </div>
    </div>
  );
};

export default PrayerTimes;
