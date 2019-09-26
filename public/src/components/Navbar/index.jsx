import React, { useState, useEffect, useRef } from 'react';
import './navbar.scss';
import { NavLink } from "react-router-dom";
import Menu from '../OverlayMenu';

const Navbar = () => {
  const [ checked, checkbox ] = useState(false);

  const _toggleCheckbox = (e) => {
    checkbox(!checked);
  }

  return(
    <div className="navbar" >
      
      <div className="navbar__container">
        <NavLink to="/" className="logo__button">
          <div className="glitch" data-text="ASCEND">ascend</div>
        </NavLink>
        <NavLink to="/contact" className="cta">Let's talk</NavLink>
      </div>
      <div className="navbar__menu">
        <input type="checkbox" className="toggler" checked={checked} onChange={ _toggleCheckbox}/>
        <div className="hamburger"><div></div></div>
        { checked ? <Menu dropped={checked} toggle={_toggleCheckbox}/> :  <Menu dropped={checked}/>}
      </div>
    </div>
  )
};
export default Navbar;