import React from 'react';
import './transition.scss';

// Assets
import halloween from '../../../../dist/assets/horror.png';
import dodgers from '../../../../dist/assets/Landing.png';
import blog from '../../../../dist/assets/blog.png';
import ascend from '../../../../dist/assets/Ascend.png';




const Transition = () => (
  <div className="home__transition">
    <p className="home__transition__text">create. inspire. ascend</p>
    <div className="home__transition__images">
      <div className="transition__img" style={{backgroundImage: `url(${halloween})`}}></div>
      <div className="transition__img" style={{backgroundImage: `url(${dodgers})`}}></div>
      <div className="transition__img" style={{backgroundImage: `url(${blog})`}}></div>
      <div className="transition__img" style={{backgroundImage: `url(${ascend})`}}></div>

    </div>
  </div>
);
export default Transition;