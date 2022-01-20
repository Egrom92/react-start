import React from "react";

const Eye = (props) => {

    const {className} = props
    const classes = 'Eye ' + (className || '');

    return (
      <svg className={classes} width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.34711 0.666626C4.26703 0.666626 1.51871 4.21803 0.64553 5.52483C0.45149 5.81523 0.45149 6.18473 0.64553 6.47513C1.51871 7.78193 4.26703 11.3333 8.34711 11.3333C12.4272 11.3333 15.1755 7.78193 16.0487 6.47513C16.2427 6.18473 16.2427 5.81523 16.0487 5.52483C15.1755 4.21803 12.4272 0.666626 8.34711 0.666626Z"/>
        <path d="M11.0138 5.99989C11.0138 7.47269 9.81988 8.66659 8.34708 8.66659C6.87438 8.66659 5.68042 7.47269 5.68042 5.99989C5.68042 5.59749 5.76958 5.21579 5.92922 4.87369C6.18674 4.32179 6.62768 3.87269 7.17358 3.60467C7.52768 3.43085 7.92598 3.33325 8.34708 3.33325C9.81988 3.33325 11.0138 4.52719 11.0138 5.99989Z"/>
      </svg>
    );

};

export default Eye;