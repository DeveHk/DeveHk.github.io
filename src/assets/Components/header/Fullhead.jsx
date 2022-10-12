import React, { useEffect, useRef } from 'react'
import Txt from '../Others/Txt'
import './Animation.css'
import Contact from './Contact'
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
    <div className='w-full overflow-hidden  py-32  h-[100vh] md:pt-36   frame' >
      <div className="absolute top-10 left-7">
        <Txt txt='HTML' />
      </div>
      <Title />
      <Contact text={'Contact me!'} />
    </div>
  )
}

export default Fullhead