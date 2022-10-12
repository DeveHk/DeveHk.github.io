import React, { useEffect, useRef } from 'react'
import Title from './Title'
import Content from './Content'
import useScrollAnimation from '../../Hooks/useScrollAnimation'
import Uptitle from './Uptitle'

const Blogcard = ({props}) => {
  let card=""
   console.log(props.at)
  if(props.at%2==0){
 
  card=useScrollAnimation(['slide-top','slide-left'],['scale-[0.01]'])}
  else
  card=useScrollAnimation(['slide-top','slide-right'],['scale-[0.01]'])

 
  return (
    <div ref={card} className={`flex black-bg flex-col h-72 px-3 py-8 shadow-lg border-t-4 scale-[0.01] ${props.theme+'-s'} hover:scale-[1.02] duration-200  ${props.theme+'-b'}`}>
        <Uptitle text={props.uptitle} theme={props.theme}/>
        <Title text={props.title}/>
        <Content text={props.content}/>
    </div>
  )
}

export default Blogcard