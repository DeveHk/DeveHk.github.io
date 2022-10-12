import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Ball from './Ball'
import useScrollAnimation from '../../Hooks/useScrollAnimation'

const ProCard = ({theme, src}) => {
    const card=useScrollAnimation(['slide-t'],['opacity-0'])
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

  return (
   <div className="aspect-square  card flex justify-center items-center opacity-0"  ref={card}>
    <a href="" className="">
    <Ball props={ball}/>
    </a>
   </div>
  )
}

export default ProCard