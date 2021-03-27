import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import '../safe/styles/Navbar.css';


const NavLink = styled(Link)`
    list-style-type: none;
    text-decoration: none;
    font-style: none;
    color: black;

    width: auto;
    height: fit-content;
    margin: 0 4px;

    display: inline-block;
    border-radius: 8px;
    padding: 0.5rem 0.5rem;
    background: transparent;
    outline: none;

    &:hover{
        background: palevioletred;
        color: white;
    }
`;


export default function Navbar(){
    return(
        <div className="Navbar">
            <div>
                <ul>
                    Logo
                    <NavLink to="/">
                        Sobre
                    </NavLink>
                    <NavLink to="/">
                        Empresa
                    </NavLink>
                </ul>
            </div>
            <div>
                <NavLink to="/">
                    Entrar agora!
                </NavLink>
            </div>
        </div>
    );
}