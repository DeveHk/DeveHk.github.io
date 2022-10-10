import React, { useEffect, useRef } from 'react'
import Title from './Title'
import Content from './Content'
import useScrollAnimation from '../../Hooks/useScrollAnimation'
import Uptitle from './Uptitle'

const Blogcard = ({props}) => {
  const card=useScrollAnimation('slide-top')
 
  return (
    <div ref={card} className={`flex black-bg flex-col h-64 px-3 py-8 shadow-lg border-t-4 scale-[0.01] slide ${props.theme+'-b'}`}>
        <Uptitle text={props.uptitle} theme={props.theme}/>
        <Title text={props.title}/>
        <Content text={props.content}/>
    </div>
  )
}

export default Blogcard