import React, { useRef, useEffect, useState } from 'react';
import './works.scss';

// Assets
import jordan from '../../../../dist/assets/jordans.png';
import jordanTran from '../../../../dist/assets/jordan.png'
import spotify from '../../../../dist/assets/spotify.png';
import horror from '../../../../dist/assets/horror.png';
import blog from '../../../../dist/assets/blog.png';


const Works = () => {

  return(
    <div className="home__works">
      <div className="home__works__layout">
        <div className="home__work__grid">
          <img className="grid__image grid__image--1" src={jordan} alt=""/>
          <img className="grid__image grid__image--2" src={jordanTran} alt=""/>
          <img className="grid__image grid__image--3" src={jordanTran} alt=""/>
        </div>
        <h3>Jordans</h3>
        <h3>Halloween horror nights</h3>
        <div className="home__work__grid">
          <img className="grid__image grid__image--1" src={horror} alt=""/>
          <img className="grid__image grid__image--2" src={jordanTran} alt=""/>
          <img className="grid__image grid__image--3" src={jordanTran} alt=""/>
        </div>
        <div></div>
        <div></div>
        <div className="home__work__grid">
          <img className="grid__image grid__image--1" src={jordan} alt=""/>
          <img className="grid__image grid__image--2" src={jordanTran} alt=""/>
          <img className="grid__image grid__image--3" src={jordanTran} alt=""/>
        </div>
        {/* <div className="home__work__content">
          <img className="home__work__image" src={jordan} alt=""/>
          <h3 className="home__work__title">Jordans</h3>
        </div>
        <div className="home__work__content">
          <img className="home__work__image" src={spotify} alt=""/>
          <h3 className="home__work__title">Spotify</h3>
        </div>
        <div className="home__work__content">
          <img className="home__work__image" src={horror} alt=""/>
          <h3 className="home__work__title">Horror nights</h3>
        </div>
        <div className="home__work__content">
          <img className="home__work__image" src={blog} alt=""/>
          <h3 className="home__work__title">BDventures</h3>
        </div> */}
      </div>
    </div>

  )
};
export default Works