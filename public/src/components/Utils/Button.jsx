import React from 'react';
import './styles/button.scss';

const Button = (props) => (
  <div className="button">
    <a href={props.link}>{props.buttonText}</a>
  </div>
);
export default Button;