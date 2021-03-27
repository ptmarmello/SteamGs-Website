import React from 'react';
import '../safe/styles/MainContainer.css';

export default function MainContainer({children}){
    return(
        <div className="mainContainer">
            {children}
        </div>
    );
}