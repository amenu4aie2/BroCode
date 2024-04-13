import React from 'react'
import { useState } from 'react';
import DarkModeLandingPage from './darkLandingPage';
import LightModeLandingPage from './Landingpage';
import DarkLightToggle from './Darklighttoggle';
function Home() {

    const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode);
  };
  return (
    <div>
              <DarkLightToggle
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      {isDarkMode ? <DarkModeLandingPage /> : <LightModeLandingPage />}
    </div>
  )
}

export default Home
