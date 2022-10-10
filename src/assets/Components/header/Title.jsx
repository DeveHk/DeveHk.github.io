import React, { useEffect, useRef } from 'react'
import useScrollAnimation from '../../Hooks/useScrollAnimation'
import Txt from '../Others/Txt'
const Title = () => {

  return (
    <div className="px-5 md:px-10 relative">
      <A />
      <div className="text-4xl h-[150x] md:h-[200px] font-extrabold Raleway-900 tracking-wider leading-10 " >
        <div className=""><Text text={'Hi,'} /> </div>
        <div className=""><Text text={"I'm "} />
          <span className=""><Text text={"Harsh,"} />   </span>
        </div>
        <div className=""><Text text={"web developer"} /></div>
      </div>
      <div className="font-thin text-gray-400 mt-6 tracking-wider">
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
  const up = useScrollAnimation('letters')

  return (
    <div className="text-white text-[2.5rem] md:text-5xl lg:text-6xl R-800 inline-block" ref={up}>
      {text.split("").map(
        (c) => {

          if (c == ' ')
            c = <div className="opacity-0">_</div>
          return (
            <Leter c={c} />
          )

        }
      )}
    </div>
  )
}

 const Leter = ({ c }) => {
  return (<div className="hover:text-[rgb(8,253,216)] inline-block" onMouseOver={(e) => {
    e.target.classList.add("text");
    setTimeout(
      () => { e.target.classList.remove("text") }, 800
    )
  }}>{c}
  </div>
  )
}

export default Title