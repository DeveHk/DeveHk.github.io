import React, { useEffect, useRef } from 'react'
import Txt from '../Others/Txt'
import './Animation.scss'
import Contact from './Contact'

import './header.scss'
import Resume from './Resume'
import Title from './Title'

const Fullhead = () => {
  useEffect(
    () => {

      /*const ctx = canvas.current.getContext('2d')
      canvas.current.width = canvas.current.clientWidth
      canvas.current.height = canvas.current.clientHeight*/
    }
    , []
  )

  return (
    <div className=' relative w-full overflow-hidden md:px-20 pl-6 py-32  h-[100vh] md:pt-36 flex justify-center flex-col' >
      
      <Title />
      <Contact text={'Contact me!'}  />
      
    </div>
  )
  //<Resume/>
}

export default Fullhead