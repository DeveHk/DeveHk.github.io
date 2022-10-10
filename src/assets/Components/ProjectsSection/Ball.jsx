import React, { useRef } from 'react'
import { useEffect } from 'react'

const Ball = ({props}) => {
    const ball=useRef("")
    useEffect(
        ()=>{
            if(props===true)
            {
                ball.current.classList.remove('scale-[0.01]')
            ball.current.classList.add('ball')
            }
            else{
                ball.current.classList.add('scale-[0.01]')
            ball.current.classList.remove('ball')
            }
        }
    )
  return (
    <div className="rounded-full teal1-bg text-black text-[7px] font-semibold R-300 tracking-widest flex flex-col justify-center items-center w-12 h-12 leading-3 transition-all duration-200  scale-[0.01]" ref={ball}>
        <p className="">VIEW</p>
        <p className="">PROJECT</p>
         
    </div>
  )
}

export default Ball