import React, { useState } from 'react';
import './RandomPrayers.css';
import prayerList from '../data/prayerList.json'
import reload from '../assets/reload.png';
import pray from '../assets/pray.png';

function RandomPrayers() {
  const [prayer, setPrayer] = useState({
    title: "Dear [Higher Power]…", 
    text: "Thank you for keeping me sober another day. I pray only for the knowledge of your will for me, and the power to carry that out. I pray that you keep me sober again tomorrow.", 
  }, {
    title: "Set Aside Prayer",
    text: "God, today help me set aside everything I think I know about you, everything I think I know about myself, everything I think I know about others, and everything I think I know about my recovery so I may have an open mind and a new experience with all these things. "
  })

  console.log(prayerList)
  return (
    <div className="container">
      <div className="prayer">{prayer.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="title">{prayer.title}</div>
          <div className="icons">
            <img src={reload} alt=""/>
            <img src={pray} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomPrayers;

