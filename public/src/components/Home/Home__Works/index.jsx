import React, { useRef, useEffect, useState } from 'react';
import './works.scss';

// Assets
import jordan from '../../../../dist/assets/jordans.png';
import jordanTran from '../../../../dist/assets/jordan.png'
import spotify from '../../../../dist/assets/spotify.png';
import horror from '../../../../dist/assets/horror.png';
import blog from '../../../../dist/assets/blog.png';
import hike from '../../../../dist/assets/hike-dark1.png';
import hiker from '../../../../dist/assets/hiker.jpeg';



const Works = () => {

  return(
    <div className="home__works">
      <div className="home__works__layout">
        <div className="home__work__grid">
          <img className="grid__image grid__image--1" src={jordan} alt=""/>
          <img className="grid__image grid__image--2" src={jordanTran} alt=""/>
          {/* <img className="grid__image grid__image--3" src={jordanTran} alt=""/> */}
        </div>
        <h3 className="home__work__title">Jordans</h3>
        <h3 className="home__work__title">trail finder</h3>
        <div className="home__work__grid">
          <img className="grid__image grid__image--1" src={hiker} alt=""/>
          <img className="grid__image grid__image--2" src={hike} alt=""/>
          {/* <img className="grid__image grid__image--3" src={jordanTran} alt=""/> */}
        </div>
        <div></div>
        <div></div>
        <div className="home__work__grid">
          <img className="grid__image grid__image--1" src={spotify} alt=""/>
          <img className="grid__image grid__image--2" src={jordanTran} alt=""/>
          <img className="grid__image grid__image--3" src={jordanTran} alt=""/>
        </div>
        <h3 className="home__work__title">spotify</h3>

      </div>
    </div>

  )
};
export default Works