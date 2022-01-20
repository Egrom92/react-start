import React from "react";
import {LogoIco} from '../../svg'

const Logo = (props) => {
  const {className} = props

  const classes = 'Logo ' + (className || '');

  return (
    <a href='/' className={classes}>
      <LogoIco className='LogoIco'/>
    </a>
  );
};

export default Logo;
