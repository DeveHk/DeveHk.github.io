import React from 'react'
import data from '../../Details.json'
import Txt from '../Others/Txt'
import Blogcard from './Blogcard'

const BlogArea = () => {
    let n=0;
    return (
        <div className="relative pt-80 md:px-20 px-10">
            <A/>
            <div className="text-[200px] md:text-[400px] lg:text-[500px] grey h-[400px] flex items-center absolute top-10 -z-10" >Blog</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    data.data.blogs.map(
                        (blog) => {
                            blog.at=n;
                            n++;
                            return (
                            <div className="mt-10 ml-4">
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