import React from 'react'
import { useEffect, useRef } from 'react'
const Resume = () => {
    const te = useRef("")
    useEffect(
        () => {
            setTimeout(
                () => {
                    te.current.classList.remove('opacity-0')
                }, 2200
            )
            te.current.style.animationDelay = "2.1s"
            te.current.classList.add('slide-res')
        },[]
    )
    return (
        <div className="resumeBox-container absolute bottom-10 right-[30%] lg:bottom-[40%] opacity-0 " ref={te}>
            <div className="resumeBox h-[50px] w-[50px] md:h-[800px] md:w-[800px] rounded-3xl absolute -left-20 bottom-10 md:bottom-0 md:-left-28 rotate-45"></div>
            <div className="resumeBox h-[150px] w-[150px] md:h-[180px] rounded-3xl md:w-[180px] flex items-center justify-center   my-10 ">
                <a href='src/assets/Harsh_Kumar.pdf' className="resumeLink text-[1.8rem] font-semibold text-[#F9EFF1]">Get Resume</a></div>
        </div>
    )
}

export default Resume