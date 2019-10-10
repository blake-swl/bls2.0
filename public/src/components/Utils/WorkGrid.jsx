import React, { useEffect, useRef } from 'react';
import './styles/workGrid.scss';


const WorkGrid = (props) => {
  
  
  const paraCoor = {
    img1: {
      transform: `translate3d(0, ${props.shift / - 18}px, 0)`,  
      transition: "transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    },
    img2: {
      transform: `translate3d(0, ${props.shift / - 6}px, 0)`,  
      transition: "transform .6s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    },
    img3: {
      transform: `translate3d(0, ${props.shift / 12}px, 0)`,  
      transition: "transform .6s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    },
  }

  return (
    <div className="work__grid">
      <img src={props.image1} alt="" className="grid__image grid__image--1" style={paraCoor.img1} />
      <img src={props.image2} alt="" className="grid__image grid__image--2" style={paraCoor.img2} />
      <img src={props.image3} alt="" className="grid__image grid__image--3" style={paraCoor.img3}/>
    </div>
  )
};

export default WorkGrid;
