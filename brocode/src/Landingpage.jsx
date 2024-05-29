import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Landingpage.css';

function Landingpage() {
  const [Text, setText] = useState('');
  const redirect = () => {
    window.location.href = `/room/${Text}`;
  };

  return (
    <div>
    <div style={{ display: 'flex', padding: '25px 70px', justifyContent: 'space-between', alignItems: 'center' }} className="header">
        <div className="logo">LOGO</div>
        <div  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '70px', alignItems: 'center', fontSize: '20px', fontFamily: 'monospace', paddingRight: '100px' }}  className="lh">
          <div>How it works</div>
          <div>About</div>
          <a href="/dark">:dark </a>
          <div className="lsp">Sign Up</div>
        </div>
      </div>
      <div className="lcontainer">
        <div className="lTagline">
          Challenge Accepted? Code Your Way to Victory!
        </div>
        <div className="ldescription">
          Sharpen your skills and battle your friends in the ultimate coding showdown! Create a game room, choose your language & difficulty, then conquer coding challenges against the clock. May the most efficient code win!
        </div>
        <div className="lroom">
          <Popup
            trigger={
              <button className="lcreateroom">Join a Room</button>
            }
            modal
            nested
          >
            {closer => (
              <div className="lmodal">
                <div className="lcontent">
                  <div>ENTER THE ROOM CODE HERE</div>
                </div>
                <div>
                  <input value={Text} onChange={(event) => setText(event.target.value)}></input>
                  <button
                    onClick={() => {
                      closer();
                      redirect();
                    }}
                  >
                    ENTER
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <div className="lcreateroom">Create a Game Room</div>
        </div>
        <div className="leditor">
          {/* <img src="editor.jpeg" alt="editor"/> */}
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
