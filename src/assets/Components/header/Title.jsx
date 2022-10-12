import React, { useEffect, useRef } from 'react'
import useScrollAnimation from '../../Hooks/useScrollFunc'
import Txt from '../Others/Txt'
import './header.scss'
const Title = () => {
const ti=useRef("")
useEffect(
  ()=>{
  setTimeout(
    ()=>{
      ti.current.classList.remove('opacity-0')
    },2200
  )  
  ti.current.style.animationDelay="2.1s"
  ti.current.classList.add('slide-top')
}
  ,[]
)
  return (
    <div className="px-5 md:px-10 relative">
      <A />
       <Text text={"Hi, /I'm /web developer"} />
      <div className="font-thin text-gray-400 mt-6 opacity-0 tracking-wider" ref={ti}>
        Full Stack Developer / Static site Expert
      </div>
    </div>
  )
}
const A = () => {
  return (
    <>
     <div className="absolute -top-[30px]">  
    <Txt txt='p'/>
    </div>
       <div className="absolute bottom-[30px]">  
    <Txt txt='span'/>
    </div>
    <div className="absolute -bottom-[35px]">  
    <Txt txt='span'/>
    </div>
    <div className="absolute -bottom-[35px] left-[300px]">  
    <Txt txt='link'/>
    </div>
    </>
  )
}
const Text = ({ text }) => {
  const target=useRef("")
  const func=()=>{
    
    const Chlds=target.current.children
    console.dir(Chlds.length)
    for(let i=0;i<Chlds.length;i++){
      Chlds[i].style.animationDelay=`${i*0.1}s`
      console.dir(Chlds[i].style)
      Chlds[i].classList.add('letter');
      
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
    <div className=" font-extrabold Raleway-900 tracking-[4px] leading-10  text-white md:text-5xl lg:text-6xl R-800 inline-block" ref={target}>
      {text.split("").map(
        (c) => {

          if (c == ' ')
          return <span className="invisible">_</span>
            if (c == '/')
            return <br/>
          return (
            <Leter c={c} />
          )

        }
      )}
    </div>
  )
}

 const Leter = ({ c }) => {
  return (<div className="text-[42px] pb-4 md:text-6xl md:pd-8 lg:text-[80px] hover:text-[rgb(8,253,216)]  opacity-0 inline-block" onMouseOver={(e) => {
    e.target.style.animationDelay='0s'
    e.target.classList.remove("letters");
    e.target.classList.remove("opacity-0");
    e.target.classList.add("text");
    setTimeout(
      () => { e.target.classList.remove("text") }, 800
    )
  }}>{c}
  </div>
  )
}

export default Title