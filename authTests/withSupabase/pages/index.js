import React from 'react'
import { GitHub, LinkedIn, Twitter, Instagram } from '@mui/icons-material'
import { Button } from '@mui/material';
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <>
        <div className={styles.indexImgbg} >
            {/* <video autoPlay muted={true} loop className='h-[100vh] w-[100vw] -z-8 absolute bg-cover object-cover' >
                <source src={vid} />
            </video> */}
            <nav className='relative w-[85%] h-16 flex flex-1  items-center justify-between m-[auto]'>
                <div className='ml-4'>Logo</div>
                <div className='mr-4 flex'>
                    <ol className='grid grid-cols-4 gap-4 items-center justify-center' >
                        <li>
                            <Button>
                                Sobre
                            </Button>
                        </li>
                        <li>
                            <Button>
                                Sobre
                            </Button>
                        </li>
                        <li>
                            <Button>
                                Sobre
                            </Button>
                        </li>
                        <li>
                            <Button>
                                Sobre
                            </Button>
                        </li>
                    </ol>
                    <div className=' ml-4' >
                        <Button variant='outlined' color='success' className='text-white border-teal-800 p-2 mr-2 rounded-lg bg-teal-900 hover:bg-neutral-900'>
                            Login
                        </Button>
                        <Button variant='outlined' color="warning" className='text-white border-cyan-700 p-2 rounded-lg bg-cyan-800 hover:bg-neutral-900'>
                            Começar!
                        </Button>
                    </div>
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
                                Sua carreira <br/><span>&nbsp; &nbsp; </span> Começa aqui!
                            </h1>
                            <div>
                                <p>algo aqui</p>
                            </div>
                        </main>
                    </div>
                </div>

                <div className=' w-[100%] mx-0 h-fit fixed flex my-[auto]'>
                    <div className=' w-[95%] grid grid-cols-2 gap-8 mx-[auto] my-[0] items-center ' >
                        <div className=' relative h-[100%] left-0 mt-24'>
                            <aside className={styles.indexImageLeft} id='indexImageLeft'>
                                imagem da esquerda
                            </aside>
                        </div>
                        <div className='relative h-[100%] right-0 mt-24'>
                            <aside className={styles.indexImageRight} id='indexImageRight'>
                                imagem da direita
                            </aside>
                        </div>
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
                            <Button variant='outlined' className='text-white border-white p-10 rounded-2xl bg-slate-800 bg-opacity-80 hover:bg-neutral-900'>
                                Quero contratar
                            </Button>
                        </div>
                        
                        <div className={styles.indexButtonRight} onMouseOver={()=>{
                            document.querySelector(`.${styles.indexImageRight}`).style.display='block'                            
                        }}
                        onMouseLeave={()=>{
                            document.querySelector(`.${styles.indexImageRight}`).style.display='none'
                        }}>
                            <Button variant='outlined' className='text-white border-white p-10 rounded-2xl bg-slate-800 bg-opacity-80 hover:bg-neutral-900'>
                                Quero ser Pro
                            </Button>

                        </div>




                    </div>
                </div>
            </section>

            <div className=' min-w-full min-h-full' >
                <div className=' w-full mx-[auto] my-0 justify-center pt-24 text-center' >
                    <h1 className=' font-bold text-4xl' >
                        Vantagens
                    </h1>
                </div>
                <div className=' w-[80%] mx-[auto] h-[100%] pt-10 grid grid-cols-3 grid-rows-2 grid-flow-col my-0 items-center justify-center'>
                    <div>
                        <p>algo</p>
                    </div>
                    <div>
                        <p>algo</p>
                    </div>
                    <div>
                        <p>algo</p>
                    </div>
                    <div>
                        <p>algo</p>
                    </div>
                    <div>
                        <p>algo</p>
                    </div>
                    <div>
                        <p>algo</p>
                    </div>
                    <div>
                        <p>algo</p>
                    </div>
                    <div>
                        <p>algo</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
