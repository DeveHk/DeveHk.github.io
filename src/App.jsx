import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Fullhead from './assets/Components/header/Fullhead'
import Card from './assets/Components/MajorCards/Card'
import data from './assets/Details.json'
import Blogcard from './assets/Components/BlogCard/Blogcard'
import BlogArea from './assets/Components/BlogCard/BlogArea'
import ProArea from './assets/Components/ProjectsSection/ProArea'
import NavA from './assets/Components/Nav/NavA'
import Ham from './assets/Components/Nav/Ham'

import Me from './assets/Components/Me/Me'
function App() {
//
  return (
    <div className="  lg:flex  pb-36">
      <div className="lg:hidden">
        <Ham/>
      </div>
      <div className="w-[680px] hidden lg:block z-20">
        <div className="lg:fixed w-[150px]">
        <NavA/>
        </div>
      </div>
      <div className="space-y-2">
      <Fullhead/>
    <Card props={data.data.Portfolio}/>
    <ProArea/>
    <Me props={data.data.About}/>
    <BlogArea/>
    <Card props={data.data.Contact}/>
    </div>
   
    </div>
  )
}
/**/
export default App
