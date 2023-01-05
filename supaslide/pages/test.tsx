import React from 'react'
import { Box } from '@mui/system'
// import VerticalStepperComponent from '../components/VerticalStepper'
import TabComponent from '../components/Tabs'
import ProgressBar from '../components/ProgressBar'

import data from '../data/test.json'

export default function Test() {
const groups = data.frontend.groups;
  return (
    <>
        <ProgressBar />
        <Box sx={{ width:'100%', display:'flex' }}>
          {
            groups.map( ( item, id ) => {
              return (
                <Box sx={{ width:'100%'}} key={id}>
                  <h3>
                    {item.name.toUpperCase()}
                  </h3>
                  <TabComponent item={item} />
                  
                </Box>
              )
            })
          }
        </Box>
    </>
  )
}

