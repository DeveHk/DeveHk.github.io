import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Ball from './Ball'

const ProCard = ({theme, src}) => {
    const card=useRef("")
    const [ball,setBall]=useState(false)
    useEffect(
        ()=>{
            card.current.style.backgroundColor=`${theme}`
            card.current.addEventListener(
                "mouseover",()=>{
                   setBall(true)
                }
            )
            card.current.addEventListener(
                "mouseleave",()=>{
                    setBall(false)
                }
            )
        },[]
    )
   /*<div className="w-full h-full bg-slate-800 screen" ref={screen}>
        <Ball/>
    </div> */
  return (
   <div className="bg-gray-400 aspect-square card flex justify-center items-center" ref={card}>
    <a href="" className="">
    <Ball props={ball}/>
    </a>
   </div>
  )
}

export default ProCard