import React, { useState } from 'react';
import './RandomPrayers.css';
import prayer from '../assetsprayer.png';
import prayer1 from '../assetsprayer_1.png';

function RandomPrayers() {

  const [prayer, setPrayer] = useState({
    title: "Dear [Higher Power]…", 
    text: "Thank you for keeping me sober another day. I pray only for the knowledge of your will for me, and the power to carry that out. I pray that you keep me sober again tomorrow.",
  });
  return (
    <div className="container">
      <div className="quote">{prayer.text}</div>
      <div>
        <div className="line">
          <div className="bottom">
            <div className="title">{prayer.title}</div>
            <div className="icons">
              <img src={prayer} />
              <img src={prayer_1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomPrayers;
