import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ btnStyle, onClick, children, link }) => {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return <Link to={link}>
  <div onClick={handleOnClick} className={btnStyle}>{children}</div>
  </Link>
};

export default Button;
