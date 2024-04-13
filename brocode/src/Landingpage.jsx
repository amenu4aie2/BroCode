import React from 'react';

function Landingpage() {
  return (
    <div>
      <div style={{ display: 'flex', padding: '25px 70px', justifyContent: 'space-between', alignItems: 'center' }} className="header">
        <div className="logo">LOGO</div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '70px', alignItems: 'center', fontSize: '20px', fontFamily: 'monospace', paddingRight: '100px' }} className="lh">
          <div>How it works</div>
          <div>About</div>
          <a href="/dark">:dark </a>
          <div style={{ color: 'white', backgroundColor: '#ee7212', borderRadius: '7px', padding: '5px 10px' }} className="sp">Sign Up</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '40px', paddingTop: '150px' }} className="container">
        <div style={{ color: 'black', fontSize: '45px', fontFamily: 'monospace', fontWeight: 'bolder' }} className="Tagline">
          Challenge Accepted? Code Your Way to Victory!
        </div>
        <div style={{ color: 'black', fontSize: '20px', fontFamily: 'monospace', paddingLeft: '400px', paddingRight: '400px', textAlign: 'center' }} className="description">
          Sharpen your skills and battle your friends in the ultimate coding showdown! Create a game room, choose your language & difficulty, then conquer coding challenges against the clock. May the most efficient code win!
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '65px' }} className="room">
          <div style={{ color: 'white', backgroundColor: '#ee7212', borderRadius: '10px', padding: '15px 40px', fontSize: '20px', fontWeight: 'bolder', fontFamily: 'monospace' }} className="createroom">Join a Room</div>
          <div style={{ color: 'white', backgroundColor: '#ee7212', borderRadius: '10px', padding: '15px 40px', fontSize: '20px', fontWeight: 'bolder', fontFamily: 'monospace' }} className="createroom">Create a Game Room</div>
        </div>
        <div className="editor">
          {/* <img src="editor.jpeg" alt="editor"/> */}
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
