import React from 'react';
import './workGrid.scss';

const WorkGrid = (props) => (
  <div className="work__grid">
    <img src={props.image1} alt="" className="grid__image grid__image--1"/>
    <img src={props.image2} alt="" className="grid__image grid__image--2"/>
    <img src={props.image3} alt="" className="grid__image grid__image--3"/>
  </div>
);
export default WorkGrid;