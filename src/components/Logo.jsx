import React from 'react'


function Logo({img}, {fillColor}) {
    return (
        <img
            alt={img}
            src={img}
            width="40"
            height="40"
            fill={fillColor}
            />
        
    )
}

export default Logo;
