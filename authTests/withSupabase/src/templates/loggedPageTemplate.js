import React from 'react'
import Navbar from '../components/Navbar'

export default function LoggedTemplate({props, children}) {
  return (
    <>
        <Navbar />
        <div>
            {children}
        </div>
    </>
  )
}
