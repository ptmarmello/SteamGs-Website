import React from 'react';

import styled, { css } from 'styled-components';

import HeaderApp from './stuff/Nav';
import './home-styles.css';
import Papier from './stuff/Papier';

const HeaderButton = styled.button`
    height: 64px;
    min-width: 100px;
    width: 264px;
    margin: 0 auto;
    outline: none;
    border: none;
    text-decoration: none;
    /* padding: 12px 30px; */
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 12px;
    background: ${props => props.student ? "white" : "purple"};
    color: ${props => props.student ? "purple" : "white"};

    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    transition: all 0.2s ease-in-out;
    text-align: center;
    justify-content: center;
    align-content: center;

    position: relative;

    ${props => props.student && css`
        margin-left: 8vw ;
    `};
    &:hover{
        
    }
    &:active{
        /* transform: scale(0.94) perspective(0.1px); */
    }
    
`;

const HeaderH1 = styled.h1`
    text-decoration: none;
    font-size: 64px;
    font-weight: 700;
    line-height: 1;
    width: 100%;
    max-width: 70vw;
    margin: 0 auto;

`;

const SectionBox = styled.section`
   
    display: flex;
    margin: 0 auto;
    width: 70vw;
    justify-content: center;
    align-items: center;
    align-content: center;

    height: auto;
    min-height: 5rem;
    padding: 0;
    padding-top: 3rem;

    margin-bottom: 2rem;

    ${props => props.free && css`
        display: flex;
    
    `}
    ${props => props.gridd && css`
        display: grid;

    
    `}
    ${props => props.sided && css`
        display: flex;
        justify-content: space-between;
        /* max-width:70%;
        max-height:45vh; */
    
    `}
    ${props => props.blocked && css`
        display:block;
    `}
    ${props => props.textleft && css`
        text-align: left;
    `}
    ${props => props.textright && css`
        text-align: right;
    `}

`;
export default function Home(){
    return(
        <div className="App-page">
            <HeaderApp>
                <div className="Home-header">
                    Agora vai
                </div>
            </HeaderApp>
    {/*                                                            */}
            <div className="App-container">
                <section className="Home-section">
                    <div className="Home-box">
                        <HeaderH1>Main Title</HeaderH1>
                        <h3 >Você quer o melhor e nós também!</h3>
                        <div className="button-box">
                            <HeaderButton>
                                Empresas
                            </HeaderButton>
                            <HeaderButton student>
                                Alunos
                            </HeaderButton>
                        </div>
                    </div>
                </section>   
                            
                <SectionBox blocked textleft>
                    <h4>Explicação</h4>
                    <div className="section-papers">
                        <div>
                            Etapa 1
                            <Papier>Opa</Papier>
                        </div>
                        <div>
                            Etapa 2
                            <Papier>Opa</Papier>
                        </div>
                        <div>
                            Etapa 3
                            <Papier>Opa</Papier>
                        </div>
                        <div>
                            Etapa 4
                            <Papier>Opa</Papier>
                        </div>
                    </div>
                </SectionBox>
                <SectionBox sided textright>
                    
                </SectionBox>
            </div>
        </div>
    );
}