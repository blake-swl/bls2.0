import React, { useState, useEffect, useRef } from 'react';
import './landing.scss';

// Assets
import hero from '../../../../dist/assets/landing__hero.png';
import palette from '../../../../dist/assets/colorPalette.svg';
import typography from '../../../../dist/assets/typography.svg';
import uncon__top from '../../../../dist/assets/top.svg';
import uncon__bottom from '../../../../dist/assets/bottom.svg';


const Landing = () => {
  return(
    <div className="landing">
      <svg className="landing__rect__svg" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="1592" height="749" viewBox="0 0 1592 749">
        <defs>
          <linearGradient id="linear-gradient" x1="1.086" y1="0.5" x2="-0.112" y2="0.5" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#8d8d8d"/>
            <stop offset="1" stop-color="#50045d"/>
          </linearGradient>
        </defs>
        <g id="Rectangle_2" data-name="Rectangle 2" stroke="#313131" stroke-width="10" fill="url(#linear-gradient)">
          <rect width="1592" height="749" rx="30" stroke="none"/>
          <rect x="5" y="5" width="1582" height="739" rx="25" fill="none"/>
        </g>
      </svg>
      <img className="landing__hero" src={hero} alt=""/>
      <img className="typography" src={typography} alt=""/>
      <img className="palette" src={palette} alt=""/>
      <svg className="landing__overlay" xmlns="http://www.w3.org/2000/svg" width="1920" height={"100%"}>
        <rect id="Rectangle_10" data-name="Rectangle 10" width="1920" height={"100%"} opacity="0.36" fill="#000000"/>
      </svg>
      <div className="mouse">
        <div className="mouse__text">scroll</div>
      </div>
      <h1 className="landing__header">Bold. beautiful.</h1>
      <div className="landing__cutoff">
        <img className="top" src={uncon__top} alt=""/>
        <img className="bottom" src={uncon__bottom} alt=""/>
      </div>
    </div>
  )
}
export default Landing;