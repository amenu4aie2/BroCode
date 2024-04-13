import React from 'react';
import './Darklighttoggle.css';

function Darklighttoggle({ isDarkMode, toggleDarkMode }) {
  // console.log(isDarkMode);
  return (
    <label className={`toggle-label ${isDarkMode ? 'dark' : 'light'}`}>
      <input
        className='toggle-checkbox'
        type='checkbox'
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <div className='toggle-slot'>
        <div className='sun-icon-wrapper'>
          <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
        </div>
        <div className='toggle-button'></div>
        <div className='moon-icon-wrapper'>
          <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
        </div>
      </div>
    </label>
  );
}

export default Darklighttoggle;