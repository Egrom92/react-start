import {Logo, MobileMenu } from '../../components';
import React from "react";

const Header = (props) => {

  return (
    <>
      <header className="Header-section">
        <div className="container">
          <div className="Header">
            <Logo className='Header__Logo'/>
          </div>
        </div>
      </header>
      <MobileMenu/>
    </>
  );
};

export default Header;
