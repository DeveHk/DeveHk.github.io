import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import useScrollAnimation from '../../Hooks/useScrollAnimation'
import Txt from '../Others/Txt'


const Title = ({ text, theme}) => {
  const target=useRef("")
  const func=()=>{
    
    const Chlds=target.current.children
    console.dir(Chlds.length)
    for(let i=0;i<Chlds.length;i++){
      Chlds[i].style.animationDelay=`${i*0.1}s`
      Chlds[i].classList.add('letters');
      
    }
  }
    useEffect(
        ()=>{
          let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0
          }
          const callback = (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.intersectionRatio > 0) {
                func()
                observer.unobserve(entry.target);
              }               
          })
            
          }
          let observer = new IntersectionObserver(callback, options);
          observer.observe(target.current);
        
        },[]
      )
  return (
    <div className="text-5xl md:text-6xl R-800 pb-10 pt-5  " >
      <div className={theme ||`teal1`} ref={target} >
        {text.split("").map(
          (c) => {
          
            if (c == ' ')
            return <span className="invisible">_</span>
              return (
              <div className=" inline-block opacity-0" onMouseOver={(e) => {
                e.target.style.animationDelay='0s'
                e.target.classList.remove("letters");
                e.target.classList.remove("opacity-0");
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