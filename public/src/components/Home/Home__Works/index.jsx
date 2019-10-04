import React, { useRef, useEffect, useState } from 'react';
import './works.scss';

import WorkGrid from '../../Utils/WorkGrid';
import Button from '../../Utils/Button';
import Parallax from '../../Utils/ParallaxAnimation';

// Assets
import jordan from '../../../../dist/assets/jordans.png';
import jordanTran from '../../../../dist/assets/jordan.png'
import spotify from '../../../../dist/assets/spotify.png';
import cover from '../../../../dist/assets/cover.png';
import blog from '../../../../dist/assets/blog.png';
import hikeBlack from '../../../../dist/assets/hike-dark1.png';
import hikeWhite from '../../../../dist/assets/hike.png';

import hiker from '../../../../dist/assets/hiker.jpeg';





const Works = () => {
  const [offset, shiftOffset] = useState(0);
  const parallaxShift = () => shiftOffset(window.scrollY)
  
  useEffect(() => {
    requestAnimationFrame(() => {
      window.addEventListener('scroll', parallaxShift);
    })
  }, [])

  useEffect(() => {
    Parallax('parallax')
  })

  return(
    <div className="home__works">
      <div className="layout">
        <div className="parallax layout__item layout__item--body" data-parallax="-3">
          <h2 className="home__work__title">nike</h2>
          <Button buttonText="View project" />
        </div>
        <div className="layout__item--figure">
          <WorkGrid image1={jordan} image2={jordanTran} image3={jordanTran} shift={offset}/>
        </div>
      </div>
      <div className="layout">
        <div className="parallax layout__item layout__item--body" data-parallax="-3">
          <h2 className="home__work__title">trail finder</h2>
          <Button buttonText="View project" />
        </div>
        <div className="layout__item--figure">
          <WorkGrid image1={hiker} image2={hikeBlack} image3={hikeWhite} shift={offset}/>
        </div>
      </div>
      <div className="layout">
        <div className="parallax layout__item layout__item--body" data-parallax="-3">
          <h2 className="home__work__title">spotify</h2>
          <Button buttonText="View project" />
        </div>
        <div className="layout__item--figure">
          <WorkGrid image1={spotify} image2={cover} shift={offset}/>
        </div>
      </div>

    </div>
 
  )
};
export default Works
