import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProgressCircle from '../ProgressCircle';

import Data from '../../data/test.json';
import NonLinearStepper from '../NonLinearStepper';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1, m:1, backgroundColor:'white', color: 'black' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type Btabs = {
  item: list;
}

export default function TabComponent({item}: Btabs) {
  const [value, setValue] = React.useState(0);
  const groups = Data.frontend.groups;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor:'white' }}>
        <Tabs value={value} onChange={handleChange} variant='fullWidth' aria-label={item.name}>
          {
            item.levels.map((level, id) => {
              return(
                <Tab label={level.name} {...a11yProps(id)} />
              )
            })
          }
        </Tabs>
      </Box>
      {
        item.levels.map((level, id) => {
          return (
            <TabPanel value={value} index={id} >
              <NonLinearStepper stepData={ level.steps } son={false} />
            </TabPanel>
          )
        })
      }


      {/* <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor:'white' }}>
        <Tabs value={value} onChange={handleChange} variant='fullWidth' aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} icon={<ProgressCircle />} />
          <Tab label="Item Two" {...a11yProps(1)} icon={<ProgressCircle />}
           />
          <Tab label="Item Three" {...a11yProps(2)} icon={<ProgressCircle />} disabled />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </Box>
  );
}