import React from 'react';

import './styles.css';
import { FiSend, FiPlusCircle } from 'react-icons/fi';

export default function ProfFrame(){
    return(
        <div className="App-fullpage">
            <div className="profile-header">
                <div className="profile-header-bg"></div>
                <div className="profile-header-info">
                    <div className="user-header-description">
                        <a href="#Picture" className="user-header-picture">
                            <div className="header-picture-border"></div>
                            <div className="header-picture-content"></div>
                        </a>
                        <p className="user-header-description-title">
                            <a href="#HeaderTitle" className="header-title">Pedro Thiago</a>
                        </p>
                        <p className="user-header-description-subtitle">
                            <a href="#HeaderSubtitle" className="header-subtitle">Aluno de Eng. Elétrica PUC-Rio</a>
                        </p>
                    </div>
                    <div className="user-header-middle">
                        <div className="user-header-numbs numbs-grid">
                            <div className="numbs">
                                <p className="numbs-title">1000</p>
                                <p className="numbs-sub">Projects</p>
                            </div>
                            <div className="numbs">
                                <p className="numbs-title">1000</p>
                                <p className="numbs-sub">Projects</p>
                            </div>
                            <div className="numbs">
                                <p className="numbs-title">1000</p>
                                <p className="numbs-sub">Projects</p>
                            </div>
                            <div className="flags">
                                <div className="flag first">
                                    <a href="#Country" className="country-flag">Img of Country</a>
                                    <p className="flag-sub">Country Name</p>
                                </div>
                                <div className="flag second">
                                    <a href="#City" className="city-flag">Img of City</a>
                                    <p className="flag-sub">City Name</p>
                                </div>
                            </div>
                        </div>
                        <div className="user-header-xoxomidia">
                            <div className="user-header-xoxo-links">
                                <a href="#XoxoLink" className="xoxo-link">
                                    <p>Img of Instagram</p>
                                </a>
                            </div>
                            <div className="user-header-xoxo-links">
                                <a href="#XoxoLink" className="xoxo-link">
                                    <p>Img of Twitter</p>
                                </a>
                            </div>
                            <div className="user-header-xoxo-links">
                                <a href="#XoxoLink" className="xoxo-link">
                                    <p>Img of Twitch</p>
                                </a>
                            </div>
                            <div className="user-header-xoxo-links">
                                <a href="#XoxoLink" className="xoxo-link">
                                    <p>Img of Youtube</p>
                                </a>
                            </div>
                            <div className="user-header-xoxo-links">
                                <a href="#XoxoLink" className="xoxo-link">
                                    <p>Img of Discord</p>
                                </a>
                            </div>
                            <div className="user-header-xoxo-links">
                                <a href="#XoxoLink" className="xoxo-link">
                                    <p>Img of Spotify</p>
                                </a>
                            </div>
                            <div className="user-header-xoxo-links">
                                <a href="#XoxoLink" className="xoxo-link">
                                    <p>Img of </p>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                   <div className="user-header-resume">
                        <div className="user-header-charts chart-grid"></div>
                        <div className="user-header-action button-grid">
                            <button className="user-header-action-button first">
                                <FiSend size="20" color="#fff"/>
                            </button>
                            <div className="button-space"></div>
                            <button className="user-header-action-button second">
                                <FiPlusCircle size="20" color="#fff"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}