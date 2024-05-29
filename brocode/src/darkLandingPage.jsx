import React, { useState } from 'react';
import './DarkLandingPage.css';

function DarkLandingPage() {
  const [First, setFirst] = useState('');

  return (
    <div>
            <style>
        {`
          body {
            margin: 0;
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            background-color: black;
          }
        `}
      </style>
      <div style={{ display: 'flex', padding: '25px 70px', justifyContent: 'space-between', alignItems: 'center', color: 'white' }} className="header">
        <div className="logo">LOGO</div>
        <div className="lh">
          <div>How it works</div>
          <div>About</div>
          <a href="/">:light </a>
          <div className="sp">Sign Up</div>
        </div>
      </div>
      <div className="container">
        <div className="Tagline">
          Challenge Accepted? Code Your Way to Victory!
        </div>
        <div className="description">
          Sharpen your skills and battle your friends in the ultimate coding showdown! Create a game room, choose your language & difficulty, then conquer coding challenges against the clock. May the most efficient code win!
        </div>
        <div className="room">
          <div className="createroom">Join a Room</div>
          <div className="createroom">Create a Game Room</div>
        </div>
      </div>
    </div>
  );
}

export default DarkLandingPage;
