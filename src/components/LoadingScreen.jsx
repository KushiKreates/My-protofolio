/* LoadingScreen.jsx */

import React from 'react';
import './LoadingScreen.css'; // Import the CSS file for loading screen styling

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <img src="/loading.gif" alt="Loading GIF" className="loading-gif" />
      <h2>Loading...</h2>
    </div>
  );
}

export default LoadingScreen;
