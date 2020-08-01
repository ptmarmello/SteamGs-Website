import React from 'react';
import {FiHome,FiZap,FiHelpCircle,FiBell,FiSearch,FiSliders,FiX} from 'react-icons/fi';
import './styles.css';

export default function SupMenu(){
    return(
        <nav className="App-header">
            <ul className="header-menu">
                <li className="header-menu-list">
                    <div className="header-icons">
                        <div className="logo">
                            <a href="#Home" className="header-list-link">
                                <FiHome size="20px"/>
                            </a>
                            
                        </div>
                    </div>
                </li>
                
            </ul>
        </nav>

    );
        

}