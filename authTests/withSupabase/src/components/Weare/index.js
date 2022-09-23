import React from 'react'

export default function Weare() {
  return (
    <div className='mx-auto w-11/12 h-auto px-8 py-8 lg:grid lg:grid-cols-2 items-center justify-between border border-[#2A3634] bg-[#2A2634] rounded-2xl ' >
        <div className='w-full mx-auto flex flex-col items-center min-h-full' >
        <div className='items-center justify-center mx-auto flex flex-col'>
          <h2 className="xl:text-6xl text-white font-black mt-20 block sm:text-5xl ">
            <span className="text-transparent bg-gradient bg-clip-text">Sua trilha começa aqui.</span> 
          </h2>
          <span className='text-zinc-400 block mt-6'>
            Você faz o seu caminho. Nós criamos as trilhas.
          </span>
        </div>
        </div>

        <div className='w-full mx-auto flex flex-col items-center h-full'>
            <img src="" alt="Logo" />
            direita
        </div>
    </div>
  )
}
