import React, { useEffect, useRef } from 'react';
import './loader.scss';
import { TimelineMax, CSSPlugin } from 'gsap';


const Loader = () => {


  return(
    <div className="loader__container">
      <div className="loader__glitch">
        <div className="imgloaded">
          <div className="glitch__img"></div>
          <div className="glitch__img"></div>
          <div className="glitch__img"></div>
          <div className="glitch__img"></div>
          <div className="glitch__img"></div>
        </div>
      </div>
      <h2 class="loader__title">ascend</h2>
    </div>
  )
};
export default Loader;