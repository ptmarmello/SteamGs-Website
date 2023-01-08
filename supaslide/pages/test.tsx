import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
// import VerticalStepperComponent from '../components/VerticalStepper'
import TabComponent from '../components/Tabs'
import ProgressBar from '../components/ProgressBar'
import styled from 'styled-components';

import data from '../data/test.json'
import Navbar from '../components/Navbar';


const Footer = styled.footer`
  width: 100%;
  position: relative;
  height: 48px;
  background-color: #202021;
  align-items: center;
  display: flex;
`

export default function Test() {
const groups = data.frontend.groups;
  return (
    <>
      <Box sx={{width:'100%', flex:1, justifyContent:'center', margin:'0', minHeight:'100%' }} >
        <Navbar />
        <Box sx={{display: 'flex', margin: 'auto', flexGrow:1, position:'relative', maxWidth:'1040px', minHeight:'calc(100vh - 112px)' }}>
          <Box sx={{ width:'98.5%', display:'flex', margin:'0 auto', justifyContent:'center'}}>
            {
              groups.map( ( item, id ) => {
                return (
                  <Box sx={{ width:'95%', margin:'0 auto', padding:'4px'}} key={id}>
                    {/* <ProgressBar /> */}
                    <Box sx={{ flex:1, justifyContent:'center', margin:'0 auto', alignItems:'stretch', p:1, display:'flex' }}>
                      <Typography>
                        {item.name.toUpperCase()}
                      </Typography>
                    </Box>
                    <Box sx={{width:'100%'}}>
                      <TabComponent item={item} />
                    </Box>
                  </Box>
                )
              })
            }
          </Box>
        </Box>
        <Footer>
          <Box sx={{ width:'98%', margin: '0 auto' }} >
            footer
          </Box>
        </Footer>
      </Box>
    </>
  )
}

