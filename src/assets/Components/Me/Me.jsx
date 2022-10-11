import React from 'react'
import Card from '../MajorCards/Card'
import CanvasBall from './CanvasBall'
const Me = ({props}) => {
  return (
    <div className="flex flex-col md:flex-row items-center">

         <Card props={props}/>
         <CanvasBall/>
    </div>
   
    
  )
}

export default Me