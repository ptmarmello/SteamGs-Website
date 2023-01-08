import Box from '@mui/material/Box';
import React from 'react'
import styled  from 'styled-components';
import MenuComponent from '../Menu';
import { Typography } from '@mui/material'

const NavbarComponent = styled.nav`
flex: 1;
width: 100%;
margin: 0 auto;
height: 48px;
z-index: 5;
display: flex;
flex-direction: row;
position: relative;
top: 0;
margin-bottom: 1rem;
background-color: #202021;
`

export default function Navbar() {
  return (
    <NavbarComponent>
        <Box sx={{ width:'95%', margin:'0 auto', display:'flex', maxHeight:'100%', flexDirection: 'row', alignItems:'center' }} >
            <Typography>
                Navbar
            </Typography>
            <Box sx={{ flex:'1 1 auto' }} />
            <Box>
                <Typography>
                    Nome da Trilha
                </Typography>
                {/* de forma bonitinha */}
            </Box>
            <Box sx={{ flex:'1 1 auto' }} />
            <MenuComponent />
        </Box>
    </NavbarComponent>
  )
}
