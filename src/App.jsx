import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCustomImageDark, setIsCustomImageDark] = useState(false);

  useEffect(() => {
    // Simulate fetching data or performing initial setup
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after some delay (simulating data fetching)
    }, 2000); // Simulated delay of 2 seconds
  }, []);

  const toggleCustomImage = () => {
    setIsLoading(true); // Show loading screen while changing the background
    setTimeout(() => {
      setIsCustomImageDark(!isCustomImageDark); // Toggle the custom image background state
      setIsLoading(false); // Hide loading screen after changing the background
    }, 2000); // Simulated delay of 2 seconds
  };

  return (
    <div className={`app-container ${isCustomImageDark ? 'dark-custom-image' : 'light-custom-image'}`}>
      <button className="toggle-button" onClick={toggleCustomImage}>
        Image
        <img src="https://img.icons8.com/?size=16&id=XzYvxJ23tAMg&format=png" alt="Icon" />
      </button>
      {isLoading ? (
        <LoadingScreen /> // Render loading screen if isLoading is true
      ) : (
        <>
          <Header />
          <main>
            <About />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
