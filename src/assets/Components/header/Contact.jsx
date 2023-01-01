import React, { useEffect, useRef } from 'react'
import Btn from '../MajorCards/Btn'

const Contact = ({ text }) => {
    const ti = useRef("")
    useEffect(
        () => {
            setTimeout(
                () => {
                    ti.current.classList.remove('opacity-0')
                }, 2200
            )
            ti.current.style.animationDelay = "2.1s"
            ti.current.classList.add('slide-t')
        },[]
    )
    return (
        <div className="pt-16 opacity-0" ref={ti}  >
            <Btn text={text} url={"mailto:harsh.kumar.ug21@nsut.ac.in"}/>
        </div>
    )
}

export default Contact