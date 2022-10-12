import React from 'react'
import Card from '../MajorCards/Card'
import CanvasBall from './CanvasBall'
const Me = ({props}) => {
  return (
    <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
          <div className="lg:col-span-1">
         <Card props={props}/>
         </div>
         <div className="lg:col-span-1 flex justify-center items-center">
         <CanvasBall/>
         </div>
    </div>
   
    
  )
}

export default Me