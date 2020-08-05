import React from 'react';
import './styles.css';

// import Skeleton from '../Skeleton';
import ProfileFrame from '../../LegoComponents/ProfileFrame';
import Badge from  '../../LegoComponents/Badges';
export default function Internalportfolio(){
    return(
        <div className="App-fullpage-content">
            <ProfileFrame/> 
            <Badge/>
        </div>
    );
}