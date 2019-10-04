import React, { useEffect } from 'react';
import './styles/workGrid.scss';
import Parallax from './ParallaxAnimation';


const WorkGrid = (props) => {
  
  
  const paraCoor = {
    img1: (props.shift / - 12),
    img2: (props.shift / - 8),
    img3: (props.shift / - 20),
  }
  useEffect(() => {
    Parallax('parallax')
  })
  return (
    <div className="work__grid">
      <img src={props.image1} alt="" className="parallax grid__image grid__image--1" data-parallax="-1" />
      <img src={props.image2} alt="" className="parallax grid__image grid__image--2" data-parallax="-2" />
      <img src={props.image3} alt="" className="parallax grid__image grid__image--3" data-parallax="1"/>
    </div>
  )
};

export default WorkGrid;
// style={{transform: `translateY(${paraCoor.img3}px)`}}