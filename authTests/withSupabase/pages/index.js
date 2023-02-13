import React from 'react'
import vid from '../src/assets/backgroundVideos/purpleDust.mp4'
import { GitHub, LinkedIn, Twitter, Instagram } from '@mui/icons-material'
import centerImg from '../src/assets/images/cloud-technology-with-futuristic-hologram-smartwatch.jpg';
import Image from 'next/image';
import { Button } from '@mui/material';
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <>
        <div>
            <video autoPlay muted={true} loop className='h-[100vh] w-[100vw] -z-8 absolute bg-cover object-cover' >
                <source src={vid} />
            </video>
            <nav className='relative w-[85%] h-16 flex flex-1  items-center justify-between m-[auto]'>
                <div className='ml-4'>Logo</div>
                <div className='mr-4 flex'>
                    <ol className='grid grid-cols-4 gap-4 items-center justify-center' >
                        <li>
                            <button>
                                Sobre
                            </button>
                        </li>
                        <li>
                            <button>
                                Sobre
                            </button>
                        </li>
                        <li>
                            <button>
                                Sobre
                            </button>
                        </li>
                        <li>
                            <button>
                                Sobre
                            </button>
                        </li>
                    </ol>
                    <button className='bg-blue-700 mx-2 px-2 py-2 rounded-md'>
                        Login
                    </button>
                    <button className='bg-red-700 mx-2 px-2 py-2 rounded-md' >
                        Começar!
                    </button>
                </div>
            </nav>

            <section className='relative mt-28 w-[100%] h-[calc(100vh-(7rem+4rem))]'>
                <div className='relative flex flex-1 w-[100%]'>

                    <aside className=' relative ml-8 mt-48 w-12 h-fit grid grid-flow-row row-span-5 gap-4'>
                        <GitHub className='hover:scale-125 transition delay-100 ease-in-out cursor-pointer' />
                        <LinkedIn color='primary' className='hover:scale-125 transition delay-200 ease-in-out cursor-pointer' />
                        <Twitter color='primary' className='hover:scale-125 transition delay-200 ease-in-out cursor-pointer'/>
                        <Instagram color='error' className='hover:scale-125 transition delay-200 ease-in-out cursor-pointer'/>
                        {/* <img alt='Discord'/> */}
                    </aside>
                    <div className='w-[100%] m-0 mr-[5rem] h-fit flex flex-1 relative items-center justify-center'>
                        <main>
                            <h6>
                                O início da
                            </h6>
                            <h1  className='text-6xl'>
                                Sua carreira <br/><span>lala </span> Começa aqui!
                            </h1>
                        </main>
                    </div>
                </div>

                <div className=' w-[90%] mx-[auto] h-fit fixed flex my-0'>
                    <div className='grid grid-cols-2 gap-8' >
                        <aside className={styles.indexImageLeft} id='indexImageLeft'>
                            imagem da esquerda
                        </aside>

                        <aside className={styles.indexImageRight} id='indexImageRight'>
                            imagem da direita
                        </aside>
                    </div>
                </div>
                
                <div className=' w-[75%] mx-[auto] h-fit flex my-0 items-center justify-center'>
                    <div className='grid grid-cols-2 gap-8 items-center justify-items-center'>
                        <div className={styles.indexButtonLeft} onMouseOver={()=>{
                            document.querySelector(`.${styles.indexImageLeft}`).style.display='block'                            
                        }}
                        onMouseLeave={()=>{
                            document.querySelector(`.${styles.indexImageLeft}`).style.display='none'
                        }}
                        
                        >
                            <Button variant='outlined' className='text-white border-white p-10 rounded-2xl'>
                                Quero contratar
                            </Button>
                        </div>
                        
                        <div className={styles.indexButtonRight} onMouseOver={()=>{
                            document.querySelector(`.${styles.indexImageRight}`).style.display='block'                            
                        }}
                        onMouseLeave={()=>{
                            document.querySelector(`.${styles.indexImageRight}`).style.display='none'
                        }}>
                            <Button variant='outlined' className='text-white border-white p-10 rounded-2xl'>
                                Quero ser Pro
                            </Button>

                        </div>




                    </div>
                </div>
            </section>
        
        </div>

        <div>
            
            
        </div>
    
    </>
  )
}
