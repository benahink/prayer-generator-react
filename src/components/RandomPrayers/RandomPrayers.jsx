import React, { useState } from 'react';
import './RandomPrayers.css';
import reload from '../assets/reload.png';
import prayer from '../assets/prayer.png';

function RandomPrayers() {
  const [prayer, setPrayer] = useState({
    title: "Dear [Higher Power]…", 
    text: "Thank you for keeping me sober another day. I pray only for the knowledge of your will for me, and the power to carry that out. I pray that you keep me sober again tomorrow.", 
  })
  return (
    <div className="container">
      <div className="prayer">{prayer.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="title">{prayer.title}</div>
          <div className="icons">
            <img src={reload} alt=""/>
            <img src={prayer} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomPrayers;
