import React, { useState } from 'react';
import Card from './Card.jsx';
import './RandomPrayers.css';
import prayerlist  from '../data/PrayerList.js'
import reload from '../assets/reload.png';
import pray from '../assets/pray.png';


function RandomPrayers() {
  const prayers = prayerlist
  const [prayer, setPrayer] = useState({
    id: "0",
    title: "Title Example",
    text: "Text Example"
  });

  const random = () => {
    const select = prayers[Math.floor(Math.random() * prayers.length)];
    return setPrayer(select)
  }

  return (
    <div>
      <Card prayer={prayer} handleClick={() => random()} />
    </div>
  )
}

export default RandomPrayers;

