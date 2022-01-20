import React from "react";

const LogoIco = (props) => {
    const {className} = props

    const classes = 'LogoIco ' + (className || '');

    return (
      <svg className={classes} width="1648" height="269" viewBox="0 0 1648 269" fill="none" xmlns="http://www.w3.org/2000/svg">

      </svg>
    );

};

export default LogoIco;