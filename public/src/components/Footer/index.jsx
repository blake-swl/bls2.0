import React from 'react';
import './footer.scss';

import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer">
    <h1 className="footer__glitch" data-text="ascend">ascend</h1>
    <p className="footer__subheader">a creative web development studio.</p>
    <ul className="footer__nav">
      <li><Link to="/" className="footer__menu__item" data-text="home">Home</Link></li>
      <li><Link to="/works" className="footer__menu__item" data-text="works">Works</Link></li>
      <li><Link to="/services" className="footer__menu__item" data-text="services">Services</Link></li>
      <li><Link to="/about" className="footer__menu__item" data-text="about">About</Link></li>
      <li><Link to="/contact" className="footer__menu__item" data-text="contact">Contact</Link></li>
    </ul>

  </div>
);
export default Footer;