import React from 'react';
import './styles.css';

export default function Latbar(){
    return(
        <nav className="App-latNavbar">
            <ul class="menu">
                <li class="menu-item active">
                    <a class="menu-item-link" href="overview.html">
                        {/* <svg class="menu-item-link-icon icon-overview">
                            <use xlink:href="#svg-overview"></use>
                        </svg> */}
                        <p className="menu-item-link-icon">Resume</p>
                        
                    </a>
                </li>
                <li class="menu-item">
                    <a class="menu-item-link" href="groups.html">
                        
                        {/* <svg class="menu-item-link-icon icon-group">
                            <use xlink:href="#svg-group"></use>
                        </svg> */}
                        <p className="menu-item-link-icon">Groups</p>
                        
                    </a>
                </li>
                <li class="menu-item">
                    <a class="menu-item-link" href="members.html">
                                            
                        <p className="menu-item-link-icon">Members</p>
                    </a>
                </li>
                <li class="menu-item">
                    <a class="menu-item-link" href="badges.html">
                        
                        {/* <svg class="menu-item-link-icon icon-badges">
                            <use xlink:href="#svg-badges"></use>
                        </svg> */}

                        <p className="menu-item-link-icon">Badges</p>
                    </a>
                </li>
                <li class="menu-item">
                    <a class="menu-item-link" href="quests.html">
                        
                        {/* <svg class="menu-item-link-icon icon-quests">
                            <use xlink:href="#svg-quests"></use>
                        </svg> */}
                        <p className="menu-item-link-icon">Projects</p>
                    </a>
                </li>
                <li class="menu-item">
                    <a class="menu-item-link" href="events.html">
                        {/* <svg class="menu-item-link-icon icon-events">
                            <use xlink:href="#svg-events"></use>
                        </svg> */}
                        <p className="menu-item-link-icon">Events</p>
                    </a>
                </li>
            </ul>
        </nav>
    );
}