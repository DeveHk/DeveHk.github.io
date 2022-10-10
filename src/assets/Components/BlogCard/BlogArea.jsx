import React from 'react'
import data from '../../Details.json'
import Txt from '../Others/Txt'
import Blogcard from './Blogcard'

const BlogArea = () => {
    return (
        <div className="relative pt-80">
            <A/>
            <div className="text-[200px] md:text-[400px] lg:text-[500px] grey h-[400px] flex items-center absolute top-10 -z-10" >Blog</div>
            <div className="grid mx-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    data.data.blogs.map(
                        (blog) => {
                            return (
                            <div className="mt-10 mx-4">
                            <Blogcard props={blog} />
                            </div>)
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
  

export default BlogArea