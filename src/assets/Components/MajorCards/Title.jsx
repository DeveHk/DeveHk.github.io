import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import useScrollAnimation from '../../Hooks/useScrollAnimation'
import Txt from '../Others/Txt'


const Title = ({ text, theme}) => {
  const up = useScrollAnimation('letters')
  const texter = useRef("")
  var s=false
  return (
    <div className="text-5xl md:text-6xl R-800 pb-10 pt-5 px-10 " ref={up}>
      <div className={theme ||`teal1`} ref={texter}>
        {text.split("").map(
          (c) => {
          
            if(c==' ')
            c=<div className="opacity-0">_</div>
            return (
              <div className=" inline-block" onMouseOver={(e) => {
                e.target.classList.add("text");
                setTimeout(
                  ()=>{e.target.classList.remove("text")},800
                )
              }}>{c}</div>
            )
            
          }
        )}
      </div>
    </div>
  )
}

export default Title