import React from 'react'
import Links from './Links'
import Logo from './Logo'
import Socials from './Socials'

const NavA = () => {
  return (
    <div className="h-[100vh]  black1-bg  w-[100%] grid grid-row-10">

        <div className="row-span-5 flex flex-col mx-2 justify-center items-center grey  flex-wrap">
            <Links txt="About"/>
            <Links txt="My Skills"/>
            <Links txt="Works"/>
            <Links txt="Contact"/>
            <Links txt="Blog"/>
        </div>
        <div className="row-span-2">
            <Socials/>
        </div>
    </div>
  )
}

export default NavA