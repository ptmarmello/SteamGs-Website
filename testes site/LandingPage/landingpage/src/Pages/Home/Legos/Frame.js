import React from 'react';
//import styled from 'styled-components';
import './FrameStyle.css';


export default function Fullframe({children, id}){
    return(
        <div className="App-fullframe" id={id} >
           {children}
        </div>
    );
}