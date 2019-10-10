import React, { useRef, useEffect, useState } from 'react';
import './works.scss';
import scrollMonitor from 'scrollmonitor';

import WorkGrid from '../../Utils/WorkGrid';
import Button from '../../Utils/Button';

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
  let workContainer = useRef(null);
  
  useEffect(() => {
    let offsetTop = workContainer.offsetTop;
    console.log(offsetTop)
    window.addEventListener('scroll', () => {
      requestAnimationFrame(() => shiftOffset(window.scrollY - offsetTop))
    })

  }, [])

  const animation = {
    body1: {
      transform: `translate3d(0, ${offset / 6}px, 0)`,
      transition:  "transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    },
    body3: {
      transform: `translate3d(0, ${offset / 18}px, 0)`,
      transition:  "transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    }
  }



  return(
    <div ref={element => workContainer = element} className="home__works">
      <div className="layout">
        <div className="layout__item layout__item--body" style={animation.body1}>
          <h2 className="home__work__title">nike</h2>
          <Button buttonText="View project" />
        </div>
        <div className="layout__item--figure">
          <WorkGrid image1={jordan} image2={jordanTran} image3={jordanTran} shift={offset}/>
        </div>
      </div>
      <div className="layout">
        <div className="layout__item layout__item--body" style={animation.body1}>
          <h2 className="home__work__title">trail finder</h2>
          <Button buttonText="View project" />
        </div>
        <div className="layout__item--figure">
          <WorkGrid image1={hiker} image2={hikeBlack} image3={hikeWhite} shift={offset}/>
        </div>
      </div>
      <div className="layout">
        <div className="layout__item layout__item--body" style={animation.body3}>
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
