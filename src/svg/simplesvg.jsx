import React from 'react';
import "../styles/svgStyles.css"
import { useState } from 'react';

const MyIcon = () => {
    const [swivel, setSwivel] = useState(false)

    const changeSwivel = () =>{
        setSwivel(!swivel)
    }
    return (
        <div onClick={changeSwivel}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 -30 200 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                <circle className={swivel ? 'my-icon-circle ' : ' ' } cx="12" cy="12" r="10" />
                <line className={swivel ? 'my-icon-line' : ' ' }  x1="12" y1="8" x2="12" y2="16" />
                <line className={swivel ? 'my-icon-line' : ' ' } x1="8" y1="12" x2="16" y2="12" />
            </svg>
        </div>
    );
};

export default MyIcon;
