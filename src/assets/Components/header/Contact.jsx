import React, { useEffect, useRef } from 'react'

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
        <div className="px-10 pt-16 opacity-0" ref={ti}>
            <button className="bg-transparent  border-2  border-teal-600 hover:border-teal-600 rounded-none text-teal-400 Raleway-300 tracking-wide w-44 h-10 py-1 button" >
                {text}
            </button>
        </div>
    )
}

export default Contact