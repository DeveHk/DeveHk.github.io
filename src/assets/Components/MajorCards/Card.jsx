import React from 'react'
import Txt from '../Others/Txt'
import Btn from './Btn'
import Title from './Title'

const Card = ({props}) => {

  return (
   <div className="relative">
    <A/>
    <div className="">
        <Title text={props.title}/>
    </div>
    <div className="space-y-2 tracking-wide font-serif px-10">
        {props.p.map(
            
            (p)=>{
                p=p.split(' ').map((c)=>{
                    c=c+' '
                    if(c[0]=='+')
                    {
                        const url=c.slice(
                            1,
                            c.search("#")
                        )
                    c=c.slice(c.search("#"))
                    c=c.replace('_',' ')
                    c=<a href={url} className="teal1 hover:text-teal-400 transition-all duration-200">{c.slice(1)}</a>
                    }
                    return (c)
                })
            
                return(<p>{p}</p>)
            }
        )}
    </div>
    <div className="">
        {props.btn && <Btn text={props.btn}/>}
    </div>
   </div>
  )
}
const A = () => {
    return (
      <>
       <div className="absolute -top-[10px] left-[80px]">  
      <Txt txt='h2'/>
      </div>
         <div className="absolute top-[80px] left-[80px]">  
      <Txt txt='h2'/>
      </div>
      <div className="absolute top-[85px] left-[75px]">  
      <Txt txt='p'/>
      </div>
      <div className="absolute top-[235px] left-[75px]">  
      <Txt txt='p'/>
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
  

export default Card