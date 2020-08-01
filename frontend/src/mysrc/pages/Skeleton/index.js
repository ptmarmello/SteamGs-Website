import React from 'react';
import './styles.css';

import SupMenu from '../../LegoComponents/SuperialMenuBar';
import LatBar from '../../LegoComponents/LateralBar';

export default function Skeleton(){
    return(
        <div className="allContent">
            <SupMenu/>
            <LatBar/>
        </div>
    );
}