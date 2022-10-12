import React, { useRef, useState } from 'react'
import NavA from './NavA';

const Ham = () => {
  const [active, setActive] = useState(false);
  const [l1, l2, l3, menu] = [useRef(''),useRef(''),useRef(''),useRef('')]
  const handelOnclick = (e) => {
  //  console.dir(menu.current.style.width)
    e.preventDefault()
    if (!active) {
      l1.current.classList.add('rotate-45')
      l2.current.classList.add('-rotate-45')
      l3.current.classList.add('invisible')
      
      menu.current.classList.remove('hidden')
      setActive(true);
    }
    else {
      l1.current.classList.remove('rotate-45')
      l2.current.classList.remove('-rotate-45')
      l3.current.classList.remove('invisible')
      menu.current.classList.add('hidden')
      setActive(false)
    }

  }
  return (
    <div className=''>
        <div className="fixed z-10 w-full hidden" ref={menu}>
        <NavA/>
      </div>
      <div onClick={handelOnclick} className=" fixed z-10 right-5 top-5 bg-slate- p-1 rounded-lg bg-[#6d68753d] ">
        <div className="h-10 space-y-[4.5px] pt-2 flex flex-col items-end">
          <div className=" w-12 bg-white h-[3px] rounded-[40%] l1 transition-all duration-75" ref={l1} />
          <div className=" w-10 bg-white h-[3px] rounded-[40%] l2 transition-all duration-75" ref={l2} />
          <div className=" w-8 bg-white h-[3px] rounded-[40%] l3 transition-all duration-75" ref={l3}/>
        </div>
      </div>
      
    </div>
  )
}
export default Ham