import React from 'react';
import './RandomPrayers.css';
import reload from '../assets/reload.png';
import pray from '../assets/pray.png';

function Card({ prayer, handleClick }){
  return(
  	<div className="container">
      <div className="prayer">"{prayer.text}"</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="title">"{prayer.title}"</div>
          <div className="icons">
            <img src={reload} onClick={handleClick} alt="reload button"/>
            <img src={pray} alt="app logo"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;