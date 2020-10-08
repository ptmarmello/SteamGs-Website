import React from 'react';
import Fullframe from './Legos/Frame';
import styled from 'styled-components';
import Fullforms from './Legos/Forms';
import FullFooter from './Legos/Footer';

const SectionFrame = styled.section`
    display: block;
    background:#f5f5fd;
    width: 100%;
    min-width: 380px;
    height: 100%;
    min-height: 450px;

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
    justify-content: center;
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
    width: 80%;
    height: 3rem;
    outline: none;

    background: #e32;
    font-size:24px;

    margin-top:2em;
    margin-bottom:2em;
    border-radius: 16px;
    border-style: none;

    cursor: pointer;
    bottom: 0px;

    :active{
        width:78%;
        height:2.9rem;
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
            <Fullframe id="FirstFrame" >
               <SectionFrame left>

               </SectionFrame>
               <SectionFrame right>
                    <HeaderText header>Somos o Primeiro Ambiente FullLab do Brasil!</HeaderText>
                    
                    <span>Quer saber como ser um profissional melhor?</span>
                    <HeaderButton onClick={()=> {Scroll("ThirdFrame")}}>Quero saber mais!</HeaderButton>
               </SectionFrame>
            </Fullframe>
            <Fullframe id="SecondFrame">
                <SectionFrame full>

                </SectionFrame>
            </Fullframe>
            <Fullframe id="ThirdFrame">
                <SectionFrame left>

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