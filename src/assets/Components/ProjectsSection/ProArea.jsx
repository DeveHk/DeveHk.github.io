import React from 'react'
import ProCard from './ProCard'
import data from  "../../Details.json"
import Txt from '../Others/Txt'

const ProArea = () => {
  return (
   <div className="relative pt-80">
    <A/>
    <div className="text-[180px] md:text-[300px] lg:text-[400px] grey h-[400px] flex items-center absolute top-10 -z-10">Works</div>
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    {
        data.data.projects.map(
            (pro)=>{
                return <ProCard theme={pro.theme} src={pro.src}/>
            }
        )
    }
    </div>

   </div>
  )
}

const A = () => {
    return (
      <>
       <div className="absolute top-[100px] left-[50px]">  
      <Txt txt='h1'/>
      </div>
         <div className="absolute top-[320px] left-[80px]">  
      <Txt txt='h1'/>
      </div>
      <div className="absolute top-[300px] left-[15px]">  
      <Txt txt='section'/>
      </div>
      <div className="absolute top-[1000px] left-[15px]">  
      <Txt txt='section'/>
      </div>
      <div className="absolute bottom-[35px] left-[200px]">  
      <Txt txt='button'/>
      </div>
      <div className="absolute -bottom-[35px] left-[300px]">  
      <Txt txt='button'/>
      </div>
      </>
    )
  }
  
export default ProArea