import React from 'react'
import {Divider, Tab} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';



export default function Weare() {
  const [activeTab, setActiveTab] = React.useState('1');

  const handleChange = ( event, value ) => {
    setActiveTab(value);
  };

  return (
    <div className='mx-auto mt-10 w-[98%] h-auto px-8 py-8 items-center justify-center bg-[#2A2634] rounded-2xl'>
      <div className='mx-auto w-full h-auto lg:grid lg:grid-cols-2 items-center justify-between' >
        <div className='w-full mx-auto flex flex-col items-center min-h-full' >
          <div className='items-center justify-center flex flex-col my-auto mx-auto'>
            <h2 className="xl:text-6xl text-white font-black mt-20 sm:text-5xl ">
              <span className="text-transparent bg-gradient bg-clip-text">Sua trilha começa aqui.</span> 
            </h2>
            <span className='text-zinc-400 block mt-6'>
              Você faz o seu caminho. Nós criamos as trilhas.
            </span>
          </div>
        </div>

          <div className='w-full mx-auto my-auto mt-20 flex flex-col items-center h-full'>
              <img src="" alt="Logo" />
              
          </div>
      </div>

      <div className='mx-auto w-10/12 h-auto items-center justify-center rounded-2xl mt-24 mb-10'>
        <TabContext value={activeTab}>
          <div className='border-indigo-500 text-white'>
            <TabList onChange={handleChange} centered={true} indicatorColor="secondary" textColor='white'>
              <Tab label="Para Alunos" value="1" className='mx-[15%]' />
              <Tab label="Para Empresas" value="2" className='mx-[15%]' />
            </TabList>
          </div>
          <Divider className='mt-1 bg-slate-500 w-[94%] mx-auto' />
          <TabPanel value="1">
            <>
              <div className=''>
                aqui tem coisa
              </div>
            </>
          </TabPanel>
          <TabPanel value="2">Para Empresas</TabPanel>
        </TabContext>
      </div>


    </div>
  )
}
