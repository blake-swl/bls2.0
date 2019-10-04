import React from 'react';
import './styles/workGrid.scss';


const WorkGrid = (props) => {
  
  
  const paraCoor = {
    img1: (props.shift / - 12),
    img2: (props.shift / - 8),
    img3: (props.shift / - 20),
  }
  return (
    <div className="work__grid">
      <img src={props.image1} alt="" className="grid__image grid__image--1" style={{transform: `translateY(${paraCoor.img1}px)`}}/>
      <img src={props.image2} alt="" className="grid__image grid__image--2" style={{transform: `translateY(${paraCoor.img2}px)`}}/>
      <img src={props.image3} alt="" className="grid__image grid__image--3" style={{transform: `translateY(${paraCoor.img3}px)`}}/>
    </div>
  )
};

export default WorkGrid;
