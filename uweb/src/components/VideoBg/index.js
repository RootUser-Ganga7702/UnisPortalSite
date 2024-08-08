// src/components/BackgroundVideo.js

import React from 'react';
import './index.css'; // Import the CSS file

const VideoBg = () => {
  return (
    <div className="background-video-container">
      <video autoPlay muted loop className="background-video">
        <source src="VideosProp/215500_small.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
      <h1>Welcome to Unis Technosoft Pvt Ltd</h1>
       <p>Your partner in innovative and scalable technology solutions.</p>
      </div>
    </div>
  );
};

export default VideoBg;
