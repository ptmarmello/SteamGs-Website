import React from 'react';
import Fullframe from './Legos/Frame';
import styled from 'styled-components';
import Fullforms from './Legos/Forms';
import FullFooter from './Legos/Footer';

import './home.css';

const SectionFrame = styled.section`
    display: block;
    background: transparent;
    width: 100%;
    min-width: 380px;
    height: 100%;
    min-height: 450px;
    margin:0 auto;

    justify-content: center;
    align-items: center;

    ${props => props.left &&`
        border-radius: 12px 0 0 12px;
    `}

    ${props => props.right &&`
        border-radius: 0 12px 12px 0;
    `}

    ${props => props.full &&`

    `}
`;

const HeaderText = styled.h1`
    width:60%;
    margin: 0;
    padding: 0;
    align-items: center;
    font-size: 36px;

    ${props => props.forms &&`
        color: #5897fb;
    `}

    ${props => props.header &&`
        width: 80%;
        color: #e32;
        margin-top: 5em;
    `}
`;

const HeaderButton = styled.button`
    width: 40%;
    height: 5rem;
    outline: none;

    background: #e32;
    font-size:24px;

    margin-top: 3em;
    margin-bottom: 2em;
    border-radius: 16px;
    border-style: none;

    cursor: pointer;
    bottom: 0px;

    :active{
        width:38%;
        height:4.8rem;
    }

`;
const Capsule = styled.div`
    display: block;
    background: #ffff;
    width: 70%;
    height: 70%;
    margin: 2rem;
    justify-content: center;
    align-items: center;
    padding: 5px;

    border-radius: 16px;
`;

export default function Home(){

    function Scroll(to){
        let place = document.getElementById(to);
        place.scrollIntoView();
    }

    return(
        <div className="App-home">
            {/* Colocar uma Nav bar aqui */}
            <Fullframe id="FirstFrame" mid >
                <div className="HeaderContainer">
                    <SectionFrame full>
                        <div className="HeaderBox">
                            <HeaderText>Os profissionais do Futuro começam aqui!</HeaderText>
                            <p>De Estudantes a Profissionais</p>
                        </div>
                        <div className="HeaderButtons">
                            <HeaderButton company/>
                            <HeaderButton student/>
                        </div>
                    </SectionFrame>
                
                </div>
            </Fullframe>
            <Fullframe id="SecondFrame" full >
                <SectionFrame full>
                    Alguma coisa que mostre melhor sobre o programa
                </SectionFrame>
            </Fullframe>
            <Fullframe id="ThirdFrame" full>
                <SectionFrame left>
                    caminho ou vantagens do programa
                </SectionFrame>

                <SectionFrame right>

                    <Capsule>
                        <HeaderText forms>Vamos juntos nesse desafio!</HeaderText>
                        <Fullforms/>
                    </Capsule> 
                </SectionFrame>

            </Fullframe>
            <FullFooter/>
        </div>
    );
}