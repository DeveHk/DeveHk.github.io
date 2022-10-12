import React from 'react'
import Txt from '../Others/Txt'
import Btn from './Btn'
import Title from './Title'

const Card = ({props}) => {

  return (
   <div className="relative px-6 md:pl-20 ">
    <A/>
    <Title text={props.title}/>
    <div className="grid lg:grid-cols-3">
    <div className="space-y-2   tracking-wide font-serif  col-span-2">
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
    {props.btn &&
    <div className="col-span-1 flex lg:justify-end">
         <Btn text={props.btn}/>
    </div>
    }
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