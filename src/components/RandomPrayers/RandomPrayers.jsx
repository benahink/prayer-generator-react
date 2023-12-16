import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import './RandomPrayers.css';
import prayerlist  from '../data/PrayerList.js'
import reload from '../assets/reload.png';
import pray from '../assets/pray.png';

const generateRandomPrayer = (prayers) => {
  const randomPrayer = prayers[Math.floor(Math.random() * prayers.length)];
  return randomPrayer
}

function RandomPrayers() {
  const [randPrayer, setRandPrayer] = useState(() => generateRandomPrayer(prayerlist));

  return (
    <div>
      <Card prayer={randPrayer} />
    </div>
  )
}

export default RandomPrayers;

