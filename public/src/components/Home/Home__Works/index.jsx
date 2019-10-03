import React, { useRef, useEffect, useState } from 'react';
import './works.scss';

import WorkGrid from '../../Utils/WorkGrid';
import Button from '../../Utils/Button';

// Assets
import jordan from '../../../../dist/assets/jordans.png';
import jordanTran from '../../../../dist/assets/jordan.png'
import spotify from '../../../../dist/assets/spotify.png';
import horror from '../../../../dist/assets/horror.png';
import blog from '../../../../dist/assets/blog.png';
import hike from '../../../../dist/assets/hike-dark1.png';
import hiker from '../../../../dist/assets/hiker.jpeg';





const Works = () => {
  const [offset, shiftOffset] = useState(0);
  const parallaxShift = () => shiftOffset(window.scrollY)
  
  useEffect(() => {
    requestAnimationFrame(() => {
      window.addEventListener('scroll', parallaxShift);
    })
  }, [])


  return(
    <div className="home__works">
      <div className="layout">
        <div className="layout__item layout__item--body">
          <h2 className="home__work__title">nike</h2>
          <Button buttonText="View project" />
        </div>
        <div className="layout__item--figure">
          <WorkGrid image1={jordan} image2={jordanTran} image3={jordanTran} />
        </div>
      </div>
      <div className="layout">
        <div className="layout__item layout__item--body">
          <h2 className="home__work__title">trail finder</h2>
          <Button buttonText="View project" />
        </div>
        <div className="layout__item--figure">
          <WorkGrid image1={hiker} image2={hike} />
        </div>
      </div>
      <div className="layout">
        <div className="layout__item layout__item--body">
          <h2 className="home__work__title">spotify</h2>
          <Button buttonText="View project" />
        </div>
        <div className="layout__item--figure">
          <WorkGrid image1={spotify} image2={jordanTran} />
        </div>
      </div>

    </div>
 
  )
};
export default Works
