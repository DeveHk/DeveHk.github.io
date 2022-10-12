import React from 'react'
import './nav.scss'

const Logo = () => {
  return (
    <div className="bg-black flex flex-col justify-center h-full w-full items-center">
        <div className="styled-name text-6xl ud">[H]</div>
        
        <div className="mt-2 text-2xl font-extrabold">Harsh</div>
        <div className="mt-5 text-xs">Web Developer</div>
    </div>
  )
}

export default Logo