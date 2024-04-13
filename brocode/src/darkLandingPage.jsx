import React from 'react';

function darkLandingPage() {
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
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '70px', alignItems: 'center', fontSize: '20px', fontFamily: 'monospace', paddingRight: '100px' }} className="lh">
          <div>How it works</div>
          <div>About</div>
          <a href="/">:light </a>
          <div style={{ color: 'white', backgroundColor: '#2cc76e', borderRadius: '7px', padding: '5px 10px' }} className="sp">Sign Up</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '40px', paddingTop: '150px' }} className="container">
        <div style={{ color: 'white', fontSize: '45px', fontFamily: 'monospace', fontWeight: 'bolder' }} className="Tagline">
          Challenge Accepted? Code Your Way to Victory!
        </div>
        <div style={{ color: 'white', fontSize: '20px', fontFamily: 'monospace', paddingLeft: '400px', paddingRight: '400px', textAlign: 'center' }} className="description">
          Sharpen your skills and battle your friends in the ultimate coding showdown! Create a game room, choose your language & difficulty, then conquer coding challenges against the clock. May the most efficient code win!
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '65px' }} className="room">
          <div style={{ color: 'white', backgroundColor: '#2cc76e', borderRadius: '10px', padding: '15px 40px', fontSize: '20px', fontWeight: 'bolder', fontFamily: 'monospace' }} className="createroom">Join a Room</div>
          <div style={{ color: 'white', backgroundColor: '#2cc76e', borderRadius: '10px', padding: '15px 40px', fontSize: '20px', fontWeight: 'bolder', fontFamily: 'monospace' }} className="createroom">Create a Game Room</div>
        </div>
      </div>
    </div>
  );
}

export default darkLandingPage;
