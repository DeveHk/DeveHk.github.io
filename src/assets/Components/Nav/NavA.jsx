import React from 'react'
import Links from './Links'
import {
  Link
} from "react-router-dom";
import Logo from './Logo'
import Socials from './Socials'

const NavA = ({clickhandel}) => {
  return (
    <div className="h-[100vh]  black1-bg  w-[100%] md:w-[200px] grid grid-row-10">
        <div className=" row-span-3 ud">
            <Logo/>
        </div>
        <div className="row-span-5 flex flex-col mx-2 justify-center items-center grey  flex-wrap">
            <Link to='/' onClick={clickhandel} className='w-[100%] text-[#8B9C9A]'><Links txt="About"  /></Link>
            <Links txt="My Skills"/>
            <Link to='/works' onClick={clickhandel} className='w-[100%] text-[#8B9C9A]'><Links txt="Works"/></Link>
            <Link to='/contact'onClick={clickhandel} className='w-[100%] text-[#8B9C9A]'><Links txt="Contact"/></Link>
            <Link to='/blogs' onClick={clickhandel} className='w-[100%] text-[#8B9C9A]'><Links txt="Blog"/></Link>
        </div>
        <div className="row-span-2">
            <Socials/>
        </div>
    </div>
  )
}
NavA.defaultProps = {
  clickhandel:()=>{}
}

export default NavA